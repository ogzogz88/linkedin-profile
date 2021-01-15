import React, { useState } from 'react';
import { Columns, Box, Flex, Image, DropdownMenu, Button } from 'bumbag';
import { FooterLinkSm, FooterLinkMd } from './FooterElements';
import { NavIcon } from '../../theme/Theme';
import { LangItem } from './FooterElements';
import { useTranslation } from 'react-i18next';

export function Footer(): JSX.Element {
    const { i18n } = useTranslation();

    type specialLinksArray = { title: string; text: string; navIcon: string };
    interface NewType {
        links: string[];
        logoSrc: string;
        specialLinks: Array<specialLinksArray>;
    }
    const footerData = i18n.t<NewType>('footerData', { returnObjects: true });
    const { links, logoSrc, specialLinks } = footerData;
    interface Languages {
        en: string;
        tr: string;
        [key: string]: Languages[keyof Languages];
    }
    const languages: Languages = {
        en: 'English',
        tr: 'Türkçe',
    };
    const langData = [
        { key: 'en', name: 'English' },
        { key: 'tr', name: 'Türkçe' },
    ];
    const localLng: string | null = localStorage.getItem('i18nextLng');
    const initialLang = localLng ? localLng : 'en';
    const [lang, setLang] = useState(initialLang);
    const handleClick = (event: { currentTarget: { dataset: { value: string } } }) => {
        const lang = event.currentTarget.dataset.value;
        setLang(lang);
        i18n.changeLanguage(lang);
    };
    return (
        <Columns margin="1rem 2rem 0" paddingBottom="2rem">
            <Columns.Column spread={12} padding="0" marginBottom="0.5rem">
                <Flex>
                    <Image width="80px" src={logoSrc} />
                </Flex>
            </Columns.Column>
            <Columns.Column spread={6} padding="0">
                <Flex flexWrap="wrap">
                    {links.map((link: string, index: number) => {
                        return (
                            <Box width="170px" margin="0.2rem 0" key={index}>
                                <FooterLinkSm key={index}>{link}</FooterLinkSm>
                            </Box>
                        );
                    })}
                </Flex>
            </Columns.Column>
            <Columns.Column spread={3} padding="0">
                {specialLinks.map((link: specialLinksArray, index: number) => {
                    return (
                        <Flex key={index} marginBottom="0.8rem">
                            <NavIcon
                                aria-label="Footer navlcon"
                                icon={`solid-${link.navIcon}`}
                                fontSize="1.2rem"
                                marginRight="0.3rem"
                                key={index}
                            />
                            <Flex flexDirection="column" key={index + 1}>
                                <FooterLinkMd>{link.title}</FooterLinkMd>
                                <FooterLinkSm fontWeight="300">{link.text}</FooterLinkSm>
                            </Flex>
                        </Flex>
                    );
                })}
            </Columns.Column>
            <Columns.Column spread={3} padding="0">
                <Box>
                    <DropdownMenu
                        menu={
                            <React.Fragment>
                                {langData.map((language, index) => {
                                    return (
                                        <LangItem
                                            language={language}
                                            chosenLang={lang}
                                            key={index}
                                            handleClick={(event) => handleClick(event)}
                                        />
                                    );
                                })}
                            </React.Fragment>
                        }
                    >
                        <Button iconAfter="solid-sort-down" size="small" width="100%" justifyContent="space-between">
                            {languages[lang]}
                        </Button>
                    </DropdownMenu>
                </Box>
            </Columns.Column>
        </Columns>
    );
}
