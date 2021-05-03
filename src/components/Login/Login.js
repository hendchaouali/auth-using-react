import React, {useState, Component} from "react";
import {useForm} from "react-hook-form"; // import useForm hooks
import styles from "./Login.module.css";
import config from "../../config";
import axios from "axios";
import {useHistory} from "react-router-dom";

export default function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [message, setMessage] = useState();
    const history = useHistory();

    const onSubmit = (data) => {
        setMessage({
            data: "authentification en cours...",
            type: "alert-warning",
        });
        axios.post(`${config.baseUrl}/authenticate`, data).then(res => {
            localStorage.setItem("token", res.data.id_token);
            setMessage({
                data: "authentification avec succès, redirection...",
                type: "alert-success",
            });

            setTimeout(() => {
                history.push("/dashboard");
            }, 3000);

        }, error => {
            setMessage({
                data: error.response.data.title,
                type: "alert-danger",
            });

        });
    };
    return (
        <div
            className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}
        >
            <div className={styles.loginFormContainer}>
                {message && (
                    <div
                        className={`alert fade show d-flex ${message.type}`}
                        role="alert"
                    >
                        {message.data}
                        <span
                            aria-hidden="true"
                            className="ml-auto cursor-pointer"
                            onClick={() => setMessage(null)}
                        >
              &times;
            </span>
                    </div>
                )}
                <fieldset className="border p-3 rounded">
                    <legend
                        className={`${styles.loginFormLegend} border rounded p-1 text-center`}
                    >
                        Login Form
                    </legend>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                        <div className="form-group">
                            <label htmlFor="inputForEmail">Email</label>
                            <span className="mandatory">*</span>
                            <input
                                id="inputForEmail"
                                name="email"
                                type="email"
                                className="form-control"
                                aria-describedby="Email"
                                placeholder="Email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Veuillez saisir votre email.",
                                    },
                                })}
                            />
                            {/**
                             * we provide validation configuration for email field above
                             * error message are displayed with code below
                             */}
                            {errors.email && (
                                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.email.message}
                </span>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputForPassword">Mot de passe</label>
                            <span className="mandatory">*</span>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="inputForPassword"
                                placeholder="Mot de passe"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Veuillez saisir votre mot de passe.",
                                    },
                                })}
                            />
                            {errors.password && (
                                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.password.message}
                </span>
                            )}
                        </div>
                        <div className="d-flex align-items-center">
                            <button type="submit" className="btn btn-outline-primary">
                                Login
                            </button>
                        </div>
                    </form>
                </fieldset>
            </div>
        </div>

    )
}
