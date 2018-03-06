pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;


    function Lottery() public {
        // global variable included any time we invoke a function
        // msg obj includes who just sent in the transaction
        // and details about the transaction itself
        manager = msg.sender;
    }

    function getArray() public view returns(address[]) {
        return players;
    }

    function enter() public payable {
        // this is for validation
        // won't allow function to execute unless it's satisfied
        require(msg.value > 0.1 ether);
        players.push(msg.sender);
    }

    function random() private view returns(uint) {
        // block is a global variable that we have access to at all times
        // creating a pseudo random number generator
        return uint(keccak256(block.difficulty, now, players));
    }


    function pickWinner() public restricted {
        uint index = random()% players.length;
        // the address object has many methods that can be called on it
        // transfer() being just one of them

        players[index].transfer(this.balance);
        players = new address[](0);
    }

       modifier restricted() {
        require(msg.sender == manager);
        _;
    }
}
