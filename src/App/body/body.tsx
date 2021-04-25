import { Chart1, Chart2 } from './chart';
import { MaterialIconTwoTone as MDI } from '../material-icon';

const AppBody = (props: { index: number }) => {
  return (
    <div id="App-body">
      {(() => {
        switch (props.index) {
          case 0:
            return (
              <div>
                <MDI icon='home' />
                <span>Inicio</span>
                <MDI icon='home' />
              </div>
            )
          case 1:
            return (<Chart2 />)
          case 2:
            return (<Chart1 />)
          default:
            return (
              <div>
                <MDI icon='home' />
                <span>Inicio</span>
                <MDI icon='home' />
              </div>
            )
            break;
        }
      })}
    </div>
  )
}


export { AppBody }