import { Cell, Row, Grid } from '@material/react-layout-grid'
import Card, { CardActions, CardActionIcons } from '@material/react-card';
import { EightColumn, FourColumn, TwelveColumn } from '@material/react-layout-grid/dist/Cell'
import * as Txt from '@material/react-typography'
import { MaterialIconSharp as MDI } from '../material-icon';

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
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12',
    'Item 13',
    'Item 14'
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
              <Card style={{padding: '1rem'}}>
                {val}
                <CardActions>
                  <CardActionIcons>
                    {<MDI icon='favorite' cardAction />}
                  </CardActionIcons>
                </CardActions>
              </Card>
            </Cell>
          ))}
        </Row>
      </Grid>

    </div>
  )
}

export { Home }