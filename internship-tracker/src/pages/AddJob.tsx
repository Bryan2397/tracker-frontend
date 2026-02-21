import { useState } from "react";
import { Job, jobData } from "../types/Job";
import axios from "axios";
const AddJob = () => {
  const [description, setDescription] = useState<string>("");

  const [formData, setFormData] = useState<Partial<Job>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitting job:", formData);

    // Example POST request (replace with your API)
    /*
    await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    */
  };

  const handleChatResponse = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await axios.post<jobData>(
        "http://localhost:8080/api/chat/description",
        {
          params: { description },
        },
      );
      const aiData = result.data;
      console.log(aiData);
      setFormData((prev) => ({
        ...prev,
        ...aiData,
        status: "NOT_APPLIED",
        location: aiData.location,
        addedOn: new Date().toISOString(),
      }));
    } catch (error) {
      console.log(error);
      alert("error in AI extraction");
    }
  };

  return (
    <div className="container mt-4">
      <h2 style={{ marginBottom: "40px" }}>Add Job</h2>

      <div className="mb-5">
        <label className="d-block" style={{ fontSize: "30px" }}>
          <strong>Use AI to Save time!!</strong>
        </label>
        <textarea
          className="mb-2 mt-3 form-control form-control-lg"
          rows={10}
          placeholder="Place the Job description here"
          value={description}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(event.target.value)
          }
        >
          {description}
        </textarea>
        <button
          onClick={handleChatResponse}
          className="d-block btn btn-primary"
        >
          Send to AI
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Company</label>
          <input
            name="company"
            className="form-control"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Job URL</label>
          <input
            name="url"
            type="url"
            className="form-control"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            name="location"
            className="form-control"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date Applied</label>
          <input
            type="date"
            name="dateApplied"
            className="form-control"
            value={formData.dateApplied}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            name="status"
            className="form-select"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="NOT_APPLIED">NOT_APPLIED</option>
            <option value="APPLIED">APPLIED</option>
            <option value="OA">OA</option>
            <option value="INTERVIEW">INTERVIEW</option>
            <option value="OFFER">OFFER</option>
            <option value="REJECTED">REJECTED</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Job Summary</label>
          <textarea
            name="jobSummary"
            className="form-control"
            rows={3}
            value={formData.jobSummary}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Notes</label>
          <textarea
            name="notes"
            className="form-control"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
