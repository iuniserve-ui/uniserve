import { useState } from "react";
import emailjs from "@emailjs/browser";

const QuoteForm = () => {
  const [form, setForm] = useState({
    organization: "",
    workers: "",
    workType: "",
    location: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_90htl0a",      // replace
        "template_3oa9dq3",     // replace
        {
          organization: form.organization,
          workers: form.workers,
          workType: form.workType,
          location: form.location,
          comments: form.comments,
        },
        "4QCliBPx95lxJgfx0"       // replace
      )
      .then(() => {
        alert("Quote request sent successfully!");
        setForm({
          organization: "",
          workers: "",
          workType: "",
          location: "",
          comments: "",
        });
      })
      .catch(() => {
        alert("Failed to send. Try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className=" py-30 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#0a2540] mb-10">
          Get a Free Quote
        </h2>

        <form
          onSubmit={sendEmail}
          className="bg-white p-8 rounded-2xl shadow-lg grid md:grid-cols-2 gap-6"
        >
          {/* Organization */}
          <input
            type="text"
            name="organization"
            placeholder="Organization Name"
            value={form.organization}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Workers */}
          <input
            type="number"
            name="workers"
            placeholder="Number of Workers"
            value={form.workers}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Work Type */}
          <input
            type="text"
            name="workType"
            placeholder="Type of Work (Cleaning, Maintenance...)"
            value={form.workType}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Location */}
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Comments */}
          <textarea
            name="comments"
            placeholder="Additional Comments"
            value={form.comments}
            onChange={handleChange}
            className="md:col-span-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            {loading ? "Sending..." : "Request Quote"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;