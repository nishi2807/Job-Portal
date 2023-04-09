import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const clientId = "244873686234-vtvor8q41b9eoe6vu3sdk3cjcer506c2.apps.googleusercontent.com"

function GoogleLogOutBtn() {
    const navigate = useNavigate();

    const onSuccess = () => {
        console.log("Logout Scuccessfull");
        navigate("/")
    }

    const renderButton = ({ onClick, disabled }) => (
        <button
            onClick={onClick}
            disabled={disabled}
            className='LogOut-btn'
        >
            <span>SignOut</span>
        </button>
    );

    return (
        <div id='signOutButton'>
            <GoogleLogout
                clientId={clientId}
                buttonText='LogOut'
                onLogoutSuccess={onSuccess}
                render={renderButton}
            />
        </div>
    )
}

export default GoogleLogOutBtn;