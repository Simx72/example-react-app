import { Cell, Row, Grid } from '@material/react-layout-grid'
import { EightColumn, FourColumn, TwelveColumn } from '@material/react-layout-grid/dist/Cell'
import * as Txt from '@material/react-typography'

let alignCenter: { textAlign: 'center' } = { textAlign: 'center' }
let largoDe: {
  Escritorio: TwelveColumn,
  Tablet: EightColumn,
  Cel: FourColumn,
} = {
  Escritorio: 4,
  Tablet: 4,
  Cel: 4,
}


const Home = () => {

  let lista: string[] = [
    '\\(^v^)/'
  ];

  return (
    <div>
      <b className='color-complementary-900'>
        <Txt.Headline1 style={alignCenter} >Home</Txt.Headline1>
        <Txt.Headline2 style={alignCenter} >This is the main page of the project</Txt.Headline2>
      </b>
      <Grid>
        <Row>
          {lista.map(val => (
            <Cell desktopColumns={largoDe.Escritorio} tabletColumns={largoDe.Tablet} phoneColumns={largoDe.Cel} >
              {val}
            </Cell>
          ))}
        </Row>
      </Grid>

    </div>
  )
}

export { Home }