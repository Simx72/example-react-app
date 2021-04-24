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

  let stockMetaData: {
    "information": string
    "symbol": string
    "lastRefreshed": string
    "outputSize": string
    "timeZone": string
  } = {
    information: '',
    symbol: '',
    lastRefreshed: '',
    outputSize: '',
    timeZone: ''
  };
  if ("Meta Data" in data) {
    if (data["Meta Data"] != null) {
      let meta = data["Meta Data"] as { [c: string]: string }
      stockMetaData.information = meta["1. Information"]
      stockMetaData.information = meta["2. Symbol"]
      stockMetaData.information = meta["3. Last Refreshed"]
      stockMetaData.information = meta["4. Output Size"]
      stockMetaData.information = meta["5. Time Zone"]
    }
  }

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

  return (
    <div id="App-body">
      <Card>
        <CardPrimaryContent style={{ padding: '1rem' }} >
          <h2>[{data.data["2. Symbol"]}]&nbsp;{data.data["1. Information"]}</h2>
          <h5>Last refreshed {data.data["3. Last Refreshed"]}</h5>
          <Chart.Line
            type="line"

            data={{
              labels: stockMarketData.map(val => val.date.getFullYear() + ' - ' + val.date.getMonth()),
              datasets: [{
                data: stockMarketData.map(val => val.open),
                label: "Open",
                borderColor: "#3e95cd",
                fill: false
              }, {
                data: stockMarketData.map(val => val.close),
                label: "Close",
                borderColor: "#8e5ea2",
                fill: false
              }, {
                data: stockMarketData.map(val => val.high),
                label: "High",
                borderColor: "#3cba9f",
                fill: false
              }, {
                data: stockMarketData.map(val => val.low),
                label: "Low",
                borderColor: "#e8c3b9",
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