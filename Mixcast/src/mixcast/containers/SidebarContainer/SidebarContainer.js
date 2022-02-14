import React from 'react';

import { LeftSidebar } from '../../components/layout-blueprints';

const SidebarContainer = (props) => {
  return <LeftSidebar>{props.children}</LeftSidebar>;
};

export default SidebarContainer;
