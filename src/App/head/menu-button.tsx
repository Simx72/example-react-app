import MaterialIcon from "@material/react-material-icon";
import Menu, { MenuList, MenuListItem, MenuListItemGraphic, MenuListItemText } from "@material/react-menu";
import { TopAppBarIcon } from "@material/react-top-app-bar";
import { Component, MouseEvent as ReactMouseEvent } from 'react';

interface MenuOptionProps {
  text: string,
  icon?: string,
  key?: string | number
}

class MenuOption extends Component<MenuOptionProps> {
  render() {
    return (
      <MenuOption/>
    )
  }
}

interface ButtonWithMenuProps {
  ButtonClass: (typeof TopAppBarIcon)
  children: MenuOption[] | MenuOption
  onSelect?: (index: number, item: Element) => void
}
interface ButtonWithMenuStates {
  coordinates: {
    x: number,
    y: number
  },
  open: boolean
}

class ButtonWithMenu extends Component<ButtonWithMenuProps, ButtonWithMenuStates> {
  state = {
    coordinates: {
      x: 0,
      y: 0
    },
    open: false
  }

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
          <MenuList style={{ overflow: 'hidden' }} >
            {(() => {
              let options = this.props.children
              if (options instanceof Array) {
                return options.map((option: any, index: any) => (
                  <MenuListItem key={index} style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MenuListItemText primaryText={option.props.text} />
                    {(() => {
                      if (typeof option.props.icon != 'undefined') return (
                        <MenuListItemGraphic graphic={<MaterialIcon icon={option.props.icon} />} />
                      )
                    })()}
                  </MenuListItem>
                ))
              } else {
                return options;
              }
            })()}
          </MenuList>
        </Menu>
      </>
    )
  }
}

export { MenuOption, ButtonWithMenu }