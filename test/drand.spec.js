import 'babel-polyfill'
import { expect } from 'chai'
import Drand from '../src/drand'

describe('Drand', function() {
  describe('doubles', function() {
    it('should generate the same result for the same seed', function() {
      expect(new Drand(314).rand()).to.equal(new Drand(314).rand())
    })
    it('should generate different results for different seeds', function() {
      expect(new Drand(314).rand()).to.not.equal(new Drand(2718).rand())
    })
    it('should generate [0, 1) with no params', function() {
      expect(new Drand(0).rand()).to.equal(0.548813502304256)
    })
    it('should generate [0, <max>)', function() {
      expect(new Drand(0).rand(100)).to.equal(54.881350230425596)
    })
    it('should generate [<min>, <max>)', function() {
      expect(new Drand(0).rand(50, 100)).to.equal(77.4406751152128)
    })
    it('should generate [<min>, <max>) with negatives', function() {
      expect(new Drand(0).rand(-10, -2)).to.equal(-5.609491981565952)
    })
    it('should generate [<min>, <max>) across 0', function() {
      expect(new Drand(1).rand(-1, 1)).to.equal(-0.16595600312575698)
    })
  })
  describe('integers', function() {
    it('should generate the same result for the same seed', function() {
      expect(new Drand(314).randInt()).to.equal(new Drand(314).randInt())
    })
    it('should generate different results for different seeds', function() {
      expect(new Drand(314).randInt()).to.not.equal(new Drand(2718).randInt())
    })
    it('should generate [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER) with no params', function() {
      expect(new Drand(0).randInt()).to.equal(721420287)
    })
    it('should generate [0, <max>)', function() {
      expect(new Drand(0).randInt(100)).to.equal(54)
    })
    it('should generate [<min>, <max>)', function() {
      expect(new Drand(0).randInt(50, 100)).to.equal(77)
    })
    it('should generate [<min>, <max>) with negatives', function() {
      expect(new Drand(0).randInt(-10, -2)).to.equal(-6)
    })
    it('should generate [<min>, <max>) across 0', function() {
      expect(new Drand(1).randInt(-10, 10)).to.equal(-2)
    })
    it('should generate big negatives when applying a bit mask', function() {
      var r = new Drand(1)
      for (var i = 0; i < 100; i++) {
        expect(r.randInt(Number.MIN_SAFE_INTEGER, 0)).to.be.below(0)
      }
    })
    it('should generate big positives when applying a bit mask', function() {
      var r = new Drand(1)
      for (var i = 0; i < 100; i++) {
        expect(r.randInt(1, Number.MAX_SAFE_INTEGER)).to.be.above(0)
      }
    })
  })
  describe('longs', function() {
    it('should generate the same result for the same seed', function() {
      expect(new Drand(314).randLong()).to.equal(new Drand(314).randLong())
    })
    it('should generate different results for different seeds', function() {
      expect(new Drand(314).randLong()).to.not.equal(new Drand(2718).randLong())
    })
    it('should generate [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER) with no params', function() {
      expect(new Drand(0).randLong()).to.equal(879345883152383)
    })
    it('should generate [0, <max>)', function() {
      expect(new Drand(0).randLong(100)).to.equal(54)
    })
    it('should generate [<min>, <max>)', function() {
      expect(new Drand(0).randLong(50, 100)).to.equal(77)
    })
    it('should generate [<min>, <max>) with negatives', function() {
      expect(new Drand(0).randLong(-10, -2)).to.equal(-6)
    })
    it('should generate [<min>, <max>) across 0', function() {
      expect(new Drand(1).randLong(-10, 10)).to.equal(-2)
    })
  })
  describe('global', function() {
    before(function() {
      Math.rand = undefined
      Math.randInt = undefined
      Math.randLong = undefined
    })
    it('should add drand functions to Math', function() {
      expect(Math.rand).to.be.undefined
      expect(Math.randInt).to.be.undefined
      expect(Math.randLong).to.be.undefined
      Drand.setGlobal()
      expect(Math.rand).to.be.a('function')
      expect(Math.randInt).to.be.a('function')
      expect(Math.randLong).to.be.a('function')
    })
    it('should respect seed for random doubles', function() {
      Drand.setGlobal(0)
      expect(Math.rand()).to.equal(0.548813502304256)
    })
    it('should respect seed for random integers', function() {
      Drand.setGlobal(0)
      expect(Math.randInt()).to.equal(721420287)
    })
    it('should respect seed for random longs', function() {
      Drand.setGlobal(0)
      expect(Math.randLong()).to.equal(879345883152383)
    })
    it('should honor resetting the seed', function() {
      Drand.setGlobal(0)
      expect(Math.rand()).to.equal(0.548813502304256)
      expect(Math.rand()).to.equal(0.5928446163889021)
      Drand.setGlobal(0)
      expect(Math.rand()).to.equal(0.548813502304256)
      expect(Math.rand()).to.equal(0.5928446163889021)
    })
  })
})
