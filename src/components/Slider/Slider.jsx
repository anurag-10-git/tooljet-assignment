import { useEffect, useRef } from "react";
import assets from "../../assets/assets";
import classes from "./Slider.module.css";

const sponsors = assets.sponsors;

const Slider = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const fullWidth = track.scrollWidth / 2;
      track.style.setProperty('--scroll-width', `${fullWidth}px`);
    }
  }, []);

  const shouldShowCaseStudy = (index) => {
    return index === 0 || (index + 1) % 4 === 0;
  };

  const handleCaseStudyClick = () => {
    window.open('', '_blank');
  };

  return (
    <div className={classes.sponsors}>
      <div className="horizontal-gradient-line"></div>
      <div className={classes["sponsors-mask"]}>
        <ul
          className={classes["sponsors-slider"]}
          ref={trackRef}
        >
          {sponsors.map((e, i) => (
            <li key={`original-${i}`} className={classes["img-container"]}>
              <img src={e} alt={`sponsor-${i}`} />
              {shouldShowCaseStudy(i) && (
                <button
                  className={classes["case-study-btn"]}
                  onClick={handleCaseStudyClick}
                >
                  CASE STUDY
                </button>
              )}
            </li>
          ))}
          {sponsors.map((e, i) => (
            <li key={`duplicate-${i}`} className={classes["img-container"]}>
              <img src={e} alt={`sponsor-duplicate-${i}`} />
              {shouldShowCaseStudy(i) && (
                <button
                  className={classes["case-study-btn"]}
                  onClick={handleCaseStudyClick}
                >
                  CASE STUDY
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
