import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { MyCheckbox, MySelect, MyTextInput } from '../components'

import '../styles/styles.css'

export const FormikAbstract = () => {

    return (
        <div>
            <h1>
                Formik Abstract
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
                            .notOneOf(['it-jr'], 'esta opción no es permitida')

                    })
                }
            >
                {
                    (formik) => (
                        <Form>
                            <MyTextInput
                                label='First Name'
                                name='firstName'
                                placeholder='Tu nombre'
                            />

                            <MyTextInput
                                label='Last Name'
                                name='LastName'
                                placeholder='Tu apellido'
                            />

                            <MyTextInput
                                label='Email'
                                name='email'
                                placeholder='example@gmail.com'
                                type='email'
                            />

                            
                            <MySelect name="jobType" label='Job Type'>
                                <option value=""> Pick Sometrhin</option>
                                <option value="developer"> Developer</option>
                                <option value="designer"> Designer</option>
                                <option value="it-senior"> IT Senior</option>
                                <option value="it-jr"> IT Junior</option>
                            </MySelect>
                            
                            <MyCheckbox label='Terms & Condicions' name='terms'/>

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}
