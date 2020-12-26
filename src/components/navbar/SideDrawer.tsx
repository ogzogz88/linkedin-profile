import React from 'react';
import { Drawer, Card, Flex } from 'bumbag';
import {
    CustomDrawer,
    NavHeader,
    SideDrawerIconContainer,
    NavImage,
    NavText,
    NavSubHeader,
    NavSubText,
    sideDrawerData,
    iconData,
} from './SideDrawerElements';
import { PopoverIcon } from './UserPopoverElements';

export function SideDrawer(): JSX.Element {
    return (
        <Drawer.State animated>
            <Drawer.Disclosure style={{ height: '5px', marginTop: '-10px' }}>
                <PopoverIcon />
            </Drawer.Disclosure>
            <CustomDrawer placement="right" style={{ marginTop: '58px', borderRadius: '8px 8px 0 0' }} fade slide>
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
                        {sideDrawerData.map((data: any, index: any) => {
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
            </CustomDrawer>
        </Drawer.State>
    );
}
