import Product from '../models/Product';

// C
// R get all of them/ one of them
// U
// D
export const create = async (data) => {
  const product = new Product(data);
  await product.save();

  return product;
};

export const get = async () => {
  const result = await Product.find({});

  return result;
};
