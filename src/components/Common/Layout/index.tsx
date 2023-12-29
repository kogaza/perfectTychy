import React from 'react';
import { Script } from 'gatsby';

import { BackToTop } from '@/components/Common/Layout/BackToTop';
import { Nav } from '@/components/Common/Layout/Nav';
import { Footer } from '@/components/Common/Layout/Footer';
import { mainMenu } from '@/components/Common/Layout/Nav/mainMenu';
import * as styles from '@/components/Common/Layout/layout.styles';

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <div className={styles.layoutWrapperStyles}>
        <Script key="hs-form" src="//js.hsforms.net/forms/embed/v2.js" />
        <Nav
          title="Parallel"
          menu={mainMenu}
          to={'/'}
        />
        {children}

        <Footer />
      </div>
      <BackToTop />
    </>
  );
};
