import React from 'react';
import { Provider as BumbagProvider, Container } from 'bumbag';
import { AppPageWithHeader } from '../../theme/Theme';
import { Theme } from '../../theme/Theme';
import { Navbar } from '../navbar/Navbar';
import { MainProfile } from '../profile/MainProfile';
import { Footer } from '../footer/Footer';
import { MainDivider } from './MainDivider';

export function MainPageContent(): JSX.Element {
    return (
        <BumbagProvider theme={Theme}>
            <AppPageWithHeader
                sticky
                header={
                    <Container>
                        <Navbar />
                    </Container>
                }
            >
                <Container>
                    <MainProfile />
                    <MainDivider />
                    <Footer />
                </Container>
            </AppPageWithHeader>
        </BumbagProvider>
    );
}
