import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import useDarkMode from 'use-dark-mode';
import Switch from 'react-switch';

import SunIcon from '@/assets/svg/sun.svg';
import MoonIcon from '@/assets/svg/moon.svg';
import * as styles from '@/components/Common/Layout/layout.styles';

type TAvailableThemes = 'dark' | 'light';

interface ITogglerProps {
  theme: TAvailableThemes;
  toggleTheme: (checked: TAvailableThemes) => void;
}

export const ThemeToggle: React.FC = () => {
  const darkMode = useDarkMode(undefined);

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: ITogglerProps) => {
        const handleToggleTheme = (checked: boolean) => {
          toggleTheme(checked ? 'dark' : 'light');
          darkMode.toggle();
        };

        return (
          <Switch
            checked={theme === 'dark'}
            onChange={handleToggleTheme}
            height={28}
            width={56}
            onColor="#E4E4E6"
            offColor="#E4E4E6"
            offHandleColor="#FFFFFF"
            onHandleColor="#19A147"
            checkedIcon={false}
            uncheckedIcon={false}
            handleDiameter={20}
            uncheckedHandleIcon={
              <div className={styles.toggleThemeFlexIconStyles}>
                <SunIcon />
              </div>
            }
            checkedHandleIcon={
              <div className={styles.toggleThemeFlexIconStyles}>
                <MoonIcon />
              </div>
            }
            className={styles.toggleThemeMarginStyles}
          />
        );
      }}
    </ThemeToggler>
  );
};
