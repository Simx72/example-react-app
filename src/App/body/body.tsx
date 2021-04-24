import { Grid, Row, Cell } from '@material/react-layout-grid';
import { useGet } from 'restful-react';
import { Chart2 } from './chart';

const AppBody = () => {
  return (
    <div id="App-body">
      <Grid>
        <Row>
          <Cell columns={12}>
            <Chart2 />
          </Cell>
        </Row>
      </Grid>
    </div>
  )
}


export { AppBody }