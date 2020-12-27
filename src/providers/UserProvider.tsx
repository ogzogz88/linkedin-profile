import React, { createContext, useState, useEffect } from 'react';
import { auth, generateUserDocument } from '../firebase';

export const UserContext = createContext(null);

interface MyProps {
    children: React.ReactNode;
}
export function UserProvider(props: React.PropsWithChildren<MyProps>): JSX.Element {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                if (auth?.currentUser?.providerData[0]?.providerId === 'google.com') {
                    setUser(userAuth);
                } else {
                    const user = await generateUserDocument(userAuth);
                    setUser(user);
                }
            } else {
                setUser(null);
            }
            console.log('provider');
            console.log(auth?.currentUser?.providerData[0]?.providerId);
        });
    }, []);
    return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
}
