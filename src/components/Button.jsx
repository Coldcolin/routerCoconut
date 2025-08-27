
const Button = ({text,style}) => {
  return (
    <button style={{background:"black", width:"350px", height:"45px", color:"white", cursor:"pointer"}} className={style}>{text}</button>
  )
}

export default Button