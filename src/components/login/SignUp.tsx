import React, { useState } from 'react';
import { InputField, Box, Divider, Text, FieldStack, Button } from 'bumbag';
import { Link } from 'react-router-dom';
import { LoginWrapper } from './LoginWrapper';
import { signInWithGoogle } from '../../firebase';
import { auth, generateUserDocument } from '../../firebase';
import { useTranslation } from 'react-i18next';

export function SignUp(): JSX.Element {
    const { i18n } = useTranslation();
    const signupData = i18n.t<any>('signupData', { returnObjects: true });
    const {
        signup,
        displayNameT,
        nameT,
        lastNameT,
        emailT,
        passwordT,
        enterDisplayName,
        enterName,
        enterLastName,
        enterEmail,
        enterPass,
        alreadyAccount,
        or,
        signinHere,
        signinWithGoogle,
    } = signupData;
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
                        {signup}
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
                        label={displayNameT}
                        name="displayName"
                        id="displayName"
                        value={displayName}
                        placeholder={enterDisplayName}
                        onChange={(event: any) => onChangeHandler(event)}
                    />
                    <FieldStack orientation="horizontal">
                        <InputField
                            label={nameT}
                            name="name"
                            id="name"
                            value={name}
                            placeholder={enterName}
                            onChange={(event: any) => onChangeHandler(event)}
                        />
                        <InputField
                            label={lastNameT}
                            name="lastName"
                            id="lastName"
                            value={lastName}
                            placeholder={enterLastName}
                            onChange={(event: any) => onChangeHandler(event)}
                        />
                    </FieldStack>
                    <InputField
                        type="email"
                        label={emailT}
                        name="userEmail"
                        id="userEmail"
                        value={email}
                        placeholder={enterEmail}
                        onChange={(event: any) => onChangeHandler(event)}
                    />
                    <InputField
                        type="password"
                        label={passwordT}
                        name="userPassword"
                        id="userPassword"
                        value={password}
                        placeholder={enterPass}
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
                        {signup}
                    </Button>
                    <Text.Block margin={'1rem auto'} textAlign={'center'}>
                        <Text fontSize={'1rem'}>{alreadyAccount}</Text> <Link to="/signin">{signinHere}</Link>
                    </Text.Block>
                    <Text.Block margin={'1rem auto'} textAlign={'center'}>
                        <Text fontSize={'1rem'}>{or}</Text>
                    </Text.Block>
                    <Button variant="outlined" palette="primary" width={'100%'} onClick={signInWithGoogle}>
                        {signinWithGoogle}
                    </Button>
                </FieldStack>
            </Box>
        </LoginWrapper>
    );
}
