import React, { useEffect, useState } from 'react';

import IconArrow from '@/assets/svg/arrow-down.svg';
import * as styles from '@/components/Common/Layout/layout.styles';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(window.pageYOffset > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div onClick={scrollToTop} className={styles.backToTopWrapperStyles}>
          <IconArrow className={styles.backToTopArrowStyles} />
        </div>
      )}
    </>
  );
};
