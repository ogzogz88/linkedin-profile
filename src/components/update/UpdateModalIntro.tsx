import React, { useState, useContext } from 'react';
import { Modal, Card, Button, Box, Link, FieldStack, InputField, Flex, applyTheme } from 'bumbag';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import {
    MainPageIcon,
    MainPageIconContainer,
    ProfileImg,
    BackgroundImg,
    MainPageIconContainerSec,
} from '../profile/MainProfileElements';
import { UpdateModalImage } from './UpdateModalImage';
import { auth, updateUserData } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';

export const ModalButton = applyTheme(Button, {
    styles: {
        base: {
            palette: 'primary',
            borderRadius: '2rem',
            padding: '0 2rem',
        },
    },
    type: 'submit',
});

interface Values {
    name: string;
    lastName: string;
    headline: string;
    company: string;
    education: string;
    country: string;
    location: string;
    industry: string;
}
export function UpdateModalIntro(): JSX.Element {
    const { user } = useContext(UserContext);
    const { photoURL } = user;
    const { setUser } = useContext(UserContext);
    const initialValues: Values = {
        name: '',
        lastName: '',
        headline: '',
        company: '',
        education: '',
        country: '',
        location: '',
        industry: '',
    };
    const updateModalData = async (values: Values) => {
        try {
            let user: any = auth.currentUser;
            user = await updateUserData(user, values);
            setUser(user);
        } catch (Error) {
            console.log('Error updating intro data');
        }
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
                        <Formik
                            initialValues={initialValues}
                            onSubmit={(values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
                                updateModalData(values);
                                setSubmitting(false);
                                resetForm({});
                            }}
                        >
                            {({ isSubmitting, handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <FieldStack>
                                        <Card
                                            style={{
                                                padding: 0,
                                                borderRadius: '0.5rem 05.rem 0 0',
                                                position: 'relative',
                                                marginBottom: '6rem',
                                                height: '170px',
                                            }}
                                        >
                                            <BackgroundImg src="../../assets/photos/profile-bg.jpg" width={'100%'} />
                                            {/* <ProfileImg src="../../assets/photos/ogz.jpg" /> */}
                                            <ProfileImg
                                                src={photoURL ? `${photoURL}` : '../../assets/photos/profile.png'}
                                            />
                                            <MainPageIconContainerSec
                                                style={{
                                                    position: 'absolute',
                                                    left: '7.5rem',
                                                    bottom: '-4rem',
                                                    background: '#fff',
                                                    boxShadow: '0 0 4px 0px #aaa',
                                                }}
                                            >
                                                <UpdateModalImage />
                                            </MainPageIconContainerSec>
                                        </Card>
                                        <FieldStack orientation="horizontal">
                                            <Field
                                                component={InputField.Formik}
                                                name="name"
                                                label="First name"
                                                isRequired
                                            />
                                            <Field
                                                component={InputField.Formik}
                                                name="lastName"
                                                label="Last name"
                                                isRequired
                                            />
                                        </FieldStack>
                                        <Field
                                            component={InputField.Formik}
                                            name="headline"
                                            label="Headline"
                                            isRequired
                                        />
                                        <Field component={InputField.Formik} name="company" label="Company" />
                                        <Field component={InputField.Formik} name="education" label="Education" />
                                        <Field
                                            component={InputField.Formik}
                                            name="country"
                                            label="Country"
                                            isRequired
                                        />
                                        <Field component={InputField.Formik} name="location" label="Location" />
                                        <Field
                                            component={InputField.Formik}
                                            name="industry"
                                            label="Industry"
                                            isRequired
                                        />
                                        <Flex justifyContent={'flex-end'} marginTop={'1.5rem '}>
                                            <Button
                                                disabled={isSubmitting}
                                                palette="primary"
                                                borderRadius={'2rem'}
                                                padding={'0 2rem'}
                                                margin={'0 0.5rem'}
                                                type="submit"
                                            >
                                                Save
                                            </Button>
                                            <Modal.Disclosure use={ModalButton}>Close</Modal.Disclosure>
                                        </Flex>
                                    </FieldStack>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Card>
            </Modal>
        </Modal.State>
    );
}
