import React from "react"
import { useSelector } from 'react-redux';

function UserBadge(){
    const name = useSelector(state => state.name)
    return (
        <div>Hello: {name}</div>
    )
}

export default UserBadge