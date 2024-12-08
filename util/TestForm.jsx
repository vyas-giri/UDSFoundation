import React, {useState} from 'react'

function Testform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to the API route
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email.");
    }
  };


  return (
    <div className='py-3 bg-white'>
        <span className="flex items-center justify-center bg-white text-xl pb-3">
          Test Form
        </span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center bg-white space-y-3 pb-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="rounded-xl border p-2 border-cyan-500 outline-0 ring-0"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="rounded-xl border p-2 border-cyan-500 outline-0 ring-0"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="rounded-xl border p-2 border-cyan-500 outline-0 ring-0"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="rounded-xl border p-2 px-10 border-pink-500 outline-0 ring-0 hover:bg-pink-500 hover:text-white"
          >
            Submit
          </button>
        </form>
    </div>
  )
}

export default Testform