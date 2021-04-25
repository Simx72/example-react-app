const DefaultIcon = (props: { icon: string, className: string, hasRipple: boolean }) => {
  if (props.hasRipple) {
    return (<span className={'material-icons--ripple-surface ' + props.className} >{props.icon}</span>)
  } else {
    return (<span className={props.className} >{props.icon}</span>)
  }
}
const MaterialIcon = (props: { icon: string, hasRipple: boolean = false }) => (
  <DefaultIcon icon={props.icon} hasRipple={props.hasRipple} className='material-icons' />
)
const MaterialIconOutlined = (props: { icon: string, hasRipple: boolean = false }) => (
  <DefaultIcon icon={props.icon} hasRipple={props.hasRipple} className='material-icons-outlined' />
)
const MaterialIconRound = (props: { icon: string, hasRipple: boolean = false }) => (
  <DefaultIcon icon={props.icon} hasRipple={props.hasRipple} className='material-icons-round' />
)
const MaterialIconSharp = (props: { icon: string, hasRipple: boolean = false }) => (
  <DefaultIcon icon={props.icon} hasRipple={props.hasRipple} className='material-icons-sharp' />
)
const MaterialIconTwoTone = (props: { icon: string, hasRipple: boolean = false }) => (
  <DefaultIcon icon={props.icon} hasRipple={props.hasRipple} className='material-icons-two-tone' />
)

export { MaterialIcon, MaterialIconOutlined, MaterialIconRound, MaterialIconSharp, MaterialIconTwoTone }