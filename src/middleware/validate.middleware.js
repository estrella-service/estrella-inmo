export const validateSchema = (schema) => (req, res, next) => {
  console.log(req.body, 'req.body from validateSchema');
  try {
    console.log(schema.parse(req.body), 'schema.parse(req.body)');
    const response = schema.parse(req.body);
    console.log(response, 'response');
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.issues?.map((error) => error.message));
  }
};
