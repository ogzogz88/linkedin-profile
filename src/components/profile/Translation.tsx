import React from 'react';
import { Card, Flex } from 'bumbag';
import { ProfileTextMd, ProfileTextSm } from './MainProfileLeftElements';
import { useTranslation } from 'react-i18next';
import '../../i18n/config';

export function Translation(): JSX.Element {
    const { t } = useTranslation();
    return (
        <Card marginTop={'1.5rem'}>
            <Flex flexDirection={'column'}>
                <ProfileTextMd>{t('title')}</ProfileTextMd>
                <ProfileTextSm>{t('description.part1')}</ProfileTextSm>
                <ProfileTextSm>{t('description.part2')}</ProfileTextSm>
                <ProfileTextSm>{t('description.part3')}</ProfileTextSm>
            </Flex>
        </Card>
    );
}
