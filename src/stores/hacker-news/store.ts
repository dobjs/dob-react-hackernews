import { observable, Static } from "dob";

@observable
export default class HackerNewsStore {
  /**
   * 当前页面数据
   */
  public currentLists = []
  /**
   * 当前页面是否处于 loading 状态
   */
  public isLoading = true
  /**
   * 当前页数
   */
  public currentPage = 0
  /**
   * 当前列表页数据类型
   */
  public currentType = null
}
