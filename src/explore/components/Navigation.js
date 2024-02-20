import data from "../database/index.js";
import MenuItem from "./MenuItem.js";
import { html } from "../utils.js";

export default () => {
  const categories = data.categories;
  return html`<nav class="e_Navigation">
    <ul class="e_Navigation_list">
      ${categories.map(MenuItem).join("")}
    </ul>
  </nav>`;
};
