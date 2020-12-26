/* eslint-disable prettier/prettier */
import React from 'react';
import './App.css';
import { Provider as BumbagProvider, Container, Flex } from 'bumbag';
import Navbar from './components/navbar/Navbar';
import MainProfile from './components/profile/MainProfile';
import { AppPageWithHeader } from './theme/Theme';
import { Theme } from './theme/Theme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { SignIn } from './components/authentication/SignIn';
import { SignUp } from './components/authentication/SignUp';
import { PasswordReset } from './components/authentication/PasswordReset';


function App(): JSX.Element {
    const user = null;
    return user ? (
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
    ) : (
            <Router>
                <BumbagProvider theme={Theme}>

                    <Flex justifyContent={'center'} alignItems={'center'} marginTop={'5rem'}>
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

export default App;
