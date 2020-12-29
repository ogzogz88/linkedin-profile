/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { Provider as BumbagProvider, Container, Flex } from 'bumbag';
import Navbar from '../navbar/Navbar';
import MainProfile from '../profile/MainProfile';
import { AppPageWithHeader } from '../../theme/Theme';
import { Theme } from '../../theme/Theme';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { SignIn } from '../authentication/SignIn';
import { SignUp } from '../authentication/SignUp';
import { PasswordReset } from '../authentication/PasswordReset';
import { UserContext } from '../../providers/UserProvider';
import { LoaderSpinner } from '../loader/LoaderSpinner'



function Main(): JSX.Element {
    const { user } = useContext(UserContext);

    if (user === 'loading') {
        return (
            <LoaderSpinner />
        );
    }
    else if (user !== null) {
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
    } else {
        return (
            <Router>
                <BumbagProvider theme={Theme}>
                    <Flex justifyContent={'center'} alignItems={'center'} marginTop={'4rem'}>
                        <Container maxWidth={'400px'} background={'#e2f0fe'} borderRadius={'8px'} padding={'1rem'} borderTop={'5px solid #574feb'}>
                            <Switch>
                                <Route path="/signUp" >
                                    <SignUp />
                                </Route>
                                <Route path="/passwordReset" >
                                    <PasswordReset />
                                </Route>
                                <Route exact path="/" >
                                    <SignIn />
                                </Route>

                            </Switch>
                        </Container>
                    </Flex>
                </BumbagProvider>
            </Router >
        );
    }
}

export default Main;
