import TopAppBar, { TopAppBarIcon, TopAppBarRow, TopAppBarSection, TopAppBarTitle } from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import { NavBarMenu } from './menu-button';
import { Component, MouseEvent as ReactMouseEvent } from 'react';

interface AppHeaderProps {
  titulo?: string,
  onMenuClick: () => void
}
interface AppHeaderStates {
  navBarMenuStates: {
    coordinates: {
      x: number;
      y: number
    }
    open: boolean
  }
}


class AppHeader extends Component<AppHeaderProps, AppHeaderStates> {
  state = {
    navBarMenuStates: {
      coordinates: {
        x: 0,
        y: 0
      },
      open: false
    }
  }

  onMenuClick = (ev: ReactMouseEvent<HTMLElement, MouseEvent>) => {
    this.setState({
      navBarMenuStates: {
        coordinates: {
          x: ev.clientX,
          y: ev.clientY
        },
        open: !this.state.navBarMenuStates.open
      }
    })
  }

  onMenuClose = () => {

  }

  render = () => (
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection align='start' id="top-app-bar-start-section">
          <TopAppBarIcon navIcon tabIndex={0} onClick={() => this.props.onMenuClick()}>
            <MaterialIcon hasRipple={true} icon='menu' />
          </TopAppBarIcon>
          <TopAppBarTitle>{this.props.titulo}</TopAppBarTitle>
          <input type="hidden" value="render" data-testid="top-app-bar" />
        </TopAppBarSection>
        <TopAppBarSection align='end' role='toolbar'>
          <TopAppBarIcon actionItem tabIndex={0} onClick={this.onMenuClick}>
            <MaterialIcon hasRipple icon='settings' />
          </TopAppBarIcon>
          <NavBarMenu coordinates={this.state.navBarMenuStates.coordinates} open={this.state.navBarMenuStates.open} onClose={() => this.onMenuClose()} />
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
}

export { AppHeader }