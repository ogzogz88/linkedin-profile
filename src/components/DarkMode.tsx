import React, { useState } from 'react';
import { Switch, useColorMode } from 'bumbag';

export function DarkMode(): JSX.Element {
    const [checked, setChecked] = useState(true);
    const { colorMode, setColorMode } = useColorMode();
    const handleChange = (e: any) => {
        setChecked(e.target.checked);
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
