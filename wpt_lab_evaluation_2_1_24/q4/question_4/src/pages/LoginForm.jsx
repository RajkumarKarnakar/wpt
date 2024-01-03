import React, { useState } from "react";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [formDetails, setformDetails] = useState({ user: "", pass: "" });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setformDetails({ ...formDetails, [name]: value });
  };

  const authenticateUserDetails = () => {
    var user = UserService.authenticateUser(formDetails);
    if (user !== undefined) {
        setformDetails({ user: "", pass: "" });
        navigate("/addform");
    } else{
        alert("Enter valid authentication!!!");
    }
  };

  return (
    <div>
      <div className="modal-dialog" style={{ width: "450px" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login Form</h5>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputtext1"
                  name="user"
                  onChange={handleChange}
                  value={formDetails.user}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="pass"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={handleChange}
                  value={formDetails.pass}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={authenticateUserDetails}
              >
                Submit
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
