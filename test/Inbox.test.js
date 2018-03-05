const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const provider = ganache.provider()
const web3 = new Web3(provider)

const { interface, bytecode } = require('../compile')

let accounts
let inbox
const INITIAL_STRING = "Hullo world"


beforeEach(async () => {
  // get list of all accounts on ethereum test network (Ganache)
  // every function called with web3 is asynchronous. returning a promise
  accounts = await web3.eth.getAccounts()

  // deploy contract with an account
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [INITIAL_STRING] })
    // use the first account in the array Ganache gives us
    .send({ from: accounts[0], gas: '1000000' })

    inbox.setProvider(provider)
})

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address)
  })

  it('has a default message', async () => {
    const message = await inbox.methods.message().call()
    assert.equal(message, INITIAL_STRING)
  })

  it('sets a message', async () => {
    // if this fails, the whole test will fail. no need to assign to a var
    await inbox.methods.setMessage("Hello James").send({ from: accounts[0] })
    const message = await inbox.methods.message().call()
    assert.equal(message, "Hello James")
  })





})
