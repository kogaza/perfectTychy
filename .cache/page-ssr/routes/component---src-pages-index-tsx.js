exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 6527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ SEO)
});

// EXTERNAL MODULE: external "/Users/krzysztofogaza/Documents/perfectTychy/node_modules/react/index.js"
var index_js_ = __webpack_require__(8534);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/assets/favicons/favicon.ico
/* harmony default export */ const favicon = ("/perfectTychy/static/favicon-7b59589f9a05b2200a34a5acb97b43de.ico");
;// CONCATENATED MODULE: ./src/components/Common/Seo/index.tsx
const SEO=({title,children,description})=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("title",null,title),/*#__PURE__*/index_js_default().createElement("meta",{name:"description",content:description}),/*#__PURE__*/index_js_default().createElement("link",{rel:"icon",href:favicon,type:"image/ico"}),/*#__PURE__*/index_js_default().createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/index_js_default().createElement("meta",{property:"og:description",content:description}),/*#__PURE__*/index_js_default().createElement("meta",{property:"og:site_name",content:"Perfect Tychy"}),children);};

/***/ }),

/***/ 4740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/krzysztofogaza/Documents/perfectTychy/node_modules/react/index.js"
var index_js_ = __webpack_require__(8534);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(3040);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./src/assets/svg/arrow-down.svg
var arrow_down = __webpack_require__(960);
var arrow_down_default = /*#__PURE__*/__webpack_require__.n(arrow_down);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
;// CONCATENATED MODULE: ./src/components/Common/Layout/layout.styles.ts
const layoutWrapperStyles=(0,clsx_m/* default */.Z)`mx-auto max-w-[2000px]`;const footerWrapperStyles=(0,clsx_m/* default */.Z)`
  bg-perfect-bgfooter px-7 py-8 text-perfect-whiteText 
  lg:px-24 lg:py-10`;const footerInnerFlexWrapperStyles=(0,clsx_m/* default */.Z)`
  flex flex-col items-center`;const footerInnerGridStyles=(0,clsx_m/* default */.Z)`
  flex w-full flex-col items-start justify-between gap-10 
  md:flex-row`;const footerLeftSideWrapperStyles=(0,clsx_m/* default */.Z)`
  max-w-[250px] 
  lg:w-2/5`;const footerLogoWrapperStyles=(0,clsx_m/* default */.Z)`
  flex items-center 
  lg:justify-start`;const footerLogoSpacingStyles=(0,clsx_m/* default */.Z)`
  sm:w-[240px] 
  md:w-[320px]`;const footerSubscribeNewsletterStyles=(0,clsx_m/* default */.Z)`
  pt-8 text-[11px] font-normal 
  md:text-sm md:font-medium`;const footerJoinUsWrapperStyles=(0,clsx_m/* default */.Z)`
  pt-2 text-[11px] opacity-60
  md:text-xs`;const footerSubscribeHubspotStyles=(0,clsx_m/* default */.Z)`
  subscribe flex w-full items-center justify-center pt-7 
  lg:justify-start`;const footerMiddleSideWrapperStyles=(0,clsx_m/* default */.Z)`
  mt-0 text-[11px] 
  md:text-sm`;const footerMiddleSpacingStyles=(0,clsx_m/* default */.Z)`
  flex items-start justify-center gap-6 
  lg:mt-2 lg:w-[367px]`;const footerNavFirstRowStyles=(0,clsx_m/* default */.Z)`
  mr-10 flex flex-col`;const footerNavColStyles=(0,clsx_m/* default */.Z)`
  flex flex-col`;const footerNavLinksStyles=(0,clsx_m/* default */.Z)`
  mt-2 
  md:mt-5`;const footerSupportStyles=(0,clsx_m/* default */.Z)`mr-10`;const footerBottomRowStyles=(0,clsx_m/* default */.Z)`
  mt-8 flex justify-between text-[9px] 
  md:text-xs`;const footerCopyStyles=(0,clsx_m/* default */.Z)`
  max-w-[250px] opacity-60 
  lg:w-2/5`;const footerBottomLinksStyles=(0,clsx_m/* default */.Z)`opacity-60`;const footerRightSideWrapperStyles=(0,clsx_m/* default */.Z)`
  mt-0 flex flex-wrap justify-center gap-x-4 gap-y-2`;const backToTopWrapperStyles=(0,clsx_m/* default */.Z)`
  group fixed bottom-[2%] right-[4%] flex h-[40px] w-[40px] cursor-pointer 
  items-center justify-center rounded-full bg-white p-[15px] 
  shadow-[rgba(0,0,0,0.15)_4px_4px_30px] md:h-[60px] md:w-[60px] z-50`;const backToTopArrowStyles=(0,clsx_m/* default */.Z)`
  group-hover:[&>path]:fill-perfect-scrollUpFill`;const navContainerStyles=(0,clsx_m/* default */.Z)`
  sticky top-0 z-50 w-full bg-perfect-bgnav`;const navSpacingWrapperStyles=(0,clsx_m/* default */.Z)`
  xl: flex flex-wrap justify-between 
  px-4 md:px-16 py-3 xl:px-24`;const navDesktopFlexWrapperStyles=(0,clsx_m/* default */.Z)`flex items-center justify-between w-full`;const headerWrapperStyles=(0,clsx_m/* default */.Z)`
w-full lg:w-[1024px] xl:w-[1250px] 2xl:w-[1500px] mx-[auto] h-20 flex justify-between items-center`;const headerLeftSideWrapperStyles=(0,clsx_m/* default */.Z)`flex gap-6 items-center w-full`;const navLogoWrapperStyles=(0,clsx_m/* default */.Z)`flex items-center`;const navLogoStyles=(0,clsx_m/* default */.Z)`max-w-[120px]`;const navPhoneStyles=(0,clsx_m/* default */.Z)`w-[110px]`;const navDesktopListStyles=(0,clsx_m/* default */.Z)`
  ml-14 hidden items-center gap-x-[10px] 
  md:flex 
  lg:gap-x-4`;const navDesktopListItemDisplayStyles=(0,clsx_m/* default */.Z)`group inline-block`;const navDesktopButtonStyles=(0,clsx_m/* default */.Z)`
  bg-perfect-bgnav flex items-center rounded-sm pl-3 
  text-perfect-contrastText outline-none focus:outline-none`;const relativeButtonStyles=(0,clsx_m/* default */.Z)`relative`;const flagMobileSizingStyles=(0,clsx_m/* default */.Z)`ml-2 h-5 w-5`;const indicatorRotateStyles=(0,clsx_m/* default */.Z)`rotate-180`;const hiddenStyles=(0,clsx_m/* default */.Z)`hidden`;const scaleStyles=(0,clsx_m/* default */.Z)`scale-100`;const currencySelectWrapperStyles=(0,clsx_m/* default */.Z)`
  absolute z-50 flex w-[300px] origin-top scale-0 transform justify-center 
  rounded-xl bg-perfect-bgaside py-5 shadow-xl transition duration-150 
  ease-in-out`;const currencySelectMobileWrapperStyles=(0,clsx_m/* default */.Z)`
  absolute right-[10%] top-[50%] z-[200] flex w-[280px] origin-top scale-0 
  transform justify-center rounded-xl bg-perfect-bgaside py-3 shadow-xl 
  transition duration-150 ease-in-out
`;const navDesktopSpanTitleStyles=(0,clsx_m/* default */.Z)`flex-1 font-medium`;const navDesktopSubMenuSvgStyles=(0,clsx_m/* default */.Z)`
  ml-2 h-4 w-5 transform fill-current transition duration-150 ease-in-out 
  group-hover:-rotate-180`;const navDesktopSubMenuStyles=(0,clsx_m/* default */.Z)`
  min-w-32 absolute z-50 origin-top scale-0 transform rounded-b-xl 
  bg-perfect-bgaside shadow-xl transition 
  duration-150 ease-in-out group-hover:scale-100`;const subMenuLinkStyles=(0,clsx_m/* default */.Z)`
  block cursor-pointer rounded-b-xl px-8 py-3 hover:bg-perfect-hoverDark`;const subMenuContentWrapperStyles=(0,clsx_m/* default */.Z)`
  flex max-w-xs items-center`;const subMenuIconSpacingStyles=(0,clsx_m/* default */.Z)`mr-3`;const subMenuTitleSpacingStyles=(0,clsx_m/* default */.Z)`mt-1`;const subMenuTitleStyles=(0,clsx_m/* default */.Z)`
  text-base font-bold text-perfect-contrastText`;const subMenuDescriptionStyles=(0,clsx_m/* default */.Z)`
  mt-1 text-xs font-normal text-perfect-grayNavText`;const hamMenuWrapperStyles=(0,clsx_m/* default */.Z)`
  flex items-center ml-3
  md:hidden`;const navBtnsWrapperStyles=(0,clsx_m/* default */.Z)`
  hidden md:flex 
  md:items-center md:justify-center xl:mr-[40px]`;const genericHamLineStyles=(0,clsx_m/* default */.Z)`
  ease my-0.5 h-0.5 transform bg-perfect-contrastColor 
  transition duration-300`;const hamMenuBtnStyles=(0,clsx_m/* default */.Z)`group z-50 flex flex-col`;const hamFirstOpenStyles=(0,clsx_m/* default */.Z)`
  h-0.5 w-5 translate-y-1 rotate-45 group-hover:opacity-100`;const hamFirstNotOpenStyles=(0,clsx_m/* default */.Z)`
  ml-1.5 w-3 group-hover:opacity-100`;const hamSecondOpenStyles=(0,clsx_m/* default */.Z)`opacity-0`;const hamSecondNotOpenStyles=(0,clsx_m/* default */.Z)`w-5 group-hover:opacity-100`;const hamThirdOpenStyles=(0,clsx_m/* default */.Z)`
  h-0.5 w-5 -translate-y-2 -rotate-45 group-hover:opacity-100`;const hamThirdNotOpenStyles=(0,clsx_m/* default */.Z)`ml-0.5 w-3 self-start group-hover:opacity-100`;const sidebarStyles=(0,clsx_m/* default */.Z)`
  fixed right-0 top-0 z-40 h-full w-[90vw] bg-perfect-bgaside p-10 
  text-white duration-300 ease-in-out`;const sidebarOpenStyles=(0,clsx_m/* default */.Z)`
  translate-x-0 shadow-[rgba(0,0,0,0.23)_-4px_0px_54px]`;const sidebarNotOpenStyles=(0,clsx_m/* default */.Z)`
  translate-x-full`;const sidebarFlexWrapperStyles=(0,clsx_m/* default */.Z)`
  flex h-full flex-col justify-between`;const sidebarSpacingStyles=(0,clsx_m/* default */.Z)`mt-4`;const sidebarCloseBtnWrapperStyles=(0,clsx_m/* default */.Z)`flex w-full justify-end`;const sidebarCloseBtnStyles=(0,clsx_m/* default */.Z)`px-4 py-2 text-xl text-perfect-contrastText`;const sidebarSocialsWrapper=(0,clsx_m/* default */.Z)`flex justify-between`;const sidebarSubmenuWrapperStyles=(0,clsx_m/* default */.Z)`
  min-w-32 z-[899999] max-h-0 origin-top scale-0 transform 
  opacity-0 transition-all duration-150 ease-in-out group-hover:max-h-52 
  group-hover:scale-100 group-hover:opacity-100`;const sidebarSubmenuLinkStyles=(0,clsx_m/* default */.Z)`
  block cursor-pointer rounded-sm py-2 pl-4 font-semibold opacity-60`;const sidebarSvgStyles=(0,clsx_m/* default */.Z)`
  ml-2 mt-1 h-4 w-5 transform fill-current transition duration-150 ease-in-out 
  group-hover:-rotate-180`;const sidebarItemWrapperStyles=(0,clsx_m/* default */.Z)`
  group mt-4 cursor-pointer text-perfect-contrastText`;const sidebarItemLinkWrapperStyles=(0,clsx_m/* default */.Z)`flex font-semibold`;const toggleThemeFlexIconStyles=(0,clsx_m/* default */.Z)`flex items-center justify-center`;const toggleThemeMarginStyles=(0,clsx_m/* default */.Z)`mr-4`;const selectFullWidthStyles=(0,clsx_m/* default */.Z)`w-full`;const selectPlaceholderStyles=(0,clsx_m/* default */.Z)`flex items-center gap-3`;const selectOptionWrapperStyles=(0,clsx_m/* default */.Z)`flex gap-3`;const selectOptionNameStyles=(0,clsx_m/* default */.Z)`
  truncate text-ellipsis font-semibold`;
