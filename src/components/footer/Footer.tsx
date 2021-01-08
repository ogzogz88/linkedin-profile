import React, { useState } from 'react';
import { Columns, Box, Flex, Image, DropdownMenu, Button } from 'bumbag';
import { footerData } from './FooterData';
import { FooterLinkSm, FooterLinkMd } from './FooterElements';
import { NavIcon } from '../../theme/Theme';
import { useTranslation } from 'react-i18next';

export function Footer(): JSX.Element {
    const { i18n } = useTranslation();

    const [lang, setLang] = useState('English');
    const { links, logoSrc, specialLinks } = footerData;
    // const handleChange = (value: any) => {
    //     setLang(value);
    //     const languages: any = {
    //         English: 'en',
    //         Türkçe: 'tr',
    //     };
    //     i18n.changeLanguage(languages[value]);
    // };
    const handleClick = (event: any) => {
        const lang = event.currentTarget.dataset.value;
        setLang(lang);
        const languages: any = {
            English: 'en',
            Türkçe: 'tr',
        };
        i18n.changeLanguage(languages[lang]);
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
                    {/* <DropdownMenu
                        menu={
                            <React.Fragment>
                                <DropdownMenu.OptionGroup
                                    onChange={(value) => handleChange(value)}
                                    value={lang}
                                    title="Select Language"
                                    type="radio"
                                >
                                    <DropdownMenu.OptionItem hideOnClick={true} value="English">
                                        English
                                    </DropdownMenu.OptionItem>
                                    <DropdownMenu.OptionItem hideOnClick={true} value="Turkish">
                                        Turkish
                                    </DropdownMenu.OptionItem>
                                </DropdownMenu.OptionGroup>
                            </React.Fragment>
                        }
                    >
                        <Button
                            iconAfter="solid-sort-down"
                            size="small"
                            width={'100%'}
                            justifyContent={'space-between'}
                        >
                            {lang}
                        </Button>
                    </DropdownMenu> */}
                    <DropdownMenu
                        menu={
                            <React.Fragment>
                                <DropdownMenu.Item
                                    data-value={'English'}
                                    onClick={(event) => handleClick(event)}
                                    background={lang === 'English' ? '#574feb' : ''}
                                    color={lang === 'English' ? '#fff' : ''}
                                >
                                    English
                                </DropdownMenu.Item>
                                <DropdownMenu.Item
                                    data-value={'Türkçe'}
                                    onClick={(event) => handleClick(event)}
                                    background={lang === 'Türkçe' ? '#574feb' : ''}
                                    color={lang === 'Türkçe' ? '#fff' : ''}
                                >
                                    Türkçe
                                </DropdownMenu.Item>
                            </React.Fragment>
                        }
                    >
                        <Button
                            iconAfter="solid-sort-down"
                            size="small"
                            width={'100%'}
                            justifyContent={'space-between'}
                        >
                            {lang}
                        </Button>
                    </DropdownMenu>
                </Box>
            </Columns.Column>
        </Columns>
    );
}
