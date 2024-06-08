import * as React from "react"
import Svg, {
    SvgProps,
    Circle,
    G,
    Path,
    Defs,
    ClipPath,
} from "react-native-svg"
const MoreTabIcon = (props: SvgProps) => (
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
                d="M15.747 15.746a2.018 2.018 0 1 0 0-4.036 2.018 2.018 0 0 0 0 4.036ZM21.13 23.82a2.018 2.018 0 1 0 0-4.037 2.018 2.018 0 0 0 0 4.037Z"
                opacity={0.2}
            />
            <Path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.29}
                d="M15.747 15.746a2.018 2.018 0 1 0 0-4.036 2.018 2.018 0 0 0 0 4.036ZM21.13 23.82a2.018 2.018 0 1 0 0-4.037 2.018 2.018 0 0 0 0 4.037ZM17.766 13.728h7.4M10.363 13.728h3.364M23.148 21.802h2.019M10.363 21.802h8.747"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M7 7h21.53v21.53H7z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default MoreTabIcon
