import { Row, Col } from 'react-grid-system';
import { Card1 } from './chart';

const AppBody = () => (
  <div id="App-body">
    <Row>
      <Col lg={6}>
        <Card1 />
      </Col>
    </Row>
  </div>
)


export { AppBody }