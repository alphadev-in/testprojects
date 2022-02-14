import React, { useImperativeHandle, useRef, useState, useEffect } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import {
  Button,
  Table,
  Card,
  CardContent,
  Typography,
  Tooltip
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { darkStyles } from '../../../../theme/dark';
import {
  MixcastLoginState,
  followArtist,
  deleteFollowArtist,
  followTrack,
  deleteFollowTrack,
  isArtistsFollowed,
  isTracksFollowed
} from '../../../../reducers/MixcastState';
import '../../../../theme/dark.css';

const CardDrag = React.forwardRef(
  (
    { text, name, index, isDragging, connectDragSource, connectDropTarget },
    ref
  ) => {
    const elementRef = useRef(null);
    connectDragSource(elementRef);
    connectDropTarget(elementRef);
    const opacity = isDragging ? 0 : 1;
    useImperativeHandle(ref, () => ({
      getNode: () => elementRef.current
    }));
    const playerRef = useRef();
    const [playerStatus, setPlayerStatus] = useState({
      status: 'PAUSED',
      trackId: null
    });
    const [artistList, setArtistList] = useState(null);
    const [trackList, setTrackList] = useState(null);

    // isTracksFollowed(text.id).then((result) => {
    //   setTrackList(result[0]);
    // });
    // isArtistsFollowed(text.artistID).then((result) => {
    //   setArtistList(result[0]);
    // });

    const artistListFun = async (item) => {
      let status = artistList;
      if (status) {
        setArtistList(false);
        await deleteFollowArtist(item);
      } else {
        setArtistList(true);
        await followArtist(item);
      }
    };

    const TrackListFun = async (item) => {
      let status = trackList;
      if (status) {
        setTrackList(false);
        await deleteFollowTrack(item);
      } else {
        setTrackList(true);
        await followTrack(item);
      }
    };
    function onPlaySongHandler(trackId, audioUrl, type) {
      if (type === 'play') {
        if (audioUrl) {
          setPlayerStatus((currentStatus) => {
            playerRef.current.src = audioUrl;
            playerRef.current.play();

            return {
              ...currentStatus,
              trackId
            };
          });
        }
      }

      if (type === 'pause') {
        setPlayerStatus((currentStatus) => {
          if (currentStatus.trackId !== trackId) {
            if (audioUrl) {
              playerRef.current.currentTime = 0;
              playerRef.current.pause();

              playerRef.current.src = audioUrl;
              playerRef.current.play();

              return {
                ...currentStatus,
                trackId
              };
            }
          } else {
            playerRef.current.currentTime = 0;
            playerRef.current.pause();
            return {
              status: 'PAUSED',
              trackId: null
            };
          }
        });
      }
    }
    function onPlayHandler() {
      setPlayerStatus((currentStatus) => {
        return {
          ...currentStatus,
          status: 'PLAYING'
        };
      });
    }

    function onPauseHandler() {
      setPlayerStatus((currentStatus) => {
        if (currentStatus.status === 'PLAYING') {
          return {
            status: 'PAUSED',
            trackId: null
          };
        } else {
          return currentStatus;
        }
      });
    }
    return (
      <div
        className="card card-box py-2 m-2 "
        ref={elementRef}
        style={{ opacity }}
        style={darkStyles.trBackground}
        key={index}>
        <Table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={['fas', 'bars']}
                  className="DashboardButton"
                  style={darkStyles.tdColor}
                />
              </td>

              <td>
                <div
                  className="d-flex align-items-center"
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '8rem'
                  }}>
                  <Typography
                    noWrap
                    className=" text-black"
                    style={darkStyles.tdColor}>
                    {text.song}
                  </Typography>
                </div>
              </td>
              <td>
                <div
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '8rem'
                  }}>
                  <Typography
                    noWrap
                    className=" text-black"
                    style={darkStyles.tdColor}>
                    {text.artist}
                  </Typography>
                </div>
              </td>
              <td>
                <span className="" style={darkStyles.tdColor}>
                  {text.time}
                </span>
              </td>
              <td>
                <Tooltip title="Preview Song" arrow placement="bottom">
                  <Button
                    onClick={() => {
                      if (text.audioUrl) {
                        onPlaySongHandler(
                          text.id,
                          text.audioUrl,
                          playerStatus.status === 'PLAYING' ? 'pause' : 'play'
                        );
                      }
                    }}
                    className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    disabled={text.audioUrl ? false : true}>
                    <FontAwesomeIcon
                      icon={[
                        'fas',
                        playerStatus.trackId === text.id ? 'pause' : 'play'
                      ]}
                      className="DashboardButton"
                    />
                  </Button>
                </Tooltip>
                <Tooltip title="Save / Unsave Track" arrow placement="bottom">
                  <Button
                    onClick={() => TrackListFun(text.id)}
                    className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['fas', 'heart']}
                      className="DashboardButton"
                      style={{
                        color: trackList ? '#6fb391' : '#ffffff'
                      }}
                    />
                  </Button>
                </Tooltip>
                <Tooltip
                  title="Follow / Unfollow Artist"
                  arrow
                  placement="bottom">
                  <Button
                    onClick={() => artistListFun(text.artistID)}
                    className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['fas', 'user-plus']}
                      className="DashboardButton"
                      style={{
                        color: artistList ? '#6fb391' : '#ffffff'
                      }}
                    />
                  </Button>
                </Tooltip>
                {/* <Tooltip title="Delete Song" arrow placement="bottom">
                  <Button 
                  className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={['fas', 'times']}
                      className="DashboardButton"
                    />
                  </Button>
                </Tooltip> */}
              </td>
            </tr>
            <audio
              ref={playerRef}
              style={{ display: 'none' }}
              controls
              src=""
              onPlay={onPlayHandler}
              onPause={onPauseHandler}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </tbody>
        </Table>
      </div>
    );
  }
);
export default DropTarget(
  ItemTypes.CARD,
  {
    hover(props, monitor, component) {
      if (!component) {
        return null;
      }
      // node = HTML Div element from imperative API
      const node = component.getNode();
      if (!node) {
        return null;
      }
      const dragIndex = monitor.getItem().index;
      const hoverIndex = props.index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = node.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      props.moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      monitor.getItem().index = hoverIndex;
    }
  },
  (connect) => ({
    connectDropTarget: connect.dropTarget()
  })
)(
  DragSource(
    ItemTypes.CARD,
    {
      beginDrag: (props) => ({
        id: props.id,
        index: props.index
      })
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    })
  )(CardDrag)
);
