import cloudinary from "../config/cloudinary.js";

const uploadImageToCloudinary = async (fileBuffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "products" }, // cloud folder name
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    ).end(fileBuffer);
  });
};

export default uploadImageToCloudinary;


//---------//

// {*/for all types*/}

// const uploadFileToCloudinary = async (fileBuffer, mimetype) => {
//   let resourceType = "image";

//   if (mimetype.startsWith("video")) {
//     resourceType = "video";
//   } else if (mimetype === "application/pdf") {
//     resourceType = "raw";
//   }

//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload_stream(
//       {
//         folder: "uploads",
//         resource_type: resourceType,
//       },
//       (error, result) => {
//         if (error) reject(error);
//         else resolve(result);
//       }
//     ).end(fileBuffer);
//   });
// };