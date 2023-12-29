import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FacebookIcon from '@mui/icons-material/Facebook';

import * as styles from './index.styles';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className={styles.footerStyles}>
      <div className={styles.footerEmailWrapperStyles}>
        <EmailIcon className={styles.offerItemIconStyles} />
        <a href="mailto:perfecttychy@gmail.com">perfecttychy@gmail.com</a>
      </div>
      <div className={styles.footerFacebookWrapperStyles}>
        <a href="https://www.facebook.com/perfecttychy/" target="_blank">
          <FacebookIcon className={styles.offerItemIconStyles} />
        </a>
      </div>
      <div className={styles.footerPhoneWrapperStyles}>
        <PhoneIphoneIcon className={styles.offerItemIconStyles} />
        <div>508-299-701</div>
      </div>
    </footer>
  )
};
