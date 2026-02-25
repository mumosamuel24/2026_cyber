"use client";
import { useEffect, useState } from "react";
import RequestTable from "./components/RequestTable";

interface ServiceRequest {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
  attachments: string[];
  status: string;
  paymentStatus: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [filteredRequests, setFilteredRequests] = useState<ServiceRequest[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterService, setFilterService] = useState("ALL");

  const fetchRequests = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services/all`);
      const data = await res.json();
      if (data.success) {
        setRequests(data.data);
        setFilteredRequests(data.data);
      }
    } catch (err) {
      console.error("Failed to fetch requests:", err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // Update filteredRequests whenever filter/search changes
  useEffect(() => {
    let temp = [...requests];

    if (filterService !== "ALL") {
      temp = temp.filter((req) => req.service === filterService);
    }

    if (searchTerm) {
      temp = temp.filter(
        (req) =>
          req.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          req.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          req.phone.includes(searchTerm)
      );
    }

    setFilteredRequests(temp);
  }, [filterService, searchTerm, requests]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name, email, or phone"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-80"
        />

        <select
          value={filterService}
          onChange={(e) => setFilterService(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="ALL">All Services</option>
          <option value="IT Support">IT Support</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Web Development">Web Development</option>
          <option value="Government Services">Government Services</option>
          <option value="Cyber Café Services">Cyber Café Services</option>
        </select>
      </div>

      <RequestTable requests={filteredRequests} refresh={fetchRequests} />
    </div>
  );
}
// "use client";
// import { useEffect, useState } from "react";
// import RequestTable from "./components/RequestTable";

// interface ServiceRequest {
//   _id: string;
//   name: string;
//   email: string;
//   phone: string;
//   service: string;
//   description: string;
//   attachments: string[];
//   status: string;
//   paymentStatus: string;
//   createdAt: string;
// }

// export default function AdminDashboard() {
//   const [requests, setRequests] = useState<ServiceRequest[]>([]);

//   const fetchRequests = async () => {
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services/all`);
//       const data = await res.json();
//       if (data.success) setRequests(data.data);
//     } catch (err) {
//       console.error("Failed to fetch requests:", err);
//     }
//   };

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
//       <RequestTable requests={requests} refresh={fetchRequests} />
//     </div>
//   );
// }

// // "use client";
// // import { useEffect, useState } from "react";
// // import RequestTable from "./components/RequestTable";

// // interface ServiceRequest {
// //   _id: string;
// //   name: string;
// //   email: string;
// //   phone: string;
// //   service: string;
// //   description: string;
// //   attachments: string[];
// //   status: string;
// //   paymentStatus: string;
// //   createdAt: string;
// // }

// // export default function AdminDashboard() {
// //   const [requests, setRequests] = useState<ServiceRequest[]>([]);

// //   useEffect(() => {
// //     fetch(`${process.env.NEXT_PUBLIC_API_URL}/services/all`)
// //       .then((res) => res.json())
// //       .then((data) => {
// //         if (data.success) setRequests(data.data);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
// //       <RequestTable requests={requests} />
// //     </div>
// //   );
// // // 