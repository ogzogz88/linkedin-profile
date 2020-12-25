import { Flex, Image, applyTheme, Button, Link, Icon, Text } from 'bumbag';

export const ProfileImg = applyTheme(Image, {
    styles: {
        base: {
            border: '5px solid white',
            borderRadius: '50%',
            width: '150px',
            top: '100px',
            left: '1.5rem',
            position: 'absolute',
        },
    },
    modes: {
        dark: {
            defaultProps: {
                border: '4px solid #303847',
                backgorund: '#303847',
            },
        },
    },
});
export const BackgroundImg = applyTheme(Image, {
    styles: {
        base: {
            fit: 'contain',
            fitPosition: 'top',
            width: '795px',
            alt: 'profile background',
            borderRadius: '0.5rem 0.5rem 0 0',
        },
    },
});
export const ProfileEditLink = applyTheme(Link, {
    styles: {
        base: {
            margin: '0px',
        },
    },
});
export const MainPageIcon = applyTheme(Image, {
    styles: {
        base: {
            width: '1.5rem',
            height: '1.5rem',
            background: 'transparent',
        },
    },
});
export const MainPageIconContainer = applyTheme(Flex, {
    styles: {
        base: {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            width: '2.4rem',
            height: '2.4rem',
            margin: '0 1rem',
            ':hover': {
                background: '#ebebeb',
            },
        },
    },
    modes: {
        dark: {
            defaultProps: {
                background: '#F3F2EF',
            },
        },
    },
});
export const MainPageIconContainerSec = applyTheme(Flex, {
    styles: {
        base: {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            width: '2.4rem',
            height: '2.4rem',
            margin: '0 1rem',
            ':hover': {
                background: '#E2F0FE',
            },
        },
    },
    modes: {
        dark: {
            defaultProps: {
                background: '#E2F0FE',
            },
        },
    },
});
export const AddButton = applyTheme(Button, {
    styles: {
        base: {
            width: '200px',
            borderRadius: '1rem',
            fontSize: '1rem!important',
            marginRight: '0.5rem',
        },
    },
});
export const MoreButton = applyTheme(Button, {
    styles: {
        base: {
            borderRadius: '1rem',
            color: '#aaa',
            border: '1pz solid #aaa',
            fontSize: '1rem!important',
        },
    },
});
export const ProfileTextLg = applyTheme(Text, {
    styles: {
        base: {
            fontSize: '1.5rem',
        },
    },
});
export const ProfileTextMd = applyTheme(Text, {
    styles: {
        base: {
            fontSize: '1.2rem',
        },
    },
});
export const ProfileTextSm = applyTheme(Text, {
    styles: {
        base: {
            fontSize: '1rem',
        },
    },
});
export const ProfileTextXs = applyTheme(Text, {
    styles: {
        base: {
            fontSize: '0.9rem',
        },
    },
});
