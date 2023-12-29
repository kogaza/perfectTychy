import React, { type ReactNode } from 'react';
import clsx from 'clsx';

import * as styles from '@/components/Common/ButtonIcon/buttonIcon.styles';

type TButtonIcon<C extends React.ElementType = 'button'> = {
  children: ReactNode;
  as?: C;
  onClick?: () => void;
  additionalClass?: string;
} & React.ComponentPropsWithoutRef<C>;

export const ButtonIcon: React.FC<TButtonIcon> = ({
  children,
  as,
  onClick,
  additionalClass,
  ...rest
}) => {
  const Component = as || 'button';

  return (
    <Component
      className={clsx(styles.buttonMainStyles, additionalClass)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Component>
  );
};
