import React, { useState } from "react";
import '../css/LoginPage.css'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const LoginPage = () => {
    const [emails, setEmails] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const valueFromSlice = useSelector(state => state.employeeReducers)
    const [errors, setErrors] = useState({});
    const mails = (e) => {
        setEmails(e.target.value)
    }
    const passwords = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const enteredValue = {
                email: emails,
                password: password
            }
            alert('Saved successfully.')
            navigate('/FormPage', { state: enteredValue })
        }
    }

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;
        if (!emails) {
            newErrors.emails = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emails)) {
            newErrors.emails = "Email is invalid";
            isValid = false;
        }
        if (!password) {
            newErrors.password = "Password is required";
            isValid = false;
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
            isValid = false;
        } else if (!/[0-9]/.test(password)) {
            newErrors.password = "Password must contain at least one number";
            isValid = false;
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            newErrors.password = "Password must contain at least one special character";
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    }
    return (
        <><p className="title">Registration Form</p>
            <div className="container background" onClick={handleSubmit}>
                <div className="row">
                    <div className="col-12">
                        <lable className="col-2">LoginEmail:</lable>
                        <input type="email" className="col-6" value={emails} onChange={mails}></input><br></br>
                        {errors.emails && <span style={{ color: 'Red' }}>{errors.emails}</span>}
                    </div>
                    <div className="col-12">
                        <lable className="col-2">Password:</lable>
                        <input type="password" className="col-6" value={password} onChange={passwords}></input><br></br>
                        {errors.password && <span style={{ color: 'Red' }}>{errors.password}</span>}
                    </div>
                    <div className="col-12">
                        <input type="submit"  style={{ backgroundColor: "#a1eafb" }}></input>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage;