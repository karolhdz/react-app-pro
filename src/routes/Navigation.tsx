import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import logo from "../logo.svg";
import { LapyPage1, LapyPage2, LapyPage3 } from '../01-lazyload/pages';

export const Navigation = () => {
    return (

        <BrowserRouter>
            {/* <Routes>
            <Route/>
        </Routes> */}

            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        <li>
                            <NavLink to="home" className={({isActive}) => isActive ? 'nav-active': ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive}) => isActive ? 'nav-active': ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({isActive}) => isActive ? 'nav-active': ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='about' element={<LapyPage1/>} />
                    <Route path='users' element={<LapyPage2/>} />
                    <Route path='home' element={<LapyPage3/>} />

                    <Route path='/*' element={<Navigate to="/home" replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
