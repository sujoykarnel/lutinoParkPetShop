import Origin from "../models/Origin.js";

// get origin
export const getOrigins = (req, res) => {
  Origin.find({})
    .populate()
    .skip()
    .limit()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ err, message: "Item not found." });
    });
};

// post origin
export const createOrigin = (req, res) => {
  const origin = new Origin(req.body);
  const savedOrigin = origin
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(409).json({ err });
    });
};
