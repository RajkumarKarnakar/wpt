import React, { useEffect, useState } from "react";
import UserDataService from "../services/UserDataService";
import { Link } from "react-router-dom";

export default function UserList() {
  const [userArr, setuserArr] = useState([]);
  const [searchUserArr, setsearchUserArr] = useState([]);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = () => {
    let userDetails = UserDataService.getAllUserList();
    setuserArr([...userDetails]);
    setsearchUserArr([...userDetails]);
  };

  return (
    <div>
        <Link to="/addform">
            <button type="button" className="btn btn-primary mb-4">Add New User</button>
        </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Address</th>
            <th scope="col">Pin Code</th>
          </tr>
        </thead>
        <tbody>
          {searchUserArr.map((user) => (
            <tr key={Math.floor(Math.random()*1000)}>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.address}</td>
              <td>{user.pin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
