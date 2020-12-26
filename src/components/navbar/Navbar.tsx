/* eslint-disable prettier/prettier */
import React from 'react';
import { TopNav, Image, Input, Flex } from 'bumbag';
import { Navlink, NavDivider } from './Navlink';
import NavText from './NavText';
import { UserPopover } from './UserPopover';
import { SideDrawer } from './SideDrawer';
import { NavIcon } from '../../theme/Theme';
import { navData } from './NavData';
import { DarkMode } from '../DarkMode';

function Navbar(): JSX.Element {
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
                                <NavIcon aria-label="Navlcon" icon={`solid-${navElement.navIcon}`} />
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
                {/* <Navlink key={11} href="#" style={{ marginRight: '0', marginLeft: 0 }}>
                    <p
                        style={{
                            color: '#5d3b09',
                            fontSize: '0.75rem',
                            fontWeight: 'lighter',
                            width: '120px',
                            textAlign: 'center',
                        }}
                    >
                        Try Premium Free For 1 Month
                    </p>
                </Navlink> */}
                <DarkMode />
            </TopNav.Section>
        </TopNav >
    );
}

export default Navbar;
