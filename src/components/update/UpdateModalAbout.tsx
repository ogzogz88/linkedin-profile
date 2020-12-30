import React, { useState, useContext } from 'react';
import { Modal, Card, Button, Box, Link, FieldStack, TextareaField, Flex, applyTheme } from 'bumbag';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { MainPageIcon } from '../profile/MainProfileElements';
import { auth, updateUserData } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';

export const ModalCloseButton = applyTheme(Button, {
    styles: {
        base: {
            palette: 'primary',
            borderRadius: '2rem',
            padding: '0 2rem',
        },
    },
});

interface Values {
    about: string;
}
export function UpdateModalAbout(): JSX.Element {
    const { setUser } = useContext(UserContext);
    const initialValues: Values = {
        about: '',
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
                <MainPageIcon src="../../assets/icons/pencil-icon-secondary.png" />
            </Modal.Disclosure>
            <Modal>
                <Card>
                    <Flex justifyContent={'space-between'} borderBottom={'1px solid #ccc'}>
                        <Box margin={'auto 0 1.5rem'} fontSize={'1.5rem'}>
                            Edit about
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
                                        <Field
                                            component={TextareaField.Formik}
                                            name="about"
                                            label="Summary"
                                            minHeight={'10rem'}
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
                                            <Modal.Disclosure use={ModalCloseButton}>Close</Modal.Disclosure>
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
