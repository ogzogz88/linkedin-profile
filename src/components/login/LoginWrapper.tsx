import React from 'react';
import { Container, Flex, applyTheme } from 'bumbag';

const LoginContainer = applyTheme(Container, {
    styles: {
        base: {
            maxWidth: '400px',
            background: '#e2f0fe',
            borderRadius: '8px',
            padding: '1rem',
            borderTop: '5px solid #574feb',
        },
    },
    modes: {
        dark: {
            defaultProps: {
                background: '#63aaf2',
            },
        },
    },
});
interface LoginWrapperProps {
    children: React.ReactNode;
}
export function LoginWrapper(props: React.PropsWithChildren<LoginWrapperProps>): JSX.Element {
    return (
        <Flex justifyContent="center" alignItems="center" minHeight="100vh">
            <LoginContainer>{props.children}</LoginContainer>
        </Flex>
    );
}
