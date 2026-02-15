import { useState } from "react";
import { Job } from "../types/Job";

export const JobRow = (job: Job) => {
  const [show, setShow] = useState<boolean>(false);

  const getStatusClass = (status: string) => {
    switch (status) {
      case "APPLIED":
        return "badge bg-primary";
      case "OA":
        return "badge bg-dark";
      case "INTERVIEW":
        return "badge bg-info";
      case "OFFER":
        return "badge bg-success";
      case "REJECTED":
        return "badge bg-danger";
    }
    return "";
  };

  return (
    <tr>
      <td className={getStatusClass(job.status)} style={{ color: "white" }}>
        {job.status}
      </td>
      <td>{job.company}</td>
      <td>{job.addedOn}</td>
      <td>
        <a href={job.url}>JOB LINK</a>
      </td>
      <td
        style={{
          maxWidth: "400px",
          wordWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "Show"}
        </button>
        {show && job.description}
      </td>
    </tr>
  );
};
