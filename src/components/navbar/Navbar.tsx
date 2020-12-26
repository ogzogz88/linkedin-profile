/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { TopNav, Image, Input, Flex, } from 'bumbag';
import { Navlink, NavDivider } from './Navlink';
import NavText from './NavText';
import { UserPopover } from './UserPopover';
import { SideDrawer } from './SideDrawer';
import { NavIcon } from '../../theme/Theme';
import { navData } from './NavData';
import { NavImage } from './UserPopoverElements'
import { DarkMode } from '../DarkMode';
import { UserContext } from '../../providers/UserProvider';



function Navbar(): JSX.Element {
    const user = useContext(UserContext);
    const { photoURL }: any = user;
    return (
        <TopNav>
            <TopNav.Section>
                <Navlink key={10} href="/" style={{ marginLeft: '0' }}>
                    <Image src="/logo.png" height="35px" />
                </Navlink>
                <Flex style={{ alignItems: 'center' }}>
                    <Input
                        before={<Input.Icon icon="solid-search" />}
                        placeholder="Search"
                        style={{ marginLeft: '5px' }}
                        size="small"
                        width="300px"
                        marginRight="6rem"
                    />
                </Flex>
            </TopNav.Section>
            <TopNav.Section marginRight="major-2">
                {navData.map((navElement, index) => {
                    return (
                        <>
                            <Navlink
                                key={index}
                                href={navElement.navHref}
                                style={
                                    navElement.navIcon === 'user' ?
                                        { paddingRight: '1rem' } :
                                        navElement.navIcon === '' ?
                                            {
                                                color: '#5d3b09',
                                                fontSize: '0.75rem',
                                                fontWeight: 'lighter',
                                                width: '90px',
                                                textAlign: 'center',
                                            } :
                                            undefined
                                }
                            >
                                {navElement.navIcon !== 'user' && <NavIcon aria-label="Navlcon" icon={`solid-${navElement.navIcon}`} />}
                                {navElement.navIcon === 'user' && <NavImage src={photoURL ? `${photoURL}` : '../../assets/photos/profile.png'}
                                    alt="Profile Picture" width={'30px'} />}

                                <div style={{ display: 'flex' }}>
                                    <NavText>{navElement.navText}</NavText>
                                    {navElement.navIcon === 'user' && <UserPopover />}
                                    {navElement.navIcon === 'th' && <SideDrawer />}
                                </div>
                            </Navlink>
                            {navElement.navIcon === 'user' && <NavDivider />}
                        </>
                    );
                })}
                <DarkMode />
            </TopNav.Section>
        </TopNav >
    );
}

export default Navbar;
