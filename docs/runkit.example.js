const Drand = require('drand')
const _ = require('lodash')

const seed = 12346

/*
 * =============================================================================
 * You can create an instance of Drand to pass around.
 */
const r = new Drand(seed)

const demo = {
  float: r.rand(), // [0, 1)
  floatUpper: r.rand(33.33333), // [0, upper)
  floatBound: r.rand(Math.E, Math.PI), // [lower, upper)
  int: r.randInt(), // [-2^32, 2^32-1)
  intUpper: r.randInt(128), // [0, upper)
  intBound: r.randInt(256, 512),
  long: r.randLong(), // [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
  longUpper: r.randLong(Math.pow(2, 42)), // [0, upper)
  longBound: r.randLong(Math.pow(2, 35), Math.pow(2, 40)),
}
console.log(demo)

/*
 * =============================================================================
 * It maybe easier to just use the static functions attached to `Math`. These
 * functions are attached by default when the library is loaded, but you can
 * optionally seed the static instance. Note that you can seed the static
 * instance as many times as needed.
 */

// Optional
Drand.setGlobal(seed)

const globalDemo = {
  float: Math.drand(), // [0, 1)
  floatUpper: Math.drand(33.33333), // [0, upper)
  floatBound: Math.drand(Math.E, Math.PI), // [lower, upper)
  int: Math.drandInt(), // [-2^32, 2^32-1)
  intUpper: Math.drandInt(128), // [0, upper)
  intBound: Math.drandInt(256, 512),
  long: Math.drandLong(), // [NumbeMath.dMIN_SAFE_INTEGER, NumbeMath.dMAX_SAFE_INTEGER)
  longUpper: Math.drandLong(Math.pow(2, 42)), // [0, upper)
  longBound: Math.drandLong(Math.pow(2, 35), Math.pow(2, 40)),
}
console.log(globalDemo)

console.log(`_.isEqual(demo, globalDemo) = ${_.isEqual(demo, globalDemo)}`)
