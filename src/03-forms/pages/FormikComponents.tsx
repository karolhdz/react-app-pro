import { FormikErrors, Formik, Field, Form, useFormik, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

export const FormikComponents = () => {

    return (
        <div>
            <h1>
                Formik Components
            </h1>

            <Formik
                initialValues={{
                    firstName: '',
                    LastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={
                    (values) => {
                        console.log(values)
                    }
                }
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
                        LastName: Yup.string()
                            .max(10, 'Debe de tener 10 caracteres o menos')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('El correo es inválido')
                            .required('Requerido'),
                        terms: Yup.boolean()
                                .oneOf([true], 'Debe de aceptar las condiciones'),
                        jobType: Yup.string()
                                    .required('Requerido')
                                    .notOneOf(['it-jr'],'esta opción no es permitida')

                    })
                }
            >
                {
                    (formik) => (
                        <Form>
                            <label htmlFor="firstName"> First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name='firstName' component="span" />


                            <label htmlFor="LastName"> Last Name</label>
                            <Field name="LastName" type="text" />
                            <ErrorMessage name='LastName' component="span" />

                            <label htmlFor="email"> Email Adress</label>
                            <Field name="email" type="text" />
                            <ErrorMessage name='email' component="span" />

                            <label htmlFor="jobType"> Job Type</label>
                            <Field name="jobType" as="select">
                                <option value=""> Pick Sometrhin</option>
                                <option value="developer"> Developer</option>
                                <option value="designer"> Designer</option>
                                <option value="it-senior"> IT Senior</option>
                                <option value="it-jr"> IT Junior</option>
                            </Field>
                            <ErrorMessage name='jobType' component="span" />

                            <label>
                                <Field name="terms" type="checkbox" />
                                Terms and Conditions

                            </label>
                            <ErrorMessage name='terms' component="span" />

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}