;// CONCATENATED MODULE: ./src/components/Common/Layout/BackToTop/index.tsx
const BackToTop=()=>{const{0:isVisible,1:setIsVisible}=(0,index_js_.useState)(false);const toggleVisible=()=>{setIsVisible(window.pageYOffset>100);};const scrollToTop=()=>{window.scrollTo({top:0,behavior:'smooth'});};(0,index_js_.useEffect)(()=>{window.addEventListener('scroll',toggleVisible);return()=>{window.removeEventListener('scroll',toggleVisible);};},[]);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,isVisible&&/*#__PURE__*/index_js_default().createElement("div",{onClick:scrollToTop,className:backToTopWrapperStyles},/*#__PURE__*/index_js_default().createElement((arrow_down_default()),{className:backToTopArrowStyles})));};
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-breakpoints/index.js
var gatsby_plugin_breakpoints = __webpack_require__(6467);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-anchor-links/index.js
var gatsby_plugin_anchor_links = __webpack_require__(3089);
;// CONCATENATED MODULE: ./src/components/Common/Layout/Nav/HamMenu/index.tsx
const HamMenu=({isOpen,onChange})=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("button",{className:hamMenuBtnStyles,onClick:onChange,"aria-label":"Mobile menu"},/*#__PURE__*/index_js_default().createElement("div",{className:(0,clsx_m/* default */.Z)(genericHamLineStyles,isOpen?hamFirstOpenStyles:hamFirstNotOpenStyles)}),/*#__PURE__*/index_js_default().createElement("div",{className:(0,clsx_m/* default */.Z)(genericHamLineStyles,isOpen?hamSecondOpenStyles:hamSecondNotOpenStyles)}),/*#__PURE__*/index_js_default().createElement("div",{className:(0,clsx_m/* default */.Z)(genericHamLineStyles,isOpen?hamThirdOpenStyles:hamThirdNotOpenStyles)})));};
;// CONCATENATED MODULE: ./src/components/Common/Layout/Nav/Sidebar/index.tsx
// import { Socials } from '@/components/Common/Layout/Nav/Socials';
const Sidebar=({isOpen,menu,onChange})=>{return/*#__PURE__*/index_js_default().createElement("div",{className:(0,clsx_m/* default */.Z)(sidebarStyles,isOpen?sidebarOpenStyles:sidebarNotOpenStyles)},/*#__PURE__*/index_js_default().createElement("div",{className:sidebarFlexWrapperStyles},/*#__PURE__*/index_js_default().createElement("div",{className:sidebarSpacingStyles},menu.map((el,i)=>/*#__PURE__*/index_js_default().createElement("div",{key:`${el.title}_${i}`,className:sidebarItemWrapperStyles},/*#__PURE__*/index_js_default().createElement("div",{className:sidebarItemLinkWrapperStyles},el.to&&/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:el.to,onClick:onChange},el.title)))))));};
;// CONCATENATED MODULE: ./src/assets/images/logo.png
/* harmony default export */ const logo = ("/perfectTychy/static/logo-b2494b5da4dc6b0fbdecd51c458ecc88.png");
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Facebook.js
var Facebook = __webpack_require__(802);
;// CONCATENATED MODULE: ./src/components/Common/Layout/Nav/index.tsx
const Nav=({menu=[],to='/'})=>{const{0:isHamMenuOpen,1:setIsHamMenuOpen}=(0,index_js_.useState)(false);const breakpoint=(0,gatsby_plugin_breakpoints/* useBreakpoint */.Gc)();const handleHamMenu=()=>{setIsHamMenuOpen(prev=>!prev);};return/*#__PURE__*/index_js_default().createElement("div",{className:navContainerStyles},/*#__PURE__*/index_js_default().createElement("nav",{className:navSpacingWrapperStyles},/*#__PURE__*/index_js_default().createElement("div",{className:navDesktopFlexWrapperStyles},/*#__PURE__*/index_js_default().createElement("div",{className:headerLeftSideWrapperStyles},/*#__PURE__*/index_js_default().createElement(gatsby_plugin_anchor_links/* AnchorLink */.P,{to:to,title:"Perfect Tychy"},/*#__PURE__*/index_js_default().createElement("div",{className:navLogoWrapperStyles},/*#__PURE__*/index_js_default().createElement("img",{className:navLogoStyles,src:logo,alt:"Logo"}))),/*#__PURE__*/index_js_default().createElement("div",{className:navPhoneStyles},"508-299-701"),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("a",{href:"https://www.facebook.com/perfecttychy/",target:"_blank"},/*#__PURE__*/index_js_default().createElement(Facebook/* default */.Z,null)))),/*#__PURE__*/index_js_default().createElement("ul",{className:navDesktopListStyles},menu.map((el,i)=>/*#__PURE__*/index_js_default().createElement("div",{key:`${el.title}_${i}`,className:navDesktopListItemDisplayStyles},/*#__PURE__*/index_js_default().createElement("button",{className:navDesktopButtonStyles},(el===null||el===void 0?void 0:el.to)&&/*#__PURE__*/index_js_default().createElement(gatsby_plugin_anchor_links/* AnchorLink */.P,{to:el.to,className:navDesktopSpanTitleStyles,title:el.title}))))),breakpoint.sm?/*#__PURE__*/index_js_default().createElement("div",{className:hamMenuWrapperStyles},/*#__PURE__*/index_js_default().createElement(HamMenu,{isOpen:isHamMenuOpen,onChange:handleHamMenu})):/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null)// <div className={styles.navBtnsWrapperStyles}>
//   <ThemeToggle />
// </div>
),/*#__PURE__*/index_js_default().createElement(Sidebar,{isOpen:isHamMenuOpen,menu:menu,onChange:handleHamMenu})));};
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Email.js
var Email = __webpack_require__(891);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/PhoneIphone.js
var PhoneIphone = __webpack_require__(5731);
;// CONCATENATED MODULE: ./src/components/Common/Layout/Footer/index.styles.ts
const footerStyles=(0,clsx_m/* default */.Z)`w-full
flex flex-col md:flex-row justify-around my-6 gap-2`;const footerEmailWrapperStyles=(0,clsx_m/* default */.Z)`
flex flex-col items-center gap-2`;const footerPhoneWrapperStyles=(0,clsx_m/* default */.Z)`
flex flex-col items-center gap-2`;const offerItemIconStyles=(0,clsx_m/* default */.Z)`hidden md:block text-[#f16c20] text-[30px]`;
;// CONCATENATED MODULE: ./src/components/Common/Layout/Footer/index.tsx
const Footer=()=>{return/*#__PURE__*/index_js_default().createElement("footer",{id:"contact",className:footerStyles},/*#__PURE__*/index_js_default().createElement("div",{className:footerEmailWrapperStyles},/*#__PURE__*/index_js_default().createElement(Email/* default */.Z,{className:offerItemIconStyles}),/*#__PURE__*/index_js_default().createElement("a",{href:"mailto:perfecttychy@gmail.com"},"perfecttychy@gmail.com")),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("a",{href:"https://www.facebook.com/perfecttychy/",target:"_blank"},/*#__PURE__*/index_js_default().createElement(Facebook/* default */.Z,{className:offerItemIconStyles}))),/*#__PURE__*/index_js_default().createElement("div",{className:footerPhoneWrapperStyles},/*#__PURE__*/index_js_default().createElement(PhoneIphone/* default */.Z,{className:offerItemIconStyles}),/*#__PURE__*/index_js_default().createElement("div",null,"508-299-701")));};
;// CONCATENATED MODULE: ./src/components/Common/Layout/Nav/mainMenu.tsx
const mainMenu=[{title:'Oferta',to:'/#offer'},{title:'Cennik',to:'/#pricing'},{title:'Referencje',to:'/#references'},{title:'Promocje',to:'/#promotions'},{title:'Kontakt',to:'/#contact'}];
;// CONCATENATED MODULE: ./src/components/Common/Layout/index.tsx
const Layout=({children})=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{className:layoutWrapperStyles},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Script,{key:"hs-form",src:"//js.hsforms.net/forms/embed/v2.js"}),/*#__PURE__*/index_js_default().createElement(Nav,{title:"Parallel",menu:mainMenu,to:'/'}),children,/*#__PURE__*/index_js_default().createElement(Footer,null)),/*#__PURE__*/index_js_default().createElement(BackToTop,null));};
// EXTERNAL MODULE: ./src/components/Common/Seo/index.tsx + 1 modules
var Seo = __webpack_require__(6527);
// EXTERNAL MODULE: ./node_modules/react-slick/lib/index.js
var lib = __webpack_require__(6066);
;// CONCATENATED MODULE: ./src/components/Common/ButtonIcon/buttonIcon.styles.ts
const buttonMainStyles=(0,clsx_m/* default */.Z)`
  flex h-[52px] w-[52px] items-center justify-center rounded-full 
  bg-contrastGreen`;
