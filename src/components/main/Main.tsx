import React, { useContext } from 'react';
import { Provider as BumbagProvider } from 'bumbag';
import { Theme } from '../../theme/Theme';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { SignIn } from '../login/SignIn';
import { SignUp } from '../login/SignUp';
import { PasswordReset } from '../login/PasswordReset';
import { UserContext } from '../../providers/UserProvider';
import { MainPageContent } from './MainPageContent';
import { LoaderSpinner } from '../loader/LoaderSpinner';

export default function Main(): JSX.Element {
    const { user } = useContext(UserContext);

    if (user === 'loading') {
        return <LoaderSpinner />;
    } else
        return (
            <Router>
                <BumbagProvider theme={Theme}>
                    <Switch>
                        <Route exact path="/">
                            {user !== null ? <MainPageContent /> : <Redirect to="/signin" />}
                        </Route>
                        <Route path="/signin">{user !== null ? <Redirect to="/" /> : <SignIn />}</Route>
                        <Route path="/signup">{user !== null ? <Redirect to="/" /> : <SignUp />}</Route>
                        <Route path="/passwordreset">{user !== null ? <Redirect to="/" /> : <PasswordReset />}</Route>
                    </Switch>
                </BumbagProvider>
            </Router>
        );
}
