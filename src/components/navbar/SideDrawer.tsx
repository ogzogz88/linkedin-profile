import React from 'react';
import { Drawer, Card, Flex, Text, Box } from 'bumbag';
import {
    CustomDrawer,
    NavHeader,
    SideDrawerIconContainer,
    NavImage,
    NavText,
    NavSubHeader,
    NavSubText,
} from './SideDrawerElements';
import { PopoverIcon } from './UserPopoverElements';
import { useTranslation } from 'react-i18next';

export function SideDrawer(): JSX.Element {
    const { i18n } = useTranslation();
    const sideDrawerData = i18n.t<any>('sideDrawerData', { returnObjects: true });
    const { innerText, headerText, iconData } = sideDrawerData;
    const { products, services, createPage } = headerText;

    return (
        <Drawer.State animated>
            <Drawer.Disclosure height="5px" marginTop="-7px">
                <PopoverIcon />
            </Drawer.Disclosure>
            <CustomDrawer placement="right" fade slide hideBackdrop>
                {/* products part */}
                <Card margin="1.5rem" padding="2px 0 0 0">
                    <NavHeader>{products}</NavHeader>
                    <Card margin="auto 0" borderRadius="0 0 4px 4px" padding="20px ">
                        <Flex flexWrap="wrap" justifyContent="space-between" maxWidth="325px">
                            {iconData.map((icon: Record<string, string>, index: string) => {
                                return (
                                    <Flex key={index} flexDirection="column">
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
                {/* services part */}
                <Card margin="1.5rem" padding="2px 0 0 0">
                    <NavHeader>{services}</NavHeader>
                    <Card margin="auto 0" padding="0.5rem 1rem" borderRadius="0 0 4px 4px">
                        {innerText.map((data: any, index: any) => {
                            return (
                                <Box key={index}>
                                    <NavSubHeader>{data.header}</NavSubHeader>
                                    <NavSubText>{data.text}</NavSubText>
                                </Box>
                            );
                        })}
                    </Card>
                    <Card margin="auto 0" borderRadius="0 0 4px 4px" padding="0.5rem 1.5rem">
                        <NavSubHeader>
                            {createPage} <Text fontSize="1.5rem">+</Text>
                        </NavSubHeader>
                    </Card>
                </Card>
            </CustomDrawer>
        </Drawer.State>
    );
}
