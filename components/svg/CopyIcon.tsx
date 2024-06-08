import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CopyIcon = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#109847"
            fillRule="evenodd"
            d="M.709 7.418c0 .588.477 1.065 1.064 1.065h1.065v-.71H1.773a.355.355 0 0 1-.354-.355V2.452c0-.196.158-.355.354-.355H6.74c.196 0 .355.159.355.355v1.064H3.902c-.588 0-1.064.476-1.064 1.064v4.967c0 .588.476 1.064 1.064 1.064h4.967c.588 0 1.064-.476 1.064-1.064V4.58c0-.588-.476-1.064-1.064-1.064H7.805V2.452c0-.588-.477-1.065-1.065-1.065H1.773c-.587 0-1.064.477-1.064 1.065v4.966ZM3.547 4.58c0-.196.16-.355.355-.355h4.967c.196 0 .355.16.355.355v4.967a.355.355 0 0 1-.355.355H3.902a.355.355 0 0 1-.355-.355V4.58Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CopyIcon
