import React, { useState } from 'react';
import { Columns, Box, Flex, Image, DropdownMenu, Button } from 'bumbag';
import { footerData } from './FooterData';
import { FooterLinkSm, FooterLinkMd } from './FooterElements';
import { NavIcon } from '../../theme/Theme';

export function Footer(): JSX.Element {
    const languages = [
        {
            name: 'English',
            code: 'en',
        },
        {
            name: 'Turkish',
            code: 'tr',
        },
    ];
    const [lang, setLang] = useState<any>('English');
    const { links, logoSrc, specialLinks } = footerData;

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
                                <DropdownMenu.OptionGroup
                                    onChange={setLang}
                                    value={lang}
                                    title="Select Language"
                                    type="radio"
                                >
                                    <DropdownMenu.OptionItem value="English">English</DropdownMenu.OptionItem>
                                    <DropdownMenu.OptionItem value="Turkish">Turkish</DropdownMenu.OptionItem>
                                </DropdownMenu.OptionGroup>
                            </React.Fragment>
                        }
                        onChange={setLang}
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
