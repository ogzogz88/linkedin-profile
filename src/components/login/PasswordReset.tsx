import React, { useState } from 'react';
import { InputField, Box, Divider, Text, FieldStack, Button } from 'bumbag';
import { LoginWrapper } from './LoginWrapper';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

export function PasswordReset(): JSX.Element {
    const [email, setEmail] = useState('');
    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [error, setError] = useState<any>(null);
    const onChangeHandler = (event: any) => {
        const { name, value } = event.currentTarget;
        if (name === 'userEmail') {
            setEmail(value);
        }
    };
    const sendResetEmail = (event: any) => {
        event.preventDefault();
        auth.sendPasswordResetEmail(email)
            .then(() => {
                setEmailHasBeenSent(true);
                setTimeout(() => {
                    setEmailHasBeenSent(false);
                }, 3000);
            })
            .catch(() => {
                setError('Error resetting password');
            });
    };
    return (
        <LoginWrapper>
            <Box>
                <Text.Block marginBottom={'1rem'} marginTop={'2rem'}>
                    <Text use="strong" fontSize={'2rem'}>
                        Reset Your Password
                    </Text>
                </Text.Block>
                <Divider margin={'1rem auto 2rem '} borderBottom={'1px solid #574feb'} />
                <FieldStack>
                    {emailHasBeenSent && (
                        <Text.Block margin={'1rem auto'}>
                            <Text fontSize={'1rem'}>An email has been sent to you!</Text>
                        </Text.Block>
                    )}
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
                        value={email}
                        placeholder="Enter your email"
                        onChange={(event: any) => onChangeHandler(event)}
                    />
                    <Button
                        palette="primary"
                        width={'100%'}
                        textTransform={'uppercase'}
                        onClick={(event) => sendResetEmail(event)}
                    >
                        Send me a reset link
                    </Button>
                    <Text.Block margin={'1rem auto'} textAlign={'center'}>
                        <Text fontSize={'1rem'}>Or</Text>
                    </Text.Block>
                    <Text.Block margin={'1rem auto'}>
                        <Text fontSize={'1rem'}>Go Back to Sign In?</Text> <Link to="/signin"> &larr; Sign In</Link>
                    </Text.Block>
                </FieldStack>
            </Box>
        </LoginWrapper>
    );
}
