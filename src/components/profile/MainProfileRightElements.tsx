import { Flex, Image, applyTheme, Button, Link, Card, Box, Text, Tooltip } from 'bumbag';

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
            color: '#666666',
            fontWeight: '600',
        },
    },
});
export const ProfileTextSm = applyTheme(Text, {
    styles: {
        base: {
            fontSize: '0.8rem',
            color: '#666666',
            fontWeight: '600',
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
export const ImgContainer = applyTheme(Flex, {
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
