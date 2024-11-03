// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React from 'react';
import '../Controls/Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test', 'close-btn'];

const SIZES = ['btn--medium', 'btn--large'];

export const CloseButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[3];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/' className='btn-mobile'>
            <button
                className={'close-btn'}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};