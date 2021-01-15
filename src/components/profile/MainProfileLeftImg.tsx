import React from 'react';
import { Set } from 'bumbag';
import {
    ProfileImg,
    BackgroundImg,
    ProfileEditLink,
    MainPageIconContainer,
    AddButton,
    MoreButton,
} from './MainProfileLeftElements';
import { UpdateModalIntro } from '../update/UpdateModalIntro';

interface leftImg {
    profileTxt: string;
    moreTxt: string;
    photoURL: string;
}
export const MainProfileLeftImg: React.FC<leftImg> = ({ profileTxt, moreTxt, photoURL }: leftImg) => {
    return (
        <React.Fragment>
            <BackgroundImg src="../../assets/photos/profile-bg.jpg" />
            <ProfileImg src={photoURL ? `${photoURL}` : '../../assets/photos/profile.png'} />
            <Set justifyContent="flex-end" marginTop="0.3rem">
                <AddButton size="small" palette="primary">
                    {profileTxt}
                </AddButton>
                <MoreButton size="small">{moreTxt}</MoreButton>
                <MainPageIconContainer padding="1.25rem">
                    <UpdateModalIntro />
                </MainPageIconContainer>
            </Set>
        </React.Fragment>
    );
};
