import '../App.css'

import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import { UserContext } from '../contexts/userContext';



const Dashboard = () =>{

    const {theme} = useContext(ThemeContext);
    const {isLoggedIn} = useContext(UserContext);

    return(
        <div className="dash" style={{backgroundColor: theme === 'light' ? '#fafafa' : '#222',
        color: theme === 'light' ? '#000' : '#fff',}}>
            <h2>Dashboard</h2>
            {isLoggedIn ? <p>Welcome Back, Ashok!</p> : <p>Please Login in to access your preferrences</p>}
        </div>
    );
}

export{Dashboard}