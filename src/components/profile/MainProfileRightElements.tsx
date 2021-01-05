import { Flex, Image, applyTheme, Button, Link, Card, Box, Text, Tooltip } from 'bumbag';

export const ProfileTextLg = applyTheme(Text, {
    styles: {
        base: {
            fontSize: '1.5rem',
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
export const ProfileTextMd = applyTheme(Text, {
    styles: {
        base: {
            fontSize: '1rem',
            color: '#666666',
            fontWeight: '600',
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
export const ProfileTextSm = applyTheme(Text, {
    styles: {
        base: {
            fontSize: '0.8rem',
            color: '#222',
            fontWeight: '600',
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
export const ProfileTextXs = applyTheme(Text, {
    styles: {
        base: {
            fontSize: '0.7rem',
            color: '#666666',
            fontWeight: '600',
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
export const BackgroundImg = applyTheme(Image, {
    styles: {
        base: {
            fit: 'contain',
            fitPosition: 'top',
            width: '100%',
            height: '102%',
            alt: 'see jobs link photo',
            margin: '0px',
        },
    },
});
export const BackgroundImgContainer = applyTheme(Flex, {
    styles: {
        base: {
            margin: '0px',
            padding: '0.5rem',
            background: '#fff',
            borderRadius: '0.5rem',
            cursor: 'pointer',
        },
    },
});
export const AlsoViewedTextContainer = applyTheme(Flex, {
    styles: {
        base: {
            justifyContent: 'space-between',
            width: '100%',
            marginLeft: '0.4rem',
            borderBottom: '1px solid #ddd',
            paddingBottom: '0.7rem',
        },
    },
    modes: {
        dark: {
            defaultProps: {
                borderBottom: '1px solid #B1B7C2',
            },
        },
    },
});
export const IconContainer = applyTheme(Flex, {
    styles: {
        base: {
            padding: '8px',
            border: '1px solid #666666',
            borderRadius: '50%',
            cursor: 'pointer',
            alignItems: 'center',
            width: '35px',
            height: '35px',
            alignSelf: 'center',
            transition: 'all 0.2s ease-in-out',
            ':hover': {
                border: '2px solid #666666',
                background: '#ddd',
                padding: '7px',
            },
        },
    },
    modes: {
        dark: {
            defaultProps: {
                border: '1px solid #B1B7C2',
            },
        },
    },
});
export const ProfileImage = applyTheme(Image, {
    styles: {
        base: {
            borderRadius: '50%',
            width: '50px',
            height: '50px',
        },
    },
});
export const CardToolTip = applyTheme(Tooltip, {
    styles: {
        base: {
            fontSize: '0.8rem',
        },
    },
    Content: {
        styles: {
            base: {
                background: '#fff',
                color: '#222',
                width: '300px',
                boxShadow: '0 0 5px #aaa',
                borderRadius: '0.5rem',
                padding: '0.5rem',
            },
        },
    },
});
