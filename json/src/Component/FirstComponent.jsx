import React, { useState } from "react";

const FisrtComponent = () => {
    const [one, setOne] = useState()
    const [email, setEmail] = useState()
    const [phoneNo, setPhoneNo] = useState()
    const First = (e) => {
        setOne(e.target.value)
        console.log('1111', e.target.value)
    }
    console.log('1', one)
    const Email = (e) => {
        setEmail(e.target.value)
        console.log('2', email)
    }
    const PhoneNo = (e) => {
        setPhoneNo(e.target.value)
        console.log('1111', phoneNo)
    }
    const Button = (e) => {
        setOne(e.target.value)
        setEmail(e.target.value)
        setPhoneNo(e.target.value)
    }
    const OnClickClear = () => {
        setOne('')
        setEmail('')
        setPhoneNo('')
    }
    return (
        <div className="container-fluid">
            <div className="container">
                <input type="text" placeholder="NameOfStudent" value={one} onChange={First}></input>
                <div>
                    <input type="email" placeholder="Email" value={email} onChange={Email}></input>
                </div>
                <div>
                    <input type="number" placeholder="PhoneNumber" value={phoneNo} maxLength={10} onChange={PhoneNo}></input>
                </div>
                <div>
                    <button type="button" className="btn btn-secondary" onClick={OnClickClear}>Clear</button>
                    <button type="button" className="btn btn-success" onClick={Button}>Success</button>
                </div>
            </div>
        </div>
    )
}
export default FisrtComponent;
