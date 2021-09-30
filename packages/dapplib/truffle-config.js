require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan raise ranch purity install cricket slot gate'; 
let testAccounts = [
"0x84b4e63e74472b2275c8f34f952f75101695a749bc6f8037a50bdfdac1ec2d3d",
"0xe77e1cca95c4947694d43cf2604293f7995a4cf950a82d15185fbb5a2032fe12",
"0x45a19d96f2eb733f54e268de84be5bc5a8a72b17009c23e33a8fc4761f74297f",
"0x56223890dd82c4f95f0572aad412d37a4ff974027b9ceb37568042aea98b9b65",
"0x02904486ba8cec4614baa32e8469e68186d6d3148157f9edc1a4b800cea7e48a",
"0xe0fc7c38366c6a064af342ebeff820ceb472852228a45e1090b94809951dbdce",
"0x7719db06df540c21fb7416b6be271942a613dd86d7ba16882062b5b568641fb8",
"0x0ff79473831647198561c5473325a3b65199cffa5378830a4eb13638a00709e8",
"0xdaeb6e9e854bed64df56b23e719a0c8c819b5cbc04795b656dd12fc164409026",
"0xec4cca9659f791e3e4d171e4e2b912ceee3003f8606aa4238056fc1b120230ae"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


