import MaterialIcon from "@material/react-material-icon";
import Menu, { MenuList, MenuListItem, MenuListItemGraphic, MenuListItemText } from "@material/react-menu";
import { TopAppBarIcon } from "@material/react-top-app-bar";
import { Component, MouseEvent as ReactMouseEvent } from 'react';

interface MenuOptionProps {
  text: string,
  icon?: string,
}

interface ButtonWithMenuProps {
  ButtonClass: 'top-app-bar-icon'
  options: MenuOptionProps[]
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
        {(() => {
          if (this.props.ButtonClass === 'top-app-bar-icon')
            return (
              <TopAppBarIcon actionItem tabIndex={0} onClick={this.onClick}>
                <MaterialIcon hasRipple icon='settings' />
              </TopAppBarIcon>
            )
        })()}
        <Menu
          open={this.state.open}
          coordinates={this.state.coordinates}
          onSelected={this.onSelected}
          onClose={this.onClose}
        >
          <MenuList style={{ overflow: 'hidden' }} >
            {this.props.options.map((option, index) => (
              <MenuListItem key={index} style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <MenuListItemText primaryText={option.text} />
                {(() => {
                  if (typeof option.icon != 'undefined') return (
                    <MenuListItemGraphic graphic={<MaterialIcon icon={option.icon} />} />
                  )
                })()}
              </MenuListItem>
            ))}
          </MenuList>
        </Menu>
      </>
    )
  }
}

export { ButtonWithMenu }