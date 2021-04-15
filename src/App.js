import React from 'react'
import { Form, UserList } from './components'
import { useSelector } from 'react-redux';

const App = () => {
    const count = useSelector(state => state.count)
    return (
        <>
        <div>{count}</div>
        <Form/>
        <UserList />
        </>
    )
}

export default App