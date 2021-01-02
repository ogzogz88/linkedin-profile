import React, { useState } from 'react';
import { InputField, Box, Divider, Text, FieldStack, Button } from 'bumbag';
import { Link } from 'react-router-dom';
import { LoginWrapper } from './LoginWrapper';
import { signInWithGoogle } from '../../firebase';
import { auth, generateUserDocument } from '../../firebase';

export function SignUp(): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState<any>(null);
    const createUserWithEmailAndPasswordHandler = async (event: any, email: any, password: any) => {
        event.preventDefault();
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            generateUserDocument(user, { email, name, lastName, displayName });
        } catch (error) {
            setError('Error Signing up with email and password');
        }
        setEmail('');
        setPassword('');
        setDisplayName('');
        setName('');
        setLastName('');
    };
    const onChangeHandler = (event: any) => {
        const { name, value } = event.currentTarget;
        if (name === 'userEmail') {
            setEmail(value);
        } else if (name === 'userPassword') {
            setPassword(value);
        } else if (name === 'displayName') {
            setDisplayName(value);
        } else if (name === 'name') {
            setName(value);
        } else if (name === 'lastName') {
            setLastName(value);
        }
    };
    return (
        <LoginWrapper>
            <Box>
                <Text.Block marginBottom={'1rem'} marginTop={'2rem'}>
                    <Text use="strong" fontSize={'2rem'}>
                        Sign Up
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
                        label="Display name"
                        name="displayName"
                        id="displayName"
                        value={displayName}
                        placeholder="Enter your display name"
                        onChange={(event: any) => onChangeHandler(event)}
                    />
                    <FieldStack orientation="horizontal">
                        <InputField
                            label="Name"
                            name="name"
                            id="name"
                            value={name}
                            placeholder="Enter your  name"
                            onChange={(event: any) => onChangeHandler(event)}
                        />
                        <InputField
                            label="Last name"
                            name="lastName"
                            id="lastName"
                            value={lastName}
                            placeholder="Enter your last name"
                            onChange={(event: any) => onChangeHandler(event)}
                        />
                    </FieldStack>
                    <InputField
                        type="email"
                        label="Email"
                        name="userEmail"
                        id="userEmail"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(event: any) => onChangeHandler(event)}
                    />
                    <InputField
                        type="password"
                        label="Password"
                        name="userPassword"
                        id="userPassword"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(event: any) => onChangeHandler(event)}
                    />
                    <Button
                        palette="primary"
                        width={'100%'}
                        textTransform={'uppercase'}
                        onClick={(event) => {
                            createUserWithEmailAndPasswordHandler(event, email, password);
                        }}
                    >
                        Sign Up
                    </Button>
                    <Text.Block margin={'1rem auto'} textAlign={'center'}>
                        <Text fontSize={'1rem'}>Already have an account?</Text> <Link to="/signin">Sign in here</Link>
                    </Text.Block>
                    <Text.Block margin={'1rem auto'} textAlign={'center'}>
                        <Text fontSize={'1rem'}>Or</Text>
                    </Text.Block>
                    <Button variant="outlined" palette="primary" width={'100%'} onClick={signInWithGoogle}>
                        Sign In With Google
                    </Button>
                </FieldStack>
            </Box>
        </LoginWrapper>
    );
}