;// CONCATENATED MODULE: ./src/components/Common/ButtonIcon/index.tsx
const ButtonIcon=({children,as,onClick,additionalClass,...rest})=>{const Component=as||'button';return/*#__PURE__*/index_js_default().createElement(Component,Object.assign({className:(0,clsx_m/* default */.Z)(buttonMainStyles,additionalClass),onClick:onClick},rest),children);};
;// CONCATENATED MODULE: ./src/components/HomePage/ReferencesSlider/index.styles.ts
const customersWrapperStyles=(0,clsx_m/* default */.Z)`
  relative
  max-w-[1000px]
  mx-auto
  px-0 
  2xl:px-[100px]`;const customersSliderStyles=(0,clsx_m/* default */.Z)`
  z-5
  px-0 
  2xl:px-[100px]`;const customersTitleStyles=(0,clsx_m/* default */.Z)`
  pt-[30px] text-center text-[26px] font-bold text-perfect-contrastText 
  md:pt-[44px] md:text-[40px]`;const referencesTitleStyles=(0,clsx_m/* default */.Z)`text-[30px] text-center text-[#409ed2] font-bold`;const customersDescriptionStyles=(0,clsx_m/* default */.Z)`
  mt-[10px] text-center text-base font-normal text-perfect-contrastText 
  md:mt-4`;const sliderPrevBtnStyles=(0,clsx_m/* default */.Z)`
  hidden md:flex z-10 absolute top-[400px] left-0 l:left-[-50px] h-[40px] w-[40px] opacity-20 hover:opacity-40 bg-perfect-contrastGreen hover:bg-perfect-contrastGreenHover`;const sliderPrevBtnSvgStyles=(0,clsx_m/* default */.Z)`
  h-6 w-6 rotate-90 transform fill-white`;const sliderNextBtnStyles=(0,clsx_m/* default */.Z)`
  hidden md:flex z-10 absolute top-[400px] right-0 l:right-[-50px] h-[40px] w-[40px] opacity-20 bg-perfect-contrastGreen hover:opacity-40 hover:bg-perfect-contrastGreenHover`;const sliderNextBtnSvgStyles=(0,clsx_m/* default */.Z)`
  h-6 w-6 rotate-[-90deg] transform fill-white`;const sliderStyles=(0,clsx_m/* default */.Z)`
  mt-[54px] 
  md:mt-6`;const sliderImageOuterWrapperStyles=(0,clsx_m/* default */.Z)`flex justify-center`;
