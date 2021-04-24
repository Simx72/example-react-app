import MaterialIcon from "@material/react-material-icon";
import Menu, { MenuList, MenuListItem, MenuListItemGraphic, MenuListItemText } from "@material/react-menu";
import { TopAppBarIcon } from "@material/react-top-app-bar";
import { Component } from "react";


let menuOptions: { text: string; icon: string }[];
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
  
  onClick = () => {}
  onClose = () => {}
  onSelected = () => {}
  
  render() {
    return (
      <>
        <TopAppBarIcon actionItem tabIndex={0} onClick={this.onClick}>
          <MaterialIcon hasRipple icon='settings' />
        </TopAppBarIcon>
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