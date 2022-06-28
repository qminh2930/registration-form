import './App.css';
import { useState } from "react";
import data from "./data.json";

function App() {
  const [contacts, setContacts] = useState(data);
  // const handleGetButton = () => {
  //   let cloneData = [...data];
  //   cloneData.push({ id: "aaa", name: valFirstName + valLastName, university: valUniversity , phone: valPhone });
  //   setData(cloneData);
  // };
  const [addFormData, setAddFormData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    university: "",
    email: "",
    phone: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: addFormData.id,
      first_name: addFormData.first_name,
      last_name: addFormData.last_name,
      university: addFormData.university,
      email: addFormData.email,
      phone: addFormData.phone
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  
  return (
    <div class="container">
      <form class="table-login1" onSubmit={handleAddFormSubmit}>
        <h1>THÔNG TIN SINH VIÊN</h1>
        <div class="table-body">
        <div class="form-row">
            <div class="name">ID</div>
              <div class="value">
                <div class="input-group">
                <input class="input--style-5" type="text" name="id" onChange={handleAddFormChange}></input>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="name">Name</div>
            <div class="value">
              <div class="row row-space">
                <div class="col-2">
                  <div class="input-group-desc">
                    <input class="input--style-5" type="text" name="first_name" onChange={handleAddFormChange}></input>
                    <label class="label--desc">first name</label>
                  </div>
                </div>

                <div class="col-2">
                  <div class="input-group-desc">
                    <input class="input--style-5" type="text" name="last_name" onChange={handleAddFormChange}></input>
                    <label class="label--desc">last name</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="name">University</div>
              <div class="value">
                <div class="input-group">
                <input class="input--style-5" type="text" name="university" onChange={handleAddFormChange}></input>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="name">Email</div>
              <div class="value">
                <div class="input-group">
                <input class="input--style-5" type="text" name="email" onChange={handleAddFormChange}></input>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="name">Phone</div>
              <div class="value">
                <div class="input-group">
                <input class="input--style-5" type="text" name="phone" onChange={handleAddFormChange}></input>
              </div>
            </div>
          </div>

          <div>
            <button class="btn btn--radius-2 btn--red" type="submit">Register</button>
          </div>

        </div>
      </form>

      <form class="table-login2" >
        <table>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>University</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </table>
        
        {contacts.map((contact) => (
            <tr>
              <td>{contact.id}</td>
              <td>{contact.first_name}</td>
              <td>{contact.last_name}</td>
              <td>{contact.university}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <button>Xoa</button>
              </td>
            </tr>
          ))}
      </form> 

      
    </div>
  );
}

export default App;
