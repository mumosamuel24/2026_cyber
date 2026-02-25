import { Router } from "express";
import multer from "multer";
import {
  createServiceRequest,
  getAllRequests,
  updateRequestStatus,
  updatePaymentStatus,
} from "../controllers/serviceController";

const router = Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// ------------------ ROUTES ------------------ //

// POST /api/services/request
router.post("/request", upload.single("file"), createServiceRequest);

// GET /api/services/all
router.get("/all", getAllRequests);

// PATCH /api/services/update-status/:id
router.patch("/update-status/:id", updateRequestStatus);

// PATCH /api/services/update-payment/:id
router.patch("/update-payment/:id", updatePaymentStatus);

export default router;

// import { Router } from "express";
// import { createServiceRequest } from "../controllers/serviceController";
// import multer from "multer";

// const router = Router();

// // Configure Multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// const upload = multer({ storage });

// // POST /api/services/request
// router.post("/request", upload.single("file"), createServiceRequest);

// export default router;