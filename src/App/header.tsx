import TopAppBar, { TopAppBarFixedAdjust, TopAppBarIcon, TopAppBarRow, TopAppBarSection, TopAppBarTitle } from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-top-app-bar/index.scss';
import '@material/react-list/index.scss';
import '@material/react-drawer/index.scss';

const AppHeader = () => {
  return (
    <div>
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
              <MaterialIcon 
                aria-label="print page" 
                hasRipple={true} 
                icon='print' 
                onClick={() => console.log('print')}
              />
            </TopAppBarIcon>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust>
        My exciting content!
      </TopAppBarFixedAdjust>
    </div>
  );
}

export { AppHeader }