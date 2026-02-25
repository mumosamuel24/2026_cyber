import { Request, Response } from "express";
import { sendEmailNotification, sendSmsNotification } from "./utils/notify";
import ServiceRequest from "../models/ServiceRequest";

// ------------------ CREATE SERVICE REQUEST ------------------
export const createServiceRequest = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, service, description } = req.body;
    const fileUrl = req.file ? req.file.path : null;

    const newRequest = await ServiceRequest.create({
      name,
      email,
      phone,
      service,
      description,
      attachments: fileUrl ? [fileUrl] : [],
      status: "PENDING",
      paymentStatus: "UNPAID",
    });

    res.status(201).json({ success: true, data: newRequest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ------------------ GET ALL SERVICE REQUESTS ------------------
export const getAllRequests = async (req: Request, res: Response) => {
  try {
    const requests = await ServiceRequest.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ------------------ UPDATE REQUEST STATUS ------------------
export const updateRequestStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedRequest = await ServiceRequest.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedRequest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ------------------ UPDATE PAYMENT STATUS ------------------
export const updatePaymentStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;

    const updatedRequest = await ServiceRequest.findByIdAndUpdate(
      id,
      { paymentStatus },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedRequest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// import { Request, Response } from "express";
// import ServiceRequest from "../models/ServiceRequest";

// export const createServiceRequest = async (req: Request, res: Response) => {
//   try {
//     const { name, email, phone, service, description } = req.body;
//     const fileUrl = req.file ? req.file.path : null;

//     const newRequest = await ServiceRequest.create({
//       name,
//       email,
//       phone,
//       service,
//       description,
//       attachments: fileUrl ? [fileUrl] : [],
//       status: "PENDING",
//       paymentStatus: "UNPAID",
//     });

//     res.status(201).json({ success: true, data: newRequest });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };