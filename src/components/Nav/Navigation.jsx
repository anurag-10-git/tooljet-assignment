import { Link } from "react-router-dom";
import assets from "../../assets/assets";
import classes from "./Navbar.module.css";

const navigationList = [
  { name: "platform", link: "#platform", expandable: true },
  { name: "product", link: "#product", expandable: true },
  { name: "pricing", link: "#pricing", expandable: false },
  { name: "company", link: "#company", expandable: true },
  { name: "resources", link: "#resources", expandable: true },
]

const LinkTab = ({ name, link, expandable }) => (
  <li><Link to={link}>{name}</Link><span>{expandable && <img src={assets.dropDownIcon} />}</span></li>
)

const Navigation = () => {
  return (
    <ul className={classes["navigation-list"]}>{navigationList.map((navigationItem, i) => <LinkTab key={i} {...navigationItem} />)}</ul>
  )
}

export default Navigation