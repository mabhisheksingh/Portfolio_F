
function Button({buttonName,classNames,height,width,onClick}) {
  return (
    <button className={classNames} style={{height}} onClick={onClick}>{buttonName}</button>
  )
}

export default Button