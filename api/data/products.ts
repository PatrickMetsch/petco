import { Product } from "../models/Product";

export const products:Product[] = [
    {
      product_brand: "Brand A",
      product_category: "Dog Food",
      product_name: "Product A",
      product_sku: "12345678901",
      product_parent_sku: "09876543211",
      product_quantity: "1",
      product_price: "$11.11"
    },
    {
      product_brand: "Brand B",
      product_category: "Dog Food",
      product_name: "Product B",
      product_sku: "12345678901",
      product_parent_sku: "09876543212",
      product_quantity: "1",
      product_price: "$22.22"
    },
    {
      product_brand: "Brand C",
      product_category: "Dog Food",
      product_name: "Product C",
      product_sku: "12345678903",
      product_parent_sku: "09876543213",
      product_quantity: "1",
      product_price: "$33.33"
    }
]