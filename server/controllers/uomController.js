import Uom from "../models/Uom.js";

// get uom
export const getUoms = (req, res) => {
  Uom.find({})
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

// post uom
export const createUom = (req, res) => {
  const uom = new Uom(req.body);
  const savedUom = uom
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(409).json({ err });
    });
};
