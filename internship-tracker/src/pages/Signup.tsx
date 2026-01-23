import { useState } from "react";
import axios from "axios";

const backgroundStyle: React.CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0d6efd, #6ea8fe)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Signup = () => {
  interface SignupForm {
    email: string;
    password: string;
  }

  const handleChange = (update: Partial<SignupForm>) => {
    setSignup((signup) => ({ ...signup, ...update }));
    setTimeout(() => {
      console.log(signup);
    }, 1000);
  };

  async function handleSubmit() {
    try {
      const res = axios.post("http://localhost:8080/api/auth/signup", signup);
      console.log(res);
    } catch (error) {
      console.log("error message: ", error);
    }
  }

  const [signup, setSignup] = useState<SignupForm>({
    email: "",
    password: "",
  });

  return (
    <div style={backgroundStyle}>
      <div className="container" style={{ maxWidth: "450px" }}>
        <div className="card p-4 shadow-lg">
          <h1 className="text-center mb-4">Sign up here</h1>

          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={signup.email}
                onChange={(e) => handleChange({ email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={signup.password}
                onChange={(e) => handleChange({ password: e.target.value })}
              />
            </div>
          </form>
          <button
            onClick={handleSubmit}
            style={{
              borderRadius: "5px",
              height: "40px",
              width: "200px",
              alignSelf: "center",
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
