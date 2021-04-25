interface IconProps {
  icon: string;
  hasRipple?: boolean;
  cardAction?: boolean;
}

interface DefaultIconProps extends IconProps {
  className: string
}

const DefaultIcon = (props: DefaultIconProps) => {

  let finalClassname = props.className

  if (props.hasRipple) finalClassname += ' material-icons--ripple-surface'
  if (props.cardAction) finalClassname += ' mdc-card__action mdc-card__action--icon'

  return (<span className={finalClassname} >{props.icon}</span>)
}
const MaterialIcon = (props: IconProps) => (
  <DefaultIcon icon={props.icon} cardAction={props.cardAction} hasRipple={props.hasRipple} className='material-icons' />
)
const MaterialIconOutlined = (props: IconProps) => (
  <DefaultIcon icon={props.icon} cardAction={props.cardAction} hasRipple={props.hasRipple} className='material-icons-outlined' />
)
const MaterialIconRound = (props: IconProps) => (
  <DefaultIcon icon={props.icon} cardAction={props.cardAction} hasRipple={props.hasRipple} className='material-icons-round' />
)
const MaterialIconSharp = (props: IconProps) => (
  <DefaultIcon icon={props.icon} cardAction={props.cardAction} hasRipple={props.hasRipple} className='material-icons-sharp' />
)
const MaterialIconTwoTone = (props: IconProps) => (
  <DefaultIcon icon={props.icon} cardAction={props.cardAction} hasRipple={props.hasRipple} className='material-icons-two-tone' />
)

export { MaterialIcon, MaterialIconOutlined, MaterialIconRound, MaterialIconSharp, MaterialIconTwoTone }