const path = require('path')
const fs = require('fs')
const solc = require('solc')
// __dirname is a constant defined by Node
// is always set to the current working directory
// so it will be root in this case
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol')
const source = fs.readFileSync(inboxPath, 'utf8')

module.exports =
solc.compile(source, 1).contracts[':Inbox']
