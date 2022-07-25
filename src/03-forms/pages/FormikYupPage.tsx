import { FormikErrors, useFormik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps} = useFormik({
        initialValues: {
            firstName: '',
            LastName: '',
            email: '',
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
            LastName: Yup.string()
                        .max(10, 'Debe de tener 10 caracteres o menos')
                        .required('Requerido'),
            email:    Yup.string()
                        .email('El correo es inválido')
                        .required('Requerido')

        })
    });

    return (
        <div>
            <h1>
                Formik Basic Tutorial
            </h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName"> First Name</label>
                <input
                    type="text"
                    {...getFieldProps('firstName')}
                />

                {
                    touched.firstName && errors.firstName && <span>{errors.firstName}</span>
                }
                

                <label htmlFor="LastName"> Last Name</label>
                <input
                    type="text" 
                    {...getFieldProps('LastName')}

                />
                {
                     touched.LastName && errors.LastName && <span>{errors.LastName}</span>
                }

                <label htmlFor="email"> Email Adress</label>
                <input type="text" 
                        {...getFieldProps('email')}
                />
                {
                     touched.email && errors.email && <span>{errors.email}</span>
                }

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
