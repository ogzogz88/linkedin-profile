import React from 'react';
import { Card, Box, Flex, Divider, List } from 'bumbag';
import {
    ProfileTextMd,
    ProfileTextSm,
    ProfileTextXs,
    CardToolTip,
    BackgroundImg,
    BackgroundImgContainer,
    ProfileImage,
    IconContainer,
    AlsoViewedTextContainer,
} from './MainProfileRightElements';
import { NavIcon } from '../../theme/Theme';
import { useTranslation } from 'react-i18next';

export function MainProfileRight(): JSX.Element {
    const { i18n } = useTranslation();
    const mainProfileRightData = i18n.t<any>('mainProfileRightData', { returnObjects: true });

    const { textCard } = mainProfileRightData[0];
    const { alsoViewed } = mainProfileRightData[1];
    return (
        <>
            {/* Info card with two text/link */}
            <Card marginBottom={'1.5rem'}>
                <Flex flexDirection={'column'}>
                    {textCard?.map((item: any, index: any) => {
                        return (
                            <>
                                <Flex key={index.toString()} justifyContent={'space-between'}>
                                    <ProfileTextSm>{item.text}</ProfileTextSm>
                                    <CardToolTip
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            alignItems: 'center',
                                            background: '#666666',
                                            borderRadius: '50%',
                                            width: '1rem',
                                            height: '1rem',
                                        }}
                                        content={item.tooltip}
                                        placement="bottom"
                                        fade
                                    >
                                        <ProfileTextXs color="#fff">?</ProfileTextXs>
                                    </CardToolTip>
                                </Flex>
                                {index === 0 && <Divider margin={'1rem 0'} />}
                            </>
                        );
                    })}
                </Flex>
            </Card>
            {/* advertisement card with image background */}
            <BackgroundImgContainer marginBottom={'24px'}>
                <BackgroundImg src="../../assets/photos/see-jobs.jpg" />
            </BackgroundImgContainer>
            {/* people also viewed card */}
            <Card>
                <Box marginBottom={'1rem'}>
                    <ProfileTextMd>{alsoViewed?.title}</ProfileTextMd>
                </Box>
                {alsoViewed?.data.map((item: any, index: any) => {
                    return (
                        <Flex key={index} justifyContent={'flex-start'} marginTop={'0.7rem'}>
                            <ProfileImage src={item.imgSrc} alt="Also viewed profile image" alignSelf={'top'} />
                            <AlsoViewedTextContainer>
                                <Flex flexDirection={'column'}>
                                    <ProfileTextSm>{item.name}</ProfileTextSm>
                                    <List
                                        listStyleType="disc"
                                        listStylePosition="inside"
                                        fontWeight={'300'}
                                        fontSize={'0.8rem'}
                                    >
                                        <List.Item fontSize={'0.5rem'}>
                                            <ProfileTextSm fontWeight={300} marginLeft="-4px">
                                                {item.order}
                                            </ProfileTextSm>
                                        </List.Item>
                                    </List>
                                    <ProfileTextSm fontWeight={'400'}>{item.headline}</ProfileTextSm>
                                </Flex>
                                <IconContainer>
                                    <NavIcon aria-label="Navlcon" icon={'solid-user'} />
                                    <ProfileTextSm>+</ProfileTextSm>
                                </IconContainer>
                            </AlsoViewedTextContainer>
                        </Flex>
                    );
                })}
            </Card>
        </>
    );
}
