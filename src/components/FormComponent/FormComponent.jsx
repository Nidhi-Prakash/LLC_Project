import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';


const FormComponent = ({ setIsUserHaveAccount }) => {

    const [userInfo, setUserInfo] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        isChecked: false
    });

    const [validation, setValidation] = useState({
        validFullName: false,
        validEmail: false,
        validPassword: false,
        validConfirmPassword: false,
        validPhoneNumber: false,
        validChecked: false,
    });

    const [clickOnSubmit, setClickOnSubmit] = useState(false);

    const checkValidation = () => {
        const { email, password, confirmPassword, fullName, phoneNumber, isChecked } = userInfo;

        if (fullName.length > 0) {
            setValidation((prevValidation) => { return { ...prevValidation, validFullName: true } });
        } else {
            setValidation((prevValidation) => { return { ...prevValidation, validFullName: false } });
        }

        if (email.includes('@') && email.includes('.') && email.substring(email.indexOf('.') + 1).length >= 2) {
            setValidation((prevValidation) => { return { ...prevValidation, validEmail: true } });
        } else {
            setValidation((prevValidation) => { return { ...prevValidation, validEmail: false } });
        }

        if (password.length > 6 && password.match(/[0-9]/g) && password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[@#$%&*]/g)) {
            setValidation((prevValidation) => { return { ...prevValidation, validPassword: true } });
        } else {
            setValidation((prevValidation) => { return { ...prevValidation, validPassword: false } });
        }

        if (confirmPassword.length > 0 && confirmPassword === password) {
            setValidation((prevValidation) => { return { ...prevValidation, validConfirmPassword: true } });
        } else {
            setValidation((prevValidation) => { return { ...prevValidation, validConfirmPassword: false } });
        }

        if (phoneNumber.length === 10) {
            setValidation((prevValidation) => { return { ...prevValidation, validPhoneNumber: true } });
        } else {
            setValidation((prevValidation) => { return { ...prevValidation, validPhoneNumber: false } });
        }

        if (isChecked) {
            setValidation((prevValidation) => { return { ...prevValidation, validChecked: true } });
        } else {
            setValidation((prevValidation) => { return { ...prevValidation, validChecked: false } });
        }
    }

    const handleChange = (event) => {
        const value = (event.target.value);
        const name = event.target.name;
        setUserInfo((prevInfo) => {
            return { ...prevInfo, [name]: value }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setClickOnSubmit(true);
        // check validation
        checkValidation();

        const allInfoTrue = Object.values(validation).every((value) => value);
        if (allInfoTrue) {
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsUserHaveAccount(true);

            setUserInfo({
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
                phoneNumber: '',
                isChecked: false
            });

            setValidation({
                validFullName: false,
                validEmail: false,
                validPassword: false,
                validConfirmPassword: false,
                validPhoneNumber: false,
                validChecked: false,
            });

        }
    }

    return (
        <Container className='p-5'>
            <h1 className='mb-2 text-dark'>Create an account</h1>
            <Form className='text-left' onSubmit={(event) => handleSubmit(event)}>
                <Form.Group className="mb-3" controlId="formGridEmail" >
                    <Form.Label className='h6 text-secondary'>Your email address</Form.Label>
                    <Form.Control className='p-2' name='email' onChange={(event) => handleChange(event)} value={userInfo.email} />
                    {!validation.validEmail && clickOnSubmit && <p className='text-danger m-0'>Invalid Email!</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPassword">
                    <Form.Label className='h6 text-secondary'>Your password</Form.Label>
                    <Form.Control className='p-2' type="password" name='password' onChange={(event) => handleChange(event)} value={userInfo.password} />
                    {!validation.validPassword && clickOnSubmit && <p className='text-danger m-0'>Invalid Password!</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className='h6 text-secondary'>Confirm your password</Form.Label>
                    <Form.Control className='p-2' type="password" name='confirmPassword' onChange={(event) => handleChange(event)} value={userInfo.confirmPassword} />
                    {!validation.validConfirmPassword && clickOnSubmit && <p className='text-danger m-0'>Password not matched!</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className='h6 text-secondary'>Your full name</Form.Label>
                    <Form.Control className='p-2' name='fullName' onChange={(event) => handleChange(event)} value={userInfo.fullName} />
                    {!validation.validFullName && clickOnSubmit && <p className='text-danger m-0'>Please fill this field!</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridCity">
                    <Form.Label className='h6 text-secondary'>Your phone number</Form.Label>
                    <Form.Control className='p-2' name='phoneNumber' onChange={(event) => handleChange(event)} value={userInfo.phoneNumber} />
                    {!validation.validPhoneNumber && clickOnSubmit && <p className='text-danger m-0'>Invalid Phone Number!</p>}
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check
                        type="checkbox"
                        name='isChecked'
                        checked={userInfo.isChecked}
                        onChange={(event) => {
                            setUserInfo((prevInfo) => {
                                return { ...prevInfo, isChecked: event.target.checked }
                            })
                        }}
                        label="I read and agree Terms and Conditions"
                    />
                    {!validation.validChecked && clickOnSubmit && <p className='text-danger m-0'>Please accept terms and condition!</p>}
                </Form.Group>

                <Button variant="primary" type="submit">Create account</Button>
            </Form>
        </Container>
    )
}

export default FormComponent;