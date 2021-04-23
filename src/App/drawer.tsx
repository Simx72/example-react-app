import Drawer, { DrawerAppContent, DrawerContent, DrawerHeader, DrawerSubtitle, DrawerTitle } from "@material/react-drawer";
import List, { ListItem, ListItemGraphic, ListItemText } from "@material/react-list";
import MaterialIcon from "@material/react-material-icon";
import { TopAppBarFixedAdjust } from "@material/react-top-app-bar";
import { Component } from "react";
import { AppBody } from "./body/body";
import { AppHeader } from "./head/header";

interface AppDrawerProps {}
interface AppDrawerStates {
  selectedIndex: number;
  drawerOpen: boolean;
}

export class AppDrawer extends Component<AppDrawerProps, AppDrawerStates> {
  state = { selectedIndex: 0, drawerOpen: true };

  componentDidMount() {
    this.selectIndex()
  }

  toggleOpen() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }

  selectIndex() {
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
        if (typeof window.history.pushState != 'undefined') {
          window.history.pushState({ href }, 'Inicio', href)
          this.selectIndex()
        } else {
          window.location.assign(href)
        }
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
              @nombre_de_usuario
            </DrawerTitle>
            <DrawerSubtitle tag='em'>
              cualquier.correo@gmail.com
            </DrawerSubtitle>
          </DrawerHeader>

          <DrawerContent>
            <List singleSelection selectedIndex={this.state.selectedIndex}>
              <ListItem href="/" onClick={(ev) => this.listEltClick(ev.target as HTMLElement)}>
                <ListItemGraphic graphic={<MaterialIcon icon='home' />} />
                <ListItemText primaryText="Mi Aplicación" />
              </ListItem>
              <ListItem href="/otro" onClick={(ev) => this.listEltClick(ev.target as HTMLElement)}>
                <ListItemGraphic graphic={<MaterialIcon icon='favorite' />} />
                Cualquier otra cosa
              </ListItem>
            </List>
          </DrawerContent>
        </Drawer>

        <DrawerAppContent className='drawer-app-content'>
          <AppHeader titulo='Inicio' onMenuClick={() => this.toggleOpen()} />
          <TopAppBarFixedAdjust>
            <AppBody />
          </TopAppBarFixedAdjust>
        </DrawerAppContent>
      </div>
    );
  }
}
