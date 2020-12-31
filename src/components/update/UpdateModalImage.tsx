import React, { useState, useContext } from 'react';
import { Modal, Card, Button, Box, Link, FieldStack, InputField, Flex, applyTheme } from 'bumbag';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { MainPageIcon } from '../profile/MainProfileElements';
import { auth, updateImageData } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';
import { storage, firestore } from '../../firebase';

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
export function UpdateModalImage(): JSX.Element {
    const [fileUrl, setFileUrl] = useState(null);
    const { setUser } = useContext(UserContext);
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
        <Modal.State>
            <Modal.Disclosure use={Link}>
                <MainPageIcon
                    src="../../assets/icons/pencil-icon-secondary.png"
                    width={'1.25rem'}
                    height={'1.25rem'}
                    marginTop={'5px'}
                />
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
                                            component={InputField.Formik}
                                            name="photoURL"
                                            label="Photo"
                                            type={'file'}
                                            onChange={onFileChange}
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
