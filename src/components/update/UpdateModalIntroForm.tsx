import React, { useContext, useState } from 'react';
import { Modal, Card, Button, FieldStack, InputField, Flex, applyTheme, Alert } from 'bumbag';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { ProfileImg, BackgroundImg, MainPageIconContainerSec } from '../profile/MainProfileLeftElements';
import { UpdateModalImage } from './UpdateModalImage';
import { auth, updateUserData } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';
import { UpdateMessage } from './UpdateMessage';
import * as Yup from 'yup';

const ModalButton = applyTheme(Button, {
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
const UpdateModalIntroSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too short for your name! It must be at least 2 characters long.')
        .max(50, 'Too long for your name! It must be at most 50 characters long.')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too short for your last name! It must be at least 2 characters long.')
        .max(50, 'Too long for your last name! It must be at most 50 characters long.')
        .required('Required'),
    headline: Yup.string()
        .min(5, 'Too short for your headline! It must be at least 5 characters long.')
        .max(250, 'Too long for your headline! It must be at most 250 characters long.')
        .required('Required'),
    company: Yup.string()
        .min(2, 'Too short for your company! It must be at least 2 characters long.')
        .max(150, 'Too long for your company! It must be at most 150 characters long.'),
    education: Yup.string()
        .min(2, 'Too short for your education! It must be at least 2 characters long.')
        .max(250, 'Too long for your education! It must be at most 250 characters long.'),
    country: Yup.string()
        .min(2, 'Too short for your country! It must be at least 2 characters long.')
        .max(100, 'Too long for your country! It must be at most 100 characters long.')
        .required('Required'),
    location: Yup.string()
        .min(2, 'Too short for your location! It must be at least 2 characters long.')
        .max(100, 'Too long for your location! It must be at most 100 characters long.'),
    industry: Yup.string()
        .min(2, 'Too short for your industry! It must be at least 2 characters long.')
        .max(250, 'Too long for your industry! It must be at most 250 characters long.')
        .required('Required'),
    // email: Yup.string().email('Invalid email').required('Required'),
});
export function UpdateModalIntroForm(): JSX.Element {
    const { user } = useContext(UserContext);
    const { photoURL } = user;
    const { setUser } = useContext(UserContext);
    const [updateMessage, setUpdateMessage] = useState('notSent');
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
        <Formik
            validationSchema={UpdateModalIntroSchema}
            initialValues={initialValues}
            onSubmit={(values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
                updateModalData(values);
                setSubmitting(false);
                resetForm({});
                setUpdateMessage('isSent');
                setTimeout(() => {
                    setUpdateMessage('notSent');
                }, 3000);
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
                            <ProfileImg src={photoURL ? `${photoURL}` : '../../assets/photos/profile.png'} />
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
                            <Field component={InputField.Formik} name="name" label="First name" isRequired />
                            <Field component={InputField.Formik} name="lastName" label="Last name" isRequired />
                        </FieldStack>
                        <Field component={InputField.Formik} name="headline" label="Headline" isRequired />
                        <Field component={InputField.Formik} name="company" label="Company" />
                        <Field component={InputField.Formik} name="education" label="Education" />
                        <Field component={InputField.Formik} name="country" label="Country" isRequired />
                        <Field component={InputField.Formik} name="location" label="Location" />
                        <Field component={InputField.Formik} name="industry" label="Industry" isRequired />
                        {updateMessage === 'isSent' ? (
                            <UpdateMessage title="Success" type="success">
                                You updated your About Info.
                            </UpdateMessage>
                        ) : updateMessage === 'notSent' ? null : (
                            <UpdateMessage title="An error occurred" type="danger">
                                Unable to update About info, please try again later.
                            </UpdateMessage>
                        )}
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
    );
}
