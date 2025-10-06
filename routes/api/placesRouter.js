import express from "express";
import { ctrlWrapper } from "../../helpers/ctrlWrapper.js";
// prettier-ignore
import {
  findPlaces,
  addPlaces,
  getSavedPlaces,
  getMyPlaceById,
  deletePlaceById,
  updatePlaceDetailsById,
  updatePlaceAvatar,
  getCatPics,
  getDogPics,
  getMoreCatPics,
  getMoreDogPics,
} from "../../controllers/placesController.js";
import { authenticateToken } from "../../middlewares/authenticateToken.js";
import { upload } from "../../middlewares/upload.js";

const router = express.Router();


router.get("/savedPlaces", authenticateToken, ctrlWrapper(getSavedPlaces));

router.post("/", authenticateToken, ctrlWrapper(findPlaces));

router.post("/saveplace", authenticateToken, ctrlWrapper(addPlaces));

router.get("/catpics", ctrlWrapper(getCatPics));

router.get("/dogpics", ctrlWrapper(getDogPics));

router.post("/morecatpics", ctrlWrapper(getMoreCatPics));

router.post("/moredogpics", ctrlWrapper(getMoreDogPics));

router.get("/:appointmentId", authenticateToken, ctrlWrapper(getMyPlaceById));

router.delete("/:appointmentId", authenticateToken, ctrlWrapper(deletePlaceById));

router.patch("/avatars/:placeId", authenticateToken, upload.single("avatar"), ctrlWrapper(updatePlaceAvatar));

router.patch("/detailsUpdate/:placeId", authenticateToken, ctrlWrapper(updatePlaceDetailsById));

export { router };
