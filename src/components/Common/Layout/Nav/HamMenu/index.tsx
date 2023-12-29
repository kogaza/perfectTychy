import React from 'react';
import clsx from 'clsx';

// import { ThemeToggle } from '@/components/Common/Layout/Nav/ThemeToggle';
import * as styles from '@/components/Common/Layout/layout.styles';

interface IProps {
  isOpen: boolean;
  onChange: () => void;
}

export const HamMenu: React.FC<IProps> = ({ isOpen, onChange }) => {
  return (
    <>
      {/* <ThemeToggle /> */}
      <button
        className={styles.hamMenuBtnStyles}
        onClick={onChange}
        aria-label="Mobile menu"
      >
        <div
          className={clsx(
            styles.genericHamLineStyles,
            isOpen ? styles.hamFirstOpenStyles : styles.hamFirstNotOpenStyles
          )}
        />
        <div
          className={clsx(
            styles.genericHamLineStyles,
            isOpen ? styles.hamSecondOpenStyles : styles.hamSecondNotOpenStyles
          )}
        />
        <div
          className={clsx(
            styles.genericHamLineStyles,
            isOpen ? styles.hamThirdOpenStyles : styles.hamThirdNotOpenStyles
          )}
        />
      </button>
    </>
  );
};
