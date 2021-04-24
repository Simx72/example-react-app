import Card, { CardPrimaryContent, CardActions, CardActionIcons } from '@material/react-card';
import { Row, Col } from 'react-grid-system';
import * as Chart from 'react-chartjs-2';
import { RippleMaterialIcon } from '@material/react-material-icon';

const AppBody = () => (
  <div id="App-body">
    <Row>
      <Col lg={6}>
        <Card>
          <CardPrimaryContent style={{ padding: '1rem' }} >
            <Chart.Bar
              type="bar"
              data={{
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [
                  {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: [2478, 5267, 734, 784, 433]
                  }
                ]
              }}
              options={{
                legend: { display: false },
                title: {
                  display: true,
                  text: 'Predicted world population (millions) in 2050'
                }
              }}
            />
          </CardPrimaryContent>
          <CardActions>
            <CardActionIcons>
              <RippleMaterialIcon icon='more_vert' />
              <RippleMaterialIcon icon='more' />
              <RippleMaterialIcon icon='favorite' />
            </CardActionIcons>
          </CardActions>
        </Card>
      </Col>
    </Row>
  </div>
)


export { AppBody }