import React from 'react';
import { Link } from "react-router-dom";
import { login02, loginlogo } from '../../imagepath';
const ForgotPassword = () => {
    return (
        <div>
            <div className="main-wrapper login-body">
                <div className="container-fluid px-0">
                    <div className="row">
                        {/* Login logo */}
                        <div className="col-lg-6 login-wrap">
                            <div className="login-sec">
                                <div className="log-img">
                                    <img
                                        className="img-fluid"
                                        src={login02}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* /Login logo */}
                        {/* Login Content */}
                        <div className="col-lg-6 login-wrap-bg">
                            <div className="login-wrapper">
                                <div className="loginbox">
                                    <div className="login-right">
                                        <div className="login-right-wrap">
                                            <div className="account-logo">
                                              <  Link to="/admin-dashboard">
                                                    <img src={loginlogo} alt="#"/>
                                                </Link>
                                            </div>
                                            <h2>Reset Password</h2>
                                            {/* Form */}
                                            <form action="./login">
                                                <div className="form-group">
                                                    <label>
                                                        Email <span className="login-danger">*</span>
                                                    </label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                                <div className="form-group login-btn">
                                                    <button className="btn btn-primary btn-block" type="submit">
                                                        <Link to ='/login'/>
                                                        Reset Password
                                                    </button>
                                                </div>
                                            </form>
                                            {/* /Form */}
                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Login Content */}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ForgotPassword;
