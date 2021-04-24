import MaterialIcon from "@material/react-material-icon";
import Menu, { MenuList, MenuListItem, MenuListItemGraphic, MenuListItemText } from "@material/react-menu";


let menuOptions: { text: string; icon: string }[];
menuOptions = [
  { text: 'Un texto bien largoooo', icon: 'favorite' },
  { text: 'Edit', icon: 'favorite' },
  { text: 'Cut', icon: 'favorite' },
  { text: 'Copy', icon: 'favorite' },
  { text: 'Paste', icon: 'favorite' },
];

const NavBarMenu = (props: {open: boolean, coordinates: { x: number, y: number }, onClose?: () => void, onSelect?: (index: number, item: Element) => void}) => (
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

export { NavBarMenu };