import React, { useState } from 'react';
import { InputField, Box, Divider, Text, FieldStack, Button } from 'bumbag';
import { Link } from 'react-router-dom';
import { LoginWrapper } from './LoginWrapper';
import { signInWithGoogle, auth } from '../../firebase';

export function SignIn(): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            setEmail(value);
        } else if (name === 'userPassword') {
            setPassword(value);
        }
    };
    return (
        <LoginWrapper>
            <Box>
                <Text.Block marginBottom={'1rem'} marginTop={'2rem'}>
                    <Text use="strong" fontSize={'2rem'}>
                        Sign In
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
                        label="Email"
                        name="userEmail"
                        id="userEmail"
                        placeholder="Enter your email"
                        onChange={(event: any) => onChangeHandler(event)}
                    />
                    <InputField
                        type="password"
                        label="Password"
                        id="userPassword"
                        name="userPassword"
                        placeholder="Enter your password"
                        onChange={(event: any) => onChangeHandler(event)}
                    />
                    <Button
                        palette="primary"
                        width={'100%'}
                        textTransform={'uppercase'}
                        onClick={(event) => {
                            signInWithEmailAndPasswordHandler(event, email, password);
                        }}
                    >
                        Sign In
                    </Button>
                    <Text.Block margin={'1rem auto'} textAlign={'center'}>
                        <Text fontSize={'1rem'}>Or</Text>
                    </Text.Block>
                    <Button variant="outlined" palette="primary" width={'100%'} onClick={signInWithGoogle}>
                        Sign In With Google
                    </Button>
                    <Text.Block margin={'1rem auto'}>
                        <Text fontSize={'1rem'}>Dont have an account?</Text>{' '}
                        <Link to="/signUp">Go to Sign Up &rarr; </Link>
                    </Text.Block>
                    <Text.Block margin={'1rem auto'}>
                        <Link to="/passwordReset">Forgot Password?</Link>
                    </Text.Block>
                </FieldStack>
            </Box>
        </LoginWrapper>
    );
}
