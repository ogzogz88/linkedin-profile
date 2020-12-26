import React from 'react';
import { Popover } from 'bumbag';
import { PopoverIcon, CustomPopover, PageLink, PopoverContent } from './UserPopoverElements';

export const UserPopover: React.FC = () => {
    return (
        <Popover.State>
            <Popover.Disclosure use={PageLink}>
                <PopoverIcon />
            </Popover.Disclosure>
            <CustomPopover>
                <PopoverContent />
            </CustomPopover>
        </Popover.State>
    );
};
