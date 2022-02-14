import React from 'react';

import clsx from 'clsx';

import { List, ListItem } from '@material-ui/core';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { darkStyles } from '../../../../theme/dark';

const Footer = (props) => {
  const { footerShadow, footerBgTransparent } = props;
  return (
    <>
      <div
        className={clsx('app-footer text-black-50', {
          'app-footer--shadow': footerShadow,
          'app-footer--opacity-bg': footerBgTransparent
        })}
        style={{ justifyContent: 'center' }}>
        {/* <div className="app-footer--first d-flex align-items-center justify-content-center">
          <List
            component="div"
            className="nav-neutral-primary d-flex align-items-center">
            <ListItem className="rounded-sm" button component={NavLink} to="/">
              <span style={darkStyles.fontColorTheme}>© 2021 The Mixcast</span>
            </ListItem>
            <ListItem
              className="rounded-sm"
              button
              component={NavLink}
              to="/terms"
              target="_blank">
              <span style={darkStyles.fontColorTheme}>Terms</span>
            </ListItem>
            <ListItem
              className="rounded-sm"
              button
              component={NavLink}
              to="/privacy"
              target="_blank">
              <span style={darkStyles.fontColorTheme}>Privacy</span>
            </ListItem>
          </List>
        </div> */}
        {/* <div className="app-footer--second" style={darkStyles.fontColorTheme}>
          © 2021 | Mixcast
           <a
            href="/"
            target="_blank"
            title=""
            rel="noopener noreferrer">
            UiFort.com
          </a> 
        </div> */}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  footerShadow: state.ThemeOptions.footerShadow,
  footerBgTransparent: state.ThemeOptions.footerBgTransparent
});

export default connect(mapStateToProps)(Footer);
