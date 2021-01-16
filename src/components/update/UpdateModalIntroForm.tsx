import React, { useContext, useState } from 'react';
import { Modal, Card, Button, FieldStack, InputField, Flex, applyTheme, Alert } from 'bumbag';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { ProfileImg, BackgroundImg } from '../profile/MainProfileLeftElements';
import { auth, updateUserData, storage } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';
import { UpdateMessage } from './UpdateMessage';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

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
    photoURL: string;
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

// eslint-disable-next-line react/prop-types
export const UpdateModalIntroForm: React.FC = () => {
    const { i18n } = useTranslation();
    const modalIntroFormData = i18n.t<any>('modalIntroFormData', { returnObjects: true });
    const {
        nameT,
        lastNameT,
        headlineT,
        companyT,
        educationT,
        countryT,
        locationT,
        industryT,
        photoURLT,
        successMsgT,
        errorMsgT,
        btnSaveT,
        btnCloseT,
    } = modalIntroFormData;
    const { user } = useContext(UserContext);
    const { photoURL } = user;
    const { setUser } = useContext(UserContext);
    const [fileURL, setFileURL] = useState('');
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
        photoURL: '',
    };
    const onFileChange = async (e: any) => {
        const file = e.target.files[0];
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileURL(await fileRef.getDownloadURL());
    };
    const updateModalData = async (values: Values) => {
        try {
            let user: any = auth.currentUser;
            const valuesWithPhoto = { ...values };
            valuesWithPhoto.photoURL = fileURL;
            user = await updateUserData(user, valuesWithPhoto);
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
                        </Card>
                        <FieldStack orientation="horizontal">
                            <Field component={InputField.Formik} name="name" label={nameT} isRequired />
                            <Field component={InputField.Formik} name="lastName" label={lastNameT} isRequired />
                        </FieldStack>
                        <Field component={InputField.Formik} name="headline" label={headlineT} isRequired />
                        <Field component={InputField.Formik} name="company" label={companyT} />
                        <Field component={InputField.Formik} name="education" label={educationT} />
                        <Field component={InputField.Formik} name="country" label={countryT} isRequired />
                        <Field component={InputField.Formik} name="location" label={locationT} />
                        <Field component={InputField.Formik} name="industry" label={industryT} isRequired />
                        <Field
                            component={InputField.Formik}
                            name="photoURL"
                            label={photoURLT}
                            type="file"
                            onChange={onFileChange}
                        />
                        {updateMessage === 'isSent' ? (
                            <UpdateMessage title="Success" type="success">
                                {successMsgT}
                            </UpdateMessage>
                        ) : updateMessage === 'notSent' ? null : (
                            <UpdateMessage title="An error occurred" type="danger">
                                {errorMsgT}
                            </UpdateMessage>
                        )}
                        <Flex justifyContent="flex-end" marginTop="1.5rem ">
                            <Button
                                disabled={isSubmitting}
                                palette="primary"
                                borderRadius="2rem"
                                padding="0 2rem"
                                margin="0 0.5rem"
                                type="submit"
                            >
                                {btnSaveT}
                            </Button>
                            <Modal.Disclosure use={ModalButton}>{btnCloseT}</Modal.Disclosure>
                        </Flex>
                    </FieldStack>
                </Form>
            )}
        </Formik>
    );
};
