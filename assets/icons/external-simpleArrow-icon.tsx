import { SVGProps, memo } from "react";

function ExternalSimpleArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M1.63794 2.44245C1.19357 2.44245 0.833344 2.08222 0.833344 1.63785C0.833344 1.19348 1.19357 0.833252 1.63794 0.833252H9.36208C9.80645 0.833252 10.1667 1.19348 10.1667 1.63785V9.36199C10.1667 9.80635 9.80645 10.1666 9.36208 10.1666C8.91771 10.1666 8.55748 9.80635 8.55748 9.36199V3.58032L2.20688 9.93092C1.89266 10.2451 1.38322 10.2451 1.069 9.93092C0.75479 9.61671 0.75479 9.10726 1.069 8.79305L7.41961 2.44245H1.63794Z" fill="white"/>
    </svg>
  );
}

export default memo(ExternalSimpleArrowIcon);