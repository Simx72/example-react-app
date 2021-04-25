import Drawer, { DrawerAppContent, DrawerContent, DrawerHeader, DrawerSubtitle, DrawerTitle } from "@material/react-drawer";
import List, { ListItem, ListItemGraphic, ListItemText } from "@material/react-list";
import { MaterialIconRound as MDI } from "./material-icon";
import { TopAppBarFixedAdjust } from "@material/react-top-app-bar";
import { Component } from "react";
import { AppBody } from "./body/body";
import { AppHeader } from "./head/header";
import appInfo from '../app-info.json';
import { goTo } from "./functions/url";
import { Cell, Row, Grid } from "@material/react-layout-grid";

interface AppDrawerProps { }
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
      case '/ibm-stock-market':
        this.setState({
          selectedIndex: 1
        })
        break;
      case '/population':
        this.setState({
          selectedIndex: 2
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
        goTo(href).then(() => this.selectIndex())
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
              @username
            </DrawerTitle>
            <DrawerSubtitle tag='em'>
              someone@gmail.com
            </DrawerSubtitle>
          </DrawerHeader>

          <DrawerContent>
            <List singleSelection selectedIndex={this.state.selectedIndex}>
              <ListItem href="/" onClick={(ev) => this.listEltClick(ev.target as HTMLElement)}>
                <ListItemGraphic graphic={<MDI icon='home' />} />
                <ListItemText primaryText="Home" />
              </ListItem>
              <ListItem href="/ibm-stock-market" onClick={(ev) => this.listEltClick(ev.target as HTMLElement)}>
                <ListItemGraphic graphic={<MDI icon='trending_up' />} />
                <ListItemText primaryText="IBM Stock Market" />
              </ListItem>
              <ListItem href="/population" onClick={(ev) => this.listEltClick(ev.target as HTMLElement)}>
                <ListItemGraphic graphic={<MDI icon='leaderboard' />} />
                <ListItemText primaryText="Population" />
              </ListItem>
            </List>
          </DrawerContent>
        </Drawer>

        <DrawerAppContent className='drawer-app-content'>
          <AppHeader titulo={appInfo.name} onMenuClick={() => this.toggleOpen()} />
          <TopAppBarFixedAdjust>
            <Grid>
              <Row style={{ justifyContent: 'center' }}>
                <Cell desktopColumns={10} tabletColumns={7} phoneColumns={4} >
                  <AppBody index={this.state.selectedIndex} />
                </Cell>
              </Row>
            </Grid>
          </TopAppBarFixedAdjust>
        </DrawerAppContent>
      </div>
    );
  }
}
