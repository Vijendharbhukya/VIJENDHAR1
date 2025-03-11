import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { increment } from "../Store/redux/counterSlice";
import { useSelector } from "react-redux";
const FormPage = () => {
  const[id, setId]=useState('')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [qualification, setQualification] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const addHandler = () => {
    dispatch(increment())
  }
  const updateValue = useSelector((state) => state.counter.value)
  const nameFirst = (e) => {
    setFirstName(e.target.value);
  }
  const nameLast = (e) => {
    setLastName(e.target.value);
  }
  const selectGender = (e) => {
    setGender(e.target.value);
  }
  const onClickQualification = (e) => {
    setQualification(e.target.value);
  }
  const Email = (e) => {
    setEmail(e.target.value);
  }
  const PhoneNo = (e) => {
    setPhoneNumber(e.target.value);
  }
  const State = (e) => {
    setState(e.target.value);
  }
  const Address = (e) => {
    setAddress(e.target.value);
  }

  const OnClickClear = () => {
    setFirstName('');
    setLastName('');
    setGender('');
    setQualification('');
    setEmail('');
    setPhoneNumber('');
    setState('');
    setAddress('');
  }
  const location = useLocation();
  const enteredValue = location.state;
  const validateForm = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!gender) newErrors.gender = "Gender is required";
    if (!qualification) newErrors.qualification = "Qualification is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!state) newErrors.state = "State is required";
    if (!address) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const methodId=()=>{
    if(urlId){
      return "PUT"
    }
    else{
      return "POST"
    }
  }
const payloadUrl=()=>{
if(urlId){
  return "http://localhost:3000/details/"+urlId
}
else{
  return "http://localhost:3000/details"
}
}
  const OnAddButton = () => {
    if (validateForm()) {
      const inputDetails =
        {
          id:id,
          firstname: firstName,
          lastname: lastName,
          gender: gender,
          qualifications: qualification,
          emails: email,
          phoneNumbers: phoneNumber,
          states: state,
          address: address
        }
        fetch(payloadUrl(),{
          method:methodId(),
          headers:{"content-type":"application/json"},
          body:JSON.stringify(inputDetails)
        }).then((res)=>{
          alert('Saved successfully.')
          navigate('/ConformationPage');
        }).catch((err)=>{
          console.log(err.message)
        })
    }
  };
  const {urlId} = useParams();
  useEffect(()=>{
    if(urlId){
      fetch(`http://localhost:3000/details/${urlId}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setId(data.id)
          setFirstName(data.firstname);
          setLastName(data.lastname);
          setGender(data.gender);
          setQualification(data.qualifications);
          setEmail(data.emails);
          setPhoneNumber(data.phoneNumbers);
          setState(data.states);
          setAddress(data.address);
        })
        .catch((err) => {
          console.error("Error deleting data:", err.message);
        });
      
    }
  },[])
  return (
    <div className="container-fluid">
      <div className="container">
      <div className="row">
          <div>
            <label className="col-2">ID:</label>
            <input type="text" className="col-4" value={id} disabled={urlId} onChange={(e)=>{setId(e.target.value)}} />
          </div>
          </div>
        <div className="row">
          <div>
            <label className="col-2">FirstName:</label>
            <input type="text" className="col-4" value={firstName} onChange={nameFirst} />
            {errors.firstName && <span style={{ color: 'Red' }}>{errors.firstName}</span>}
          </div>
          <div>
            <label className="col-2">LastName:</label>
            <input type="text" className="col-4" value={lastName} onChange={nameLast} />
            {errors.lastName && <span style={{ color: 'Red' }}>{errors.lastName}</span>}
          </div>
        </div>
        <div className="row">
          <div>
            <label className="col-2">Gender:</label>
            <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={selectGender} />
            <label className="col-2" htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={selectGender} />
            <label className="col-2" htmlFor="female">Female</label>
            {errors.gender && <span style={{ color: 'Red' }}>{errors.gender}</span>}
          </div>
        </div>
        <div className="row">
          <div>
            <label className="col-2">Qualification:</label>
            <select name="Qualification" value={qualification} onChange={onClickQualification} className="col-4">
              <option value="">Select qualification</option>
              <option value="BTECH">BTECH</option>
              <option value="BCOM">Bcom</option>
              <option value="InterMediate">Intermediate</option>
              <option value="Tenth">Tenth</option>
            </select>
            {errors.qualification && <span style={{ color: 'Red' }}>{errors.qualification}</span>}
          </div>
        </div>
        <div className="row">
          <div>
          <label className="col-2">Email:</label>
          <input type="text" className="col-6" value={email} onChange={Email} />
          {errors.email && <span style={{ color: 'Red' }}>{errors.email}</span>}
        </div>
        </div>
        <div className="row">
          <div>
          <label className="col-2">PhoneNumber:</label>
          <input type="text" className="col-4" value={phoneNumber} onChange={PhoneNo} maxLength={10} />
          {errors.phoneNumber && <span style={{ color: 'Red' }}>{errors.phoneNumber}</span>}
        </div>
        </div>
        <div className="row">
          <div>
          <label className="col-2">State:</label>
          <select name="States" className="col-4" value={state} onChange={State}>
            <option value="">Select state</option>
            <option value="Telangana">Telangana</option>
            <option value="AndhraPradesh">Andhra Pradesh</option>
            <option value="Maharastra">Maharastra</option>
            <option value="Delhi">Delhi</option>
            <option value="Gujarat">Gujarat</option>
          </select>
          {errors.state && <span style={{ color: 'Red' }}>{errors.state}</span>}
        </div>
        </div>
        <div className="row">
          <div>
          <label className="col-2">Address:</label>
          <input type="text" className="col-6" value={address} onChange={Address} />
          {errors.address && <span style={{ color: 'Red' }}>{errors.address}</span>}
        </div>
        </div>
        <div className="row">
          <div>
          <button className="col-2" type="button" onClick={OnClickClear}>Clear</button>&nbsp;&nbsp;
          <button className="col-2" type="button" onClick={OnAddButton}>AddButton</button>
        </div>
        </div>
        {/* <button type="button" onClick={OnAddButton}>AddButton</button> */}
        {/* <button type="button" onClick={addHandler}>AddButton{updateValue}</button> */}

      </div>
    </div>
  );
};

export default FormPage;