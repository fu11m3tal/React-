const Component = (props) => {
  return (
    <div>
      {props.data}
    </div>
  )
}

Component.defaultProps = {
  data: undefined
}

export default Component
