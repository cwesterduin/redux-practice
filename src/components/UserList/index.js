import React from "react"
import { useSelector } from 'react-redux';
import { UserBadge } from '..'

function UserList(){
    const users = useSelector(state => state.myReducer.users)
    const badgeList = users.map((user, i) => <UserBadge key={i} name={user.name} />)
    return (
        <div>{badgeList}</div>
    )
}

export default UserList