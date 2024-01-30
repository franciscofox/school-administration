import React from "react";
import SignUp from "../../helpers/signup";
import { backdropStyle, containerStyle, inputStyle, buttonStyle } from "../../styles/loginStyle";
import { useRouter } from "next/router";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

export default function LogInPage() {
    const router = useRouter();

    const handleCancel = () => {
        router.back();
    };

    const handleSignUp = (username, password) => {
        SignUp(username, password);
        router.push("/");
    }
        
    return (
        <div style={backdropStyle}>
            <div style={containerStyle}>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => handleSignUp(values.username, values.password)}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field style={inputStyle} type="text" name="username" placeholder="Username" />
                            <Field style={inputStyle} type="password" name="password" placeholder="Password" />
                            <button style={buttonStyle} type="submit" disabled={isSubmitting}>Sign Up</button>
                            <button style={buttonStyle} type="button" onClick={handleCancel}>Cancel</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
