import Card, { CardPrimaryContent } from '@material/react-card';
import { Row, Col } from 'react-grid-system';
import * as Chart from 'react-chartjs-2';

const AppBody = () => (
  <div id="App-body">
    <Row>
      <Col width={3}>
        <Card>
          <CardPrimaryContent>
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
        </Card>
      </Col>
    </Row>
  </div>
)


export { AppBody }