import React, { useContext } from 'react';
import { Provider as BumbagProvider, Container } from 'bumbag';
import { AppPageWithHeader } from '../../theme/Theme';
import { Theme } from '../../theme/Theme';
import Navbar from '../navbar/Navbar';
import MainProfile from '../profile/MainProfile';
import { UserContext } from '../../providers/UserProvider';

export function MainPageContent(): JSX.Element {
    const { user } = useContext(UserContext);

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
                    <MainProfile user={user} />
                </Container>
            </AppPageWithHeader>
        </BumbagProvider>
    );
}
