import React, { createContext, useState, useEffect } from 'react';
import { auth, generateUserDocument } from '../firebase';

type UserContextType = {
    user: any;
    setUser: React.Dispatch<any>;
};
export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: (user) => console.warn('no user provider now'),
});

interface ProviderProps {
    children: React.ReactNode;
}
export function UserProvider(props: React.PropsWithChildren<ProviderProps>): JSX.Element {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        setUser('loading');
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
            // console.log('provider');
            // console.log(auth?.currentUser?.providerData[0]?.providerId);
        });
    }, []);
    return <UserContext.Provider value={{ user, setUser }}>{props.children}</UserContext.Provider>;
}
