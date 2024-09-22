import React from "react";

const UserProfile = () => {
    if (!user) {
        return <div>No user found.</div>
    }

    return (
        <div>
            <h2>{user.name}</h2>
            <img  src={user.avatar_url} alt={user.name} width="150" />
            <p>Username: {user.login}</p>
            <p>Bio: {user.bio}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">Vist Github Profile</a>

        </div>
    )
}

export default UserProfile;