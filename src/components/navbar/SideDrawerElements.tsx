import { Drawer, Flex, Text, Image, applyTheme } from 'bumbag';

export const iconData = [
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
export const sideDrawerData = [
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
export const SideDrawerIconContainer = applyTheme(Flex, {
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
export const NavImage = applyTheme(Image, {
    styles: {
        base: {
            borderRadius: '50%',
            width: '40px',
        },
    },
});
export const NavHeader = applyTheme(Text, {
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
export const NavText = applyTheme(Text, {
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
export const NavSubHeader = applyTheme(Text, {
    styles: {
        base: {
            textAlign: 'left',
            fontWeight: '500',
            fontSize: '0.9rem',
        },
    },
    modes: {
        dark: {
            defaultProps: {
                color: '#B1B7C2',
            },
        },
    },
});
export const NavSubText = applyTheme(Text, {
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
export const CustomDrawer = applyTheme(Drawer, {
    modes: {
        dark: {
            defaultProps: {
                color: '#B1B7C2',
            },
        },
    },
});
