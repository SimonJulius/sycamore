import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArroRightIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M11.757 7.199 8.884 10.07a.313.313 0 0 1-.442-.442l2.34-2.339H4.464a.313.313 0 1 1 0-.625h6.316l-2.339-2.34a.313.313 0 0 1 .442-.441l2.873 2.873a.313.313 0 0 1 0 .442Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="m8 0 7.071 7.071L8 14.142.929 7.072z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArroRightIcon
