import { Job } from "../types/Job";
import { JobRow } from "./JobRow";

const DashBoard = () => {
  const allJobs: Job[] = [];
  allJobs.push({
    url: "localhost",
    company: "NYSISO",
    addedOn: new Date().toLocaleDateString(),
  });
  console.log(allJobs);

  return (
    <div className="container">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "10vh" }}
      >
        <button
          type="button"
          className="btn btn-primary "
          style={{
            height: "50px",
            width: "50px",
            fontSize: "40px",
            borderRadius: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          +
        </button>
      </div>
      <div className="container mt-5" style={{ overflow: "auto" }}>
        <h2 className="mb-4">Job applications</h2>

        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>url</th>
              <th>Company</th>
              <th>Added On</th>
              <th>Status</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {allJobs.map((job, index) => (
              <JobRow key={index} {...job} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
