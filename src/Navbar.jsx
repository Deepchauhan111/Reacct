import './navbar.css'
import logo from './Assets/Logo.png'
import { NavLink } from 'react-router-dom';
import { IoMdCloseCircle } from "react-icons/io"

function Navbar() {
    function show() {
        let modal = document.getElementById("myModal").style;
        modal.display = "block";
        console.log('SHOW')
    }
    function hide() {
        let modal = document.getElementById("myModal").style;
        modal.display = "none";
        console.log('HIDE')
    }
    function checkpassword(){
        let inputid = document.getElementById('inputid').value
        console.log(inputid)
        if( inputid.length < 8){
            alert("Enter Minimum 8 digit")
        }
        else{
            alert("Login Successful")
        }
    }
    
    return (
        <>
            <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css'></link>
            <div className="navbar">
                <div className="img">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu">
                    <ul>
                        <li><NavLink to="/"> Home</NavLink></li>
                        <li><NavLink to="/ourpackage">Our Package</NavLink></li>
                        <li><NavLink to="/airlines">Air lines</NavLink></li>
                        <li><NavLink to="/destination">Destination</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                    </ul>
                </div>
                <div className="btn">
                    <button id='loginbtn' onClick={show}>Log in</button>
                </div>
            </div>
            <div id="myModal" className='modal' style={{ 'display': 'none' }}>
                <div className="modal-content">
                    <span className='close' onClick={hide}><IoMdCloseCircle /></span>
                    <div class="box">
                        <div class="login">
                            <form>
                                <h3>Login</h3>
                                <div class="login_filed">
                                    <i class="bi bi-envelope-fill"></i>
                                    <input type="text" id='nameid' class="login_input" placeholder="User Name / Email" />
                                </div>
                                <div class="login_filed">
                                    <i class="bi bi-shield-lock-fill"></i>
                                    <input type="password" id='inputid' class="login_input" placeholder="Enter password" />
                                </div>
                                <button id='loginconform' onClick={checkpassword}>Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}

export default Navbar