;// CONCATENATED MODULE: ./src/assets/images/references/magna.png
/* harmony default export */ const magna = ("/perfectTychy/static/magna-7d37d084e1271977f7170e10b58df2d2.png");
;// CONCATENATED MODULE: ./src/assets/images/references/ben_develop.png
/* harmony default export */ const ben_develop = ("/perfectTychy/static/ben_develop-bcb4855e50c7bca206a0127d98c504c2.png");
;// CONCATENATED MODULE: ./src/assets/images/references/01.png
/* harmony default export */ const _01 = ("/perfectTychy/static/01-d051fad4272bc2deb558b8c8707276eb.png");
;// CONCATENATED MODULE: ./src/assets/images/references/12.png
/* harmony default export */ const _12 = ("/perfectTychy/static/12-e404aeb7f2ae7b71018f27da542f1105.png");
;// CONCATENATED MODULE: ./src/assets/images/references/cs_cargo.png
/* harmony default export */ const cs_cargo = ("/perfectTychy/static/cs_cargo-a3ce0c08f95d28b3d1975160eec26b0a.png");
;// CONCATENATED MODULE: ./src/assets/images/references/ref_dmb.png
/* harmony default export */ const ref_dmb = ("/perfectTychy/static/ref_dmb-3f9522a94472d63dc19e72b2ac9a3f80.png");
;// CONCATENATED MODULE: ./src/assets/images/references/general_motors.png
/* harmony default export */ const general_motors = ("/perfectTychy/static/general_motors-ba0762efe3010597e30ec11131230adc.png");
;// CONCATENATED MODULE: ./src/assets/images/references/hilal_trans.png
/* harmony default export */ const hilal_trans = ("/perfectTychy/static/hilal_trans-efd5517a8020ca27b8d603e82464141d.png");
;// CONCATENATED MODULE: ./src/assets/images/references/invenio.png
/* harmony default export */ const invenio = ("/perfectTychy/static/invenio-259f0e017a2c4607aaec683a6f02e031.png");
;// CONCATENATED MODULE: ./src/assets/images/references/joy_global.png
/* harmony default export */ const joy_global = ("/perfectTychy/static/joy_global-f2b0defaf8e93331bbecf8564edd584c.png");
;// CONCATENATED MODULE: ./src/assets/images/references/macro_molds.png
/* harmony default export */ const macro_molds = ("/perfectTychy/static/macro_molds-c1edfada7e1e514a0a8247569955abf8.png");
;// CONCATENATED MODULE: ./src/assets/images/references/manus.png
/* harmony default export */ const manus = ("/perfectTychy/static/manus-6e050c16791223061de0ecea2d3cb2b9.png");
;// CONCATENATED MODULE: ./src/assets/images/references/michalska.png
/* harmony default export */ const michalska = ("/perfectTychy/static/michalska-cc5a64d9678cdde74e6d110b22845087.png");
;// CONCATENATED MODULE: ./src/assets/images/references/new_art.png
/* harmony default export */ const new_art = ("/perfectTychy/static/new_art-d50ef1638123b7434bd122d2aa00360d.png");
;// CONCATENATED MODULE: ./src/assets/images/references/roek.png
/* harmony default export */ const roek = ("/perfectTychy/static/roek-7ac8e39781569602fba21cc878aaa793.png");
;// CONCATENATED MODULE: ./src/assets/images/references/smerfowa_kraina.png
/* harmony default export */ const smerfowa_kraina = ("/perfectTychy/static/smerfowa_kraina-5d7befe1278949c50f9def8b91acb88c.png");
;// CONCATENATED MODULE: ./src/assets/images/references/smyki.png
/* harmony default export */ const smyki = ("/perfectTychy/static/smyki-d93c25b14ea5824939b9e5a40de95806.png");
;// CONCATENATED MODULE: ./src/assets/images/references/takeda.png
/* harmony default export */ const takeda = ("/perfectTychy/static/takeda-3db694bc6ebfc14eca1901b6b47a7c50.png");
;// CONCATENATED MODULE: ./src/components/HomePage/ReferencesSlider/referencesList.tsx
const referencesList=[{image:/*#__PURE__*/index_js_default().createElement("img",{src:magna,alt:"MangaReference"}),id:'mangaReference'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:_01,alt:"Reference01"}),id:'reference01'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:hilal_trans,alt:"HilalTrans"}),id:'hilalTrans'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:smyki,alt:"Smyki"}),id:'smyki'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:takeda,alt:"Takeda"}),id:'takeda'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:smerfowa_kraina,alt:"SmerfowaKraina"}),id:'smerfowaKraina'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:michalska,alt:"Michalska"}),id:'michalska'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:general_motors,alt:"GeneralMotors"}),id:'generalMotors'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:macro_molds,alt:"MacroMolds"}),id:'macroMolds'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:joy_global,alt:"JoyGlobal"}),id:'joyGlobal'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:manus,alt:"Manus"}),id:'manus'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:_12,alt:"Reference12"}),id:'reference12'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:cs_cargo,alt:"CsCargoReference"}),id:'csCargoReference'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:ref_dmb,alt:"DmbReference"}),id:'dmbReference'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:new_art,alt:"NewArt"}),id:'newArt'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:roek,alt:"Roek"}),id:'roek'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:invenio,alt:"Invenio"}),id:'invenio'},{image:/*#__PURE__*/index_js_default().createElement("img",{src:ben_develop,alt:"BenDevelopReference"}),id:'benDevelopReference'}];
;// CONCATENATED MODULE: ./src/components/HomePage/ReferencesSlider/index.tsx
const ReferencesSlider=()=>{const sliderRef=(0,index_js_.useRef)(null);const settings={dots:false,infinite:true,speed:1000,autoplaySpeed:4000,slidesToShow:1,slidesToScroll:1,autoplay:true,arrows:false};return/*#__PURE__*/index_js_default().createElement("div",{className:customersWrapperStyles},/*#__PURE__*/index_js_default().createElement("h2",{className:referencesTitleStyles},"Referencje"),/*#__PURE__*/index_js_default().createElement(ButtonIcon,{onClick:()=>{var _sliderRef$current;return sliderRef===null||sliderRef===void 0?void 0:(_sliderRef$current=sliderRef.current)===null||_sliderRef$current===void 0?void 0:_sliderRef$current.slickPrev();},additionalClass:sliderPrevBtnStyles,"aria-label":"Previous slide"},/*#__PURE__*/index_js_default().createElement("svg",{className:sliderPrevBtnSvgStyles,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},/*#__PURE__*/index_js_default().createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))),/*#__PURE__*/index_js_default().createElement("div",{className:customersSliderStyles},/*#__PURE__*/index_js_default().createElement(lib/* default */.Z,Object.assign({ref:sliderRef},settings,{className:sliderStyles}),referencesList.map((el,index)=>/*#__PURE__*/index_js_default().createElement("div",{key:index},/*#__PURE__*/index_js_default().createElement("div",{className:sliderImageOuterWrapperStyles},el.image))))),/*#__PURE__*/index_js_default().createElement(ButtonIcon,{onClick:()=>{var _sliderRef$current2;return sliderRef===null||sliderRef===void 0?void 0:(_sliderRef$current2=sliderRef.current)===null||_sliderRef$current2===void 0?void 0:_sliderRef$current2.slickNext();},additionalClass:sliderNextBtnStyles,"aria-label":"Next slide"},/*#__PURE__*/index_js_default().createElement("svg",{className:sliderNextBtnSvgStyles,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},/*#__PURE__*/index_js_default().createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))));};
;// CONCATENATED MODULE: ./src/components/HomePage/PriceSection/index.styles.ts
const pricingWrapperStyles=(0,clsx_m/* default */.Z)`w-full h-[600px] relative z-10 flex flex-col justify-center items-center bg-perfect-bgMainFilter`;const pricingBackgroundImageStyles=(0,clsx_m/* default */.Z)`absolute top-0 left-0 w-full z-0 h-[600px]`;const pricingTitleStyles=(0,clsx_m/* default */.Z)`text-[30px] text-[#fff] font-bold`;const pricingTableStyles=(0,clsx_m/* default */.Z)`bg-[#e3e1f9cc] rounded-[4px] mt-8 w-[80vw] md:w-[60vw] lg:w-[50vw]`;const pricingTableHeadStyles=(0,clsx_m/* default */.Z)`
text-[#fff]
[&>*:first-child]:bg-[#080715cc]
[&>*:last-child]:bg-[#1b1847cc]
[&>tr>*]:p-2
[&>*:last-child>*]:font-semibold`;const pricingTableBodyStyles=(0,clsx_m/* default */.Z)`[&>*:nth-child(2n)]:bg-[#8a86b8cc] [&>tr>*]:text-center [&>tr>*]:p-2`;const pricingTableButtonStyles=(0,clsx_m/* default */.Z)`rounded-[50px] border-2 border-[#f16c20] bg-[#f16c2180] text-[#fff] text-[16px] font-light px-4`;
;// CONCATENATED MODULE: ./src/components/HomePage/PriceSection/index.tsx
const PriceSection=()=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{className:pricingWrapperStyles},/*#__PURE__*/index_js_default().createElement("h2",{className:pricingTitleStyles},"Cennik"),/*#__PURE__*/index_js_default().createElement("table",{className:pricingTableStyles},/*#__PURE__*/index_js_default().createElement("thead",{className:pricingTableHeadStyles},/*#__PURE__*/index_js_default().createElement("tr",null,/*#__PURE__*/index_js_default().createElement("th",null,"Ceny brutto od osoby"),/*#__PURE__*/index_js_default().createElement("th",null,"lektor")),/*#__PURE__*/index_js_default().createElement("tr",null,/*#__PURE__*/index_js_default().createElement("th",null,"Wszystkie j\u0119zyki"),/*#__PURE__*/index_js_default().createElement("th",null,"60 minut"))),/*#__PURE__*/index_js_default().createElement("tbody",{className:pricingTableBodyStyles},/*#__PURE__*/index_js_default().createElement("tr",null,/*#__PURE__*/index_js_default().createElement("td",null,"1 osoba"),/*#__PURE__*/index_js_default().createElement("td",null,"120 z\u0142")),/*#__PURE__*/index_js_default().createElement("tr",null,/*#__PURE__*/index_js_default().createElement("td",null,"grupa 2-osobowa"),/*#__PURE__*/index_js_default().createElement("td",null,"80 z\u0142")),/*#__PURE__*/index_js_default().createElement("tr",null,/*#__PURE__*/index_js_default().createElement("td",null,"grupa 3-osobowa"),/*#__PURE__*/index_js_default().createElement("td",null,"60 z\u0142")),/*#__PURE__*/index_js_default().createElement("tr",null,/*#__PURE__*/index_js_default().createElement("td",null,"grupa 4-osobowa"),/*#__PURE__*/index_js_default().createElement("td",null,"50 z\u0142")),/*#__PURE__*/index_js_default().createElement("tr",null,/*#__PURE__*/index_js_default().createElement("td",null,"wi\u0119ksze grupy, przedszkola, szko\u0142y, firmy"),/*#__PURE__*/index_js_default().createElement("td",null,/*#__PURE__*/index_js_default().createElement("button",{className:pricingTableButtonStyles},"do uzgodnienia")))))),/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../../../assets/images/monay.jpg",alt:"london",quality:100,className:pricingBackgroundImageStyles,__imageData:__webpack_require__(111)}));};
;// CONCATENATED MODULE: ./src/pages/index.styles.ts
const mainSectionStyles=(0,clsx_m/* default */.Z)`bg-perfect-bgdark font-plusJakartaSans`;const heroSectionStyles=(0,clsx_m/* default */.Z)`w-full relative`;const heroWrapperStyles=(0,clsx_m/* default */.Z)`w-full relative z-10 flex flex-col justify-center items-center bg-perfect-bgMainFilter`;const heroPerfectTextImageStyles=(0,clsx_m/* default */.Z)`max-w-[1000px] my-8 mx-4 md:my-24`;const heroBackgroundImageStyles=(0,clsx_m/* default */.Z)`absolute top-0 w-full h-full z-0`;const heroTitleStyles=(0,clsx_m/* default */.Z)`text-[32px] px-3 md:text-[56px] text-center text-perfect-mainWhite font-bold`;const heroTitleEndStyles=(0,clsx_m/* default */.Z)`text-[24px] md:text-[38px] text-center text-perfect-mainWhite font-bold`;const heroInfoTextStyles=(0,clsx_m/* default */.Z)`text-[16px] text-center text-perfect-mainWhite px-3 mt-6 md:px-16 md:mt-16 lg:max-w-[1024px] xl:max-w-[1250px] 2xl:max-w-[1500px]`;const heroButtonStyles=(0,clsx_m/* default */.Z)`rounded-[50px] border-2 border-perfect-borderButton uppercase bg-perfect-bgButton text-perfect-mainWhite text-[20px] font-light p-2 my-16`;const flagsSectionStyles=(0,clsx_m/* default */.Z)`w-full max-w-[1800px]`;const offerSectionStyles=(0,clsx_m/* default */.Z)`w-full lg:w-[1024px] xl:w-[1250px] 2xl:w-[1500px] mx-[auto] flex flex-col justify-between items-center`;const pricingSectionStyles=(0,clsx_m/* default */.Z)`w-full relative mt-12 md:mt-24`;const promotionsSectionStyles=(0,clsx_m/* default */.Z)`w-full relative mt-12 md:mt-24`;const referencesSliderSectionStyles=(0,clsx_m/* default */.Z)`
  mt-12 px-5 md:mt-24 lg:px-24`;
