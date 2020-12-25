import React from 'react';
import './App.css';
import { Provider as BumbagProvider, PageWithHeader, Box, Container } from 'bumbag';
import Navbar from './components/navbar/Navbar';
import MainProfile from './components/profile/MainProfile';
import SideProfile from './components/profile/MainProfile';
import { AppPageWithHeader } from './theme/Theme';
import { Theme } from './theme/Theme';

function App(): JSX.Element {
    return (
        <BumbagProvider theme={Theme}>
            <AppPageWithHeader
                sticky
                header={
                    <Container>
                        <Navbar />
                    </Container>
                }
                overrides={{
                    PageWithHeader: { styles: { base: { minHeight: 'unset' } } },
                }}
            >
                <Container>
                    <MainProfile />
                </Container>
            </AppPageWithHeader>
        </BumbagProvider>
    );
}

export default App;
