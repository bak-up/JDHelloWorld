/**
 * 取消收藏店铺
 * cron: 10 10 * * *
 */

import {JDHelloWorld, User} from "./TS_JDHelloWorld";

class Jd_RmFollowList extends JDHelloWorld {
  user: User

  constructor() {
    super();
  }

  async init() {
    await this.run(this)
  }

  async api(fn: string, params: object) {
    let res: any = await this.get(`https://wq.jd.com/fav/shop/${fn}`, {
      'Host': 'wq.jd.com',
      'Cookie': this.user.cookie,
      'user-agent': this.user.UserAgent,
      'referer': 'https://wqs.jd.com/',
    }, params)
    res = JSON.parse(res.match(/\(([\S\s]+)\);/)[1])
    return res
  }

  async main(user: User) {
    this.user = user
    let res: any
    try {
      res = await this.api('QueryShopFavList', {
        'cp': '1',
        'pageSize': '10',
        'g_login_type': '0',
        'appCode': 'msd95910c4',
        'callback': `jsonpCBK${this.getRandomWord()}`,
      })
      console.log('当前关注店铺', res.totalNum * 1)
      let venderIdList: string[] = res.data.map(t => {
        console.log(t.shopName)
        return t.shopId
      })

      if (venderIdList.length > 0) {
        res = await this.api('batchunfollow', {
          'shopId': venderIdList.join(','),
          '_': Date.now(),
          'g_login_type': 0,
          'appCode': 'msd95910c4',
          'callback': `jsonpCBK${this.getRandomWord()}`
        })
        res.iRet === '0' && console.log('取关成功')
      }
    } catch (e) {
      console.log('error', e)
    }
  }
}

new Jd_RmFollowList().init().then()