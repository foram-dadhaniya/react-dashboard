import { useField } from "formik";

import { InputField, InputLabel, InputGroup } from "../../features/auth/SignIn.styles";

interface TextInputProps {
    label: string,
    name: string,
    type?: string,
    placeholder?: string
}

export const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return(
        <InputGroup>
            <InputLabel>{label}</InputLabel>
            <InputField {...field} {...props} ></InputField>
            {meta.touched && meta.error ? (<div className="errorMessage">{meta.error}</div>) : null}
        </InputGroup>
    )
}