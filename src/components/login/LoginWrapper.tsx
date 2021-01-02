import React from 'react';
import { Container, Flex } from 'bumbag';

interface LoginWrapperProps {
    children: React.ReactNode;
}
export function LoginWrapper(props: React.PropsWithChildren<LoginWrapperProps>): JSX.Element {
    return (
        <Flex justifyContent={'center'} alignItems={'center'} marginTop={'4rem'}>
            <Container
                maxWidth={'400px'}
                background={'#e2f0fe'}
                borderRadius={'8px'}
                padding={'1rem'}
                borderTop={'5px solid #574feb'}
            >
                {props.children}
            </Container>
        </Flex>
    );
}
