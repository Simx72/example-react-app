import { Component } from "react";
import { MaterialIconOutlined, MaterialIconSharp } from "../material-icon";

class Favorite extends Component<{ onChange: (value: boolean) => any }, { filled: boolean }> {
  state = {
    filled: false
  }
  change = () => {
    this.setState({
      filled: !this.state.filled
    })
    this.props.onChange(this.state.filled)
  }
  render = () => (this.state.filled ? (<MaterialIconSharp onClick={() => this.change()} icon='favorite' />) : (<MaterialIconOutlined onClick={() => this.change()} icon='favorite' />))
}

export { Favorite }