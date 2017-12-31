# Drand

Generates random number for Nodejs (and browser) using Mersenne Twister.

## Usage

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
