/* eslint-disable prettier/prettier */
import React from 'react';
import { Columns, Flex, Card, Set } from 'bumbag';
import {
    ProfileImg,
    BackgroundImg,
    ProfileEditLink,
    MainPageIcon,
    MainPageIconContainer,
    AddButton,
    MoreButton,
    ProfileTextLg,
    ProfileTextMd,
    ProfileTextSm,
    ProfileTextXs,
    MainPageIconContainerSec,
} from './MainProfileElements';
import { data } from './MainProfileData';
import SideProfile from './SideProfile';

function MainProfile({ user }: any): JSX.Element {
    const { photoURL, displayName, email, name, lastName }: any = user;

    return (
        <Columns style={{ marginTop: '2rem' }}>
            <Columns.Column spread={8}>
                <Card style={{ padding: 0, borderRadius: '0.5rem', position: 'relative' }}>
                    <BackgroundImg src="../../assets/photos/profile-bg.jpg" />
                    {/* <ProfileImg src="../../assets/photos/ogz.jpg" /> */}
                    <ProfileImg src={photoURL ? `${photoURL}` : '../../assets/photos/profile.png'} />
                    <Set style={{ justifyContent: 'flex-end', marginTop: '0.3rem' }}>
                        <AddButton size="small" palette="primary">
                            Add profile section
                        </AddButton>
                        <MoreButton size="small">More...</MoreButton>
                        <ProfileEditLink>
                            <MainPageIconContainer>
                                <MainPageIcon src="../../assets/icons/pencil-icon.png" />
                            </MainPageIconContainer>
                        </ProfileEditLink>
                    </Set>
                    <Columns style={{ marginTop: '0.25rem', paddingBottom: '1rem' }}>
                        <Columns.Column spread={8}>
                            <Flex flexDirection="column" marginLeft="1.5rem">
                                <ProfileTextLg textTransform={'capitalize'}>
                                    {name && lastName
                                        ? `${name} ${lastName}`
                                        : displayName
                                            ? displayName
                                            // eslint-disable-next-line prettier/prettier
                                            : `${data[0].basic.name} ${data[0].basic.lastname}`}
                                </ProfileTextLg>
                                <ProfileTextSm>{email ? email : data[0].basic.email}</ProfileTextSm>
                                <ProfileTextMd>{data[0].basic.headline}</ProfileTextMd>
                                <ProfileTextSm>
                                    {data[0].basic.city}, {data[0].basic.country}
                                </ProfileTextSm>
                            </Flex>
                        </Columns.Column>
                        <Columns.Column spread={4}>
                            <Flex flexDirection="column">
                                <Flex style={{ alignItems: 'center' }}>
                                    <MainPageIconContainer
                                        style={{
                                            marginRight: '0.3rem',
                                            marginBottom: '0.3rem',
                                            borderRadius: '0%',
                                            background: '#eee',
                                        }}
                                    >
                                        <MainPageIcon src="../../assets/icons/company-icon.png" />
                                    </MainPageIconContainer>
                                    <ProfileTextXs fontWeight="bold">{data[0].basic.company} </ProfileTextXs>
                                </Flex>
                                <Flex style={{ alignItems: 'center' }}>
                                    <MainPageIconContainer
                                        style={{ marginRight: '0.3rem', borderRadius: '0%', background: '#eee' }}
                                    >
                                        <MainPageIcon src="../../assets/icons/education-icon.png" />
                                    </MainPageIconContainer>
                                    <ProfileTextXs fontWeight="bold">{data[0].basic.education} </ProfileTextXs>
                                </Flex>
                            </Flex>
                        </Columns.Column>
                    </Columns>
                </Card>
                <Card style={{ marginTop: '2rem', position: 'relative' }}>
                    <Flex>
                        <Flex flexDirection="column">
                            <ProfileTextMd marginBottom="1rem">{data[0].about.title}</ProfileTextMd>
                            <ProfileTextXs>{data[0].about.text}</ProfileTextXs>
                        </Flex>
                    </Flex>
                    <ProfileEditLink style={{ position: 'absolute', right: '1rem', top: '1rem' }}>
                        <MainPageIconContainerSec margin={'0px'}>
                            <MainPageIcon
                                style={{ margin: '0px', color: '#0a66c2' }}
                                src="../../assets/icons/pencil-icon-secondary.png"
                            />
                        </MainPageIconContainerSec>
                    </ProfileEditLink>
                </Card>
            </Columns.Column>
            <Columns.Column spread={4}>
                <SideProfile />
            </Columns.Column>
        </Columns>
    );
}

export default MainProfile;
