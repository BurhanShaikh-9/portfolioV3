import { useState } from 'react';
import { loginService } from '../services/loginApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const [error, setError] = useState("");
    const [key, setKey] = useState("");
    const navigate = useNavigate();
    const [isKeyCorrect, setIsKeyCorrect] = useState(false);

    const { login } = loginService();

    // Handle changes in the KEY input
    const getKey = (e) => {
        setKey(e.target.value);
    };

    // Check if the entered key is correct
    const validateKey = () => {
        // Replace "correct-key" with your actual correct key
        if (key === "097521") {
            setIsKeyCorrect(true);
        } else {
            setError("Incorrect key. Please try again.");
            setIsKeyCorrect(false);
        }
    };

    // Handle changes in login input fields
    const getInput = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    // Submit login form
    const onSubmit = async (e) => {
        e.preventDefault();
        login(loginData)
            .then((res) => {
                const { token } = res.data;
                localStorage.setItem('authToken', token);
                navigate('/blogs')
            })
            .catch((error) => {
                setError("Invalid email or password");
                console.error("Login failed:", error);
            });
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="card w-50">
                <div className="card-body">
                    {!isKeyCorrect ? (
                        <div>
                            <h5>Enter KEY to access the login form</h5>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="keyInput"
                                    name="key"
                                    placeholder="Enter key"
                                    onChange={getKey}
                                    required
                                />
                                <label htmlFor="keyInput">KEY</label>
                            </div>
                            <button onClick={validateKey} className="btn btn-primary float-end">
                                Validate KEY
                            </button>
                            {error && (
                                <div className="mt-3 text-danger">
                                    {error}
                                </div>
                            )}
                        </div>
                    ) : (
                        <form onSubmit={onSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="emailInput"
                                            name="email"
                                            placeholder="name@example.com"
                                            onChange={getInput}
                                            required
                                        />
                                        <label htmlFor="emailInput">Email address</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="passwordInput"
                                            name="password"
                                            placeholder="*****"
                                            onChange={getInput}
                                            required
                                        />
                                        <label htmlFor="passwordInput">Password</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary float-end">
                                        Submit
                                    </button>
                                </div>
                                {error && (
                                    <div className="col-12 mt-3 text-danger">
                                        {error}
                                    </div>
                                )}
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
