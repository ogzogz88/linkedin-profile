/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { Text, Box, Popover, Link, Divider, Flex, Button, Stack, Set, Image, applyTheme } from 'bumbag';
import { NavIcon } from '../../theme/Theme';
import { logOut } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';
import { useTranslation } from 'react-i18next';

export const NavText = applyTheme(Text, {
    styles: {
        base: {
            fontWeight: 'lighter',
            fontSize: '14px',
            display: 'block',
            lineHeight: '2rem',
        },
    },
});
export const NavHeader = applyTheme(Text, {
    styles: {
        base: {
            fontWeight: 'bold',
            display: 'block',
            lineHeight: '1.25rem',
            marginTop: '0.5rem',
        },
    },
});
export const NavButton = applyTheme(Button, {
    styles: {
        base: {
            fontWeight: 'light',
            width: '100%',
            fontSize: '14px',
            minHeight: '1rem',
            marginBottom: '1rem',
            borderRadius: '1rem',
            ':focus': {
                boxShadow: 'none!important',
            },
        },
    },
});
export const NavImage = applyTheme(Image, {
    styles: {
        base: {
            borderRadius: '50%',
            width: '50px',
        },
    },
});
export const PageLink = applyTheme(Link, {
    styles: {
        base: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#545454',
            textDecoration: 'none',
            margin: '0px',
            ':hover': {
                textDecoration: 'none',
                color: '#000',
            },
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
export const CustomPopover = applyTheme(Popover, {
    styles: {
        base: {
            padding: '0px',
            width: '270px',
            ':focus': {
                color: '#545454',
            },
            ':focus-within': {
                color: '#545454',
            },
            ':hover': {
                color: '#545454',
            },
            ':active': {
                color: '#545454',
            },
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
export const PopoverContent: React.FC = () => {
    const { user } = useContext(UserContext);
    const { photoURL, name, lastName, displayName, headline }: any = user;
    const { i18n } = useTranslation();
    const mainProfileLeftData = i18n.t<any>('mainProfileLeftData', { returnObjects: true });
    const userPopoverData = i18n.t<any>('userPopoverData', { returnObjects: true })
    const {
        userName,
        userLastName,
        userHeadline
    } = mainProfileLeftData[0].basic;
    const {
        viewProfile,
        account,
        settings,
        help,
        language,
        manage,
        posts,
        jobPosting,
        signout } = userPopoverData;
    // display name in necessary when user only sgin in with google
    let nameLastName;
    if (name && lastName) {
        nameLastName = `${name} ${lastName}`;
    } else if (displayName) {
        nameLastName = displayName;
    }
    return (
        <Box padding={'0.5rem 0'}>
            <Stack>
                <Box>
                    <Flex alignX="center" alignY="center" style={{ position: 'relative' }}>
                        <Box style={{ position: 'absolute', top: 0, left: 0 }}>
                            <NavImage
                                src={photoURL ? `${photoURL}` : '../../assets/photos/profile.png'}
                                alt="Profile Picture"
                            />
                        </Box>
                        <Box style={{ marginLeft: '3.5rem', fontSize: '1rem' }}>
                            <NavHeader style={{ marginTop: '0', textTransform: 'capitalize' }}>
                                {nameLastName ? nameLastName : `${userName} ${userLastName}`}
                            </NavHeader>
                            <NavText style={{ lineHeight: '1rem' }}>{headline ? headline : userHeadline}</NavText>
                        </Box>
                    </Flex>
                </Box>
                <Set>
                    <NavButton variant="outlined" palette="primary" width="100%">
                        {viewProfile}                    </NavButton>
                </Set>
            </Stack>
            <Text.Block>
                <Divider />
                <NavHeader>{account}</NavHeader>
                <NavText>{settings}</NavText>
                <NavText>{help}</NavText>
                <NavText>{language}</NavText>
                <Divider />
                <NavHeader fontWeight="bold">{manage}</NavHeader>
                <NavText>{posts}</NavText>
                <NavText>{jobPosting}</NavText>
                <Divider />
                <PageLink fontWeight={'normal'} fontSize={'14px'} alignItems={'flex-start'} onClick={logOut} href='/'>{signout}</PageLink>
            </Text.Block>
        </Box>
    );
};
export const PopoverIcon: React.FC = () => {
    return (
        <NavIcon
            aria-label="Navlcon"
            icon="solid-sort-down"
            style={{
                margin: 0,
                padding: 0,
                width: '25px',
                height: '20px',
                position: 'relative',
                top: '-5px',
            }}
        />
    );
};
