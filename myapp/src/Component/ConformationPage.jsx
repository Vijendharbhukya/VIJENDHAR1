import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/conformPage.css'

const ConformationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const data = location.state[0]; // data is an array, so we access the first item
  const [respData, setRespData] = useState([]);
// Delete API calling//
  const onDeleteValue = (id) => {
    fetch(`http://localhost:3000/details/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((resp) => {
        // Filter the deleted item out of the state to update the table
        setRespData((prevData) => prevData.filter((item) => item.id !== id));
        alert('Deleted successfully from Json.')
      })
      .catch((err) => {
        console.error("Error deleting data:", err.message);
      });
  };
  const onEdit = (id) => {
        navigate("/FormPage/"+id)
  };
  useEffect(() => {
    fetch("http://localhost:3000/details")
      .then((res) => res.json())
      .then((resp) => {
        setRespData(resp); // Set the response data
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <div>
      <h2>Confirmation Page</h2>
      <table border="1" cellPadding="10" style={{ margin: "20px", width: "100%", textAlign: "left",background:'white',border: '1px solid black' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Qualification</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>State</th>
            <th>Address</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {respData.length > 0 ? (
            respData.map((item) => (
              <tr key={item}>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.gender}</td>
                <td>{item.qualifications}</td>
                <td>{item.emails}</td>
                <td>{item.phoneNumbers}</td>
                <td>{item.states}</td>
                <td>{item.address}</td>
                <td>
                  <button onClick={()=>onEdit(item.id)} className="btn btn-warning btn-sm">
                    <i className="far fa-edit"></i> Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => onDeleteValue(item.id)} className="btn btn-danger btn-sm">
                    <i className="far fa-trash-alt"></i> Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: "center" }}>Loading data...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ConformationPage;