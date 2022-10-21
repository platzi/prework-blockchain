require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      // Copia aquí tu url de Alchemy
      url: "",
      // Copia aquí tu llave privada de Metamask [recuerda no compartirla con nadie ni subira al GitHub]
      accounts: [""],
    },
  },
};
