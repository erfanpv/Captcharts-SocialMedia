import multer from "multer";
import cloudinary from "../config/cloudinary.js";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});

const uploadImage = (req, res, next) => {
  upload.single("file")(req, res, async (error) => {
    if (error) {
      return res.status(400).json({ message: "Error uploading file" });
    }
    if (req.file) {

      try {
        
        const result = await cloudinary.uploader.upload_stream(
          { resource_type: "auto" },
          (error, result) => {
            console.log(error)
            if (error) {
              return next(error);
            }
            req.cloudinaryImageUrl = result.secure_url;
            next();
          }
        );
        result.end(req.file.buffer);
      } catch (error) {
        console.log(error)

        return next(error);
      }
    } else {
      next();
    }
  });
};

export default uploadImage;
