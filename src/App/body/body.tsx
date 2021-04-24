import { Grid, Row, Cell } from '@material/react-layout-grid';
import { useGet } from 'restful-react';
import { Chart1 } from './chart';

const AppBody = () => {
  
  let data = useGet('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo')
  
  return (
    <div id="App-body">
      <Grid>
        <Row>
          <Cell columns={6}>
            <Chart1 />
          </Cell>
        </Row>
      </Grid>
      <div>{data.toString()}</div>
    </div>
  )
}


export { AppBody }