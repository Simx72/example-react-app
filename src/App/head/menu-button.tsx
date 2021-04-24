import MaterialIcon from "@material/react-material-icon";
import Menu, { MenuList, MenuListItem, MenuListItemGraphic, MenuListItemText } from "@material/react-menu";
import { TopAppBarIcon } from "@material/react-top-app-bar";
import { Component, MouseEvent as ReactMouseEvent } from 'react';

type MenuOptions = { text: string; icon: string }[];

let menuOptions: MenuOptions;
menuOptions = [
  { text: 'Un texto bien largoooo', icon: 'favorite' },
  { text: 'Edit', icon: 'favorite' },
  { text: 'Cut', icon: 'favorite' },
  { text: 'Copy', icon: 'favorite' },
  { text: 'Paste', icon: 'favorite' },
];

const NavBarMenu = (props: { open: boolean, coordinates: { x: number, y: number }, onClose?: () => void, onSelect?: (index: number, item: Element) => void }) => (
  <Menu
    open={props.open}
    coordinates={props.coordinates}
    onSelected={props.onSelect}
    onClose={props.onClose}
  >
    <MenuList style={{ overflow: 'hidden' }}>
      {menuOptions.map((option, index) => (
        <MenuListItem key={index} style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <MenuListItemText primaryText={option.text} />
          <MenuListItemGraphic graphic={<MaterialIcon icon={option.icon} />} />
        </MenuListItem>
      ))}
    </MenuList>
  </Menu>
);


export function MenuItem(props: any) {

}

interface ButtonWithMenuProps {
  ButtonClass: (typeof TopAppBarIcon)
  onSelect?: (index: number, item: Element) => void
}
interface ButtonWithMenuStates {
  coordinates: {
    x: number,
    y: number
  },
  open: boolean
}

export class ButtonWithMenu extends Component<ButtonWithMenuProps, ButtonWithMenuStates> {

  onClick = (ev: ReactMouseEvent<HTMLElement, MouseEvent>) => {
    this.setState({
      open: !this.state.open,
      coordinates: {
        x: ev.clientX,
        y: ev.clientY
      }
    })
  }
  onClose = () => {
    this.setState({
      open: false
    })
  }
  onSelected = this.props.onSelect

  render() {
    return (
      <>
        <this.props.ButtonClass tabIndex={0} onClick={this.onClick}>
          <MaterialIcon hasRipple icon='settings' />
        </this.props.ButtonClass>
        <Menu
          open={this.state.open}
          coordinates={this.state.coordinates}
          onSelected={this.onSelected}
          onClose={this.onClose}
        >
          <MenuList style={{ overflow: 'hidden' }}>
            {menuOptions.map((option, index) => (
              <MenuListItem key={index} style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <MenuListItemText primaryText={option.text} />
                <MenuListItemGraphic graphic={<MaterialIcon icon={option.icon} />} />
              </MenuListItem>
            ))}
          </MenuList>
        </Menu>
      </>
    )
  }
}

export { NavBarMenu };