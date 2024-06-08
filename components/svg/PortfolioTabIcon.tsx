import * as React from "react"
import Svg, {
    SvgProps,
    Circle,
    G,
    Path,
    Defs,
    ClipPath,
} from "react-native-svg"
const PortfolioTabIcon = (props: SvgProps) => (
    <Svg
        width={35}
        height={35}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        {...props}
    >
        <Circle cx={17.996} cy={17.332} r={17.332} fill="#F6F7F7" />
        <G clipPath="url(#a)">
            <Path
                fill="currentColor"
                d="M25.166 13.055H10.364a.673.673 0 0 0-.673.673V23.82c0 .372.302.673.673.673h14.802a.673.673 0 0 0 .673-.673V13.728a.673.673 0 0 0-.673-.673Z"
                opacity={0.2}
            />
            <Path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.29}
                d="M25.166 13.055H10.364a.673.673 0 0 0-.673.673V23.82c0 .372.302.673.673.673h14.802a.673.673 0 0 0 .673-.673V13.728a.673.673 0 0 0-.673-.673Z"
            />
            <Path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.29}
                d="M14.4 15.074v-2.691a3.364 3.364 0 1 1 6.728 0v2.69"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M7 7h21.53v21.53H7z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default PortfolioTabIcon
