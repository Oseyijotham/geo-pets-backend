import express from "express";
import { ctrlWrapper } from "../../helpers/ctrlWrapper.js";
// prettier-ignore
import {
  findPlaces,
  addPlaces,
  getSavedPlaces,
  getMyPlaceById,
  deletePlaceById,
  updateAppointmentNameById,
  updateClientAvatar,
  getCatPics
} from "../../controllers/placesController.js";
import { authenticateToken } from "../../middlewares/authenticateToken.js";
import { upload } from "../../middlewares/upload.js";

const router = express.Router();


router.get("/", authenticateToken, ctrlWrapper(getSavedPlaces));

router.post("/", authenticateToken, ctrlWrapper(findPlaces));

router.post("/saveplace", authenticateToken, ctrlWrapper(addPlaces));

router.get("/catpics", authenticateToken, ctrlWrapper(getCatPics));

router.get("/:appointmentId", authenticateToken, ctrlWrapper(getMyPlaceById));

router.delete("/:appointmentId", authenticateToken, ctrlWrapper(deletePlaceById));

router.patch("/avatars/:appointmentId", authenticateToken, upload.single("avatar"), ctrlWrapper(updateClientAvatar));

router.patch("/nameupdate/:appointmentId", authenticateToken, ctrlWrapper(updateAppointmentNameById));










export { router };
