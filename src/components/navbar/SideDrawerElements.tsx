import { Drawer, Flex, Text, Image, applyTheme } from 'bumbag';

export const SideDrawerIconContainer = applyTheme(Flex, {
    styles: {
        base: {
            boxShadow: '0px 0px 3px 1px #eee ',
            padding: '1px',
            borderRadius: '4px',
            boxSizing: 'border-box',
            marginRight: '30px',
        },
    },
});
export const NavImage = applyTheme(Image, {
    styles: {
        base: {
            borderRadius: '50%',
            width: '40px',
        },
    },
});
export const NavHeader = applyTheme(Text, {
    styles: {
        base: {
            fontSize: '1rem',
            fontWeight: '500',
            margin: '1rem',
            textAlign: 'left',
            display: 'block',
        },
    },
});
export const NavText = applyTheme(Text, {
    styles: {
        base: {
            textAlign: 'left',
            fontSize: '12px',
            display: 'block',
            color: '#666',
            marginTop: '2px',
            marginBottom: '15px',
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
export const NavSubHeader = applyTheme(Text, {
    styles: {
        base: {
            textAlign: 'left',
            fontWeight: '500',
            fontSize: '0.9rem',
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
export const NavSubText = applyTheme(Text, {
    styles: {
        base: {
            textAlign: 'left',
            fontSize: '12px',
            display: 'block',
            color: '#666',
            marginTop: '-2px',
            marginBottom: '2px',
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
export const CustomDrawer = applyTheme(Drawer, {
    styles: {
        base: {
            marginTop: '58px',
            borderRadius: '8px 8px 0 0',
            cursor: 'default',
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
