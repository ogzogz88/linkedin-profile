/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { TopNav, Image, Input, Flex, } from 'bumbag';
import { Navlink, NavDivider } from './Navlink';
import NavText from './NavText';
import { UserPopover } from './UserPopover';
import { SideDrawer } from './SideDrawer';
import { NavIcon } from '../../theme/Theme';
import { NavImage } from './UserPopoverElements'
import { DarkMode } from '../DarkMode';
import { UserContext } from '../../providers/UserProvider';
import { useTranslation } from 'react-i18next';




export function Navbar(): JSX.Element {
    const { t, i18n } = useTranslation();
    const navData = i18n.t<any>('NavData', { returnObjects: true });
    const { user } = useContext(UserContext);
    const { photoURL }: any = user;
    return (
        <TopNav margin="0 2rem">
            <TopNav.Section>
                <Navlink keyData={100} href="/" style={{ marginLeft: '0' }}>
                    <Image src="/logo.png" height="35px" />
                </Navlink>
                <Flex alignItems="center">
                    <Input
                        before={<Input.Icon icon="solid-search" />}
                        placeholder={t('placeholder')}
                        marginLeft="5px"
                        size="small"
                        width="250px"
                        marginRight="6rem"
                    />
                </Flex>
            </TopNav.Section>
            <TopNav.Section >
                {navData?.map((navElement: { navHref: string; navIcon: string; navText: React.ReactNode; }, index: number) => {
                    const isNavUser = navElement.navIcon === "user";
                    const isNavPlain = navElement.navIcon === "";
                    const isNavWork = navElement.navIcon === "th";
                    const navUserStyle: React.CSSProperties = { paddingRight: "1rem" };
                    const navPlainStyle: React.CSSProperties = {
                        color: '#5d3b09',
                        fontSize: '0.75rem',
                        fontWeight: 'lighter',
                        width: '90px',
                        textAlign: 'center',
                    }
                    return (
                        <React.Fragment key={index}>
                            <Navlink
                                keyData={index}
                                href={navElement.navHref}
                                style={
                                    isNavUser ?
                                        navUserStyle :
                                        isNavPlain ?
                                            navPlainStyle :
                                            undefined
                                }
                            >
                                {!isNavUser && <NavIcon aria-label="Navlcon" icon={`solid-${navElement.navIcon}`} />}
                                {isNavUser && <NavImage src={photoURL ? `${photoURL}` : '../../assets/photos/profile.png'}
                                    alt="Profile Picture" width="30px" />}

                                <Flex key={index + 1}>
                                    <NavText>{navElement.navText}</NavText>
                                    {isNavUser && <UserPopover />}
                                    {isNavWork && <SideDrawer />}
                                </Flex>
                            </Navlink>
                            {isNavUser && <NavDivider />}
                        </React.Fragment>
                    );
                })}
                <DarkMode />
            </TopNav.Section>
        </TopNav >
    );
}

