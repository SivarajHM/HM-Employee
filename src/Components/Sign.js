import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
export default function Sign(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const signInshowPassword = (event) => {
        var _signpassword;
        if(event.target.nextSibling.id === "password"){
            _signpassword = document.getElementById("password");
        }
        else{
            _signpassword = document.getElementById("re-Password");
        }
        const _type = _signpassword.getAttribute("type") === "password" ? "text" : "password";
        _signpassword.setAttribute("type",_type);
        event.target.classList.toggle("show");
    }

    return(
        <div className="sign-container">
            <section className="sign-page-inner">
                    <div className="form-head">
                        <h3 className="heading-login">Sign-UP</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} method="POST" action="" >
                        <div className="inline-form sign">
                            <label htmlFor="userName">
                                <span>User Name</span>
                            </label>
                            <input id="userName" {...register("username", { required: true, maxLength:20, pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Enter Username" name="username" />
                            {errors.username && <span>Please Enter vaild Name</span>}
                        </div>
                        <div className="inline-form sign">
                            <label htmlFor="email">
                               <span>Email</span>
                            </label>
                            <input id="email" {...register("email", { required: true })} type="text" placeholder="Enter Email" name="email" />
                        </div>
                        <div className="inline-form sign">
                            <label htmlFor="password">
                               <span>Create New Password</span>
                            </label>
                            <span className="eye-icon" onClick={signInshowPassword}></span>
                            <input id="password" {...register("newpassword", { required: true, maxLength:10 })} type="password" placeholder="Enter Password" name="newpassword" />
                        </div>
                        <div className="inline-form sign">
                            <label htmlFor="re-Password">
                               <span>Re-Enter Password</span>
                            </label>
                            <span className="eye-icon" onClick={signInshowPassword}></span>
                            <input id="re-Password" {...register("repassword", { required: true, maxLength:10 })} type="password" placeholder="Enter Re-Password" name="repassword" />
                        </div>
                        <div className="inline-form-btn">
                            <input type="submit" name="submit" value="Sumbit" />
                        </div>
                    </form>
                    <div className="login-link">
                        <Link to="/login">Login</Link>
                    </div>
                </section>
        </div>
    );
}