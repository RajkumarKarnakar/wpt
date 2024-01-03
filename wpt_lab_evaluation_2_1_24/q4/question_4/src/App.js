import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import LoginForm from "./pages/LoginForm";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import UserList from "./pages/UserList";

function App() {
  return (
    <div>
      <Header></Header>
      <section className="App-section">
        <Routes>
          <Route path="/login" element={<LoginForm></LoginForm>}></Route>
          <Route path="/addform" element={<AddUser></AddUser>}></Route>
          <Route path="/userlist" element={<UserList></UserList>}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
