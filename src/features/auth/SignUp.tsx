import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "../../components/form/TextInput";
import { PageWapper, FormWrapper, Button } from "./Auth.styles";
import { Concepts } from "../../components/Concepts";
import { useNavigate } from "react-router-dom";
import {ThemeToggle} from '../../components/theme/ThemeToggle';

interface LoginFormValues {
    name: string,
    email: string,
    password: string
}

//validation schema
const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
});

export const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const initialValues: LoginFormValues = {
        name:'',
        email: '',
        password: ''
    }

    const handleSubmit = (value: LoginFormValues) => {
        console.log(value);
        navigate('/signin');
    }

    return (
        <PageWapper>
            <ThemeToggle/>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <FormWrapper>
                    <Form>
                    <TextInput label="Name" name="name" type="text" />
                        <TextInput label="Email" name="email" type="email" />
                        <TextInput label="Password" name="password" type="password" />
                        <Button type="submit">Sign Up</Button>
                    </Form>
                </FormWrapper>
            </Formik>
            <Concepts/>
        </PageWapper>
    )
}