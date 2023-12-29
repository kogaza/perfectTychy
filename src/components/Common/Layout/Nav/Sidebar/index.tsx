import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';

import { type IMenu } from '@/types/menu';
// import { Socials } from '@/components/Common/Layout/Nav/Socials';
import * as styles from '@/components/Common/Layout/layout.styles';

interface IProps {
  isOpen: boolean;
  menu: IMenu[];
  onChange: () => void;
}

export const Sidebar: React.FC<IProps> = ({ isOpen, menu, onChange }) => {
  return (
    <div
      className={clsx(
        styles.sidebarStyles,
        isOpen ? styles.sidebarOpenStyles : styles.sidebarNotOpenStyles
      )}
    >
      <div className={styles.sidebarFlexWrapperStyles}>
        <div className={styles.sidebarSpacingStyles}>
          {menu.map((el, i) => (
            <div
              key={`${el.title}_${i}`}
              className={styles.sidebarItemWrapperStyles}
            >
              <div className={styles.sidebarItemLinkWrapperStyles}>
                {el.to && (
                  <Link to={el.to} onClick={onChange}>
                    {el.title}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* <div className={styles.sidebarSocialsWrapper}>
          <Socials />
        </div> */}
      </div>
    </div>
  );
};
