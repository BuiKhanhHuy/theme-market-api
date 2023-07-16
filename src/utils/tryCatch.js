const tryCatch = (controller) => async (req, res, next) => {
  try {
    await controller(req, res);
  } catch (error) {
    console.log("=> try catch error: ", error)
    return next(error);
  }
};

export default tryCatch;
