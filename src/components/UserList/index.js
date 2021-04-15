import React, { useImperativeHandle } from "react"
import { useSelector } from 'react-redux';
import { UserBadge } from '..'

function UserList(){
    const users = useSelector(state => state.users)
    const badgeList = users.map(user => <UserBadge name={user.name} />)
    return (
        <div>{badgeList}</div>
    )
}

export default UserList