import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'


interface FormValues {
    firstName: string;
    LastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ({ firstName, LastName, email }: FormValues) => {
        const errors: FormikErrors<FormValues> = {};

        if (!firstName) {
            errors.firstName = 'required'
        } else if (firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less'
        }

        if (!LastName) {
            errors.LastName = 'required'
        } else if (LastName.length > 10) {
            errors.firstName = 'Must be 10 characters or less'
        }

        if (!email) {
            errors.email = 'required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            LastName: '',
            email: '',
        },
        onSubmit: values => {
            console.log(values)
        },
        validate
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
                    name="firstName"
                    onBlur={handleBlur}
                    value={values.firstName}
                    onChange={handleChange}
                />

                {
                    touched.firstName && errors.firstName && <span>{errors.firstName}</span>
                }
                

                <label htmlFor="LastName"> Last Name</label>
                <input
                    type="text" name="LastName"
                    onBlur={handleBlur}
                    value={values.LastName}
                    onChange={handleChange}

                />
                {
                     touched.LastName && errors.LastName && <span>{errors.LastName}</span>
                }

                <label htmlFor="email"> Email Adress</label>
                <input type="text" name="email"
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                />
                {
                     touched.email && errors.email && <span>{errors.email}</span>
                }

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
