import React, {useContext} from 'react';

const MyContext = React.createContext()

export const ContextApp = () => {
    return (
        <MyContext.Provider value={'Hello world 123'}>
            <Child/>
        </MyContext.Provider>
    );
};

const Child = () => {
    const value = useContext(MyContext)
    return (
        <p>{value}</p>
    )
}
