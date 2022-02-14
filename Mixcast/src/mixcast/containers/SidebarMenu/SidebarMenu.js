import React, { useState } from 'react';

import clsx from 'clsx';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { setSidebarToggleMobile } from '../../../reducers/ThemeOptions';

import SidebarUserbox from '../SidebarUserbox';

import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';

import CameraAltTwoToneIcon from '@material-ui/icons/CameraAltTwoTone';
import CollectionsTwoToneIcon from '@material-ui/icons/CollectionsTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';

import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';

import SecurityTwoToneIcon from '@material-ui/icons/SecurityTwoTone';

const SidebarMenu = (props) => {
  const { setSidebarToggleMobile, sidebarUserbox } = props;

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
          {/* <div className="sidebar-header">
            <span>Navigation menu</span>
          </div> */}
          <ul>
            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/">
                <span className="sidebar-icon">
                  <BallotTwoToneIcon />
                </span>
                Mixcasts
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleDashboard}
                // className={clsx({ active: dashboardOpen })}
              >
                <span className="sidebar-icon">
                  <VerifiedUserTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Playlists</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleApplication}
                className={clsx({ active: applicationOpen })}>
                <span className="sidebar-icon">
                  <SecurityTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Songs</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="#/"
                onClick={toggleElements}
                className={clsx({ active: elementsOpen })}>
                <span className="sidebar-icon">
                  <CameraAltTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Artists</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleBlocks}
                className={clsx({ active: blocksOpen })}>
                <span className="sidebar-icon">
                  <CollectionsTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Radar</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={() => null}
                className={clsx({ active: false })}>
                <span className="sidebar-icon">
                  <FavoriteTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Discover</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
            </li>
          </ul>
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
