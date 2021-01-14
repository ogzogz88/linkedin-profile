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
        <>
            <BackgroundImg src="../../assets/photos/profile-bg.jpg" />
            <ProfileImg src={photoURL ? `${photoURL}` : '../../assets/photos/profile.png'} />
            <Set justifyContent="flex-end" marginTop="0.3rem">
                <AddButton size="small" palette="primary">
                    {profileTxt}
                </AddButton>
                <MoreButton size="small">{moreTxt}</MoreButton>
                <ProfileEditLink>
                    <MainPageIconContainer>
                        <UpdateModalIntro />
                    </MainPageIconContainer>
                </ProfileEditLink>
            </Set>
        </>
    );
};
