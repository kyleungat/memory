import { useState } from 'react';
import ThemeButton from '../theme-UI/ThemeButton'

function UserProfile() {

    const [shown, setShown] = useState(false);

    return (
        <>
            <div className="userProfile">
                <img className="userProfile-pic" src="/account_circle.svg" onClick={() => setShown(!shown)}/>
                {shown && 
                    <div className="userProfile-dropdown">
                        <ThemeButton name="log out"/>
                    </div>                       
                }
            </div>
            <style jsx>{`
                .userProfile {
                    display: block;
                    width: 100px;
                    height: 100px;
                    position: relative;
                }

                .userProfile-pic {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }

                .userProfile-dropdown {
                    background-color: #E5E5E5;
                    position: absolute;
                    padding: 10px;
                    right: 0;
                    box-shadow: 0 5px 5px #AAAAAA;
                }

                .userProfile-dropdown::before{
                    content: "";
                    border: 15px solid #E5E5E5;
                    border-top: 15px solid transparent;
                    border-left: 15px solid transparent;
                    position: absolute;
                    top: -30px;
                    right: 30px;
                }
            `}</style>
        </>
    );
}

export default UserProfile