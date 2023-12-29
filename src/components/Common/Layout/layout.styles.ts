import clsx from 'clsx';

export const layoutWrapperStyles = clsx`mx-auto max-w-[2000px]`;

export const footerWrapperStyles = clsx`
  bg-perfect-bgfooter px-7 py-8 text-perfect-whiteText 
  lg:px-24 lg:py-10`;

export const footerInnerFlexWrapperStyles = clsx`
  flex flex-col items-center`;

export const footerInnerGridStyles = clsx`
  flex w-full flex-col items-start justify-between gap-10 
  md:flex-row`;

export const footerLeftSideWrapperStyles = clsx`
  max-w-[250px] 
  lg:w-2/5`;

export const footerLogoWrapperStyles = clsx`
  flex items-center 
  lg:justify-start`;

export const footerLogoSpacingStyles = clsx`
  sm:w-[240px] 
  md:w-[320px]`;

export const footerSubscribeNewsletterStyles = clsx`
  pt-8 text-[11px] font-normal 
  md:text-sm md:font-medium`;

export const footerJoinUsWrapperStyles = clsx`
  pt-2 text-[11px] opacity-60
  md:text-xs`;

export const footerSubscribeHubspotStyles = clsx`
  subscribe flex w-full items-center justify-center pt-7 
  lg:justify-start`;

export const footerMiddleSideWrapperStyles = clsx`
  mt-0 text-[11px] 
  md:text-sm`;

export const footerMiddleSpacingStyles = clsx`
  flex items-start justify-center gap-6 
  lg:mt-2 lg:w-[367px]`;

export const footerNavFirstRowStyles = clsx`
  mr-10 flex flex-col`;

export const footerNavColStyles = clsx`
  flex flex-col`;

export const footerNavLinksStyles = clsx`
  mt-2 
  md:mt-5`;

export const footerSupportStyles = clsx`mr-10`;

export const footerBottomRowStyles = clsx`
  mt-8 flex justify-between text-[9px] 
  md:text-xs`;

export const footerCopyStyles = clsx`
  max-w-[250px] opacity-60 
  lg:w-2/5`;

export const footerBottomLinksStyles = clsx`opacity-60`;

export const footerRightSideWrapperStyles = clsx`
  mt-0 flex flex-wrap justify-center gap-x-4 gap-y-2`;

export const backToTopWrapperStyles = clsx`
  group fixed bottom-[2%] right-[4%] flex h-[40px] w-[40px] cursor-pointer 
  items-center justify-center rounded-full bg-white p-[15px] 
  shadow-[rgba(0,0,0,0.15)_4px_4px_30px] md:h-[60px] md:w-[60px] z-50`;

export const backToTopArrowStyles = clsx`
  group-hover:[&>path]:fill-perfect-scrollUpFill`;

export const navContainerStyles = clsx`
  sticky top-0 z-50 w-full bg-perfect-bgnav`;

export const navSpacingWrapperStyles = clsx`
  xl: flex flex-wrap justify-between 
  px-4 md:px-16 py-3 xl:px-24`;

export const navDesktopFlexWrapperStyles = clsx`flex items-center justify-between w-full`;

export const headerWrapperStyles = clsx`
w-full lg:w-[1024px] xl:w-[1250px] 2xl:w-[1500px] mx-[auto] h-20 flex justify-between items-center`;
export const headerLeftSideWrapperStyles = clsx`flex gap-6 items-center w-full`;

export const navLogoWrapperStyles = clsx`flex items-center`;
export const navLogoStyles = clsx`max-w-[120px]`;
export const navPhoneStyles = clsx`w-[110px]`;

export const navDesktopListStyles = clsx`
  ml-14 hidden items-center gap-x-[10px] 
  md:flex 
  lg:gap-x-4`;

export const navDesktopListItemDisplayStyles = clsx`group inline-block`;

export const navDesktopButtonStyles = clsx`
  bg-perfect-bgnav flex items-center rounded-sm pl-3 
  text-perfect-contrastText outline-none focus:outline-none`;

export const relativeButtonStyles = clsx`relative`;


export const flagMobileSizingStyles = clsx`ml-2 h-5 w-5`;


export const indicatorRotateStyles = clsx`rotate-180`;

export const hiddenStyles = clsx`hidden`;

export const scaleStyles = clsx`scale-100`;

export const currencySelectWrapperStyles = clsx`
  absolute z-50 flex w-[300px] origin-top scale-0 transform justify-center 
  rounded-xl bg-perfect-bgaside py-5 shadow-xl transition duration-150 
  ease-in-out`;

