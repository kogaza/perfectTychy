import React, { useRef } from 'react';
import Slider, { Settings } from 'react-slick';

import { ButtonIcon } from '@/components/Common/ButtonIcon';

import * as styles from './index.styles';
import { referencesList } from './referencesList';

export const ReferencesSlider: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className={styles.customersWrapperStyles}>
      <h2 className={styles.referencesTitleStyles}>Referencje</h2>
      <ButtonIcon
        onClick={() => sliderRef?.current?.slickPrev()}
        additionalClass={styles.sliderPrevBtnStyles}
        aria-label="Previous slide"
      >
        <svg
          className={styles.sliderPrevBtnSvgStyles}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </ButtonIcon>
      <div className={styles.customersSliderStyles}>
        <Slider ref={sliderRef} {...settings} className={styles.sliderStyles}>
          {referencesList.map((el, index) => (
            <div
              key={index}
            >
              <div className={styles.sliderImageOuterWrapperStyles}>
                {el.image}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <ButtonIcon
        onClick={() => sliderRef?.current?.slickNext()}
        additionalClass={styles.sliderNextBtnStyles}
        aria-label="Next slide"
      >
        <svg
          className={styles.sliderNextBtnSvgStyles}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </ButtonIcon>
    </div>
  );
};
