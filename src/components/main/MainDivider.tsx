import React from 'react';
import { Divider, applyTheme } from 'bumbag';

const CustomDivider = applyTheme(Divider, {
    styles: {
        base: {
            margin: '1rem 2rem',
            border: '1px solid #ddd',
            borderWidth: '0 0 1px 0',
        },
    },
    modes: {
        dark: {
            defaultProps: {
                border: '1px solid #B1B7C2',
                borderWidth: '0 0 1px 0',
            },
        },
    },
});
export function MainDivider(): JSX.Element {
    return <CustomDivider />;
}
