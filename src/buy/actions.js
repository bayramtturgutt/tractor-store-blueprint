import { readFromCookie, writeToCookie } from "./state.js";

export function handleAddToCart(req, res) {
  const sku = req.body.sku;

  const items = readFromCookie(req);

  const lineItem = items.find((i) => i.sku === sku);
  if (lineItem) {
    lineItem.quantity++;
  } else {
    items.push({ sku, quantity: 1 });
  }
  writeToCookie(items, res);
}