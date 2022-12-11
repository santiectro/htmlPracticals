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

export const getOne = async (id) => {
  const result = await Product.findById(id);

  return result;
};

export const remove = async(id) => {
  const result = await Product.findByIdAndDelete(id)
  return result
}

export const update = async(id, data) => {
  const result = await Product.findByIdAndUpdate(id, data)
  return result
}