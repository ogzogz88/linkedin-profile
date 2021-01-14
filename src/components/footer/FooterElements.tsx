import React from 'react';
import { Link, DropdownMenu, applyTheme } from 'bumbag';

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

interface LangItemInterface {
    language: { key: string; name: string };
    chosenLang: string;
    key: number;
    handleClick: (event: any) => void;
}
export const LangItem: React.FC<LangItemInterface> = ({
    chosenLang,
    language,
    key,
    handleClick,
}: LangItemInterface) => {
    const langSet = chosenLang === language.key;
    return (
        <DropdownMenu.Item
            key={key}
            data-value={language.key}
            onClick={(event) => handleClick(event)}
            background={langSet ? '#574feb' : ''}
            color={langSet ? '#fff' : '#888'}
        >
            {language.name}
        </DropdownMenu.Item>
    );
};