export const currencySelectMobileWrapperStyles = clsx`
  absolute right-[10%] top-[50%] z-[200] flex w-[280px] origin-top scale-0 
  transform justify-center rounded-xl bg-perfect-bgaside py-3 shadow-xl 
  transition duration-150 ease-in-out
`;


export const navDesktopSpanTitleStyles = clsx`flex-1 font-medium`;

export const navDesktopSubMenuSvgStyles = clsx`
  ml-2 h-4 w-5 transform fill-current transition duration-150 ease-in-out 
  group-hover:-rotate-180`;

export const navDesktopSubMenuStyles = clsx`
  min-w-32 absolute z-50 origin-top scale-0 transform rounded-b-xl 
  bg-perfect-bgaside shadow-xl transition 
  duration-150 ease-in-out group-hover:scale-100`;

export const subMenuLinkStyles = clsx`
  block cursor-pointer rounded-b-xl px-8 py-3 hover:bg-perfect-hoverDark`;

export const subMenuContentWrapperStyles = clsx`
  flex max-w-xs items-center`;

export const subMenuIconSpacingStyles = clsx`mr-3`;

export const subMenuTitleSpacingStyles = clsx`mt-1`;

export const subMenuTitleStyles = clsx`
  text-base font-bold text-perfect-contrastText`;

export const subMenuDescriptionStyles = clsx`
  mt-1 text-xs font-normal text-perfect-grayNavText`;

export const hamMenuWrapperStyles = clsx`
  flex items-center ml-3
  md:hidden`;

export const navBtnsWrapperStyles = clsx`
  hidden md:flex 
  md:items-center md:justify-center xl:mr-[40px]`;

export const genericHamLineStyles = clsx`
  ease my-0.5 h-0.5 transform bg-perfect-contrastColor 
  transition duration-300`;

export const hamMenuBtnStyles = clsx`group z-50 flex flex-col`;

export const hamFirstOpenStyles = clsx`
  h-0.5 w-5 translate-y-1 rotate-45 group-hover:opacity-100`;

export const hamFirstNotOpenStyles = clsx`
  ml-1.5 w-3 group-hover:opacity-100`;

export const hamSecondOpenStyles = clsx`opacity-0`;

export const hamSecondNotOpenStyles = clsx`w-5 group-hover:opacity-100`;

export const hamThirdOpenStyles = clsx`
  h-0.5 w-5 -translate-y-2 -rotate-45 group-hover:opacity-100`;

export const hamThirdNotOpenStyles = clsx`ml-0.5 w-3 self-start group-hover:opacity-100`;

export const sidebarStyles = clsx`
  fixed right-0 top-0 z-40 h-full w-[90vw] bg-perfect-bgaside p-10 
  text-white duration-300 ease-in-out`;

export const sidebarOpenStyles = clsx`
  translate-x-0 shadow-[rgba(0,0,0,0.23)_-4px_0px_54px]`;

export const sidebarNotOpenStyles = clsx`
  translate-x-full`;

export const sidebarFlexWrapperStyles = clsx`
  flex h-full flex-col justify-between`;

export const sidebarSpacingStyles = clsx`mt-4`;
export const sidebarCloseBtnWrapperStyles = clsx`flex w-full justify-end`;
export const sidebarCloseBtnStyles = clsx`px-4 py-2 text-xl text-perfect-contrastText`;

export const sidebarSocialsWrapper = clsx`flex justify-between`;

export const sidebarSubmenuWrapperStyles = clsx`
  min-w-32 z-[899999] max-h-0 origin-top scale-0 transform 
  opacity-0 transition-all duration-150 ease-in-out group-hover:max-h-52 
  group-hover:scale-100 group-hover:opacity-100`;

export const sidebarSubmenuLinkStyles = clsx`
  block cursor-pointer rounded-sm py-2 pl-4 font-semibold opacity-60`;

export const sidebarSvgStyles = clsx`
  ml-2 mt-1 h-4 w-5 transform fill-current transition duration-150 ease-in-out 
  group-hover:-rotate-180`;

export const sidebarItemWrapperStyles = clsx`
  group mt-4 cursor-pointer text-perfect-contrastText`;

export const sidebarItemLinkWrapperStyles = clsx`flex font-semibold`;

export const toggleThemeFlexIconStyles = clsx`flex items-center justify-center`;

export const toggleThemeMarginStyles = clsx`mr-4`;

export const selectFullWidthStyles = clsx`w-full`;

export const selectPlaceholderStyles = clsx`flex items-center gap-3`;

export const selectOptionWrapperStyles = clsx`flex gap-3`;

export const selectOptionNameStyles = clsx`
  truncate text-ellipsis font-semibold`;
