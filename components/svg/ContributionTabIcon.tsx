import * as React from "react"
import Svg, {
    SvgProps,
    Circle,
    G,
    Path,
    Defs,
    ClipPath,
} from "react-native-svg"
const ContributionTabIcon = (props: SvgProps) => (
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
                d="M14.065 20.456a4.373 4.373 0 1 0 0-8.746 4.373 4.373 0 0 0 0 8.746Z"
                opacity={0.2}
            />
            <Path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.29}
                d="M7.861 23.82a7.401 7.401 0 0 1 12.409 0M21.465 20.456a7.394 7.394 0 0 1 6.204 3.364"
            />
            <Path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.29}
                d="M14.065 20.456a4.373 4.373 0 1 0 0-8.746 4.373 4.373 0 0 0 0 8.746ZM19.842 12.02a4.372 4.372 0 1 1 1.624 8.436"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M7 7h21.53v21.53H7z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default ContributionTabIcon
