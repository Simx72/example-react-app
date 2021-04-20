import TopAppBar, { TopAppBarFixedAdjust, TopAppBarIcon, TopAppBarRow, TopAppBarSection, TopAppBarTitle } from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import { Component } from 'react';
import Drawer, { DrawerAppContent, DrawerContent, DrawerHeader, DrawerTitle } from '@material/react-drawer';
import List, { ListItem, ListItemText, ListItemGraphic } from '@material/react-list';

import 'material-design-icons/iconfont/material-icons.css';
import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-top-app-bar/index.scss';
import '@material/react-list/index.scss';
import '@material/react-drawer/index.scss';
import './sass/material-icons.scss'
import './sass/drawer.scss'


const Navbar = () => {
  return (
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection align='start'>
          <TopAppBarIcon navIcon tabIndex={0}>
            <MaterialIcon hasRipple={true} icon='menu' />
          </TopAppBarIcon>
          <TopAppBarTitle>Mi pagina</TopAppBarTitle>
        </TopAppBarSection>
        <TopAppBarSection align='end' role='toolbar'>
          <TopAppBarIcon actionItem tabIndex={0}>
            <MaterialIcon hasRipple={true} icon='print' />
          </TopAppBarIcon>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
}

class AppHeader extends Component {
  state = { selectedIndex: 0 };

  componentDidMount() {
    switch (window.location.pathname) {
      case '/':
        this.setState({
          selectedIndex: 0
        })
        break;
      case '/otro':
        this.setState({
          selectedIndex: 1
        })
        break;
    
      default:
        break;
    }
  }

  listEltClick(elt?: HTMLElement) {
    if (typeof elt != 'undefined') {
      let href = elt.getAttribute('href')
      if (href != null) {
        window.location.assign(href)
      }
    }
  }

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
              <ListItem href="/" onClick={(ev) => this.listEltClick(ev.target as HTMLElement)}>
                <ListItemGraphic graphic={<MaterialIcon icon='home' />} />
                <ListItemText primaryText="Inicio" />
              </ListItem>
              <ListItem href="/otro" onClick={(ev) => this.listEltClick(ev.target as HTMLElement)}>
              <ListItemGraphic graphic={<MaterialIcon icon='favorite' />} />
                Cualquier otra cosa
              </ListItem>
            </List>
          </DrawerContent>
        </Drawer>

        <DrawerAppContent className='drawer-app-content'>
          <Navbar />
          <TopAppBarFixedAdjust>
            Your inbox content
          </TopAppBarFixedAdjust>
        </DrawerAppContent>
      </div>
    );
  }
}

export { AppHeader }