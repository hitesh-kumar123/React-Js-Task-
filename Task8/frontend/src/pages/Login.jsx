import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/authApi";

const Login = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post(
                "/login",
                form
            );

            localStorage.setItem(
                "token",
                res.data.token
            );

            navigate("/profile");
        } catch (error) {
            alert(error.response?.data?.message);
        }
    };

    return (
        <div className="container">
            <form className="card" onSubmit={handleSubmit}>
                <h2>Login</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <button>Login</button>

                <p>
                    New User?
                    <Link to="/"> Register</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;