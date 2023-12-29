import React from 'react';

import Favicon from '@/assets/favicons/favicon.ico';

export const SEO: React.FC<{
  children?: React.ReactNode;
  title: string;
  description: string;
  pathname: string;
}> = ({ title, children, description }) => {

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={Favicon} type="image/ico" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Perfect Tychy" />

      {children}
    </>
  );
};
