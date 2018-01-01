# Drand

Generates random number for Nodejs (and browser) using Mersenne Twister.

[![NPM package](https://nodei.co/npm/drand.png)](https://www.npmjs.com/package/drand)

[![Build Status](https://travis-ci.org/de314/drand.svg?branch=master)](https://travis-ci.org/de314/drand)
[![Coverage Status](https://coveralls.io/repos/github/de314/drand/badge.svg?branch=master)](https://coveralls.io/github/de314/drand?branch=master)
[![dependencies Status](https://david-dm.org/de314/generator-create-npm-package/status.svg)](https://david-dm.org/de314/generator-create-npm-package)

## Usage

[![Try Drand on RunKit](https://badge.runkitcdn.com/Drand.svg)](https://npm.runkit.com/drand)

```javascript
var Drand = require('drand')

var seed = 1
var r = new Drand(seed)
```

or

```javascript
import Drand from 'drand'

const seed = 1
const r = new Drand(seed)
```

### Real Numbers

* `r.rand()`
  * Returns a continuous random number satisfying `[0, 1)`
* `r.rand(upperBound)`
  * Returns a continuous random number satisfying `[0, upperBound)`
* `r.rand(lowerBound, upperBound)`
  * Returns a continuous random number satisfying `[lowerBound, upperBound)`

### Integers - 32 bit (31 + 1 sign bit)

The following functions use a 32 bit sign safe 32 bit mask.

* `r.randInt()`
  * Returns a random integer satisfying `[-2^32, 2^32-1)`
* `r.randInt(upperBound)`
  * Returns a continuous random number satisfying `[0, upperBound)`
* `r.randInt(lowerBound, upperBound)`
  * Returns a continuous random number satisfying `[lowerBound, upperBound)`

### Longs - 54 bit (53 + 1 sign bit)

* `r.randLong()`
  * Returns a random integer satisfying `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)`
* `r.randLong(upperBound)`
  * Returns a continuous random number satisfying `[0, upperBound)`
* `r.randLong(lowerBound, upperBound)`
  * Returns a continuous random number satisfying `[lowerBound, upperBound)`
