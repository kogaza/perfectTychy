import clsx from 'clsx';

export const customersWrapperStyles = clsx`
  relative
  max-w-[1000px]
  mx-auto
  px-0 
  2xl:px-[100px]`;

export const customersSliderStyles = clsx`
  z-5
  px-0 
  2xl:px-[100px]`;

export const customersTitleStyles = clsx`
  pt-[30px] text-center text-[26px] font-bold text-perfect-contrastText 
  md:pt-[44px] md:text-[40px]`;

export const referencesTitleStyles = clsx`text-[30px] text-center text-[#409ed2] font-bold`;

export const customersDescriptionStyles = clsx`
  mt-[10px] text-center text-base font-normal text-perfect-contrastText 
  md:mt-4`;

export const sliderPrevBtnStyles = clsx`
  hidden md:flex z-10 absolute top-[400px] left-0 l:left-[-50px] h-[40px] w-[40px] opacity-20 hover:opacity-40 bg-perfect-contrastGreen hover:bg-perfect-contrastGreenHover`;

export const sliderPrevBtnSvgStyles = clsx`
  h-6 w-6 rotate-90 transform fill-white`;

export const sliderNextBtnStyles = clsx`
  hidden md:flex z-10 absolute top-[400px] right-0 l:right-[-50px] h-[40px] w-[40px] opacity-20 bg-perfect-contrastGreen hover:opacity-40 hover:bg-perfect-contrastGreenHover`;

export const sliderNextBtnSvgStyles = clsx`
  h-6 w-6 rotate-[-90deg] transform fill-white`;

export const sliderStyles = clsx`
  mt-[54px] 
  md:mt-6`;

export const sliderImageOuterWrapperStyles = clsx`flex justify-center`;

