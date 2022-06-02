import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { LoginCustomer } from "../services/AuthServices";

const Login = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		Email: "",
		Password: "",
	});

	const { Email, Password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		let data = await LoginCustomer(formData);
		console.log("data",data);
        if(data.data.token)
        {
            localStorage.setItem("token",data.data.token);
            localStorage.setItem("userRole",data.data.userRole);
            navigate("/");

        }
        else
        {
            alert("Error occured !  Login credentials wrong...");
        }
	};


	return (
		<div>
			<br/><br/>
			      <center>
      <div style={{marginTop:"30px"}}>
          <center><h1 style={{color:"purple"}}>WELCOME TO SLIIT RESEARCH PROJECT MANAGEMENT</h1></center> 
        </div>
      
		

  
		
        </center>

		
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                   <a className="navbar-brand" href="/Hotel">Home</a>
				
                   <a className="navbar-brand" href="/StaffLogin">Staff Login</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div className="navbar-nav">

                
                  {/* students' Pages */}
                  <a style={{display:localStorage.getItem("userRole") == "user" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">student</a>  
                  <a style={{display:localStorage.getItem("userRole") == "user" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">student</a>  
                  <a style={{display:localStorage.getItem("userRole") == "user" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page"> student</a>   
                  <a style={{display:localStorage.getItem("userRole") == "user" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">student</a> 
                  {/* staff' Pages */}
                  <a style={{display:localStorage.getItem("userRole") == "staff" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">staff</a>  
                  <a style={{display:localStorage.getItem("userRole") == "staff" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">staff</a>  
                  <a style={{display:localStorage.getItem("userRole") == "staff" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">staff</a> 
                  <a style={{display:localStorage.getItem("userRole") == "staff" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">staff</a> 

                   {/* admin' Pages */}
                   <a style={{display:localStorage.getItem("userRole") == "admin" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">admin</a>  
                  <a style={{display:localStorage.getItem("userRole") == "admin" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">admin</a>  
                  <a style={{display:localStorage.getItem("userRole") == "admin" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">admin</a> 
                  <a style={{display:localStorage.getItem("userRole") == "admin" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">admin</a> 
                 </div>
                </div>
             </div>
          </nav>
		<br/>
		<div className="login-form">
            <center>
			<h1 className="heading">Sign In</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Staff Member Login
			</p>
			<br />
			<table>
				<tr>
					<th>
						<form onSubmit={(e) => onSubmit(e)}>
						<div className="form-group" style={{marginBottom:'15px'}}>
						<label style={{margineBottom:'5px'}}>Enter Email Address : </label>
								<input
									type="Email"
									className="form-control" 
									placeholder="Email Address"
									name="Email"
									value={Email}
									onChange={(e) => onChange(e)}
									required
								/>
								</div><br/>
								<div className="form-group" style={{marginBottom:'15px'}}>
								<label style={{margineBottom:'5px'}}>Enter Password : </label>
									<input
										type="password"
										className="form-control" 
										placeholder="Password"
										name="Password"
										minLength="6"
										value={Password}
										onChange={(e) => onChange(e)}
										required
									/>
								</div><br/>
                                <center>
								<input type="submit" className="btn btn-primary btn-lg active" value="Login" />
                                </center>
            
                                </form><br/>
                                </th>
                                </tr>
                                </table>
                                <p className="link">
                                Don't have an account? <Link to="/" >Sign Up</Link>
                                </p>
                                </center>
			
		</div>
		</div>
	
	);
};

export default Login;