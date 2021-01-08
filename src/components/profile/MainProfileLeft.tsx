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
} from './MainProfileLeftElements';
import { data } from './MainProfileLeftData';
import { UpdateModalIntro } from '../update/UpdateModalIntro';
import { UpdateModalAbout } from '../update/UpdateModalAbout';
import { Translation } from './Translation'

export function MainProfileLeft({ user }: any): JSX.Element {
    const {
        photoURL,
        displayName,
        email,
        name,
        lastName,
        headline,
        company,
        education,
        country,
        location,
        industry,
        about,
    }: any = user;

    return (
        <>
            {/* Intro Card  */}
            <Card style={{ padding: 0, borderRadius: '0.5rem', position: 'relative' }}>
                <BackgroundImg src="../../assets/photos/profile-bg.jpg" />
                <ProfileImg src={photoURL ? `${photoURL}` : '../../assets/photos/profile.png'} />
                <Set style={{ justifyContent: 'flex-end', marginTop: '0.3rem' }}>
                    <AddButton size="small" palette="primary">
                        Add profile section
                    </AddButton>
                    <MoreButton size="small">More...</MoreButton>
                    <ProfileEditLink>
                        <MainPageIconContainer>
                            <UpdateModalIntro />
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
                                        : `${data[0].basic.name} ${data[0].basic.lastname}`}
                            </ProfileTextLg>
                            <ProfileTextSm>{email ? email : data[0].basic.email}</ProfileTextSm>
                            <ProfileTextMd>{headline ? headline : data[0].basic.headline}</ProfileTextMd>
                            <ProfileTextMd>{industry ? industry : data[0].basic.industry}</ProfileTextMd>
                            <ProfileTextSm>
                                {location ? location : data[0].basic.city}, {country ? country : data[0].basic.country}
                            </ProfileTextSm>
                        </Flex>
                    </Columns.Column>
                    {/* company and education at intro */}
                    <Columns.Column spread={4}>
                        <Flex flexDirection="column">
                            <Flex style={{ alignItems: 'center' }}>
                                <MainPageIconContainer
                                    style={{
                                        marginRight: '0.6rem',
                                        marginBottom: '0.6rem',
                                        borderRadius: '0%',
                                        background: '#eee',
                                    }}
                                >
                                    <MainPageIcon style={{ width: '2rem', height: '2rem' }} src="../../assets/icons/company-icon.png" />
                                </MainPageIconContainer>
                                <ProfileTextXs fontWeight="bold">
                                    {company ? company : data[0].basic.company}{' '}
                                </ProfileTextXs>
                            </Flex>
                            <Flex style={{ alignItems: 'center' }}>
                                <MainPageIconContainer
                                    style={{ marginRight: '0.6rem', borderRadius: '0%', background: '#eee' }}
                                >
                                    <MainPageIcon style={{ width: '2rem', height: '2rem' }} src="../../assets/icons/education-icon.png" />
                                </MainPageIconContainer>
                                <ProfileTextXs fontWeight="bold">
                                    {education ? education : data[0].basic.education}{' '}
                                </ProfileTextXs>
                            </Flex>
                        </Flex>
                    </Columns.Column>
                </Columns>
            </Card>
            {/* About Card  */}
            <Card style={{ marginTop: '2rem', position: 'relative' }}>
                <Flex>
                    <Flex flexDirection="column">
                        <ProfileTextMd marginBottom="1rem">{data[0].about.title}</ProfileTextMd>
                        <ProfileTextXs>{about ? about : data[0].about.text}</ProfileTextXs>
                    </Flex>
                </Flex>
                <ProfileEditLink style={{ position: 'absolute', right: '1rem', top: '1rem' }}>
                    <MainPageIconContainerSec margin={'0px'}>
                        <UpdateModalAbout />
                    </MainPageIconContainerSec>
                </ProfileEditLink>
            </Card>
            {/* translation example */}
            <Translation />
        </>
    );
}
