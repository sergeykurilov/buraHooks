import React, {useEffect, useState} from 'react';

class ClassCounter extends React.Component {

}

const HookCounter = ({value}) => {
    useEffect(() => {
        console.log('componentDidMount')
    }, [])
    useEffect(() => console.log('componentDidUpdate'))
    useEffect(() => {
        console.log('mount')
        return () => console.log('componentWillUnMount')
    }, [])
    return <p>{value}</p>
}

const Notification = () => {
    const [visible, setVisible] = useState(true)
    const timer = 1500;
    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false)
        }, timer)
        return () => clearTimeout(timeout)
    }, [])
    return (
        visible && <div>
            <h1>Hello</h1>
        </div>
    )
}


const UseEffectHook = () => {
    const [value, setValue] = useState(0)
    const [visible, setVisible] = useState(true)
    if (visible) {
        return (
            <div>
                <button onClick={() => setValue((v) => v + 1)}>+</button>
                <button onClick={() => setVisible(false)}>hide</button>
                {/*<ClassCounter value={value}/>*/}
                <HookCounter value={value}/>
                <Notification/>
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

export default UseEffectHook;