;// CONCATENATED MODULE: ./src/components/HomePage/OfferSection/index.styles.ts
const offerInfoContainerStyles=(0,clsx_m/* default */.Z)`w-full text-[#409ed2] w-full lg:w-[1024px] mx-[auto]`;const offerTitleStyles=(0,clsx_m/* default */.Z)`text-[30px] mt-12 font-bold text-center`;const offerQuoteStyles=(0,clsx_m/* default */.Z)`text-[16px] mt-4 px-8 text-center`;const offerWrapperStyles=(0,clsx_m/* default */.Z)`flex flex-col md:flex-row flex-wrap justify-center items:center md:items-start mt-8 md:mt-16 gap-12`;const offerItemStyles=(0,clsx_m/* default */.Z)`w-full px-3 md:w-[40%] flex flex-col items-center`;const index_styles_offerItemIconStyles=(0,clsx_m/* default */.Z)`text-[#f16c20] text-[50px]`;const offerItemTitleStyles=(0,clsx_m/* default */.Z)`text-[24px] font-bold mt-4`;const offerItemDescriptionStyles=(0,clsx_m/* default */.Z)`text-[16px] text-center font-light mt-4`;const offerFinalInformationStyles=(0,clsx_m/* default */.Z)`text-[16px] mt-20 text-center`;
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Groups.js
var Groups = __webpack_require__(7547);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/DirectionsCar.js
var DirectionsCar = __webpack_require__(4637);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/AccessibilityNew.js
var AccessibilityNew = __webpack_require__(9947);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/CalendarMonth.js
var CalendarMonth = __webpack_require__(3147);
;// CONCATENATED MODULE: ./src/components/HomePage/OfferSection/index.tsx
const offer=[{title:"Profesnonalna kadra",description:"Centrum Językowe prowadzone przez nauczyciela - metodyka i praktyka. Profesjonalni lektorzy różnych języków oraz native speakerzy. Łączy ich pasja do nauczania.",icon:/*#__PURE__*/index_js_default().createElement(Groups/* default */.Z,{className:index_styles_offerItemIconStyles})},{title:"Pełna mobilność",description:"Zajęcia indywidualne z dojazdem do klienta/szkoły/firmy (na terenie Tychów dojazd bezpłatny).",icon:/*#__PURE__*/index_js_default().createElement(DirectionsCar/* default */.Z,{className:index_styles_offerItemIconStyles})},{title:"Indywidualizacja nauczania",description:"Dostosowanie metod i materiałów do potrzeb i oczekiwań klienta.",icon:/*#__PURE__*/index_js_default().createElement(AccessibilityNew/* default */.Z,{className:index_styles_offerItemIconStyles})},{title:"Elastyczność terminów",description:"Rozpocznij naukę w każdej chwili. Dostosujemy się do Twojego grafiku.",icon:/*#__PURE__*/index_js_default().createElement(CalendarMonth/* default */.Z,{className:index_styles_offerItemIconStyles})}];const OfferSection=()=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{className:offerInfoContainerStyles},/*#__PURE__*/index_js_default().createElement("h2",{className:offerTitleStyles},"Oferta zaj\u0119\u0107 indywidualnych"),/*#__PURE__*/index_js_default().createElement("div",{className:offerQuoteStyles},"\"If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.\""),/*#__PURE__*/index_js_default().createElement("div",{className:offerWrapperStyles},offer.map(({title,description,icon})=>/*#__PURE__*/index_js_default().createElement("div",{key:title,className:offerItemStyles},/*#__PURE__*/index_js_default().createElement("div",null,icon),/*#__PURE__*/index_js_default().createElement("div",{className:offerItemTitleStyles},title),/*#__PURE__*/index_js_default().createElement("div",{className:offerItemDescriptionStyles},description)))),/*#__PURE__*/index_js_default().createElement("div",{className:offerFinalInformationStyles},"Z nami mo\u017Cesz pozna\u0107 nast\u0119puj\u0105ce j\u0119zyki obce:",/*#__PURE__*/index_js_default().createElement("b",null," angielski, niemiecki, hiszpa\u0144ski, w\u0142oski, francuski, rosyjski. "),/*#__PURE__*/index_js_default().createElement("br",null)," O inne pytaj indywidualnie. ")));};
;// CONCATENATED MODULE: ./src/components/Flags/index.styles.ts
const flagsWrapperStyles=(0,clsx_m/* default */.Z)`w-full flex justify-between gap-4 px-4 pt-5 pb-8 md:gap-12 md:px-12 md:pt-10 md:pb-14`;const flagStyles=(0,clsx_m/* default */.Z)`flex-1 max-w-[120px]`;
;// CONCATENATED MODULE: ./src/components/Flags/index.tsx
const Flags=()=>/*#__PURE__*/index_js_default().createElement("div",{className:flagsWrapperStyles},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../../assets/images/flags/britain.png",alt:"britain",quality:100,className:flagStyles,__imageData:__webpack_require__(816)}),/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../../assets/images/flags/france.png",alt:"france",quality:100,className:flagStyles,__imageData:__webpack_require__(5078)}),/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../../assets/images/flags/germany.png",alt:"germany",quality:100,className:flagStyles,__imageData:__webpack_require__(6594)}),/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../../assets/images/flags/italy.png",alt:"italy",quality:100,className:flagStyles,__imageData:__webpack_require__(181)}),/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../../assets/images/flags/russia.png",alt:"russia",quality:100,className:flagStyles,__imageData:__webpack_require__(6415)}),/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../../assets/images/flags/spain.png",alt:"spain",quality:100,className:flagStyles,__imageData:__webpack_require__(6545)}));
;// CONCATENATED MODULE: ./src/components/HomePage/PromotionsSection/index.styles.ts
const promotionLogoStyles=(0,clsx_m/* default */.Z)`max-w-[240px] mx-auto`;const promotionTitleStyles=(0,clsx_m/* default */.Z)`text-[30px] text-[#fff] font-bold`;const promotionBackgroundImageStyles=(0,clsx_m/* default */.Z)`absolute top-0 left-0 w-full z-0 h-[600px]`;const promotionWrapperStyles=(0,clsx_m/* default */.Z)`w-full h-[600px] relative z-10 flex flex-col justify-center items-center bg-[#00506acc]`;const promotionCardsWrapperStyles=(0,clsx_m/* default */.Z)`
flex flex-col md:flex-row justify-between w-[70%] mt-12 md:mt-24`;
;// CONCATENATED MODULE: ./src/components/HomePage/PromotionsSection/index.tsx
const PromotionsSection=()=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{className:promotionWrapperStyles},/*#__PURE__*/index_js_default().createElement("h2",{className:promotionTitleStyles},"Promocje"),/*#__PURE__*/index_js_default().createElement("div",{className:promotionCardsWrapperStyles},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../../../assets/images/foryoucard.png",alt:"foryoucard",quality:100,className:promotionLogoStyles,__imageData:__webpack_require__(9757)}),/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../../../assets/images/kartanau.jpg",alt:"kartanau",quality:100,className:promotionLogoStyles,__imageData:__webpack_require__(183)}))),/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../../../assets/images/percents.jpg",alt:"percents",quality:100,className:promotionBackgroundImageStyles,__imageData:__webpack_require__(385)}));};
;// CONCATENATED MODULE: ./src/pages/index.tsx










