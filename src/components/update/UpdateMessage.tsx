import React from 'react';
import { Alert } from 'bumbag';

interface UpdateProps {
    title: string;
    type: 'success' | 'danger' | 'info' | 'warning' | undefined;
    children: React.ReactNode;
}
export function UpdateMessage(props: UpdateProps): JSX.Element {
    return (
        <Alert title={props.title} type={props.type}>
            {props.children}
        </Alert>
    );
}
