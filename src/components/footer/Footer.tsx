import React, { useState } from 'react';
import { Columns, Box, Flex, Image, DropdownMenu, Button } from 'bumbag';
import { footerData } from './FooterData';
import { FooterLinkSm, FooterLinkMd } from './FooterElements';
import { NavIcon } from '../../theme/Theme';
import { LangItem } from './FooterElements';
import { useTranslation } from 'react-i18next';

export function Footer(): JSX.Element {
    const { i18n } = useTranslation();
    const languages: any = {
        en: 'English',
        tr: 'Türkçe',
    };
    const langData = [
        { key: 'en', name: 'English' },
        { key: 'tr', name: 'Turkish' },
    ];
    const localLng: any = localStorage.getItem('i18nextLng');
    const initialLang = localLng ? localLng : 'en';
    const [lang, setLang] = useState(initialLang);
    const { links, logoSrc, specialLinks } = footerData;

    const handleClick = (event: any) => {
        const lang = event.currentTarget.dataset.value;
        setLang(lang);
        i18n.changeLanguage(lang);
    };
    return (
        <Columns margin={'1rem 2rem 0'} paddingBottom={'2rem'}>
            <Columns.Column spread={12} padding={'0'} marginBottom={'0.5rem'}>
                <Flex>
                    <Image style={{ width: '80px' }} src={logoSrc} />
                </Flex>
            </Columns.Column>
            <Columns.Column spread={6} padding={'0'}>
                <Flex flexWrap={'wrap'}>
                    {links.map((link, index) => {
                        return (
                            <Box style={{ width: '170px', margin: '0.2rem 0' }} key={index}>
                                <FooterLinkSm>{link}</FooterLinkSm>
                            </Box>
                        );
                    })}
                </Flex>
            </Columns.Column>
            <Columns.Column spread={3} padding={'0'}>
                {specialLinks.map((link, index) => {
                    return (
                        <Flex key={index} marginBottom={'0.8rem'}>
                            <NavIcon
                                aria-label="Footer navlcon"
                                icon={`solid-${link.navIcon}`}
                                fontSize={'1.2rem'}
                                marginRight={'0.3rem'}
                            />
                            <Flex flexDirection={'column'}>
                                <FooterLinkMd>{link.title}</FooterLinkMd>
                                <FooterLinkSm fontWeight={'300'}>{link.text}</FooterLinkSm>
                            </Flex>
                        </Flex>
                    );
                })}
            </Columns.Column>
            <Columns.Column spread={3} padding={'0'}>
                <Box>
                    <DropdownMenu
                        menu={
                            <React.Fragment>
                                {langData.map((language, index) => {
                                    return (
                                        <>
                                            <LangItem
                                                language={language}
                                                chosenLang={lang}
                                                key={index}
                                                handleClick={(event) => handleClick(event)}
                                            />
                                        </>
                                    );
                                })}
                            </React.Fragment>
                        }
                    >
                        <Button
                            iconAfter="solid-sort-down"
                            size="small"
                            width={'100%'}
                            justifyContent={'space-between'}
                        >
                            {languages[lang]}
                        </Button>
                    </DropdownMenu>
                </Box>
            </Columns.Column>
        </Columns>
    );
}
