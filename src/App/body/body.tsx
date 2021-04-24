import Card, { CardActionIcons, CardActions, CardMedia, CardPrimaryContent } from '@material/react-card';
import MaterialIcon from '@material/react-material-icon';
import * as Chart from 'react-chartjs-2';

const AppBody = () => (
  <div id="App-body" className="l-wrap">
    <Card>
      <CardPrimaryContent>
        <h1>Header</h1>
        <CardMedia square imageUrl="https://cdn.shopify.com/s/files/1/0229/0839/files/Busqueda_de_imagenes_3_large.jpg?v=1578328497" />
      </CardPrimaryContent>

      <CardActions>
        <CardActionIcons>
          <MaterialIcon icon='delete' />
        </CardActionIcons>
        <CardActionIcons>
          <MaterialIcon icon='more' />
        </CardActionIcons>
      </CardActions>
    </Card>
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
  </div>
)


export { AppBody }