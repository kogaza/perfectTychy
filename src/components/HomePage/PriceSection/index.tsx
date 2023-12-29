import React from 'react';

import * as styles from './index.styles';
import { StaticImage } from 'gatsby-plugin-image';

export const PriceSection: React.FC = () => {
  return (
    <>
      {/* <div className={styles.pricingSectionStyles}> */}
      <div className={styles.pricingWrapperStyles}>
        <h2 className={styles.pricingTitleStyles}>Cennik</h2>
        <table className={styles.pricingTableStyles}>
          <thead className={styles.pricingTableHeadStyles}>
            <tr>
              <th>Ceny brutto od osoby</th>
              <th>lektor</th>
            </tr>
            <tr>
              <th>Wszystkie języki</th>
              <th>60 minut</th>
            </tr>
          </thead>
          <tbody className={styles.pricingTableBodyStyles}>
            <tr>
              <td>1 osoba</td>
              <td>120 zł</td>
            </tr>
            <tr>
              <td>grupa 2-osobowa</td>
              <td>80 zł</td>
            </tr>
            <tr>
              <td>grupa 3-osobowa</td>
              <td>60 zł</td>
            </tr>
            <tr>
              <td>grupa 4-osobowa</td>
              <td>50 zł</td>
            </tr>
            <tr>
              <td>większe grupy, przedszkola, szkoły, firmy</td>
              <td><button className={styles.pricingTableButtonStyles}>do uzgodnienia</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <StaticImage
        src="../../../assets/images/monay.jpg"
        alt="london"
        quality={100}
        className={styles.pricingBackgroundImageStyles}
      />
      {/* </div> */}
    </>
  );
};
