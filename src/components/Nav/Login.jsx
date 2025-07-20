import { Link } from "react-router-dom"
import classes from "./Navbar.module.css"
import assets from "../../assets/assets"

const Login = () => {
  return (
    <div className={classes.login}>
      <Link to="/Login">Login</Link>
      <Link to="/tryForFree"><span>Try For Free</span><img src={assets.arrowTopRight} alt="try for free" /></Link>
    </div>
  )
}

export default Login