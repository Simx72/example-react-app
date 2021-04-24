import Card, { CardPrimaryContent, CardActions, CardActionIcons } from '@material/react-card';
import * as Chart from 'react-chartjs-2';
import MaterialIcon from '@material/react-material-icon';
import { useGet } from 'restful-react';

const Chart1 = () => (
  <div id="App-body">
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
          <MaterialIcon icon='more_vert' />
          <MaterialIcon icon='more' />
          <MaterialIcon icon='favorite' />
        </CardActionIcons>
      </CardActions>
    </Card>
  </div>
)


const Chart2 = () => {

  let data = useGet('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo')

  let stockMarketData: { date: Date, open: number, high: number, low: number, close: number, volume: number }[] = []
  if (data.data != null) {

    for (const date in data.data["Time Series (Daily)"]) {
      const info = data.data["Time Series (Daily)"][date]
      const open = info["1. open"],
        high = info["2. high"],
        low = info["3. low"],
        close = info["4. close"],
        volume = info["5. volume"];
      stockMarketData.push({
        date: new Date(date),
        open,
        close,
        high,
        volume,
        low
      })
    }
  }

  // stockMarketData.filter(val => val.date.getDay() === 1)

  return (
    <div id="App-body">
      <Card>
        <CardPrimaryContent style={{ padding: '1rem' }} >
          <Chart.Line
            type="line"

            data={{
              labels: stockMarketData.map(val => val.date.getFullYear()+' - '+val.date.getMonth()),
              datasets: [{
                data: stockMarketData.map(val => val.),
                label: "Africa",
                borderColor: "#3e95cd",
                fill: false
              }, {
                data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                label: "Asia",
                borderColor: "#8e5ea2",
                fill: false
              }, {
                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                label: "Europe",
                borderColor: "#3cba9f",
                fill: false
              }, {
                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                label: "Latin America",
                borderColor: "#e8c3b9",
                fill: false
              }, {
                data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                label: "North America",
                borderColor: "#c45850",
                fill: false
              }
              ]
            }}

          />
        </CardPrimaryContent>
        <CardActions>
          <CardActionIcons>
            <MaterialIcon icon='more_vert' />
            <MaterialIcon icon='more' />
            <MaterialIcon icon='favorite' />
          </CardActionIcons>
        </CardActions>
      </Card>
    </div>
  )
}



export { Chart1, Chart2 };