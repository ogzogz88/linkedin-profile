import React, { useState, useContext } from 'react';
import { Modal, Button, FieldStack, InputField, Flex, applyTheme } from 'bumbag';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { auth, updateImageData } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';
import { storage } from '../../firebase';
import { UpdateMessage } from './UpdateMessage';

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
    photoURL: string;
}
export function UpdateModalImageForm(): JSX.Element {
    const [fileUrl, setFileUrl] = useState(null);
    const { setUser } = useContext(UserContext);
    const [updateMessage, setUpdateMessage] = useState('notSent');

    const initialValues: Values = {
        photoURL: '',
    };
    const onFileChange = async (e: any) => {
        const file = e.target.files[0];
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());
    };
    const updateModalData = async (values: Values) => {
        try {
            let user: any = auth.currentUser;
            user = await updateImageData(user, { photoURL: fileUrl });
            setUser(user);
        } catch (Error) {
            console.log('Error updating intro data');
        }
    };
    return (
        <Formik
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
                        <Field
                            component={InputField.Formik}
                            name="photoURL"
                            label="Photo"
                            type={'file'}
                            onChange={onFileChange}
                        />
                        {updateMessage === 'isSent' ? (
                            <UpdateMessage title="Success" type="success">
                                You updated your photo.
                            </UpdateMessage>
                        ) : updateMessage === 'notSent' ? null : (
                            <UpdateMessage title="An error occurred" type="danger">
                                Unable to update photo, please try again later.
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
                            <Modal.Disclosure use={ModalCloseButton}>Close</Modal.Disclosure>
                        </Flex>
                    </FieldStack>
                </Form>
            )}
        </Formik>
    );
}
