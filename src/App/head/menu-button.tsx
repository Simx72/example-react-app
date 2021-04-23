import MaterialIcon from "@material/react-material-icon";
import Menu, { MenuList, MenuListItem, MenuListItemGraphic, MenuListItemText } from "@material/react-menu";
import { Component } from "react";

interface NavBarMenuProps {
  x: number;
  y: number;
}

interface NavBarMenuStates {
  open: boolean;
  coordinates: {
    x: number;
    y: number
  }
}

export class NavBarMenu extends Component<NavBarMenuProps, NavBarMenuStates> {
  state = {
    open: false,
    coordinates: { x: this.props.x, y: this.props.y },
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
    let menuOptions: { text: string; icon: string}[] ;
    menuOptions = [
      {text: 'Save', icon: 'favorite'},
      {text: 'Edit', icon: 'favorite'},
      {text: 'Cut', icon: 'favorite'},
      {text: 'Copy', icon: 'favorite'},
      {text: 'Paste', icon: 'favorite'},
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
              <MenuListItemText primaryText={option.text} />
              <MenuListItemGraphic graphic={<MaterialIcon icon={option.icon} />} />
            </MenuListItem>
          ))}
        </MenuList>
      </Menu>
    );
  }
}