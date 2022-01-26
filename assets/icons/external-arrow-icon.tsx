import { SVGProps, memo } from "react";

function ExternalArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.53448 2.06897C0.963154 2.06897 0.5 1.60581 0.5 1.03448C0.5 0.463154 0.963154 0 1.53448 0H11.4655C12.0368 0 12.5 0.463154 12.5 1.03448V10.9655C12.5 11.5368 12.0368 12 11.4655 12C10.8942 12 10.431 11.5368 10.431 10.9655V3.53195L2.26597 11.697C1.86198 12.101 1.20698 12.101 0.802993 11.697C0.399002 11.293 0.399002 10.638 0.802993 10.234L8.96806 2.06897H1.53448Z" fill="white"/>
    </svg>
  );
}

export default memo(ExternalArrowIcon);
