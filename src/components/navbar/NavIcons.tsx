import { applyTheme, Icon, ParseIconsOpts } from 'bumbag';
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
                ],
                prefix: 'solid-',
                type: 'font-awesome' as ParseIconsOpts['type'],
            },
        ],
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
});
