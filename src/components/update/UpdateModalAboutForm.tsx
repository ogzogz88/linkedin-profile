import React, { useContext, useState } from 'react';
import { Modal, Button, FieldStack, TextareaField, Flex, applyTheme } from 'bumbag';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { auth, updateUserData } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';
import { UpdateMessage } from './UpdateMessage';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

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
const UpdateModalAboutSchema = Yup.object().shape({
    about: Yup.string()
        .min(10, 'Too short for your about section! It must be at least 10 characters long.')
        .max(350, 'Too long for your about section! It must be at most 350 characters long.')
        .required('Required'),
});
export function UpdateModalAboutForm(): JSX.Element {
    const { i18n } = useTranslation();
    const modalAboutFormData = i18n.t<any>('modalAboutFormData', { returnObjects: true });
    const { summaryT, btnSaveT, btnCloseT } = modalAboutFormData;
    const { setUser } = useContext(UserContext);
    const [updateMessage, setUpdateMessage] = useState('notSent');
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
        <Formik
            validationSchema={UpdateModalAboutSchema}
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
                        <Field component={TextareaField.Formik} name="about" label={summaryT} minHeight="7rem" />
                        {updateMessage === 'isSent' ? (
                            <UpdateMessage title="Success" type="success">
                                You updated your About Info.
                            </UpdateMessage>
                        ) : updateMessage === 'notSent' ? null : (
                            <UpdateMessage title="An error occurred" type="danger">
                                Unable to update About info, please try again later.
                            </UpdateMessage>
                        )}
                        <Flex justifyContent={'flex-end'} marginTop="1.5rem ">
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
                            <Modal.Disclosure use={ModalCloseButton}>{btnCloseT}</Modal.Disclosure>
                        </Flex>
                    </FieldStack>
                </Form>
            )}
        </Formik>
    );
}
