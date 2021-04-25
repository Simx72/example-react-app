const MaterialIcon = (props: { icon: string }) => (
  <span className="material-icons" >{props.icon}</span>
)
const MaterialIconOutlined = (props: { icon: string }) => (
  <span className="material-icons-outlined" >{props.icon}</span>
)
const MaterialIconRound = (props: { icon: string }) => (
  <span className="material-icons-round" >{props.icon}</span>
)
const MaterialIconSharp = (props: { icon: string }) => (
  <span className="material-icons-sharp" >{props.icon}</span>
)
const MaterialIconTwoTone = (props: { icon: string }) => (
  <span className="material-icons-two-tone" >{props.icon}</span>
)

export { MaterialIcon, MaterialIconOutlined, MaterialIconRound, MaterialIconSharp, MaterialIconTwoTone }