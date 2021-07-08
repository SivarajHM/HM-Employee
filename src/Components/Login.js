import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const showPassword = (event) => {
        var password = document.getElementById("password");
        const _type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type",_type);
        event.target.classList.toggle("show");
    }

    return(
        <div className="login-wrapper">
            <div className="login-container">
                <section className="login-page">
                    <div className="form-head">
                        <h3 className="heading-login">user Sign-In</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} method="POST" action="" >
                        <div className="inline-form">
                            <label for="username">
                                <span>username</span>
                            </label>
                            <span className="login-icons user"></span>
                            <input id="username" {...register("username")} placeholder="Enter Username" name="username" />
                        </div>
                        <div className="inline-form">
                            <label for="password">
                                <span>Password</span>
                            </label>
                            <span className="login-icons password"></span>
                            <span className="eye-icon" onClick={showPassword}></span>
                            <input id="password" {...register("password", { required: true })} type="password" placeholder="Enter Password" name="password" />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div className="inline-form reminder">
                        <input name="reminderme" type="checkbox" {...register('reminderme')} id="reminderme" className={`form-check-input ${errors.reminderme ? 'is-invalid' : ''}`} />
                            <label for="reminderme">
                                <span>Reminder Me</span>
                            </label>
                        </div>
                        <div className="inline-form-btn">
                            <input type="submit" name="submit" value="Login" />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}