import { useState } from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useContext } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import toast from "react-hot-toast";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(faEye);

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(faEye);
      setType("text");
    } else {
      setIcon(faEyeSlash);
      setType("password");
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
    <img className="jpg" src="login.jpg" alt="" />
      <CssVarsProvider>
        <main style={{ marginTop: "4%" }}>
          <Sheet
            sx={{
              width: 300,
              mx: "auto", // margin left & right
              my: 0, // margin top & botom
              py: 9, // padding top & bottom
              px: 2, // padding left & right
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "sm",
              boxShadow: "md",
            }}
            variant="outlined"
          >
            <div>
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Login to continue.</Typography>
            </div>
            <FormControl>
              <FormLabel>Role</FormLabel>
              <Select
                value={role}
                onChange={(e, newValue) => setRole(newValue)}
              >
                <Option value="">Select Role</Option>
                <Option value="Employer">Employer</Option>
                <Option value="Job Seeker">Job Seeker</Option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type={type}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FontAwesomeIcon
                className="eye2"
                onClick={handleToggle}
                icon={icon}
              />
            </FormControl>
            <div className="err"></div>
            <Button
              type="submit"
              onClick={handleLogin}
              sx={{ mt: 1 /* margin top */ }}
            >
              Log in
            </Button>

            <Typography
              endDecorator={<Link href="/register">Register</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Don&apos;t have an account?
            </Typography>
            <Typography
              endDecorator={<Link href="/forget">Forget Password?</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            ></Typography>
          </Sheet>
        </main>
      </CssVarsProvider>
    </>
  );
}
