import React from 'react';
import Main from './components/main/Main';
import { UserProvider } from './providers/UserProvider';

function App(): JSX.Element {
    return (
        <UserProvider>
            <Main />
        </UserProvider>
    );
}

export default App;
