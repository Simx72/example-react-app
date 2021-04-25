import { Component } from "react";
import { MaterialIconOutlined, MaterialIconSharp } from "../material-icon";

class Favorite extends Component {
  state = {
    filled: false
  }
  change = () => {
    this.setState({
      filled: !this.state.filled
    })
  }
  render = () => (this.state.filled ? (<MaterialIconSharp icon='favorite' />) : (<MaterialIconOutlined icon='favorite' />))
}

export { Favorite }