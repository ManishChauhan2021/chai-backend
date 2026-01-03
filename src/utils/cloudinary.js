import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET
// });


// const uploadPOnCloudinary = async (localFilePath) => {
//   try {
//     if (!localFilePath) return null
//     //upload the file on cloudinary
//     const response = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: "auto"
//     })
//     // file has been uploaded successfull
//     console.log("file is uploaded on cloudinary", response.url);
//     fs.unlinkSync(localFilePath)
//     return response;

//   } catch (error) {
//       fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation got failed
//   }
// }

// CLOUD_NAME=dgdiqyw8x
// CLOUD_API_KEY=324163994284377
// CLOUD_API_SECRET=5XG6d9QJ1p9L6l7IAHkdcIAuSDg

cloudinary.config({
  cloud_name: 'dgdiqyw8x',
  api_key: '324163994284377',
  api_secret: '5XG6d9QJ1p9L6l7IAHkdcIAuSDg',
});

const uploadPOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    console.log("Cloudinary config:", cloudinary.config());

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    });

    console.log("File uploaded on Cloudinary:", response.secure_url);

    fs.unlinkSync(localFilePath); // delete temp file after success
    return response;

  } catch (error) {
    console.error("Cloudinary upload error:", error.message);

    // delete temp file ONLY if it exists
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};

export { uploadPOnCloudinary };