import { chakra } from "@chakra-ui/react"
import type { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#prefix__a)">
      <path d="M15.683 9.125c.046 1.125.203 3.03.284 3.964a.481.481 0 0 1-.502.522 85.583 85.583 0 0 0-3.519-.088 73.453 73.453 0 0 0-3.417.063.482.482 0 0 1-.5-.52c.077-.927.226-2.817.272-3.941a3.675 3.675 0 0 1 3.691-3.547 3.675 3.675 0 0 1 3.69 3.547Zm-3.696-1.79a2.17 2.17 0 1 0 0 4.338 2.17 2.17 0 0 0 0-4.339Z" />
      <path d="M12.025 8.26c.126.144.195.329.195.52a.833.833 0 0 1-.85.818.861.861 0 0 1-.665-.308 1.229 1.229 0 0 0-.023.233c0 .698.589 1.264 1.316 1.264.727 0 1.316-.566 1.316-1.264 0-.698-.574-1.253-1.29-1.264ZM13.97 6.948a.126.126 0 0 1-.134-.12c-.011-.283.04-.86.771-1.492.504-.435 1.206-.592 2.088-.468a.126.126 0 0 1-.035.25c-.803-.114-1.434.022-1.877.404-.636.55-.689 1.044-.689 1.297a.124.124 0 0 1-.118.129h-.007Z" />
      <path d="M16.516 5.248a.359.359 0 0 0 .366-.352.359.359 0 0 0-.366-.351.359.359 0 0 0-.366.351c0 .195.164.352.366.352ZM10.148 6.972a.125.125 0 0 0 .134-.12c.011-.29-.037-.948-.772-1.584-.503-.434-1.205-.591-2.087-.467a.126.126 0 0 0-.058.225.125.125 0 0 0 .089.024c.803-.114 1.434.023 1.877.404.639.551.693 1.125.686 1.386a.126.126 0 0 0 .117.13l.014.002Z" />
      <path d="M7.654 5.248a.359.359 0 0 0 .366-.352.359.359 0 0 0-.366-.351.359.359 0 0 0-.366.351c0 .195.164.352.366.352Z" />
      <path d="M23.75 18.074c0-1.14-2.858-2.953-2.858-2.953l-.033-.01c.47-1.906.713-2.754.745-3.993.069-2.831-.646-5.227-2.44-7.328C17.496 1.836 14.84.703 12.004.703c-3.016 0-5.34 1.15-7.065 3.053-1.724 1.904-2.59 3.967-2.538 7.328.014.94.228 2.52.689 3.935l-.033.01S.25 16.809.25 18.04c0 .364 1.515.826 4.64.972l-1.743 2.611c-.07.223-.026.529.16.66.185.12.395.195.614.218.332.01.434-.086.556-.306l1.751-3.046c1.86.073 3.042.113 5.168.117v3.486c.013.21.102.593.666.593.513 0 .6-.359.6-.593v-3.484c2.125-.004 3.28.024 5.135-.049l1.834 2.942a.458.458 0 0 0 .465.307.958.958 0 0 0 .509-.138c.206-.092.206-.432.122-.74l-1.725-2.51c3.015-.25 4.748-.714 4.748-1.007ZM5.653 17.74a1.059 1.059 0 0 1-1.042-1.075c0-.593.467-1.007 1.042-1.007.576 0 1.042.413 1.042 1.007a1.058 1.058 0 0 1-1.042 1.075Zm6.347.059a1.075 1.075 0 1 1 1.042-1.074A1.058 1.058 0 0 1 12 17.799Zm6.348.06a1.074 1.074 0 1 1 1.041-1.075 1.058 1.058 0 0 1-1.041 1.075Zm1.598-3.14c-2.015-.513-4.997-.488-7.946-.488s-5.715-.09-7.957.488c-.335-1.348-.598-2.692-.632-3.734-.156-4.842 3.115-9.434 8.59-9.434 5.474 0 8.854 4.595 8.645 9.434-.066 1.523-.491 2.917-.703 3.734h.003Z" />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default chakra(SvgComponent)
