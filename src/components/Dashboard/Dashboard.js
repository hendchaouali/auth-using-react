import React, {Component, useState} from "react";
import {useHistory} from "react-router-dom";

export default function Dashboard() {
    const history = useHistory();
    const [dashboard, setDashboard] = useState(null);
    const logout = () => {
        const toLogout = window.confirm("Voulez-vous vraiment vous déconnecter ?");
        if (toLogout) {
            localStorage.clear();
            history.push("/login");
        }
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <span className="navbar-text">Welcome!</span>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
              <span
                  className="nav-link cursor-pointer"
                  onClick={() => logout()}
              >
                Déconnexion
              </span>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="px-3">
                <h1>Welcome to dashboard page</h1>
            </div>
        </>
    );
};

