import { Job } from "../types/Job";
import { JobRow } from "./JobRow";

const DashBoard = () => {
  const allJobs: Job[] = [];
  allJobs.push({
    url: "localhost",
    company: "NYSISO",
    addedOn: new Date().toLocaleDateString(),
    status: "APPLIED",
  });

  return (
    <div className="container">
      <div className=" " style={{ width: "100%" }}>
        <button
          type="button"
          className="btn btn-primary mt-5"
          style={{
            height: "50px",
            width: "170px",
            fontSize: "24px",
            display: "flex",
            paddingBottom: "20px",
          }}
        >
          Add new Job
        </button>
      </div>
      <div className="container mt-5" style={{ overflow: "auto" }}>
        <h2 className="mb-4">Job applications</h2>

        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Status</th>
              <th>Company</th>
              <th>Added On</th>
              <th>url</th>

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
