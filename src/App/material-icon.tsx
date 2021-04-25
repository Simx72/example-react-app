interface IconProps {
  icon: string;
  hasRipple?: boolean;
  cardAction?: boolean;
  className?: string;
}

interface DefaultIconProps extends IconProps {
  iconClass: string
}

const DefaultIcon = (props: DefaultIconProps) => {

  let finalClassname = props.iconClass

  if (props.hasRipple) finalClassname += ' material-icons--ripple-surface'
  if (props.cardAction) finalClassname += ' mdc-card__action mdc-card__action--icon'
  if (typeof props.className !== 'undefined') finalClassname += ' '+props.className.trim()

  return (<span className={finalClassname} >{props.icon}</span>)
}
const MaterialIcon = (props: IconProps) => (
  <DefaultIcon iconClass='material-icons' {...props} />
)
const MaterialIconOutlined = (props: IconProps) => (
  <DefaultIcon iconClass='material-icons-outlined' {...props} />
)
const MaterialIconRound = (props: IconProps) => (
  <DefaultIcon iconClass='material-icons-round' {...props} />
)
const MaterialIconSharp = (props: IconProps) => (
  <DefaultIcon iconClass='material-icons-sharp' {...props} />
)
const MaterialIconTwoTone = (props: IconProps) => (
  <DefaultIcon iconClass='material-icons-two-tone' {...props} />
)

export { MaterialIcon, MaterialIconOutlined, MaterialIconRound, MaterialIconSharp, MaterialIconTwoTone }