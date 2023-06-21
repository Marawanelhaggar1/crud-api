const products = require("../model/model.js");
let yup = require("yup");

exports.getProducts = (req, res) => {
  res.send(products.get());
};

exports.getProductById = (req, res) => {
  res.send(
    products.find(req.params.id)
      ? products.find(req.params.id)
      : "Product not found"
  );
};

exports.createProduct = (req, res) => {
  let product = req.body;

  const vScheme = yup
    .object({
      title: yup.string().required(),
      price: yup.number().required(),
      description: yup.string().required(),
      categoryId: yup.number().required(),
      images: yup.array().required(),
    })
    .noUnknown();

  try {
    vScheme.validateSync(product, {
      strict: true,
    });

    res.send(products.create(product));
  } catch (error) {
    res.send(error.toString());
  }
};

exports.updateProduct = (req, res) => {
  let id = req.params.id;
  let product = req.body;

  const vScheme = yup
    .object({
      title: yup.string(),
      price: yup.number(),
      description: yup.string(),
      categoryId: yup.number(),
      images: yup.array(),
    })
    .noUnknown();

  try {
    vScheme.validateSync(product, {
      strict: true,
    });

    res.send(products.update(id, product));
  } catch (error) {
    res.send(error.toString());
  }
};

exports.deleteProduct = (req, res) => {
  let id = req.params.id;

  res.send(products.delete(id));
};
