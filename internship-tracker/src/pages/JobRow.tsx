import { Job } from "../types/Job";

export const JobRow = (job: Job) => {
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
      <td>{job.url}</td>
    </tr>
  );
};
