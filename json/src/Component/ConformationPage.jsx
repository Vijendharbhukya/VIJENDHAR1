import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../css/conformPage.css'

const ConformationPage = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const data = location.state[0]; // data is an array, so we access the first item

  const onClickBackButton = () => {
    // navigate('/', { state: data });
  };

  return (
    <div>
      <h2>Confirmation Page</h2>
      <table border="1" cellPadding="10" style={{ margin: "20px", width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Qualification</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>State</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.firstname}</td>
            <td>{data.lastname}</td>
            <td>{data.gender}</td>
            <td>{data.qualifications}</td>
            <td>{data.emails}</td>
            <td>{data.phoneNumbers}</td>
            <td>{data.states}</td>
            <td>{data.address}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type="button" onClick={onClickBackButton}>Back</button>
      </div>
    </div>
  );
};

export default ConformationPage;
