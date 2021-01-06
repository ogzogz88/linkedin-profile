import { Link, applyTheme } from 'bumbag';

export const FooterLinkXs = applyTheme(Link, {
    styles: {
        base: {
            fontSize: '0.65rem',
            color: '#56687a',
        },
    },
    modes: {
        dark: {
            defaultProps: {
                color: '#B1B7C2',
            },
        },
    },
});

export const FooterLinkSm = applyTheme(Link, {
    styles: {
        base: {
            fontSize: '0.75rem',
            color: '#56687a',
        },
    },
    modes: {
        dark: {
            defaultProps: {
                color: '#B1B7C2',
            },
        },
    },
});

export const FooterLinkMd = applyTheme(Link, {
    styles: {
        base: {
            fontSize: '1rem',
            color: '#56687a',
        },
    },
    modes: {
        dark: {
            defaultProps: {
                color: '#B1B7C2',
            },
        },
    },
});
