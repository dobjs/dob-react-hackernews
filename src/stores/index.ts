import { combineStores } from "dob";

import HackerNewsAction from "./hacker-news/action";
import HackerNewsStore from "./hacker-news/store";

export default combineStores({
  HackerNewsAction,
  HackerNewsStore,
});

