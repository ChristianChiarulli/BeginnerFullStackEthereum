/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  paths: {
    artifacts: './frontend/src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
}
