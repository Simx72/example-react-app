import TopAppBar, { TopAppBarIcon, TopAppBarRow, TopAppBarSection, TopAppBarTitle } from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import { ButtonWithMenu } from './menu-button';
import { Component } from 'react';

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
          <ButtonWithMenu ButtonClass={TopAppBarIcon}>

          </ButtonWithMenu>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
}

export { AppHeader }