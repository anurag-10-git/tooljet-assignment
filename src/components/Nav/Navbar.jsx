import Login from "./Login";
import MainLogo from "./MainLogo";
import Navigation from "./Navigation";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <div className={classes.navbar}>
        <MainLogo />
        <Navigation />
        <Login />
      </div>
      <div className="horizontal-gradient-line"></div>
    </nav>
  );
}

export default Navbar;