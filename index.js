const express = require("express");
const products = require("./model/model.js");
const productsRouter = require("./route.js");

products.getData();

const app = express();
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send(
    "Hello There,  you can use /products path to creat,read,update,delete products"
  );
});
// app.get("/products", getProducts);

// app.get("/products/:id", getProductById);

// app.post("/products", createProduct);

// app.patch("/products/:id", updateProduct);

// app.delete("/products/:id", deleteProduct);

app.listen(8080, () => {
  console.log("listening on http://localhost:8080");
});
