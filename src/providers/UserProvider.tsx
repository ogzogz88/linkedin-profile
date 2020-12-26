import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

export const UserContext = createContext(null);

interface MyProps {
    children: React.ReactNode;
}
export function UserProvider(props: React.PropsWithChildren<MyProps>): JSX.Element {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                setUser(userAuth);
            } else {
                setUser(null);
            }
        });
    }, [auth]);
    return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
}
