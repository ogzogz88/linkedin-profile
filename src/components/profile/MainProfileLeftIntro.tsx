import React from 'react';
import { Columns, Flex } from 'bumbag';
import {
    MainPageIcon,
    MainPageIconContainer,
    ProfileTextLg,
    ProfileTextMd,
    ProfileTextSm,
    ProfileTextXs,
} from './MainProfileLeftElements';
import { useTranslation } from 'react-i18next';

interface LeftIntro {
    name: string;
    lastName: string;
    displayName: string;
    email: string;
    headline: string;
    industry: string;
    location: string;
    country: string;
    company: string;
    education: string;
}
export const MainProfileLeftIntro: React.FC<LeftIntro> = ({
    name,
    lastName,
    displayName,
    email,
    headline,
    industry,
    location,
    country,
    company,
    education,
}: LeftIntro) => {
    const { i18n } = useTranslation();
    const mainProfileLeftData = i18n.t<any>('mainProfileLeftData', { returnObjects: true });
    const {
        userName,
        userLastName,
        userEmail,
        userHeadline,
        userIndustry,
        userLocation,
        userCountry,
        userCompany,
        userEducation,
    } = mainProfileLeftData[0].basic;
    // display name in necessary when user only sgin in with google
    let nameLastName;
    if (name && lastName) {
        nameLastName = `${name} ${lastName}`;
    } else if (displayName) {
        nameLastName = displayName;
    }
    return (
        <Columns marginTop="0.25rem" paddingBottom="1rem">
            <Columns.Column spread={8}>
                <Flex flexDirection="column" marginLeft="1.5rem">
                    <ProfileTextLg textTransform="capitalize">
                        {nameLastName ? nameLastName : `${userName} ${userLastName}`}
                    </ProfileTextLg>
                    <ProfileTextSm>{email ? email : userEmail}</ProfileTextSm>
                    <ProfileTextMd>{headline ? headline : userHeadline}</ProfileTextMd>
                    <ProfileTextMd>{industry ? industry : userIndustry}</ProfileTextMd>
                    <ProfileTextSm>
                        {location ? location : userLocation}, {country ? country : userCountry}
                    </ProfileTextSm>
                </Flex>
            </Columns.Column>
            {/* company and education at intro */}
            <Columns.Column spread={4}>
                <Flex flexDirection="column" paddingRight="0.5rem">
                    <Flex alignItems="center">
                        <MainPageIconContainer
                            marginRight="0.6rem"
                            marginBottom="0.6rem"
                            borderRadius="0%"
                            background="#eee"
                        >
                            <MainPageIcon width="2rem" height="2rem" src="../../assets/icons/company-icon.png" />
                        </MainPageIconContainer>
                        <ProfileTextXs fontWeight="bold">{company ? company : userCompany} </ProfileTextXs>
                    </Flex>
                    <Flex alignItems="center">
                        <MainPageIconContainer marginRight="0.6rem" borderRadius="0%" background="#eee">
                            <MainPageIcon width="2rem" height="2rem" src="../../assets/icons/education-icon.png" />
                        </MainPageIconContainer>
                        <ProfileTextXs fontWeight="bold">{education ? education : userEducation} </ProfileTextXs>
                    </Flex>
                </Flex>
            </Columns.Column>
        </Columns>
    );
};
