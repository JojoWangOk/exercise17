/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    if (!this.subscribers[type]) {
      this.subscribers[type] = []
    }
    let listeners = this.subscribers[type]
    listeners.push(fn)
    console.log(111, listeners)
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    let listeners = this.subscribers[type]
    if (!listeners) { return }
    this.subscribers[type] = listeners.filter(listener => listener !== fn);
  }

  publish(type, ...args) {
    // todo publish
    let listeners = this.subscribers[type]
    if (!listeners) { return }
    listeners.forEach(item => {
      item(...args)
    })


  }

}
