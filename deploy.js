const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { MNEMONIC }  = require('./config')
const { interface, bytecode } = require('./compile')
const provider = new HDWalletProvider(
  MNEMONIC, 'https://rinkeby.infura.io/uw8vRpfD8mj5YWqIaxnY'
)

const web3 = new Web3(provider)

// make arbitrary function just to use async/await
const deploy = async () => {
  // this function exists solely for use to use async/await
  const accounts = await new web3.eth.getAccounts()
  console.log('Attempting to deploy from account', accounts[0])

  // interface is the ABI
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '500000', from: accounts[0] })

  console.log('our contract was deployed to ', result.options.address)
}

deploy()
