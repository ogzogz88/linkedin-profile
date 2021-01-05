import React from 'react';
import { Card, Box, Flex, Divider, Button } from 'bumbag';
import { ProfileTextSm, ProfileTextXs, CardToolTip, BackgroundImg, ImgContainer } from './MainProfileRightElements';
import { data } from './MainProfileRightData';

export function MainProfileRight(): JSX.Element {
    const { textCard } = data[0];
    return (
        <>
            <Card marginBottom={'1.5rem'}>
                <Flex flexDirection={'column'}>
                    {textCard.map((item, index) => {
                        return (
                            <>
                                <Flex key={index} justifyContent={'space-between'}>
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
            <ImgContainer>
                <BackgroundImg src="../../assets/photos/see-jobs.jpg" />
            </ImgContainer>
        </>
    );
}
