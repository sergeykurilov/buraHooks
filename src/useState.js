import React, {useState} from 'react';

export const HookSwitcherApp = () => {
    return (
        <div>
            <HookSwitcher/>
        </div>
    )
}

const HookSwitcher = () => {
    const [color, setColor] = useState('black')
    const [fontSize, setFontSize] = useState(14)
    return (
        <div style={{padding: '10px', backgroundColor: color, fontSize: `${fontSize}px`}}>
            <button onClick={() => setColor('gray')}>
                Dark
            </button>
            <button onClick={() => setColor('white')}>
                Light
            </button>
            <button onClick={() => setFontSize((s) => s + 2)}>
                +
            </button>
        </div>
    )
}


