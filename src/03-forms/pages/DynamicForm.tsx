import { Form, Formik } from "formik";
import * as Yup  from 'yup';
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";


const initialValues: { [key: string]: any } = {};
const requieredFields: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if(rule.type === 'required'){
            schema = schema.required('Este campo es requerido');
        }

        if(rule.type === 'min-value'){
            schema = schema.min((rule as any).value || 2, `Mínimo de ${(rule as any).value || 2} caracteres` )
        }
        if(rule.type === 'email'){
            schema = schema.email('El email no es válido')
        }
 
    }

    requieredFields[input.name] = schema;
}

const validtionSchema = Yup.object({...requieredFields});

export const DynamicForm = () => {
    return (
        <div>
            <h1>DynamicForm</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={
                    values => {
                        console.log(values)
                    }
                }
                validationSchema={validtionSchema}
            >
                {(formik) => (
                    <Form>
                        {formJson.map(({ type, name, placeholder, label, options }) => {

                            if (type === 'input' || type === 'password' || type === 'email') {
                                return <MyTextInput
                                    key={name}
                                    label={label}
                                    name={name}
                                    type={(type as any)}
                                    placeholder={placeholder}
                                />
                            } else if (type === 'select'){
                                return (<MySelect
                                    key={name}
                                    label={label}
                                    name={name}
                                >
                                    <option value="">Select an option</option>
                                    {
                                        options?.map( opt =>(
                                            <option 
                                            key={opt.id}
                                            value={opt.id}>{opt.label}</option>
                                        ))
                                    }
                                </MySelect>)
                            }

                            return <span>Tipo no soportado</span>

                        })}
                        <button type="submit"> Submit </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
