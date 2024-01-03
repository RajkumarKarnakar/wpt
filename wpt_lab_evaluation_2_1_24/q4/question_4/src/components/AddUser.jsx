import React, { useState } from "react";
import UserDataService from "../services/UserDataService";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const navigate = useNavigate();
  const [userDetails, setuserDetails] = useState({
    fname: "",
    lname: "",
    address: "",
    pin: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuserDetails({ ...userDetails, [name]: value });
  };

  const addUserDetails = () => {
    if (
      userDetails.fname === "" ||
      userDetails.lname === "" ||
      userDetails.address === "" ||
      userDetails.pin === ""
    ) {
        alert("Enter valid details!!!!!");
    } else {
      UserDataService.insertUser(userDetails);
      navigate("/userlist");
    }
  };

  return (
    <div>
      <div className="modal-dialog" style={{ width: "450px" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add User</h5>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputfirst">First Name</label>
                <input
                  name="fname"
                  type="text"
                  className="form-control"
                  id="exampleInputfirst"
                  onChange={handleChange}
                  value={userDetails.fname}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputlast">Last Name</label>
                <input
                  name="lname"
                  type="text"
                  className="form-control"
                  id="exampleInputlast"
                  onChange={handleChange}
                  value={userDetails.lname}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputadd">Address</label>
                <input
                  name="address"
                  type="text"
                  className="form-control"
                  id="exampleInputadd"
                  onChange={handleChange}
                  value={userDetails.address}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputpin">Pin Code</label>
                <input
                  name="pin"
                  type="text"
                  className="form-control"
                  id="exampleInputpin"
                  onChange={handleChange}
                  value={userDetails.pin}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={addUserDetails}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
