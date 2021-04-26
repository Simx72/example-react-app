import { Component } from "react";
import { MaterialIconOutlined, MaterialIconSharp } from "../material-icon";

class Favorite extends Component<{ onChange?: (value: boolean) => any, cardAction?: boolean }, { filled: boolean }> {
  state = {
    filled: false
  }
  change = () => {
    this.setState({
      filled: !this.state.filled
    })
    if (typeof this.props.onChange != 'undefined') {
      this.props.onChange(this.state.filled)
    }
  }
  render() {
    if (this.state.filled === true) {
      return (
        <MaterialIconSharp
          cardAction={this.props.cardAction}
          onClick={() => this.change()}
          icon='favorite' />
      )
    } else {
      return (
        <MaterialIconOutlined
          cardAction={this.props.cardAction}
          onClick={() => this.change()}
          icon='favorite' />
      )
    }
  }
}

export { Favorite }