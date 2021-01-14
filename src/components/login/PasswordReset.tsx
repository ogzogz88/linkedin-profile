import React, { useState } from 'react';
import { InputField, Box, Divider, Text, FieldStack, Button } from 'bumbag';
import { LoginWrapper } from './LoginWrapper';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useTranslation } from 'react-i18next';

export function PasswordReset(): JSX.Element {
    const { i18n } = useTranslation();
    const passwordResetData = i18n.t<any>('passwordResetData', { returnObjects: true });
    const { resetPass, emailT, enterEmail, sendReset, or, goBack, signin, emailSent } = passwordResetData;
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
                <Text.Block marginBottom="1rem" marginTop="2rem">
                    <Text use="strong" fontSize="2rem">
                        {resetPass}
                    </Text>
                </Text.Block>
                <Divider margin="1rem auto 2rem " borderBottom="1px solid #574feb" />
                <FieldStack>
                    {emailHasBeenSent && (
                        <Text.Block margin="1rem auto">
                            <Text fontSize="1rem">{emailSent}</Text>
                        </Text.Block>
                    )}
                    {error !== null && (
                        <Text.Block margin="1rem auto">
                            <Text fontSize="1rem">{error}</Text>
                        </Text.Block>
                    )}
                    <InputField
                        type="email"
                        label={emailT}
                        name="userEmail"
                        id="userEmail"
                        value={email}
                        placeholder={enterEmail}
                        onChange={(event: any) => onChangeHandler(event)}
                    />
                    <Button
                        palette="primary"
                        width="100%"
                        textTransform="uppercase"
                        onClick={(event) => sendResetEmail(event)}
                    >
                        {sendReset}
                    </Button>
                    <Text.Block margin="1rem auto" textAlign="center">
                        <Text fontSize="1rem">{or}</Text>
                    </Text.Block>
                    <Text.Block margin="1rem auto">
                        <Text fontSize="1rem">{goBack}</Text> <Link to="/signin"> &larr; {signin}</Link>
                    </Text.Block>
                </FieldStack>
            </Box>
        </LoginWrapper>
    );
}
