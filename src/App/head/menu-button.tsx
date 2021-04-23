import Menu, { MenuList, MenuListItem, MenuListItemText } from "@material/react-menu";
import { Component } from "react";

export class NavBarMenuButton extends Component {
  state = {
    open: true,
    coordinates: undefined,
  };

  componentDidMount() {
    window.addEventListener('contextmenu', this.rightClickCallback);
  }

  componentWillUnmount() {
    window.removeEventListener('contextmenu', this.rightClickCallback);
  }

  rightClickCallback = (event: MouseEvent) => {
    this.setState({
      open: !this.state.open,
      coordinates: {x: event.clientX, y: event.clientY},
    });
    // Must preventDefault so the system context menu doesn't appear.
    // This won't be needed in other cases besides right click.
    event.preventDefault();
  }

  // Must set open to false to keep menu in the correct state.
  // This does not follow the controlled component pattern
  // (see https://reactjs.org/docs/forms.html#controlled-components).
  // Follow https://github.com/material-components/material-components-web-react/issues/785
  // to get any updates.
  onClose = () => {
    this.setState({open: false});
  }

  render() {
    const menuOptions = [
      'Save',
      'Edit',
      'Cut',
      'Copy',
      'Paste',
    ];

    return (
      <Menu
        open={this.state.open}
        onClose={this.onClose}
        coordinates={this.state.coordinates}
        onSelected={(index, item) => console.log(index, item)}
      >
        <MenuList>
          {menuOptions.map((option, index) => (
            <MenuListItem key={index}>
              <MenuListItemText primaryText={option} />
              {/* You can also use other components from list, which are documented below */}
            </MenuListItem>
          ))}
        </MenuList>
      </Menu>
    );
  }
}