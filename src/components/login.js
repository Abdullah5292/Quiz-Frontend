import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { useDispatch } from "react-redux";
import { login } from "../redux/user.reducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "jivynosyfu@mailinator.com",
            password: "Pa$$w0rd!",
            social_auth_type: "normal",
        },
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append("email", values.email);
            formData.append("password", values.password);
            formData.append("social_auth_type", values.social_auth_type);
            const response = await axios.post(
                "https://sandbox.practical.me/api/login",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (response.status === 200) {
                console.log("200")
                NotificationManager.success(response.data.msg);
                dispatch(login(response.data.data.auth_token));
                navigate("/home");
            } else {
                NotificationManager.error(response.data.msg || response.statusText);
            }
        }
    });
    return (
        <form
            style={{ display: "flex", flexDirection: "column", gap: "1rem", borderRadius: "5px" }}
            onSubmit={formik.handleSubmit}
        >
            <TextField
                onChange={formik.handleChange}
                value={formik.values.email}
                name="email"
                label="Email"
                variant="outlined"
            />
            <TextField
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                label="Password"
                type="password"
                variant="outlined"
            />
            <TextField
                onChange={formik.handleChange}
                value={formik.values.social_auth_type}
                name="Social_auth_type"
                label="Social_auth_type"
                variant="outlined"
            />

            <Button type="submit" variant="contained" style={{ backgroundColor: "#800000" }}>
                Login
            </Button>
        </form>
    );
};

export default Login;
