import styled from "styled-components";
import { useField } from "formik";

const Control = styled.div`
    margin-bottom: 20px;
`
const Label = styled.label`
    color: #fafafa;
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 1.25rem;
`

const MyInput = styled.input`
    outline: none;
    padding: 8px 10px;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.10);
    border-radius: 40px;
    width: 100%;
    margin-bottom: 5px;
`

const ErrorMessage = styled.div`
    color: red;

`

const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <Control>
            <Label>{label}</Label>
            <MyInput {...field} {...props} ></MyInput>
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
        </Control>
    )
}

export default Input