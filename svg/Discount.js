import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Discount = (props) => (
    <Svg
        width={188}
        height={188}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={94} cy={94} r={94} fill="#F1F1F1" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M114.473 132.099c.366.117.748.177 1.132.177l39.221-.003c2.916 0 5.281-3.459 5.281-7.727 0-4.268-2.365-7.727-5.281-7.727H150.3c-2.916 0-5.28-3.461-5.28-7.728 0-4.267 2.364-7.727 5.28-7.727h14.339c2.916 0 5.28-3.459 5.28-7.727 0-4.268-2.364-7.728-5.28-7.728h-16.595c2.916 0 5.28-3.459 5.28-7.727 0-4.268-2.364-7.727-5.28-7.727H99.768c2.916 0 5.28-3.461 5.28-7.728 0-4.267-2.364-7.727-5.28-7.727h-43c-2.916 0-5.281 3.461-5.281 7.729 0 4.268 2.365 7.728 5.281 7.728H26.6c-2.916 0-5.281 3.459-5.281 7.727 0 4.268 2.365 7.727 5.281 7.727h18.853c2.916 0 5.28 3.461 5.28 7.728 0 4.267-2.364 7.727-5.28 7.727H15.281c-2.916 0-5.281 3.458-5.281 7.727s2.365 7.729 5.281 7.729H44.7c-2.916 0-5.281 3.459-5.281 7.727 0 4.268 2.365 7.727 5.281 7.727h68.642c.384 0 .765-.06 1.131-.177Zm52.486-19.291a7.728 7.728 0 0 0-4.771 7.14v.001a7.729 7.729 0 1 0 4.771-7.141Z"
            fill="#fff"
        />
        <Path
            d="M130.467 65.306A46.206 46.206 0 0 1 140.4 94c0 25.626-20.774 46.4-46.4 46.4-25.626 0-46.4-20.774-46.4-46.4 0-25.626 20.774-46.4 46.4-46.4 9.044 0 17.483 2.587 24.617 7.063M123.323 58.038a45.95 45.95 0 0 1 3.105 2.774M48.466 64.712a54.076 54.076 0 0 1 2.316-3.316M54.517 56.967C64.52 46.305 78.61 39.867 94 39.867M139.534 123.288a54.139 54.139 0 0 1-2.316 3.316M133.483 131.033c-10.004 10.662-24.092 17.1-39.483 17.1"
            stroke="#000"
            strokeWidth={2}
            strokeMiterlimit={10}
        />
        <Path
            d="m105.6 94 13.533 13.533-11.6 11.6L94 105.6l-13.533 13.533-11.6-11.6L82.4 94 68.867 80.467l11.6-11.6L94 82.4l13.533-13.533 11.6 11.6L105.6 94Z"
            stroke="#000"
            strokeWidth={2}
            strokeMiterlimit={10}
        />
    </Svg>
);

export default Discount;
