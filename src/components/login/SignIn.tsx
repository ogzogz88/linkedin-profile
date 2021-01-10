import React, { useState } from 'react';
import { InputField, Box, Divider, Text, FieldStack, Button } from 'bumbag';
import { Link } from 'react-router-dom';
import { LoginWrapper } from './LoginWrapper';
import { signInWithGoogle, auth } from '../../firebase';
import { useTranslation } from 'react-i18next';

export function SignIn(): JSX.Element {
    const { i18n } = useTranslation();
    const signinData = i18n.t<any>('signinData', { returnObjects: true });
    const {
        signin,
        email,
        password,
        signinWithGoogle,
        or,
        noAccount,
        gotoSignup,
        forgetPass,
        enterEmail,
        enterPass,
    } = signinData;
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState<any>(null);
    const signInWithEmailAndPasswordHandler = (event: any, email: any, password: any) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch((error) => {
            setError('Error signing in with password and email!');
            console.error('Error signing in with password and email', error);
        });
    };
    const onChangeHandler = (event: any) => {
        const { name, value } = event.currentTarget;
        if (name === 'userEmail') {
            setUserEmail(value);
        } else if (name === 'userPassword') {
            setUserPassword(value);
        }
    };
    return (
        <LoginWrapper>
            <Box>
                <Text.Block marginBottom={'1rem'} marginTop={'2rem'}>
                    <Text use="strong" fontSize={'2rem'}>
                        {signin}
                    </Text>
                </Text.Block>
                <Divider margin={'1rem auto 2rem '} borderBottom={'1px solid #574feb'} />
                <FieldStack>
                    {error !== null && (
                        <Text.Block margin={'1rem auto'}>
                            <Text fontSize={'1rem'}>{error}</Text>
                        </Text.Block>
                    )}
                    <InputField
                        type="email"
                        label={email}
                        name="userEmail"
                        id="userEmail"
                        placeholder={enterEmail}
                        onChange={(event: any) => onChangeHandler(event)}
                    />
                    <InputField
                        type="password"
                        label={password}
                        id="userPassword"
                        name="userPassword"
                        placeholder={enterPass}
                        onChange={(event: any) => onChangeHandler(event)}
                    />
                    <Button
                        palette="primary"
                        width={'100%'}
                        textTransform={'uppercase'}
                        onClick={(event) => {
                            signInWithEmailAndPasswordHandler(event, userEmail, userPassword);
                        }}
                    >
                        {signin}
                    </Button>
                    <Text.Block margin={'1rem auto'} textAlign={'center'}>
                        <Text fontSize={'1rem'}>{or}</Text>
                    </Text.Block>
                    <Button variant="outlined" palette="primary" width={'100%'} onClick={signInWithGoogle}>
                        {signinWithGoogle}
                    </Button>
                    <Text.Block margin={'1rem auto'}>
                        <Text fontSize={'1rem'}>{noAccount}</Text>
                        <Link to="/signUp">{gotoSignup} &rarr; </Link>
                    </Text.Block>
                    <Text.Block margin={'1rem auto'}>
                        <Link to="/passwordReset">{forgetPass}</Link>
                    </Text.Block>
                </FieldStack>
            </Box>
        </LoginWrapper>
    );
}
