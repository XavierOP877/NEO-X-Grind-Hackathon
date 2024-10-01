require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');

const { PRIVATE_KEY } = process.env;


module.exports = {
  solidity: '0.8.17',
  networks:{
    neox:{
        url:'https://neoxt4seed1.ngd.network',
        accounts: ['a35546312ac952c2f7a297dbfd169a7a5115efa8126a3a633d90270af6761c2d'],
      }
  }
}