declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.jpg' {
  export default '' as string;
}

declare module '*.png' {
  export default '' as string;
}

declare module '*.pdf' {
  export default '' as string;
}

declare module '*.gif' {
  export default '' as string;
}

declare module '*.webm' {
  export default '' as string;
}

declare module '*.mp4' {
  export default '' as string;
}

declare module '*.ico' {
  export default '' as string;
}

declare module 'gatsby-plugin-dark-mode';
