"use client";
import { useState } from "react";
import RequestModal from "./RequestModal";

interface Props {
  request: any;
  refresh: () => void;
}

export default function RequestRow({ request, refresh }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateStatus = async (newStatus: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services/update-status/${request._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    refresh();
  };

  const updatePayment = async (newPayment: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services/update-payment/${request._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentStatus: newPayment }),
    });
    refresh();
  };

  return (
    <>
      <tr className="border-b hover:bg-gray-100 cursor-pointer" onClick={() => setIsModalOpen(true)}>
        <td className="p-2">{request.name}</td>
        <td>{request.email}</td>
        <td>{request.phone}</td>
        <td>{request.service}</td>
        <td>
          <select value={request.status} onChange={(e) => updateStatus(e.target.value)} className="border p-1 rounded">
            <option value="PENDING">PENDING</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="CANCELLED">CANCELLED</option>
          </select>
        </td>
        <td>
          <select value={request.paymentStatus} onChange={(e) => updatePayment(e.target.value)} className="border p-1 rounded">
            <option value="UNPAID">UNPAID</option>
            <option value="PAID">PAID</option>
          </select>
        </td>
        <td>{request.attachments.length > 0 ? "Yes" : "No"}</td>
      </tr>
      <RequestModal request={request} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}