import _ from 'lodash'
import MersenneTwister from 'mersenne-twister'

const BIT_MASK_32 = ~(1 << 31)

function sameSign(num1, num2) {
  return num1 < 0 === num2 < 0
}

class Drand {
  constructor(seed) {
    this.reseed(seed)
  }

  reseed(seed = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
    this.seed = seed
    this.generator = new MersenneTwister(seed)
  }

  rand(arg1, arg2) {
    const min = _.isNil(arg1) || _.isNil(arg2) ? 0 : arg1
    const max = _.isNil(arg1) ? 1 : _.isNil(arg2) ? arg1 : arg2
    return this.generator.random() * (max - min) + min
  }

  randInt(arg1, arg2) {
    const longNum = this.randLong(arg1, arg2)
    let intNum = ((longNum | 0) << 1) >> 1
    if (!sameSign(longNum, intNum)) {
      intNum *= -1
    }
    return intNum
  }

  randLong(arg1, arg2) {
    const min = _.isNil(arg1) ? Number.MIN_SAFE_INTEGER : _.isNil(arg2) ? 0 : arg1
    const max = _.isNil(arg1) ? Number.MAX_SAFE_INTEGER : _.isNil(arg2) ? arg1 : arg2
    return Math.floor(this.rand() * (max - min)) + min
  }

  static setGlobal(seed) {
    const drand = new Drand(seed)

    Math.drand = drand.rand.bind(drand)
    Math.drandInt = drand.randInt.bind(drand)
    Math.drandLong = drand.randLong.bind(drand)
  }
}

Drand.setGlobal()

export default Drand
