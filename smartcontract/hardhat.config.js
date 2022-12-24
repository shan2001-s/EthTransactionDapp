// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     goerli: {
//       url: "https://eth-goerli.g.alchemy.com/v2/ZxqqPnx1Rjb9Igd-76Ja0pWEbvQLWjuH",
//       accounts: [
//         "2985126d99653339f3db7f12d0af809dc514974b179e9daf878089c6fe4bae91",
//       ],
//     },
//   },
// };
require("@nomicfoundation/hardhat-toolbox");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "ZxqqPnx1Rjb9Igd-76Ja0pWEbvQLWjuH";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY =
  "2985126d99653339f3db7f12d0af809dc514974b179e9daf878089c6fe4bae91";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};
