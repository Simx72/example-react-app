import Drawer, { DrawerAppContent, DrawerContent, DrawerHeader, DrawerSubtitle, DrawerTitle } from "@material/react-drawer";
import List, { ListItem, ListItemGraphic, ListItemText } from "@material/react-list";
import MaterialIcon from "@material/react-material-icon";
import { TopAppBarFixedAdjust } from "@material/react-top-app-bar";
import { Component } from "react";
import { AppBody } from "./body";
import { AppHeader } from "./header";

export class AppDrawer extends Component {
  state = { selectedIndex: 0, drawerOpen: false };

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
        <Drawer
          dismissible
          open={this.state.drawerOpen}
        >
          <DrawerHeader>
            <DrawerTitle tag='h2'>
              cualquier.correo@gmail.com
            </DrawerTitle>
            <DrawerSubtitle tag='em'>
              @nombre_de_usuario
            </DrawerSubtitle>
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
          <AppHeader titulo='Inicio' />
          <TopAppBarFixedAdjust>
            <AppBody />
          </TopAppBarFixedAdjust>
        </DrawerAppContent>
      </div>
    );
  }
}
