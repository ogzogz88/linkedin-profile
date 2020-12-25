/* eslint-disable react/prop-types */
import React from 'react';
import { Text, applyTheme } from 'bumbag';

const LinkText = applyTheme(Text, {
    styles: {
        base: {
            fontSize: '12px',
            margin: 0,
            fontWeight: 'lighter',
            color: '#545454',
            textDecoration: 'none',
            ':hover': {
                color: '#000',
            },
        },
    },
});
type Props = {
    children: React.ReactNode;
};
const NavText: React.FC<Props> = ({ children }) => {
    return <LinkText>{children}</LinkText>;
};

export default NavText;
