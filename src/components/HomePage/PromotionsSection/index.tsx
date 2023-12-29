import React from 'react';

import * as styles from './index.styles';
import { StaticImage } from 'gatsby-plugin-image';


export const PromotionsSection: React.FC = () => {
  return (
    <>
      <div className={styles.promotionWrapperStyles}>
        <h2 className={styles.promotionTitleStyles}>Promocje</h2>
        <div className={styles.promotionCardsWrapperStyles}>
          <StaticImage
            src="../../../assets/images/foryoucard.png"
            alt="foryoucard"
            quality={100}
            className={styles.promotionLogoStyles}
          />
          <StaticImage
            src="../../../assets/images/kartanau.jpg"
            alt="kartanau"
            quality={100}
            className={styles.promotionLogoStyles}
          />
        </div>
      </div>
      <StaticImage
        src="../../../assets/images/percents.jpg"
        alt="percents"
        quality={100}
        className={styles.promotionBackgroundImageStyles}
      />
    </>
  );
};
