import { readFromCookie } from "../state.js";
import { html } from "../utils.js";

export default ({ req }) => {
  const lineItems = readFromCookie(req);
  const quantity = lineItems.reduce((t, { quantity }) => t + quantity, 0);
  return html`<div class="c_MiniCart" data-boundary="checkout-minicart">
    <a href="/checkout/cart" class="c_MiniCart__icon"> 🛒 ${quantity} </a>
    <a href="/checkout/cart" class="c_MiniCart__button">go to cart</a>
  </div>`;
};
