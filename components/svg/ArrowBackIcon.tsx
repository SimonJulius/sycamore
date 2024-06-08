import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArroBackIcon = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#343330"
            d="M21 12a.75.75 0 0 1-.75.75H5.56l5.471 5.47a.75.75 0 1 1-1.061 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 0 1 1.061 1.06l-5.47 5.47h14.69A.75.75 0 0 1 21 12Z"
        />
    </Svg>
)
export default ArroBackIcon