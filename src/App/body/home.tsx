import * as Txt from '@material/react-typography'

let alignCenter: { textAlign: 'center' } = { textAlign: 'center' }

const Home = () => (
  <div className='color-complementary-900'>
    <Txt.Headline1 style={alignCenter} >Home</Txt.Headline1>
    <Txt.Headline2 style={alignCenter} >This is the main page of the project</Txt.Headline2>
  </div>
)

export { Home }