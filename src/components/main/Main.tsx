/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
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




function Main(): JSX.Element {
    const user = useContext(UserContext);
    console.log("user");

    console.log(user);

    // const { photoURL, displayName, email }: any = user;


    return user !== null ? (
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

export default Main;
