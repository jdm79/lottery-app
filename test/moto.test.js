/*

// make some assertions about our deployed contract
// (standard library in node)
const assert = require('assert')

// ganache will serve as our local ethereum network
const ganache = require('ganache-cli')

// using v.1.0.0-beta.26 as Web3 is being rewritten right now
// v0.x.x doesn't support promises/async/await. v1.x.x does
// Web3 is a constructor function we'll be importing in to use instances of Web3
const Web3 = require('web3')

// ganache.provider provides communication from web3 to the network
const web3 = new Web3(ganache.provider())

class Moto {
  brake() {
    return 'stoppie'
  }

  go() {
    return 'braaaap'
  }
}

// scope hack for describe to get 'moto'
let moto;
// common initialisation code before our tests
beforeEach( () => {
  moto = new Moto()
})

describe('bike class', () => {
    it('can stop', () => {
      assert.equal(moto.brake(), 'stoppie')
    })

    it('can go', () => {
      assert.equal(moto.go(), 'braaaap')
    })
})
*/
