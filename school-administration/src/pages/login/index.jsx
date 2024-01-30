import React from "react";
import { backdropStyle, containerStyle, inputStyle, buttonStyle, signUpStyle } from "../../styles/loginStyle";
import { useRouter } from "next/router";
import Link from 'next/link';
import {useAuth} from '../../context/AuthContext';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

export default function LogInPage() {
    const validationSchema = Yup.object({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
      });

    const router = useRouter();
    const { logIn } = useAuth();

    const handleCancel = () => {
        router.back();
    };

    const handleLogIn = async (username, password) => {
        try {
            const data = await logIn(username, password);
            console.log('Login successful', data);
            router.push('/').then(() => window.location.reload());
        } catch (error) {
            console.error('Login failed:', error);
            alert(error.message || 'Error Logging In');
        }
    }
    

    return (
        <div style={backdropStyle}>
          <div style={containerStyle}>
            <Formik
              initialValues={{ username: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={(values) => handleLogIn(values.username, values.password)}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field style={inputStyle} type="text" name="username" placeholder="Username" />
                  <Field style={inputStyle} type="password" name="password" placeholder="Password" />
                  <button style={buttonStyle} type="submit" disabled={isSubmitting}>Log In</button>
                  <button style={buttonStyle} type="button" onClick={handleCancel}>Cancel</button>
                  <Link href="/signup" style={signUpStyle}>Sign Up</Link>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      );
}
