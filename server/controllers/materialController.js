import Material from "../models/Material.js";

// get material
export const getMaterials = (req, res) => {
  const query = {};

  Material.find(query)
    .populate("originId")
    .populate("primaryUomId")
    .skip()
    .limit()
    .sort()
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

// get a material
export const getMaterial = (req, res) => {
  const id = req.params.id;

  Material.findById(id)
    .populate("originId")
    .populate("primaryUomId")
    .skip()
    .limit()
    .sort()
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

// update a material
export const updateMaterial = (req, res) => {
  const updateId = req.params.id;
  const updatedData = req.body;

  Material.findByIdAndUpdate(updateId, updatedData, { new: true })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(409).json({ err });
    });
};

// delete Material
export const deleteMaterial = (req, res) => {
  const deleteId = req.params.id;
  Material.findByIdAndDelete(deleteId)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(409).json({ err });
    });
};
