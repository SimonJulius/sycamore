{/* */ }

import * as React from "react"
import Svg, {
    SvgProps,
    Circle,
    G,
    Path,
    Defs,
    ClipPath,
} from "react-native-svg"

const HomeSvgIcon = (props: SvgProps) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={35}
            height={35}
            fill="none"
            {...props}
        >
            <Circle cx={17.332} cy={17.332} r={17.332} fill="#F6F7F7" />
            <G
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.29}
                clipPath="url(#a)"
            >
                <Path d="M23.96 25.552v-8.45a.672.672 0 0 0-.22-.497l-6.728-6.353a.673.673 0 0 0-.906 0l-6.728 6.353a.674.674 0 0 0-.22.498v8.449M7.14 25.552h18.84" />
                <Path d="M18.578 25.551v-4.71a.673.673 0 0 0-.673-.672h-2.691a.673.673 0 0 0-.673.673v4.71" />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" d="M5.795 7.386h21.53v21.53H5.795z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default HomeSvgIcon