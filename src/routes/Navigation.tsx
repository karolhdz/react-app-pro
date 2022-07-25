import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import logo from "../logo.svg";
import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstract, RegisterFormikPage, DynamicForm} from '../03-forms/pages';

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
                            <NavLink to="/register" className={({isActive}) => isActive ? 'nav-active': ''}>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={({isActive}) => isActive ? 'nav-active': ''}>Forimik Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={({isActive}) => isActive ? 'nav-active': ''}>FormikYupPage</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={({isActive}) => isActive ? 'nav-active': ''}>FormikComponents</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstract" className={({isActive}) => isActive ? 'nav-active': ''}>FormikAbstract</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-register" className={({isActive}) => isActive ? 'nav-active': ''}>RegisterFormikPage</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-form" className={({isActive}) => isActive ? 'nav-active': ''}>DynamicForm</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='register' element={<RegisterPage/>} />
                    <Route path='formik-basic' element={<FormikBasicPage/>} />
                    <Route path='formik-yup' element={<FormikYupPage/>} />
                    <Route path='formik-components' element={<FormikComponents/>} />
                    <Route path='formik-abstract' element={<FormikAbstract/>} />
                    <Route path='formik-register' element={<RegisterFormikPage/>} />
                    <Route path='dynamic-form' element={<DynamicForm/>} />

                    <Route path='/*' element={<Navigate to="/home" replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
