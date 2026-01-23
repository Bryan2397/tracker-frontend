const backgroundStyle: React.CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0d6efd, #6ea8fe)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Signup = () => {
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
              />
            </div>
          </form>
          <button
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
