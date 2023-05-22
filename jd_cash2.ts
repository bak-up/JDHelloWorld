/**
 * 京东领现金2
 * cron: 6 0,5,18 * * *
 */

import {H5ST} from "./utils/h5st_pro"
import {User, JDHelloWorld} from "./TS_JDHelloWorld";

class Jd_Cash2 extends JDHelloWorld {
  user: User
  h5stTool: H5ST
  fp: string
  shareCodeSelf: { inviteCode: string, inviter: string }[] = []

  constructor() {
    super("微信签到");
  }

  async init() {
    try {
      this.fp = process.env.FP_B3F11 ?? await this.getFp()
    } catch (e) {
      console.log('FP Error: ', e.message)
      process.exit(0)
    }
    await this.run(this)
  }

  async api(fn: string, body: object) {
    let t: number = Date.now()
    let h5st: string = await this.h5stTool.__genH5st({
      appid: "activities_platform",
      body: JSON.stringify(body),
      client: "ios",
      clientVersion: "12.0.1",
      functionId: fn,
      t: t.toString()
    })
    return await this.post('https://api.m.jd.com/api', `functionId=${fn}&body=${JSON.stringify(body)}&t=${t}&appid=activities_platform&client=ios&clientVersion=12.0.1&h5st=${h5st}`, {
      'Host': 'api.m.jd.com',
      'Origin': 'https://prodev.m.jd.com',
      'User-Agent': this.user.UserAgent,
      'Referer': 'https://prodev.m.jd.com/mall/active/uFdv8vAHsiLz4MGsg4HEauwte8d/index.html',
      'Cookie': this.user.cookie
    })
  }

  async main(user: User) {
    try {
      this.user = user
      let res: any, data: any
      this.h5stTool = new H5ST("eb67b", this.user.UserAgent, this.fp, 'https://prodev.m.jd.com/mall/active/uFdv8vAHsiLz4MGsg4HEauwte8d/index.html', 'https://prodev.m.jd.com', this.user.UserName);
      await this.h5stTool.__genAlgo()
      res = await this.api('inviteFissionHome', {"linkId": "c6Bkpjp7dYcvQwO9-PR7-g", "inviter": ""})
      console.log('助力码', res.data.inviteCode)
      this.shareCodeSelf.push({inviteCode: res.data.inviteCode, inviter: res.data.inviter})

      this.h5stTool = new H5ST("b3f11", this.user.UserAgent, this.fp, 'https://prodev.m.jd.com/mall/active/uFdv8vAHsiLz4MGsg4HEauwte8d/index.html', 'https://prodev.m.jd.com', this.user.UserName);
      await this.h5stTool.__genAlgo()

      res = await this.api('inviteFissionPoll', {"linkId": "c6Bkpjp7dYcvQwO9-PR7-g"})
      let lotteryTimes: number = res.data.lotteryTimes
      console.log('可抽奖', lotteryTimes)
      for (let i = 0; i < lotteryTimes; i++) {
        data = await this.api('inviteFissionDrawPrize', {"linkId": "c6Bkpjp7dYcvQwO9-PR7-g"})
        data.data.prizeType === 4 ? console.log('抽到现金', data.data.prizeValue * 1) : console.log('抽到其他', data.data)
        await this.wait(6000)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  async help(users: User[]) {
    this.o2s(this.shareCodeSelf, '内部助力')
    let res: any
    let temp: any = await this.getshareCodeHW('cash2')
    let shareCodeHW: { inviteCode: string, inviter: string }[] = []
    for (let t of temp)
      shareCodeHW.push({inviteCode: t.inviteCode, inviter: t.inviter})
    for (let user of users) {
      try {
        this.user = user
        let shareCode: { inviteCode: string, inviter: string }[]
        shareCode = user.index === 0 ? [...shareCodeHW, ...this.shareCodeSelf] : [...this.shareCodeSelf, ...shareCodeHW]
        this.h5stTool = new H5ST("02f8d", this.user.UserAgent, this.fp, 'https://prodev.m.jd.com/mall/active/uFdv8vAHsiLz4MGsg4HEauwte8d/index.html', 'https://prodev.m.jd.com', this.user.UserName);
        await this.h5stTool.__genAlgo()
        for (let code of shareCode) {
          console.log(`账号${user.index + 1} ${user.UserName} 去助力 ${code.inviteCode}`)
          res = await this.api('inviteFissionBeforeHome', {"linkId": "c6Bkpjp7dYcvQwO9-PR7-g", "isJdApp": true, "inviter": code.inviter})
          if (res.data?.helpResult === 1) {
            console.log('助力成功')
          } else if (res.data?.helpResult === 6) {
            console.log('已助力过')
          } else {
            console.log('其他结果', res.data.helpResult)
          }
          await this.wait(10000)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}

new Jd_Cash2().init().then()