// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";

contract BantuPassport is Ownable {
    struct Passport {
        string name;
        string nationality;
        bool isVerified;
    }

    mapping(address => Passport) private passports;

    event PassportCreated(address indexed user, string name, string nationality);
    event PassportVerified(address indexed user);

    function createPassport(string calldata _name, string calldata _nationality) external {
        require(bytes(passports[msg.sender].name).length == 0, "Passport already exists");
        passports[msg.sender] = Passport(_name, _nationality, false);
        emit PassportCreated(msg.sender, _name, _nationality);
    }

    function verifyPassport(address _user) external onlyOwner {
        require(bytes(passports[_user].name).length > 0, "Passport doesn't exist");
        passports[_user].isVerified = true;
        emit PassportVerified(_user);
    }

    function getPassport(address _user) external view returns (string memory, string memory, bool) {
        Passport memory p = passports[_user];
        return (p.name, p.nationality, p.isVerified);
    }
}

