import React, { useState } from 'react';
import { InputField, Box, Divider, Text, FieldStack, Button } from 'bumbag';
import { Link } from 'react-router-dom';

export function SignUp(): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState(null);
    const createUserWithEmailAndPasswordHandler = (event: any, email: any, password: any) => {
        event.preventDefault();
        setEmail('');
        setPassword('');
        setDisplayName('');
    };
    const onChangeHandler = (event: any) => {
        const { name, value } = event.currentTarget;
        if (name === 'userEmail') {
            setEmail(value);
        } else if (name === 'userPassword') {
            setPassword(value);
        } else if (name === 'displayName') {
            setDisplayName(value);
        }
    };
    return (
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
                    label="User name"
                    name="userName"
                    id="userName"
                    value={displayName}
                    placeholder="Enter your username"
                    onChange={(event: any) => onChangeHandler(event)}
                />
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
                    <Text fontSize={'1rem'}>Already have an account?</Text> <Link to="/">Sign in here</Link>
                </Text.Block>
                <Text.Block margin={'1rem auto'} textAlign={'center'}>
                    <Text fontSize={'1rem'}>Or</Text>
                </Text.Block>
                <Button variant="outlined" palette="primary" width={'100%'}>
                    Sign In With Google
                </Button>
            </FieldStack>
        </Box>
    );
}
