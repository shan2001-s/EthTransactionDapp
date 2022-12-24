// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Transations {

    uint transationscounter;
    event Transfer(address from, address receiver, uint amount, string message, uint timestamp);

    struct TransferStruct {
        address from;
        address receiver;
        uint amount;
        string message;
        uint timestamp;
    }

    TransferStruct[] transations;

    function Addtoblockchain( address payable receiver, uint amount , string memory message) public{
            transationscounter= transationscounter+1;
            transations.push(TransferStruct(msg.sender, receiver,amount,message,block.timestamp));
            emit Transfer(msg.sender,receiver, amount, message,block.timestamp);
    }

    function Gettransations() public view returns( TransferStruct[] memory){
        return transations;
    }

    function Gettransationscount() public view returns (uint){
        
    }
}
