import HeroSection from './HeroSection';
import classes from './Main.module.css';

const VerticalLines = () => (
  <div className={classes["vertical-lines-container"]}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
)

const Main = () => {
  return (
    <div className={classes["main-container"]}>
      <HeroSection />
      <VerticalLines />
      <VerticalLines />
    </div>
  )
}

export default Main