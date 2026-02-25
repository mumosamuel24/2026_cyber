import mongoose from "mongoose";

const ServiceRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: String, required: true },
    description: { type: String },
    attachments: { type: [String], default: [] },
    status: {
      type: String,
      enum: ["PENDING","IN_PROGRESS","WAITING_PAYMENT","COMPLETED","CANCELLED"],
      default: "PENDING",
    },
    paymentStatus: {
      type: String,
      enum: ["UNPAID","PAID"],
      default: "UNPAID",
    },
  },
  { timestamps: true }
);

export default mongoose.model("ServiceRequest", ServiceRequestSchema);