import { MaterialIcon as MDI } from "../material-icon";
import { Component } from "react";

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
    let iconName = 'favorite_border'
    if (this.state.filled === true) iconName = 'favorite';
    return (<MDI icon={iconName} cardAction={this.props.cardAction} />)
  }
}

export { Favorite }