const IndexPage = () => {
  return /*#__PURE__*/index_js_default().createElement("main", {
    className: mainSectionStyles
  }, /*#__PURE__*/index_js_default().createElement(Layout, null, /*#__PURE__*/index_js_default().createElement("section", {
    className: heroSectionStyles
  }, /*#__PURE__*/index_js_default().createElement("div", {
    className: heroWrapperStyles
  }, /*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv, {
    src: "../assets/svg/perfectText.svg",
    alt: "perfectText",
    quality: 100,
    className: heroPerfectTextImageStyles,
    __imageData: __webpack_require__(6355)
  }), /*#__PURE__*/index_js_default().createElement("h2", {
    className: heroTitleStyles
  }, "Perfekcyjna nauka j\u0119zyk\xF3w obcych"), /*#__PURE__*/index_js_default().createElement("div", {
    className: heroTitleEndStyles
  }, "od 2008 roku"), /*#__PURE__*/index_js_default().createElement("div", {
    className: heroInfoTextStyles
  }, "Czy wiesz, \u017Ce dzieli Ci\u0119 tylko kilka krok\xF3w od profesjonalnej nauki j\u0119zyka obcego? Zadzwo\u0144 lub napisz ju\u017C dzisiaj, przedstaw swoje oczekiwania, um\xF3w termin pierwszej lekcji (bez zobowi\u0105za\u0144) i oczekuj na lektora w wybranym miejscu (Tw\xF3j dom, a mo\u017Ce miejsce pracy?). Od tej chwili poczuj si\u0119 pewniej i pos\u0142uguj si\u0119 j\u0119zykiem obcym swobodniej!"), /*#__PURE__*/index_js_default().createElement("button", {
    className: heroButtonStyles
  }, "Wykonaj pierszy krok")), /*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv, {
    src: "../assets/images/london.jpg",
    alt: "london",
    quality: 100,
    className: heroBackgroundImageStyles,
    __imageData: __webpack_require__(5189)
  })), /*#__PURE__*/index_js_default().createElement("section", {
    className: flagsSectionStyles
  }, /*#__PURE__*/index_js_default().createElement(Flags, null)), /*#__PURE__*/index_js_default().createElement("section", {
    id: "offer",
    className: offerSectionStyles
  }, /*#__PURE__*/index_js_default().createElement(OfferSection, null)), /*#__PURE__*/index_js_default().createElement("section", {
    id: "pricing",
    className: pricingSectionStyles
  }, /*#__PURE__*/index_js_default().createElement(PriceSection, null)), /*#__PURE__*/index_js_default().createElement("section", {
    id: "references",
    className: referencesSliderSectionStyles
  }, /*#__PURE__*/index_js_default().createElement(ReferencesSlider, null)), /*#__PURE__*/index_js_default().createElement("section", {
    id: "promotions",
    className: promotionsSectionStyles
  }, /*#__PURE__*/index_js_default().createElement(PromotionsSection, null))));
};
/* harmony default export */ const pages = (IndexPage);
const Head = ({
  location
}) => /*#__PURE__*/index_js_default().createElement(Seo/* SEO */.H, {
  title: "Perfekcyjna nauka j\u0119zyk\xF3w obcych od 2008 roku",
  description: "Czy wiesz, \u017Ce dzieli Ci\u0119 tylko kilka krok\xF3w od profesjonalnej nauki j\u0119zyka obcego? Zadzwo\u0144 lub napisz ju\u017C dzisiaj, przedstaw swoje oczekiwania, um\xF3w termin pierwszej lekcji (bez zobowi\u0105za\u0144) i oczekuj na lektora w wybranym miejscu (Tw\xF3j dom, a mo\u017Ce miejsce pracy?). Od tej chwili poczuj si\u0119 pewniej i pos\u0142uguj si\u0119 j\u0119zykiem obcym swobodniej!",
  pathname: location.pathname
});

/***/ }),

