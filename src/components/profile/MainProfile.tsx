/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { Columns } from 'bumbag';
import { MainProfileRight } from './MainProfileRight';
import { MainProfileLeft } from './MainProfileLeft'
import { UserContext } from '../../providers/UserProvider';


function MainProfile(): JSX.Element {
    const { user } = useContext(UserContext);
    return (
        <Columns style={{ margin: '2rem 2rem 0 2rem' }} spacing="major-3">
            <Columns.Column spread={9} paddingLeft={'0'}>
                <MainProfileLeft user={user} />
            </Columns.Column>
            <Columns.Column spread={3} paddingRight={'0'} >
                <MainProfileRight />
            </Columns.Column>
        </Columns>
    );
}

export default MainProfile;
