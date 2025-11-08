import Material from "../models/Material.js";

// get material
export const getMaterials = (req, res) => {
  Material.find({})
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

// post material
export const createMaterial = (req, res) => {
  const material = new Material(req.body);
  const savedMaterial = material
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(409).json({ err });
    });
};
