import React, {useState} from 'react';

const UseEffectHook = () => {
    const [value, setValue] = useState(0)
    const [visible, setVisible] = useState(true)
    if (visible) {
        return (
            <div>
                <button onClick={() => setValue((v) => v + 1)}>+</button>
                <button onClick={() => setVisible(false)}>hide</button>
                {/*<ClassCounter value={value}/>*/}
            </div>
        );
    } else {
        return (
            <button onClick={() => setVisible(true)}>
                show
            </button>
        );
    }
};

const PlanetInfo = ({id}) => {


    return (
        <div></div>
    )
}
