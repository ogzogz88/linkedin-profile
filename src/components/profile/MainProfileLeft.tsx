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
import { UpdateModalIntro } from '../update/UpdateModalIntro';
import { UpdateModalAbout } from '../update/UpdateModalAbout';
import { Translation } from './Translation'
import { useTranslation } from 'react-i18next';


export function MainProfileLeft({ user }: any): JSX.Element {
    const { i18n } = useTranslation();
    const mainProfileLeftData = i18n.t<any>('mainProfileLeftData', { returnObjects: true });

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
                        {mainProfileLeftData[0].introButtons.profile}
                    </AddButton>
                    <MoreButton size="small">
                        {mainProfileLeftData[0].introButtons.more}
                    </MoreButton>
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
                                        : `${mainProfileLeftData[0].basic.name} ${mainProfileLeftData[0].basic.lastname}`}
                            </ProfileTextLg>
                            <ProfileTextSm>{email ? email : mainProfileLeftData[0].basic.email}</ProfileTextSm>
                            <ProfileTextMd>{headline ? headline : mainProfileLeftData[0].basic.headline}</ProfileTextMd>
                            <ProfileTextMd>{industry ? industry : mainProfileLeftData[0].basic.industry}</ProfileTextMd>
                            <ProfileTextSm>
                                {location ? location : mainProfileLeftData[0].basic.city}, {country ? country : mainProfileLeftData[0].basic.country}
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
                                    {company ? company : mainProfileLeftData[0].basic.company}{' '}
                                </ProfileTextXs>
                            </Flex>
                            <Flex style={{ alignItems: 'center' }}>
                                <MainPageIconContainer
                                    style={{ marginRight: '0.6rem', borderRadius: '0%', background: '#eee' }}
                                >
                                    <MainPageIcon style={{ width: '2rem', height: '2rem' }} src="../../assets/icons/education-icon.png" />
                                </MainPageIconContainer>
                                <ProfileTextXs fontWeight="bold">
                                    {education ? education : mainProfileLeftData[0].basic.education}{' '}
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
                        <ProfileTextMd marginBottom="1rem">{mainProfileLeftData[0].about.title}</ProfileTextMd>
                        <ProfileTextXs>{about ? about : mainProfileLeftData[0].about.text}</ProfileTextXs>
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
