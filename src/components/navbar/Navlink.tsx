/* eslint-disable react/prop-types */
import React from 'react';
import { Link, Box, applyTheme } from 'bumbag';

const PageLink = applyTheme(Link, {
    styles: {
        base: {
            fontSize: '22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none',
            margin: '0 1.5rem',
            ':hover': {
                textDecoration: 'none',
                color: '#000',
            },
        },
    },
});
export const NavDivider = applyTheme(Box, {
    modes: {
        default: {
            defaultProps: {
                borderLeft: '2px solid #F3F2EF',
                height: '60px',
            },
        },
        dark: {
            defaultProps: {
                borderLeft: '1px solid #4c586a',
                height: '60px',
            },
        },
    },
});

type Props = {
    children: React.ReactNode;
    href: string;
    key: number;
    style?: React.CSSProperties | undefined;
};
export const Navlink: React.FC<Props> = ({ children, href, key, style }) => {
    return (
        <PageLink key={key} href={href} style={style}>
            {children}
        </PageLink>
    );
};
