import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import '@material/react-top-app-bar/index.scss';
import MaterialIcon from '@material/react-material-icon';

function AppHeader() {

  return (
    <div>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection align='start'>
            <TopAppBarIcon navIcon tabIndex={0}>
              <MaterialIcon hasRipple icon='menu' onClick={() => console.log('click')} />
            </TopAppBarIcon>
            <TopAppBarTitle>Miami, FL</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection align='end' role='toolbar'>
            <TopAppBarIcon actionItem tabIndex={0}>
              <MaterialIcon
                aria-label="print page"
                hasRipple
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
  )

}

export { AppHeader }