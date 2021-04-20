import { Component } from 'react';
import TopAppBar, { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import Drawer, { DrawerAppContent, DrawerContent, DrawerHeader, DrawerTitle } from '@material/react-drawer';
import MaterialIcon from '@material/react-material-icon';
import List, { ListItem, ListItemGraphic, ListItemText } from '@material/react-list';

import '@material/react-material-icon/dist/material-icon.min.css';
import '@material/react-top-app-bar/index.scss';
import '@material/react-list/index.scss';
import '@material/react-drawer/index.scss';
import './styles.scss';

export class AppHeader extends Component {
  state = { selectedIndex: 0 };

  render() {
    return (
      <div className='drawer-container'>
        <Drawer>
          <DrawerHeader>
            <DrawerTitle tag='h2'>
              jane.smith@gmail.com
            </DrawerTitle>
          </DrawerHeader>

          <DrawerContent>
            <List singleSelection selectedIndex={this.state.selectedIndex}>
              <ListItem>
                <ListItemGraphic graphic={<MaterialIcon icon='folder' />} />
                <ListItemText primaryText='Mail' />
              </ListItem>
            </List>
          </DrawerContent>
        </Drawer>

        <DrawerAppContent className='drawer-app-content'>
          <TopAppBar
            title='Inbox' />

          <TopAppBarFixedAdjust>
            Your inbox content
          </TopAppBarFixedAdjust>
        </DrawerAppContent>
      </div>
    );
  }
}