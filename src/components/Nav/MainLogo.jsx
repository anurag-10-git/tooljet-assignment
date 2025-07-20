import assets from '../../assets/assets';
import classes from "./Navbar.module.css";

const MainLogo = () => {
  return (
    <img className={classes["main-logo"]} src={assets.mainLogo} />
  )
}

export default MainLogo