/***/ 960:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(8534);

function ArrowDown (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M0.684864 15.6274C0.228287 15.1708 0 14.5897 0 13.8841C0 13.1785 0.228287 12.5974 0.684864 12.1408L12.1408 0.684866C12.3898 0.435824 12.6596 0.259833 12.9502 0.156896C13.2407 0.0539584 13.552 0.00166028 13.8841 0C14.2161 0 14.5382 0.0622599 14.8504 0.186781C15.1625 0.311302 15.4215 0.477331 15.6274 0.684866L27.0833 12.1408C27.5399 12.5974 27.7681 13.1785 27.7681 13.8841C27.7681 14.5897 27.5399 15.1708 27.0833 15.6274C26.6267 16.0839 26.0456 16.3122 25.34 16.3122C24.6344 16.3122 24.0533 16.0839 23.5967 15.6274L13.8841 5.91474L4.17145 15.6274C3.71487 16.0839 3.13377 16.3122 2.42816 16.3122C1.72254 16.3122 1.14144 16.0839 0.684864 15.6274Z","fill":"#D3D9DF"}));
}

ArrowDown.defaultProps = {"width":"28","height":"17","viewBox":"0 0 28 17","fill":"none"};

module.exports = ArrowDown;

ArrowDown.default = ArrowDown;


/***/ }),

/***/ 5189:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8f8","images":{"fallback":{"src":"/perfectTychy/static/479bb4e58965fc7fe08b8a5466634674/9198c/london.jpg","srcSet":"/perfectTychy/static/479bb4e58965fc7fe08b8a5466634674/7ea78/london.jpg 484w,\\n/perfectTychy/static/479bb4e58965fc7fe08b8a5466634674/2e1fc/london.jpg 968w,\\n/perfectTychy/static/479bb4e58965fc7fe08b8a5466634674/9198c/london.jpg 1936w","sizes":"(min-width: 1936px) 1936px, 100vw"},"sources":[{"srcSet":"/perfectTychy/static/479bb4e58965fc7fe08b8a5466634674/5d002/london.webp 484w,\\n/perfectTychy/static/479bb4e58965fc7fe08b8a5466634674/2e17e/london.webp 968w,\\n/perfectTychy/static/479bb4e58965fc7fe08b8a5466634674/c6167/london.webp 1936w","type":"image/webp","sizes":"(min-width: 1936px) 1936px, 100vw"}]},"width":1936,"height":1296}');

/***/ }),

/***/ 181:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/perfectTychy/static/6278d289aad740d1468f3f87176919b9/2c1a9/italy.png","srcSet":"/perfectTychy/static/6278d289aad740d1468f3f87176919b9/b6929/italy.png 125w,\\n/perfectTychy/static/6278d289aad740d1468f3f87176919b9/7c21b/italy.png 250w,\\n/perfectTychy/static/6278d289aad740d1468f3f87176919b9/2c1a9/italy.png 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/perfectTychy/static/6278d289aad740d1468f3f87176919b9/f97c8/italy.webp 125w,\\n/perfectTychy/static/6278d289aad740d1468f3f87176919b9/40603/italy.webp 250w,\\n/perfectTychy/static/6278d289aad740d1468f3f87176919b9/7a96c/italy.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":300}');

/***/ }),

/***/ 6594:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/perfectTychy/static/d81c2433b8d5e77c973d138b4bdfb376/2c1a9/germany.png","srcSet":"/perfectTychy/static/d81c2433b8d5e77c973d138b4bdfb376/b6929/germany.png 125w,\\n/perfectTychy/static/d81c2433b8d5e77c973d138b4bdfb376/7c21b/germany.png 250w,\\n/perfectTychy/static/d81c2433b8d5e77c973d138b4bdfb376/2c1a9/germany.png 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/perfectTychy/static/d81c2433b8d5e77c973d138b4bdfb376/f97c8/germany.webp 125w,\\n/perfectTychy/static/d81c2433b8d5e77c973d138b4bdfb376/40603/germany.webp 250w,\\n/perfectTychy/static/d81c2433b8d5e77c973d138b4bdfb376/7a96c/germany.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":300}');

/***/ }),

/***/ 385:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/perfectTychy/static/b9b5533ca5d6cdf9e87a53b263241874/b283a/percents.jpg","srcSet":"/perfectTychy/static/b9b5533ca5d6cdf9e87a53b263241874/b95ad/percents.jpg 320w,\\n/perfectTychy/static/b9b5533ca5d6cdf9e87a53b263241874/1b50a/percents.jpg 640w,\\n/perfectTychy/static/b9b5533ca5d6cdf9e87a53b263241874/b283a/percents.jpg 1280w","sizes":"(min-width: 1280px) 1280px, 100vw"},"sources":[{"srcSet":"/perfectTychy/static/b9b5533ca5d6cdf9e87a53b263241874/0a0af/percents.webp 320w,\\n/perfectTychy/static/b9b5533ca5d6cdf9e87a53b263241874/8ae69/percents.webp 640w,\\n/perfectTychy/static/b9b5533ca5d6cdf9e87a53b263241874/7bb9c/percents.webp 1280w","type":"image/webp","sizes":"(min-width: 1280px) 1280px, 100vw"}]},"width":1280,"height":1280}');

/***/ }),

