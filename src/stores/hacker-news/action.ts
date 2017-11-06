import { Action, inject } from "dob";
import request from '../../utils/fetch'

import HackerNewsStore from "./store";

const Hosts = '//node-hnapi.herokuapp.com'

function getRequestUrlByType(type: string) {
  switch (type) {
    case 'top':
      return 'news'
    case 'new':
      return 'newest'
    case 'show':
      return 'show'
    case 'ask':
      return 'ask'
    case 'jobs':
      return 'jobs'
    default: null
  }
}

export default class HackerNewsAction {
  @inject(HackerNewsStore)
  private hackerNewsStore: HackerNewsStore;

  /**
   * Get page list by type
   */
  @Action public async getPageList(type: string) {
    this.hackerNewsStore.isLoading = true

    // if fetch different type, reset currentPage
    if (this.hackerNewsStore.currentType !== type) {
      this.hackerNewsStore.currentPage = 0
    }

    this.hackerNewsStore.currentPage++

    const pages = await request({
      url: Hosts + '/' + getRequestUrlByType(type),
      params: {
        page: this.hackerNewsStore.currentPage
      }
    })

    Action(() => {
      this.hackerNewsStore.currentLists = pages
      this.hackerNewsStore.isLoading = false
    })
  }
}
