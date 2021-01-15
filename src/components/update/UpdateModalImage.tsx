import React from 'react';
import { Modal, Card, Box, Link, Flex } from 'bumbag';
import { MainPageIcon } from '../profile/MainProfileLeftElements';
import { UpdateModalImageForm } from './UpdateModalImageForm';
import { useTranslation } from 'react-i18next';

export function UpdateModalImage(): JSX.Element {
    const { i18n } = useTranslation();
    const modalImageData = i18n.t<any>('modalImageData', { returnObjects: true });
    const { title } = modalImageData;
    return (
        <Modal.State>
            <Modal.Disclosure use={Link}>
                <MainPageIcon
                    src="../../assets/icons/pencil-icon-secondary.png"
                    width="1.25rem"
                    height="1.25rem"
                    marginTop="5px"
                />
            </Modal.Disclosure>
            <Modal>
                <Card>
                    <Flex justifyContent="space-between" borderBottom="1px solid #ccc">
                        <Box margin="auto 0 1.5rem" fontSize="1.5rem">
                            {title}
                        </Box>
                        <Modal.Disclosure use={Link} fontSize="1.5rem" color="#666" textDecoration="none">
                            X
                        </Modal.Disclosure>
                    </Flex>
                    <Box
                        maxHeight="500px"
                        maxWidth="800px"
                        minWidth="600px"
                        overflowY="scroll"
                        padding="1rem 1rem 1rem 0"
                    >
                        <UpdateModalImageForm />
                    </Box>
                </Card>
            </Modal>
        </Modal.State>
    );
}
