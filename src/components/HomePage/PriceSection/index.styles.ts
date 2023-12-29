import clsx from 'clsx';

export const pricingWrapperStyles = clsx`w-full h-[600px] relative z-10 flex flex-col justify-center items-center bg-perfect-bgMainFilter`;
export const pricingBackgroundImageStyles = clsx`absolute-important top-0 left-0 w-full z-0 h-[600px]`;
export const pricingTitleStyles = clsx`text-[30px] text-[#fff] font-bold`;
export const pricingTableStyles = clsx`bg-[#e3e1f9cc] rounded-[4px] mt-8 w-[80vw] md:w-[60vw] lg:w-[50vw]`;
export const pricingTableHeadStyles = clsx`
text-[#fff]
[&>*:first-child]:bg-[#080715cc]
[&>*:last-child]:bg-[#1b1847cc]
[&>tr>*]:p-2
[&>*:last-child>*]:font-semibold`;
export const pricingTableBodyStyles = clsx`[&>*:nth-child(2n)]:bg-[#8a86b8cc] [&>tr>*]:text-center [&>tr>*]:p-2`;
export const pricingTableButtonStyles = clsx`rounded-[50px] border-2 border-[#f16c20] bg-[#f16c2180] text-[#fff] text-[16px] font-light px-4`;