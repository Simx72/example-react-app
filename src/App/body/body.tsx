import { Row, Col } from 'react-grid-system';
import { Chart1 } from './chart';

const AppBody = () => (
  <div id="App-body">
    <Row>
      <Col lg={6}>
        <Chart1 />
      </Col>
    </Row>
  </div>
)


export { AppBody }