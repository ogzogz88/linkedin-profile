import React, { useState } from 'react';
import { Switch, useColorMode } from 'bumbag';

export function DarkMode(): JSX.Element {
    const [checked, setChecked] = useState(true);
    const { colorMode, setColorMode } = useColorMode();
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        // using target instead of currentTarget gives error, because of bubbling it is not clear which element trigers the event
        setChecked(e.currentTarget.checked);
        colorMode === 'default' ? setColorMode('dark') : setColorMode('default');
    };
    return (
        <Switch
            colorMode={colorMode}
            style={{ marginLeft: '0.5rem' }}
            checked={checked}
            onChange={(e) => handleChange(e)}
        />
    );
}
