import React, { useState } from 'react';

import clsx from 'clsx';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux';
import { List, ListItem } from '@material-ui/core';
import { darkStyles } from '../../../../theme/dark';

import { NavLink } from 'react-router-dom';

import { setSidebarToggleMobile } from '../../../../reducers/ThemeOptions';

import { SidebarUserbox } from '../index';

import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../../assets/images/mixcastsidebarW.svg';
import albumtB from '../../../../assets/images/dashboard/album-collection-blue.svg';
import albumtW from '../../../../assets/images/dashboard/album-collection-white.svg';
import playlistB from '../../../../assets/images/dashboard/list-music-blue.svg';
import playlistW from '../../../../assets/images/dashboard/list-music-white.svg';
import TrackB from '../../../../assets/images/dashboard/signal-stream-blue.svg';
import TrackW from '../../../../assets/images/dashboard/signal-stream-white.svg';
import IDW from '../../../../assets/images/dashboard/id-card-blue.svg';

const SidebarMenu = (props) => {
  const { setSidebarToggleMobile, sidebarUserbox } = props;
  // let isActive = false;

  const toggleSidebarMobile = () => setSidebarToggleMobile(false);

  const [dashboardOpen, setDashboardOpen] = useState(false);
  const toggleDashboard = (event) => {
    setDashboardOpen(!dashboardOpen);
    event.preventDefault();
  };

  const [elementsOpen, setElementsOpen] = useState(false);
  const toggleElements = (event) => {
    setElementsOpen(!elementsOpen);
    event.preventDefault();
  };

  const [applicationOpen, setApplicationOpen] = useState(false);
  const toggleApplication = (event) => {
    setApplicationOpen(!applicationOpen);
    event.preventDefault();
  };

  const [blocksOpen, setBlocksOpen] = useState(false);
  const toggleBlocks = (event) => {
    setBlocksOpen(!blocksOpen);
    event.preventDefault();
  };

  return (
    <>
      <PerfectScrollbar>
        {sidebarUserbox && <SidebarUserbox />}
        <div className="sidebar-navigation">
          <ul>
            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/create">
                <span className="sidebar-icon">
                  <img alt="Mixcast" src={logo} style={{ width: 30 }} />
                </span>
                Create Mixcast
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/playlists">
                <span className="sidebar-icon">
                  <FontAwesomeIcon icon={['fas', 'list']} />
                </span>
                <span className="sidebar-item-label">Your Playlists</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/songs">
                <span className="sidebar-icon">
                  {/* <SecurityTwoToneIcon /> */}
                  <FontAwesomeIcon icon={['fas', 'music']} />
                </span>
                <span className="sidebar-item-label">Favorite Songs</span>
                {/* <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span> */}
              </NavLink>
            </li>

            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/artists">
                <span className="sidebar-icon">
                  <FontAwesomeIcon icon={['fas', 'user']} />
                </span>
                <span className="sidebar-item-label">Followed Artists</span>
                {/* <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span> */}
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/releases">
                <span className="sidebar-icon">
                  <FontAwesomeIcon icon={['fas', 'calendar-alt']} />
                </span>
                <span className="sidebar-item-label">New Releases</span>
                {/* <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span> */}
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/discover">
                <span className="sidebar-icon">
                  <FontAwesomeIcon icon={['fas', 'random']} />
                </span>
                <span className="sidebar-item-label">Discover</span>
                 <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span> 
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/trending">
                <span className="sidebar-icon">
                  <FontAwesomeIcon icon={['fas', 'rocket']} />
                </span>
                Trending
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink className="nav-link-simple" to="#">
                <span
                  className="sidebar-item-label"
                  style={{ borderBottomColor: 'white', borderBottomWidth: 1 }}>
                  TheMixcast.com
                </span>
              </NavLink>
            </li> */}
            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/trackcasts">
                <span className="sidebar-icon">
                  {/* <SecurityTwoToneIcon /> */}
                  <img alt="Mixcast" src={TrackW} style={{ width: 25 }} />
                </span>
                <span className="sidebar-item-label">Weekly Trackcasts</span>
                {/* <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span> */}
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/mixcasts">
                <span className="sidebar-icon">
                  <img alt="Mixcast" src={playlistW} style={{ width: 25 }} />
                </span>
                <span className="sidebar-item-label">Monthly Mixcasts</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/compilations">
                <span className="sidebar-icon">
                  {/* <SecurityTwoToneIcon /> */}
                  <img alt="Mixcast" src={albumtW} style={{ width: 25 }} />
                </span>
                <span className="sidebar-item-label">Genre Compilations</span>
                {/* <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span> */}
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="#/ms/profile">
                <span className="sidebar-icon">
                  <SecurityTwoToneIcon /> 
                  <img alt="Mixcast" src={IDW} style={{ width: 25 }} />
                </span>
                <span
                  className="sidebar-item-label"
                  style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                  Membership
                </span>
               <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span> 
              </NavLink>
            </li> */}
          </ul>
        </div>
        {/* <div
          className="app-footer--first d-flex align-items-center justify-content-center"
          style={{ position: 'absolute', bottom: 30, left: 0 }}>
          <List
            component="div"
            className="nav-neutral-primary d-flex align-items-center">
            <ListItem className="rounded-sm" button component={NavLink} to="/">
              <span style={{ ...darkStyles.fontColorTheme, fontSize: 12 }}>
                © 2021 The Mixcast
              </span>
            </ListItem>
          </List>
        </div> */}
        <div
          className="app-footer--first"
          style={{
            position: 'absolute',
            bottom: 0,
            marginLeft: 20,
            width: '100%',
            marginBottom: 20
          }}>
          <div className="nav-neutral-primary d-flex align-items-center">
            <a
              className="rounded-sm"
              href="https://themixcast.com/privacy"
              target="_blank">
              <span
                style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: 12 }}>
                Privacy
              </span>
            </a>
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.65)',
                fontSize: 12,
                paddingRight: 10,
                paddingLeft: 10
              }}>
              |
            </span>
            <a
              className="rounded-sm"
              href="https://themixcast.com/terms"
              target="_blank">
              <span
                style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: 12 }}>
                Terms
              </span>
            </a>
          </div>
        </div>
      </PerfectScrollbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarUserbox: state.ThemeOptions.sidebarUserbox,

  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
