"use client";
import { useEffect } from "react";

interface Props {
  request: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestModal({ request, isOpen, onClose }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !request) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">{request.name}</h2>
        <p><strong>Email:</strong> {request.email}</p>
        <p><strong>Phone:</strong> {request.phone}</p>
        <p><strong>Service:</strong> {request.service}</p>
        <p><strong>Description:</strong> {request.description}</p>
        <p><strong>Status:</strong> {request.status}</p>
        <p><strong>Payment:</strong> {request.paymentStatus}</p>
        {request.attachments.length > 0 && (
          <a
            href={`http://localhost:5000/${request.attachments[0]}`}
            target="_blank"
            className="text-blue-500 underline mt-2 block"
          >
            View Attachment
          </a>
        )}
      </div>
    </div>
  );
}