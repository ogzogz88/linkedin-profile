import React from 'react';
import { Text, Box, Popover, Link, Divider, Flex, Button, Stack, Set, Image, applyTheme } from 'bumbag';
import { NavIcon } from './NavIcons';

const NavText = applyTheme(Text, {
    styles: {
        base: {
            fontWeight: 'lighter',
            fontSize: '14px',
            display: 'block',
            lineHeight: '2rem',
        },
    },
});
const NavHeader = applyTheme(Text, {
    styles: {
        base: {
            fontWeight: 'bold',
            display: 'block',
            lineHeight: '1.25rem',
            marginTop: '0.5rem',
        },
    },
});
const NavButton = applyTheme(Button, {
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

const NavImage = applyTheme(Image, {
    styles: {
        base: {
            borderRadius: '50%',
            width: '50px',
        },
    },
});

export const PopoverContent: React.FC = () => {
    return (
        <Box>
            <Stack>
                <Box>
                    <Flex alignX="center" alignY="center" style={{ position: 'relative' }}>
                        <Box style={{ position: 'absolute', top: 0, left: 0 }}>
                            <NavImage src="../../assets/photos/ogz.jpg" alt="Profile Picture" />
                        </Box>
                        <Box style={{ marginLeft: '3.5rem', fontSize: '1rem' }}>
                            <NavHeader style={{ marginTop: '0' }}>Oğuzhan Alagoz</NavHeader>
                            <NavText style={{ lineHeight: '1rem' }}>
                                Network Administrator at Ministry of Interior
                            </NavText>
                        </Box>
                    </Flex>
                </Box>
                <Set>
                    <NavButton variant="outlined" palette="primary" width="100%">
                        View Profile
                    </NavButton>
                </Set>
            </Stack>

            <Text.Block>
                <Divider />
                <NavHeader>Account</NavHeader>
                <NavText>Settings & Privacy</NavText>
                <NavText>Help</NavText>
                <NavText>Language</NavText>
                <Divider />
                <NavHeader fontWeight="bold">Manage</NavHeader>
                <NavText>Posts & Activity</NavText>
                <NavText>Job Posting Account</NavText>
                <Divider />
                <PageLink href="/">Sign Out</PageLink>
            </Text.Block>
        </Box>
    );
};
export const PopoverIcon: React.FC | any = () => {
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

const PageLink = applyTheme(Link, {
    styles: {
        base: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none',
            margin: '0px',
            ':hover': {
                textDecoration: 'none',
                color: '#000',
            },
        },
    },
});

const CustomPopover = applyTheme(Popover, {
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

export const UserPopover: React.FC = () => {
    return (
        <Popover.State>
            <Popover.Disclosure use={PageLink}>
                <PopoverIcon />
            </Popover.Disclosure>
            <CustomPopover>
                <PopoverContent />
            </CustomPopover>
        </Popover.State>
    );
};
