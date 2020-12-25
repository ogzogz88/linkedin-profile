import React from 'react';
import { Columns, Box, Flex, Card, Image, applyTheme, Set, Button, Link, Icon, Text } from 'bumbag';
import SideProfile from './SideProfile';

const ProfileImg = applyTheme(Image, {
    styles: {
        base: {
            border: '5px solid white',
            borderRadius: '50%',
            width: '150px',
            top: '100px',
            left: '30px',
            position: 'absolute',
        },
    },
});
const BackgroundImg = applyTheme(Image, {
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
const ProfileEditLink = applyTheme(Link, {
    styles: {
        base: {
            margin: '0px',
        },
    },
});
export const NavIcon = applyTheme(Icon, {
    styles: {
        base: {
            color: '#545454',
            ':hover': {
                color: '#000',
            },
        },
    },
});
const MainPageIcon = applyTheme(Image, {
    styles: {
        base: {
            width: '1.5rem',
            height: '1.5rem',
            background: 'transparent',
        },
    },
});
const MainPageIconContainer = applyTheme(Flex, {
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
});

function MainProfile(): JSX.Element {
    return (
        <Columns style={{ marginTop: '2rem' }}>
            <Columns.Column spread={8}>
                <Card style={{ padding: 0, borderRadius: '0.5rem', position: 'relative' }}>
                    <BackgroundImg src="../../assets/photos/profile-bg.jpg" />
                    <ProfileImg src="../../assets/photos/ogz.jpg" />
                    <Set style={{ justifyContent: 'flex-end', marginTop: '0.3rem' }}>
                        <Button
                            size="small"
                            palette="primary"
                            width="200px"
                            borderRadius="1rem"
                            fontSize="1rem"
                            marginRight="0.5rem"
                        >
                            Add profile section
                        </Button>
                        <Button size="small" borderRadius="1rem" color="#aaa" border="1pz solid #aaa" fontSize="1rem">
                            More...
                        </Button>
                        <ProfileEditLink>
                            <MainPageIconContainer>
                                <MainPageIcon src="../../assets/icons/pencil-icon.png" />
                            </MainPageIconContainer>
                        </ProfileEditLink>
                    </Set>
                    <Columns style={{ marginTop: '2rem' }}>
                        <Columns.Column spread={8}>
                            <Flex flexDirection="column">
                                <Text>aaa</Text>
                                <Text>aaa</Text>
                                <Text>aaa</Text>
                            </Flex>
                        </Columns.Column>
                        <Columns.Column spread={4}>
                            <Flex flexDirection="column">
                                <Flex>flex1</Flex>
                                <Flex>flex2</Flex>
                            </Flex>
                        </Columns.Column>
                    </Columns>
                </Card>
            </Columns.Column>
            <Columns.Column spread={4}>
                <SideProfile />
            </Columns.Column>
        </Columns>
    );
}

export default MainProfile;
