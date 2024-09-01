import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'

function Profile () {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='details'>Profile Details</Link></li>
                    <li><Link to='settings'>Profile Settings</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='details' element={ProfileDetails}></Route>
                <Route path='settings' element={ProfileSettings}></Route>
            </Routes>
        </div>
    )
}

export default Profile