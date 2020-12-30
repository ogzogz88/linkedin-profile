import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Container, Flex } from 'bumbag';

export function LoaderSpinner(): JSX.Element {
    return (
        <Container>
            <Flex justifyContent={'center'} alignItems={'center'} marginTop={'17rem'}>
                <Loader
                    type="Puff"
                    color="#574FEB"
                    height={50}
                    width={50}
                    timeout={2000} //3 secs
                />
            </Flex>
        </Container>
    );
}
