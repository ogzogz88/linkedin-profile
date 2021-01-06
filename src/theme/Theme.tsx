import { applyTheme, Icon, PageWithHeader, ParseIconsOpts } from 'bumbag';
import {
    faHome,
    faUserFriends,
    faSuitcase,
    faCommentDots,
    faBell,
    faUser,
    faSortDown,
    faTh,
    faSearch,
    faPencilAlt,
    faQuestionCircle,
    faCog,
} from '@fortawesome/free-solid-svg-icons';

export const Theme = {
    Icon: {
        iconSets: [
            {
                icons: [
                    faHome,
                    faUserFriends,
                    faSuitcase,
                    faCommentDots,
                    faBell,
                    faUser,
                    faSortDown,
                    faTh,
                    faSearch,
                    faPencilAlt,
                    faQuestionCircle,
                    faCog,
                ],
                prefix: 'solid-',
                type: 'font-awesome' as ParseIconsOpts['type'],
            },
        ],
    },
    DropdownMenu: {
        Popover: {
            styles: {
                base: {
                    fontSize: '0.8rem',
                    width: '285px',
                },
            },
        },
    },
};
export const NavIcon = applyTheme(Icon, {
    styles: {
        base: {
            color: '#545454',
            ':hover': {
                color: '#000',
            },
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
export const AppPageWithHeader = applyTheme(PageWithHeader, {
    modes: {
        dark: {
            defaultProps: {
                background: '#505660',
            },
        },
        default: {
            defaultProps: {
                background: '#f3f2ef',
            },
        },
    },
});
