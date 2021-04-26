import { MaterialIcon as MDI } from "../material-icon";
import { Component } from "react";

class Favorite extends Component<{ onChange?: (active: boolean) => any, cardAction?: boolean }, { filled: boolean }> {
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
    let className = ''
    if (this.state.filled === true) {
      iconName = 'favorite';
      className = 'active'
    }
    return (<MDI icon={iconName} onClick={() => this.change()} className={className} cardAction={this.props.cardAction} />)
  }
}

export { Favorite }