# Drand

Generates random number for Nodejs (and browser) using Mersenne Twister.

[![NPM package](https://nodei.co/npm/drand.png)](https://www.npmjs.com/package/drand)

[![Build Status](https://travis-ci.org/de314/drand.svg?branch=master)](https://travis-ci.org/de314/drand)
[![Coverage Status](https://coveralls.io/repos/github/de314/drand/badge.svg?branch=master)](https://coveralls.io/github/de314/drand?branch=master)
[![dependencies Status](https://david-dm.org/de314/generator-create-npm-package/status.svg)](https://david-dm.org/de314/generator-create-npm-package)

## Usage

[![Try Drand on RunKit](https://badge.runkitcdn.com/Drand.svg)](https://npm.runkit.com/drand)

### Real Numbers

| Function         | Description                                                                 | Bounds                     |
| ---------------- | --------------------------------------------------------------------------- | -------------------------- |
| `r.rand()`       | Returns a continuous random number between 0 and 1                          | `[0, 1)`                   |
| `r.rand(ub)`     | Returns a continuous random number bounded by 0 and the provided upperbound | `[0, upperBound)`          |
| `r.rand(lb, ub)` | Returns a continuous random number bounded by the parameters                | `[lowerBound, upperBound)` |

### Integers - 32 bit (31 + 1 sign bit)

The following functions use a 32 bit sign safe 32 bit mask.

| Function            | Description                                                       | Bounds                     |
| ------------------- | ----------------------------------------------------------------- | -------------------------- |
| `r.randInt()`       | Returns a random integer between 0 and 1                          | `[-2^32, 2^32-1)`          |
| `r.randInt(ub)`     | Returns a random integer bounded by 0 and the provided upperbound | `[0, upperBound)`          |
| `r.randInt(lb, ub)` | Returns a random integer bounded by the parameters                | `[lowerBound, upperBound)` |

### Longs - 54 bit (53 + 1 sign bit)

| Function             | Description                                                       | Bounds                                               |
| -------------------- | ----------------------------------------------------------------- | ---------------------------------------------------- |
| `r.randLong()`       | Returns a random integer between 0 and 1                          | `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)` |
| `r.randLong(ub)`     | Returns a random integer bounded by 0 and the provided upperbound | `[0, upperBound)`                                    |
| `r.randLong(lb, ub)` | Returns a random integer bounded by the parameters                | `[lowerBound, upperBound)`                           |

### Global -> `Math`

All of the functions described above are available from the global `Math` context. The functions are
added by default when loading the library. Note that the static instance is seeded with a random
key. You can access them using

```javascript
Math.drand()
Math.drandInt()
Math.drandLong()
```

You can also seed the static instance using `Drand.setGlobal(seed)`. This can be done at any time
and as many times as desired. For example

```javascript
const seed = 1234
Drand.setGlobal(seed)
const rand1 = Math.drand()
Drand.setGlobal(seed)
const rand2 = Math.drand()

assert(rand1 === rand2)
```

See the [demo](https://npm.runkit.com/drand) on Runkit for more.
