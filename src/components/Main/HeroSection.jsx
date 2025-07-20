import React, { useState, useEffect, useRef } from 'react';
import classes from './Main.module.css';
import assets from '../../assets/assets';

const PLACEHOLDERS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  "Lorem ipsum dolor sit amet, consectetur ",
  "Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore ",
  "Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor",
];

const HeroSection = () => {
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIdx(idx => (idx + 1) % PLACEHOLDERS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fillWithPlaceholder = () => {
    setInputValue(PLACEHOLDERS[placeholderIdx]);
    textareaRef.current && textareaRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      fillWithPlaceholder();
    }
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleChange = (e) => setInputValue(e.target.value);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleSubmit = () => {
    // Replace with your submit logic
    alert(`Submitted: ${inputValue}`);
    setInputValue('');
  };

  return (
    <main className={classes['hero-container']}>
      <h1>Lorem ipsum dolor sit in tempor<img src={assets.sketchVector} /></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing sed do eiusmod</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (inputValue.trim()) handleSubmit();
        }}
        autoComplete="off"
      >
        <div className={classes['textarea-container']}>
          <textarea
            ref={textareaRef}
            className={`${classes['main-text-area']} ${isFocused ? classes['gradient-border'] : ''}`}
            value={inputValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            rows={3}
          />
          {/* Custom placeholder with integrated tab button */}
          {!inputValue && (
            <div className={classes['custom-placeholder']}>
              <span>{PLACEHOLDERS[placeholderIdx]}</span>
              <button
                type="button"
                tabIndex={-1}
                className={classes['tab-btn']}
                aria-label="Fill with placeholder"
                onClick={e => {
                  e.preventDefault();
                  fillWithPlaceholder();
                }}
              >
                ⇥ Tab
              </button>
            </div>
          )}
          {/* Submit button at bottom right */}
          {inputValue.trim() && (
            <button
              type="submit"
              className={classes['floating-submit-btn']}
              aria-label="Submit"
            >
              ↵
            </button>
          )}
        </div>
      </form>
      <ul className={classes.certification}>
        <li>
          <img src={assets.shieldLogo} />
          <div>
            <h3>Loreum ipsum dolor</h3><span>sit met consectetur</span>
          </div>
        </li>
        <li>
          <img src={assets.shieldLogo} />
          <div>
            <h3>Loreum ipsum dolor</h3><span>sit met consectetur</span>
          </div>
        </li>
        <li>
          <img src={assets.shieldLogo} />
          <div>
            <h3>Loreum ipsum dolor</h3><span>sit met consectetur</span>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default HeroSection;