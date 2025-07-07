import '../App.css'


import { ThemeContext } from '../contexts/themeContext'
import { UserContext } from '../contexts/userContext' 
import { useContext } from 'react'

const Header = () =>{
    
    const{theme,toggleTheme} = useContext(ThemeContext);
    const{isLoggedIn,Login,Logout} = useContext(UserContext);

    return(
        <header style={{backgroundColor: theme === 'light' ? 'whitesmoke' : '#222',
                        color: theme === 'light' ? '#000' : '#fff',}}>
            <h1>User Preference Dashboard</h1>
            <div className="subDiv">
                <button onClick={toggleTheme}>
                    Switch to {theme=='light'?'dark':'light'} Mode
                </button>
                <button onClick={isLoggedIn?Logout:Login}>
                    {isLoggedIn?'Logout':'Login'}
                </button>
            </div>

        </header>
    );
}


export {Header}