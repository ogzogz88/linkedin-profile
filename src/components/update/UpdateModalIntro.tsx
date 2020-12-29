import React, { useState } from 'react';
import { Modal, Card, Button, Box, Link, FieldStack, InputField, Flex, TextareaField, Text } from 'bumbag';
import { MainPageIcon } from '../profile/MainProfileElements';
import { auth, updateUserData } from '../../firebase';

export function UpdateModalIntro(): JSX.Element {
    const initialState = {
        name: '',
        lastName: '',
        headline: '',
        company: '',
        education: '',
        country: '',
        location: '',
        industry: '',
    };
    const [introData, setIntroData] = useState<any>(initialState);
    const [error, setError] = useState<any>(null);

    const { name, lastName, headline, company, education, country, location, industry } = introData;
    const onChangeHandler = (event: any) => {
        const { name, value } = event.currentTarget;
        setIntroData({
            ...introData,
            [name]: value,
        });
        console.log('onchange');
        console.log(introData);
    };
    const updateModalData = async (event: any) => {
        // event.preventDefault();
        try {
            const user = auth.currentUser;
            console.log('current user');
            console.log(user);
            //updating firebase DB
            updateUserData(user, {
                name,
                lastName,
                headline,
                company,
                education,
                country,
                location,
                industry,
            });
        } catch (error) {
            setError('Error updating intro data');
        }

        setIntroData({});
    };
    return (
        <Modal.State>
            <Modal.Disclosure use={Link}>
                <MainPageIcon src="../../assets/icons/pencil-icon.png" />
            </Modal.Disclosure>
            <Modal>
                <Card>
                    <Flex justifyContent={'space-between'} borderBottom={'1px solid #ccc'}>
                        <Box margin={'auto 0 1.5rem'} fontSize={'1.5rem'}>
                            Edit intro
                        </Box>
                        <Modal.Disclosure use={Link} fontSize={'1.5rem'} color={'#666'} textDecoration={'none'}>
                            X
                        </Modal.Disclosure>
                    </Flex>
                    <Box
                        maxHeight={'500px'}
                        maxWidth={'800px'}
                        minWidth={'600px'}
                        overflowY={'scroll'}
                        padding={'1rem 1rem 1rem 0'}
                    >
                        {error !== null && (
                            <Text.Block margin={'1rem auto'}>
                                <Text fontSize={'1rem'}>{error}</Text>
                            </Text.Block>
                        )}
                        <FieldStack>
                            <form onSubmit={(event) => updateModalData(event)}>
                                <FieldStack orientation="horizontal">
                                    <InputField
                                        name="name"
                                        label="First name"
                                        value={name}
                                        onChange={(event: any) => onChangeHandler(event)}
                                        isRequired={true}
                                    />
                                    <InputField
                                        name="lastName"
                                        label="Last name"
                                        value={lastName}
                                        onChange={(event: any) => onChangeHandler(event)}
                                        isRequired={true}
                                    />
                                </FieldStack>
                                <TextareaField
                                    name="headline"
                                    label="Headline"
                                    value={headline}
                                    onChange={(event: any) => onChangeHandler(event)}
                                    isRequired={true}
                                />
                                <InputField
                                    name="company"
                                    label="Company"
                                    value={company}
                                    onChange={(event: any) => onChangeHandler(event)}
                                />
                                <InputField
                                    name="education"
                                    label="Education"
                                    value={education}
                                    onChange={(event: any) => onChangeHandler(event)}
                                />
                                <InputField
                                    name="country"
                                    label="Country/Region"
                                    value={country}
                                    onChange={(event: any) => onChangeHandler(event)}
                                    isRequired={true}
                                />
                                <InputField
                                    name="location"
                                    label="Locations in this Country/Region"
                                    onChange={(event: any) => onChangeHandler(event)}
                                    value={location}
                                />
                                <InputField
                                    name="industry"
                                    label="Industry"
                                    value={industry}
                                    onChange={(event: any) => onChangeHandler(event)}
                                    isRequired={true}
                                />
                                <Flex justifyContent={'flex-end'} marginTop={'1.5rem'}>
                                    <Button palette="primary" borderRadius={'2rem'} padding={'0 2rem'} type="submit">
                                        Save
                                    </Button>
                                </Flex>
                            </form>
                        </FieldStack>
                    </Box>
                </Card>
            </Modal>
        </Modal.State>
    );
}
