import React, { useState } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import { HamMenu } from '@/components/Common/Layout/Nav/HamMenu';
import { Sidebar } from '@/components/Common/Layout/Nav/Sidebar';
import { type IMenu } from '@/types/menu';
// import { ThemeToggle } from '@/components/Common/Layout/Nav/ThemeToggle';
import * as styles from '@/components/Common/Layout/layout.styles';
import Logo from '@/assets/images/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';

interface IProps {
  title: string;
  menu: IMenu[];
  to: string;
}

export const Nav: React.FC<Partial<IProps>> = ({
  menu = [],
  to = '/',
}) => {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();

  const handleHamMenu = () => {
    setIsHamMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.navContainerStyles}>
      <nav className={styles.navSpacingWrapperStyles}>
        <div className={styles.navDesktopFlexWrapperStyles}>
          <div className={styles.headerLeftSideWrapperStyles}>
            <AnchorLink to={to} title="Perfect Tychy">
              <div className={styles.navLogoWrapperStyles}>
                <img
                  className={styles.navLogoStyles}
                  src={Logo}
                  alt="Logo"
                />
              </div>
            </AnchorLink>
            <div className={styles.navPhoneStyles}>508-299-701</div>
            <div>
              <a href="https://www.facebook.com/perfecttychy/" target="_blank">
                <FacebookIcon />
              </a>
            </div>
          </div>
          <ul className={styles.navDesktopListStyles}>
            {menu.map((el, i) => (
              <div
                key={`${el.title}_${i}`}
                className={styles.navDesktopListItemDisplayStyles}
              >
                <button className={styles.navDesktopButtonStyles}>
                  {el?.to && (
                    <AnchorLink
                      to={el.to}
                      className={styles.navDesktopSpanTitleStyles}
                      title={el.title}
                    />
                  )}
                </button>

              </div>
            ))}
          </ul>
          {breakpoint.sm ? (
            <div className={styles.hamMenuWrapperStyles}>
              <HamMenu isOpen={isHamMenuOpen} onChange={handleHamMenu} />
            </div>
          ) : (
            <></>
            // <div className={styles.navBtnsWrapperStyles}>
            //   <ThemeToggle />
            // </div>
          )}
        </div>
        <Sidebar isOpen={isHamMenuOpen} menu={menu} onChange={handleHamMenu} />
      </nav>
    </div>
  );
};
