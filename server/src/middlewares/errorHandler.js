const errorHandler = (error, req, res, next) => {

  if (error.message.includes("Invalid file type")) {
    return res.status(400).json({
      status: "error",
      message: "Only JPEG, PNG, and GIF image files are allowed.",
    });
  }

  if (error.code === 11000) {
    return res.status(400).json({
      status: "error",
      message: "Duplicate entry, something went wrong!",
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Something went wrong on the server",
  });
};

export default errorHandler