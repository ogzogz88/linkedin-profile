/* eslint-disable prettier/prettier */
import React from 'react';
import { Modal, Card, Box, Link, Flex } from 'bumbag';
import { MainPageIcon } from '../profile/MainProfileLeftElements';
import { UpdateModalIntroForm } from './UpdateModalIntroForm'


export function UpdateModalIntro(): JSX.Element {

    return (
        <Modal.State >
            <Modal.Disclosure use={Link} >
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
                        <UpdateModalIntroForm />
                    </Box>
                </Card>
            </Modal>
        </Modal.State>
    );
}
