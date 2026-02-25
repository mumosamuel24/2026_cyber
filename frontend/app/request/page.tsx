"use client";

import { useState } from "react";

const servicesOptions = [
  "IT Support",
  "Web Development",
  "Graphic Design",
  "Government Services",
  "Cyber Café Services",
];

export default function RequestPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: servicesOptions[0],
    description: "",
    file: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("service", formData.service);
    formDataToSend.append("description", formData.description);
    if (formData.file) formDataToSend.append("file", formData.file);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services/request`, {
      method: "POST",
      body: formDataToSend,
    });

    const data = await res.json();

    if (data.success) {
      alert("Service request submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: servicesOptions[0],
        description: "",
        file: null,
      });
    } else {
      alert("Failed to submit request. Try again.");
    }
  } catch (err) {
    console.error(err);
    alert("Server error. Try again later.");
  }
};

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // TODO: Connect to backend API
//     console.log("Submitting request:", formData);
//     alert("Request submitted! (Backend not connected yet)");
//   };

  return (
    <main className="min-h-screen bg-green-50 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-black p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center">Request a Service</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-red-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Select Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              {servicesOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Description / Details</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            ></textarea>
          </div>

          <div>
            <label className="block mb-2 font-medium">Attach File (optional)</label>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition w-full"
          >
            Submit Request
          </button>
        </form>
      </div>
    </main>
  );
}