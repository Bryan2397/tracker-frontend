const DashBoard = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center p-10">
        <button type="button" className="btn btn-primary">
          +
        </button>
      </div>

      <div className="container mt-5">
        <h2 className="mb-4">User Table</h2>

        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bryan</td>
              <td>bryan@example.com</td>
              <td>
                <span className="badge bg-success">Active</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
