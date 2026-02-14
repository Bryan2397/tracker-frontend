import { Job } from "../types/Job";

export const JobRow = (job: Job) => {
  return (
    <tr>
      <td>{job.url}</td>
      <td>{job.company}</td>
      <td>{job.addedOn}</td>
    </tr>
  );
};
