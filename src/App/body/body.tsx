import { Grid, Row, Cell } from '@material/react-layout-grid';
import { Chart1 } from './chart';

const AppBody = () => (
  <div id="App-body">
    <Grid>
      <Row>
        <Cell columns={6}>
          <Chart1 />
        </Cell>
      </Row>
    </Grid>
  </div>
)


export { AppBody }