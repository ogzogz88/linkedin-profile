import React from 'react';
import { Drawer, Card, Flex, Text, Image, applyTheme } from 'bumbag';
import { PopoverIcon } from './UserPopover';

const iconData = [
    {
        src: '../../assets/icons/sideDrawerIcon-1.png',
        text: 'Learning',
    },
    {
        src: '../../assets/icons/sideDrawerIcon-2.png',
        text: 'Insights',
    },
    {
        src: '../../assets/icons/sideDrawerIcon-3.png',
        text: 'Post a Job',
    },
    {
        src: '../../assets/icons/sideDrawerIcon-4.png',
        text: 'Advertise',
    },
    {
        src: '../../assets/icons/sideDrawerIcon-5.png',
        text: 'Find Leads',
    },
    {
        src: '../../assets/icons/sideDrawerIcon-6.png',
        text: 'Groups',
    },
    {
        src: '../../assets/icons/sideDrawerIcon-7.png',
        text: 'Pro Finder',
    },
    {
        src: '../../assets/icons/sideDrawerIcon-8.png',
        text: 'Salary',
    },
];
const sideDrawerData = [
    {
        header: 'Talent Solutions',
        text: 'Find, attract and recruit talent',
    },
    {
        header: 'Sales Solutions',
        text: 'Unlock sales opportunities',
    },
    {
        header: 'Post a job for free',
        text: 'Get your job in front of quality candidates',
    },
    {
        header: 'Marketing Solutions',
        text: 'Acquire customers and grow your business',
    },
    {
        header: 'Learning Solutions',
        text: 'Develop talent across your organization',
    },
];
const SideDrawerIconContainer = applyTheme(Flex, {
    styles: {
        base: {
            boxShadow: '0px 0px 3px 1px #eee ',
            padding: '1px',
            borderRadius: '4px',
            boxSizing: 'border-box',
            marginRight: '30px',
        },
    },
});
const NavImage = applyTheme(Image, {
    styles: {
        base: {
            borderRadius: '50%',
            width: '40px',
        },
    },
});
const NavHeader = applyTheme(Text, {
    styles: {
        base: {
            fontSize: '1rem',
            fontWeight: '500',
            margin: '1rem',
            textAlign: 'left',
            display: 'block',
        },
    },
});
const NavText = applyTheme(Text, {
    styles: {
        base: {
            textAlign: 'left',
            fontSize: '12px',
            display: 'block',
            color: '#666',
            marginTop: '2px',
            marginBottom: '15px',
        },
    },
});
const NavSubHeader = applyTheme(Text, {
    styles: {
        base: {
            textAlign: 'left',
            fontWeight: '500',
            fontSize: '0.9rem',
        },
    },
});
const NavSubText = applyTheme(Text, {
    styles: {
        base: {
            textAlign: 'left',
            fontSize: '12px',
            display: 'block',
            color: '#666',
            marginTop: '-2px',
            marginBottom: '2px',
        },
    },
});

export function SideDrawer(): JSX.Element {
    return (
        <Drawer.State animated>
            <Drawer.Disclosure style={{ height: '5px', marginTop: '-10px' }}>
                <PopoverIcon />
            </Drawer.Disclosure>
            <Drawer placement="right" style={{ marginTop: '58px', borderRadius: '8px 8px 0 0' }} fade slide>
                <Card style={{ margin: '1.5rem', padding: '2px 0 0 0' }}>
                    <NavHeader>Visit More Linkedin Products</NavHeader>
                    <Card style={{ margin: 'auto 0', borderRadius: '0 0 4px 4px', padding: '20px ' }}>
                        <Flex
                            style={{
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                maxWidth: '325px',
                            }}
                        >
                            {iconData.map((icon, index) => {
                                return (
                                    <Flex key={index} style={{ flexDirection: 'column' }}>
                                        <SideDrawerIconContainer>
                                            <NavImage alt="Linked icon" src={icon.src} />
                                        </SideDrawerIconContainer>
                                        <NavText>{icon.text}</NavText>
                                    </Flex>
                                );
                            })}
                        </Flex>
                    </Card>
                </Card>
                <Card style={{ margin: '1.5rem', padding: '2px 0 0 0' }}>
                    <NavHeader>LinkedIn Business Services</NavHeader>
                    <Card style={{ margin: 'auto 0', borderRadius: '0 0 4px 4px' }}>
                        {sideDrawerData.map((data, index) => {
                            return (
                                <div key={index}>
                                    <NavSubHeader>{data.header}</NavSubHeader>
                                    <NavSubText>{data.text}</NavSubText>
                                </div>
                            );
                        })}
                    </Card>
                    <Card style={{ margin: 'auto 0', borderRadius: '0 0 4px 4px', padding: '0.5rem 1.5rem' }}>
                        <NavSubHeader>
                            Create a Company Page <span style={{ fontSize: '1.5rem' }}>+</span>
                        </NavSubHeader>
                    </Card>
                </Card>
            </Drawer>
        </Drawer.State>
    );
}