/***/ 6415:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/perfectTychy/static/0ba4d6094bb53b6c666f49e52dfd759d/2c1a9/russia.png","srcSet":"/perfectTychy/static/0ba4d6094bb53b6c666f49e52dfd759d/b6929/russia.png 125w,\\n/perfectTychy/static/0ba4d6094bb53b6c666f49e52dfd759d/7c21b/russia.png 250w,\\n/perfectTychy/static/0ba4d6094bb53b6c666f49e52dfd759d/2c1a9/russia.png 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/perfectTychy/static/0ba4d6094bb53b6c666f49e52dfd759d/f97c8/russia.webp 125w,\\n/perfectTychy/static/0ba4d6094bb53b6c666f49e52dfd759d/40603/russia.webp 250w,\\n/perfectTychy/static/0ba4d6094bb53b6c666f49e52dfd759d/7a96c/russia.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":300}');

/***/ }),

/***/ 111:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/perfectTychy/static/affd549744283e89a00222a378c9b895/3c860/monay.jpg","srcSet":"/perfectTychy/static/affd549744283e89a00222a378c9b895/3a2bb/monay.jpg 320w,\\n/perfectTychy/static/affd549744283e89a00222a378c9b895/5f70d/monay.jpg 640w,\\n/perfectTychy/static/affd549744283e89a00222a378c9b895/3c860/monay.jpg 1280w","sizes":"(min-width: 1280px) 1280px, 100vw"},"sources":[{"srcSet":"/perfectTychy/static/affd549744283e89a00222a378c9b895/50817/monay.webp 320w,\\n/perfectTychy/static/affd549744283e89a00222a378c9b895/dbf1b/monay.webp 640w,\\n/perfectTychy/static/affd549744283e89a00222a378c9b895/ee230/monay.webp 1280w","type":"image/webp","sizes":"(min-width: 1280px) 1280px, 100vw"}]},"width":1280,"height":839}');

/***/ }),

/***/ 6545:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#c80808","images":{"fallback":{"src":"/perfectTychy/static/6d5dc4cd63268360bad7f618a68dc9cd/2c1a9/spain.png","srcSet":"/perfectTychy/static/6d5dc4cd63268360bad7f618a68dc9cd/b6929/spain.png 125w,\\n/perfectTychy/static/6d5dc4cd63268360bad7f618a68dc9cd/7c21b/spain.png 250w,\\n/perfectTychy/static/6d5dc4cd63268360bad7f618a68dc9cd/2c1a9/spain.png 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/perfectTychy/static/6d5dc4cd63268360bad7f618a68dc9cd/f97c8/spain.webp 125w,\\n/perfectTychy/static/6d5dc4cd63268360bad7f618a68dc9cd/40603/spain.webp 250w,\\n/perfectTychy/static/6d5dc4cd63268360bad7f618a68dc9cd/7a96c/spain.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":300}');

/***/ }),

/***/ 9757:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/perfectTychy/static/69ce6b798b7543cad5d919f0463a3068/43ed4/foryoucard.png","srcSet":"/perfectTychy/static/69ce6b798b7543cad5d919f0463a3068/da22b/foryoucard.png 725w,\\n/perfectTychy/static/69ce6b798b7543cad5d919f0463a3068/54c16/foryoucard.png 1451w,\\n/perfectTychy/static/69ce6b798b7543cad5d919f0463a3068/43ed4/foryoucard.png 2901w","sizes":"(min-width: 2901px) 2901px, 100vw"},"sources":[{"srcSet":"/perfectTychy/static/69ce6b798b7543cad5d919f0463a3068/890a5/foryoucard.webp 725w,\\n/perfectTychy/static/69ce6b798b7543cad5d919f0463a3068/12655/foryoucard.webp 1451w,\\n/perfectTychy/static/69ce6b798b7543cad5d919f0463a3068/e09f5/foryoucard.webp 2901w","type":"image/webp","sizes":"(min-width: 2901px) 2901px, 100vw"}]},"width":2901,"height":1889}');

/***/ }),

/***/ 816:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#c81828","images":{"fallback":{"src":"/perfectTychy/static/12058afa79643a22434f8150e412a69d/2c1a9/britain.png","srcSet":"/perfectTychy/static/12058afa79643a22434f8150e412a69d/b6929/britain.png 125w,\\n/perfectTychy/static/12058afa79643a22434f8150e412a69d/7c21b/britain.png 250w,\\n/perfectTychy/static/12058afa79643a22434f8150e412a69d/2c1a9/britain.png 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/perfectTychy/static/12058afa79643a22434f8150e412a69d/f97c8/britain.webp 125w,\\n/perfectTychy/static/12058afa79643a22434f8150e412a69d/40603/britain.webp 250w,\\n/perfectTychy/static/12058afa79643a22434f8150e412a69d/7a96c/britain.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":300}');

/***/ }),

/***/ 6355:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/perfectTychy/static/d4d39b21c423d0c278b3a53de1c029ba/28273/perfectText.svg","srcSet":"/perfectTychy/static/d4d39b21c423d0c278b3a53de1c029ba/4ae97/perfectText.svg 250w,\\n/perfectTychy/static/d4d39b21c423d0c278b3a53de1c029ba/b8920/perfectText.svg 500w,\\n/perfectTychy/static/d4d39b21c423d0c278b3a53de1c029ba/28273/perfectText.svg 1000w","sizes":"(min-width: 1000px) 1000px, 100vw"},"sources":[{"srcSet":"/perfectTychy/static/d4d39b21c423d0c278b3a53de1c029ba/7bb55/perfectText.webp 250w,\\n/perfectTychy/static/d4d39b21c423d0c278b3a53de1c029ba/039c4/perfectText.webp 500w,\\n/perfectTychy/static/d4d39b21c423d0c278b3a53de1c029ba/9a47b/perfectText.webp 1000w","type":"image/webp","sizes":"(min-width: 1000px) 1000px, 100vw"}]},"width":1000,"height":100}');

/***/ }),

/***/ 5078:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/perfectTychy/static/3a3e3a0c3d30b8625762d11aaa6f44ef/2c1a9/france.png","srcSet":"/perfectTychy/static/3a3e3a0c3d30b8625762d11aaa6f44ef/b6929/france.png 125w,\\n/perfectTychy/static/3a3e3a0c3d30b8625762d11aaa6f44ef/7c21b/france.png 250w,\\n/perfectTychy/static/3a3e3a0c3d30b8625762d11aaa6f44ef/2c1a9/france.png 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/perfectTychy/static/3a3e3a0c3d30b8625762d11aaa6f44ef/f97c8/france.webp 125w,\\n/perfectTychy/static/3a3e3a0c3d30b8625762d11aaa6f44ef/40603/france.webp 250w,\\n/perfectTychy/static/3a3e3a0c3d30b8625762d11aaa6f44ef/7a96c/france.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":300}');

/***/ }),

/***/ 183:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#086848","images":{"fallback":{"src":"/perfectTychy/static/91394e07738e3ba1066cba1799d4b53e/6f359/kartanau.jpg","srcSet":"/perfectTychy/static/91394e07738e3ba1066cba1799d4b53e/949c4/kartanau.jpg 70w,\\n/perfectTychy/static/91394e07738e3ba1066cba1799d4b53e/1113c/kartanau.jpg 139w,\\n/perfectTychy/static/91394e07738e3ba1066cba1799d4b53e/6f359/kartanau.jpg 278w","sizes":"(min-width: 278px) 278px, 100vw"},"sources":[{"srcSet":"/perfectTychy/static/91394e07738e3ba1066cba1799d4b53e/a56a0/kartanau.webp 70w,\\n/perfectTychy/static/91394e07738e3ba1066cba1799d4b53e/c0b8b/kartanau.webp 139w,\\n/perfectTychy/static/91394e07738e3ba1066cba1799d4b53e/e47ea/kartanau.webp 278w","type":"image/webp","sizes":"(min-width: 278px) 278px, 100vw"}]},"width":278,"height":181}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map