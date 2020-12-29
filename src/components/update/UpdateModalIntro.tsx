import React, { useState, useContext } from 'react';
import { Modal, Card, Button, Box, Link, FieldStack, InputField, Flex } from 'bumbag';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { MainPageIcon } from '../profile/MainProfileElements';
import { auth, updateUserData } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';

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
                            onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                                updateModalData(values);
                                setTimeout(() => {
                                    setSubmitting(false);
                                }, 500);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <FieldStack>
                                        <FieldStack orientation="horizontal">
                                            <Field component={InputField.Formik} name="name" label="First name" />
                                            <Field component={InputField.Formik} name="lastName" label="Last name" />
                                        </FieldStack>
                                        <Field component={InputField.Formik} name="headline" label="Headline" />
                                        <Field component={InputField.Formik} name="company" label="Company" />
                                        <Field component={InputField.Formik} name="education" label="Education" />
                                        <Field component={InputField.Formik} name="country" label="Country" />
                                        <Field component={InputField.Formik} name="location" label="Location" />
                                        <Field component={InputField.Formik} name="industry" label="Industry" />
                                        <Flex justifyContent={'flex-end'} marginTop={'1.5rem'}>
                                            <Button
                                                disabled={isSubmitting}
                                                palette="primary"
                                                borderRadius={'2rem'}
                                                padding={'0 2rem'}
                                                type="submit"
                                            >
                                                Save
                                            </Button>
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
