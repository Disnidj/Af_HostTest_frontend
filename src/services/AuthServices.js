import axios from 'axios';



let LoginURL = "https://afsliitproject.herokuapp.com/signin";
let AuthURL = "https://afsliitproject.herokuapp.com/auth";
let getAllUsers = "https://afsliitproject.herokuapp.com/getallusers";
let Createuser = "https://afsliitproject.herokuapp.com/createUser";
let Updateuser = "https://afsliitproject.herokuapp.com/user/updateUserById/";
let Deleteuser = "https://afsliitproject.herokuapp.com/user/deleteUser/";

export async function RegisterCustomer(data) {
    const alldata = {
        Name:data.Name,
        ID:data.ID,
        Email:data.Email,
        PhoneNumber:data.PhoneNumber,
        Password:data.Password,
        userRole:"user"
    };

    return await axios.post(Createuser,alldata);
}


export async function LoginCustomer(data) {
    const alldata = {
      Email:data.Email,
      Password:data.Password,
    };
  
    return await axios.post(LoginURL,alldata);
}

export async function AuthCustomer(token) { 
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    return await axios.get(AuthURL,config);
}

export async function GetallUsers(){
  return axios.get(getAllUsers);
}




export async function UpdateAdmin(id,data) {
  const alldata = {
      name:data.name,
      ID:data.ID,
      email:data.email,
      PhoneNumber:data.PhoneNumber,
      password:data.password,
      userRole:"user"
  };

  return await axios.patch(Updateuser + id,alldata);
}

export async function DeleteUser(id) {
  return await axios.delete(Deleteuser + id);
}