import Material from "../models/Material.js";

// get material
export const getMaterials = (req, res) => {
  const query = {};
  Material.find(query)
    .populate()
    .skip()
    .limit()
    .then((data) => {
      Material.countDocuments(query)
        .then((count) => {
          res.status(200).json({ data, totalCount: count });
        })
        .catch((countErr) => {
          res.status(500).json({ error: countErr });
        });
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
