import React from 'react';
import { useForm } from 'react-hook-form';

export default function Sign(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const showPassword = (event) => {
        var password;
        if(event.target.nextSibling.id === "Password"){
            password = document.getElementById("Password");
        }
        else{
            password = document.getElementById("re-Password");
        }
        const _type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type",_type);
        event.target.classList.toggle("show");
    }

    return(
        <div className="sign-container">
            <section className="sign-page-inner">
                    <div className="form-head">
                        <h3 className="heading-login">Sign-UP</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} method="POST" action="" >
                        <div className="sign-form-wrapper">
                            <div className="inline-form sign">
                                <label for="First Name">
                                    <span>First Name</span>
                                </label>
                                <input id="First Name" {...register("firstname", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} placeholder="Enter Firstname" name="firstname" />
                                {errors.firstname && <span>Please Enter vaild Name</span>}
                            </div>
                            <div className="inline-form sign">
                                <label for="Last Name">
                                    <span>Last Name</span>
                                </label>
                                <input id="Last Name" {...register("lastname", { required: true, maxLength:20, pattern: /^[A-Za-z]+$/i })} type="text" placeholder="Enter Lastname" name="lastname" />
                                {errors.lastname && <span>Please Enter vaild Name</span>}
                            </div>
                        </div>
                        <div className="sign-form-wrapper">
                            <div className="inline-form sign">
                                <label for="genter">
                                    <span>Gender</span>
                                </label>
                                <select {...register("gender")} name="gender" id="gender">
                                    <option value="">--Choose Gender--</option>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                            <div className="inline-form sign">
                                <label for="Phone">
                                <span>Phone</span>
                                </label>
                                <input id="phone" {...register("phone", { required: true, pattern: /^[0-9]+$/i, maxLength:20 })} type="text" placeholder="Enter Phone Number" name="phone" />
                                {errors.phone && <span>Please Enter Number Only</span>}
                            </div>
                        </div>
                        <div className="inline-form sign">
                            <label for="Email">
                               <span>Email</span>
                            </label>
                            <input id="Email" {...register("email", { required: true })} type="text" placeholder="Enter Email" name="email" />
                        </div>
                        <div className="inline-form sign">
                            <label for="Password">
                               <span>Create New Password</span>
                            </label>
                            <span className="eye-icon" onClick={showPassword}></span>
                            <input id="Password" {...register("newpassword", { required: true, maxLength:10 })} type="password" placeholder="Enter Password" name="newpassword" />
                        </div>
                        <div className="inline-form sign">
                            <label for="re-Password">
                               <span>Re-Enter Password</span>
                            </label>
                            <span className="eye-icon" onClick={showPassword}></span>
                            <input id="re-Password" {...register("repassword", { required: true, maxLength:10 })} type="password" placeholder="Enter Re-Password" name="repassword" />
                        </div>
                        <div className="inline-form-btn">
                            <input type="submit" name="submit" value="Get User" />
                        </div>
                    </form>
                </section>
        </div>
    );
}