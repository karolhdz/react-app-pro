import { useField, Field, ErrorMessage } from 'formik';

interface Props{
    name: string,
    label: string,
    type?: 'text' | 'email' | 'password',
    placeholder?: string;
    [x: string]: any
}

export const MyTextInput = ({label, ...props}:Props) => {
    const [field] = useField(props);
  return (
    <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className='text-input' {...field} {...props}/>
        {/* {
            meta.touched && meta.error && (<span className='error'>{meta.error}</span>)
        } */}
        <ErrorMessage name={props.name} component="span"/>
    </>
  )
}
