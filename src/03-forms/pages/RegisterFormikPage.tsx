import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import '../styles/styles.css'

export const RegisterFormikPage = () => {

    return (



        <div>
            <h1>Register FORMIK Page</h1>
            <Formik initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
                onSubmit={
                    values => {
                        console.log(values)
                    }
                }

                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'El nombre debe tener mínimo dos caracteres')
                            .max(15, 'El nombre no puede pasar los 15 caracteres')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('El email no es válido')
                            .required('Requerido'),
                        password1: Yup.string()
                            .min(6, 'La contraseña debe tener minimo 6 caracteres ')
                            .required('Requerido'),
                        password2: Yup.string()
                            .required('Requerido')
                            .oneOf([Yup.ref('password1')], 'Las contraseñas deben de coincidir')
                    }

                    )
                }


            >
                {
                    ({handleReset}) => (
                        <Form>
                            <label htmlFor="name">Nombre</label>
                            <Field name="name" type="text" />
                            <ErrorMessage name='name' component='span' />

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name='email' component='span' />

                            <label htmlFor="password1">Password</label>
                            <Field name="password1" type="password" />
                            <ErrorMessage name='password1' component='span' />

                            <label htmlFor="password2">Repeat Password</label>
                            <Field name="password2" type="password" />
                            <ErrorMessage name='password2' component='span' />

                            <button type="submit" > Create </button>
                            <button type='button' onClick={handleReset}> Reset </button>

                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}
