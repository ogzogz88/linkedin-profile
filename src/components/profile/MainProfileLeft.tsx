import React from 'react';
import { Flex, Card } from 'bumbag';
import { ProfileEditLink, ProfileTextMd, ProfileTextXs, MainPageIconContainerSec } from './MainProfileLeftElements';
import { UpdateModalAbout } from '../update/UpdateModalAbout';
import { MainProfileLeftImg } from './MainProfileLeftImg';
import { MainProfileLeftIntro } from './MainProfileLeftIntro';
import { useTranslation } from 'react-i18next';

export function MainProfileLeft({ user }: any): JSX.Element {
    const { i18n } = useTranslation();
    const mainProfileLeftData = i18n.t<any>('mainProfileLeftData', { returnObjects: true });
    const { profile, more } = mainProfileLeftData[0].introButtons;
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
            <Card padding="0" borderRadius="0.5rem" position="relative">
                <MainProfileLeftImg photoURL={photoURL} profileTxt={profile} moreTxt={more} />
                <MainProfileLeftIntro
                    name={name}
                    lastName={lastName}
                    email={email}
                    headline={headline}
                    displayName={displayName}
                    company={company}
                    education={education}
                    country={country}
                    location={location}
                    industry={industry}
                />
            </Card>
            {/* About Card  */}
            <Card marginTop="2rem" position="relative">
                <Flex>
                    <Flex flexDirection="column">
                        <ProfileTextMd marginBottom="1rem">{mainProfileLeftData[0].about.title}</ProfileTextMd>
                        <ProfileTextXs>{about ? about : mainProfileLeftData[0].about.text}</ProfileTextXs>
                    </Flex>
                </Flex>
                <ProfileEditLink position="absolute" right="1rem" top="1rem">
                    <MainPageIconContainerSec margin="0">
                        <UpdateModalAbout />
                    </MainPageIconContainerSec>
                </ProfileEditLink>
            </Card>
        </>
    );
}
