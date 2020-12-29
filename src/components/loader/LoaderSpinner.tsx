import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Container, Flex } from 'bumbag';

export function LoaderSpinner(): JSX.Element {
    return (
        <Container>
            <Flex justifyContent={'center'} alignItems={'center'} marginTop={'15rem'}>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            </Flex>
        </Container>
    );
}
