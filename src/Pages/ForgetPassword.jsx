import { useLocation, useNavigate } from "react-router";
import { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const ForgetPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { resetPassword } = useContext(AuthContext);

    // Get email passed from login
    const [email, setEmail] = useState(location.state?.email || "");

    const handleReset = (e) => {
        e.preventDefault();

        resetPassword(email)
            .then(() => {
                toast("Password reset email sent!");
                window.location.href = "https://mail.google.com";
            })
            .catch((error) => {
                toast.error(error.code);
            });
    };

    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-4 text-center">
                <h2 className="font-semibold text-2xl">Reset Password</h2>

                <form onSubmit={handleReset} className="card-body">
                    <label className="label">Email</label>

                    <input
                        type="email"
                        className="input"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button className="btn btn-primary mt-4">
                        Reset Password
                    </button>
                </form>

                <button className="btn btn-link" onClick={() => navigate("/auth/login")}>
                    Back to Login
                </button>
            </div>
        </div>
    );
};

export default ForgetPassword;
