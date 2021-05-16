require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'jazz enroll supply suggest name random noble artwork gloom kangaroo army ghost'; 
let testAccounts = [
"0x6b27f21e15d3c3e965ae1527c2406d9f1f1e87bbffe4163bc061cf80774ba6e2",
"0x0b63df47d9c4c52d91f27ad0a129be3a391e27cce8de41dc3dc118b629c2856c",
"0x78e05d84d6d51cdc799ffe93a1b5bd782aec409f3a479af34e403be9fb609b71",
"0x09cf4a718098e02cde2bc4c52ff8b978076e0dec096510c6277869497e067025",
"0xa6847c1d1f29fccd218c18d9d7053c82d3a975d958a62733cb1ad0a8dc601613",
"0x2db1daff90b4300632e8eaa65b99b5fea11d5c4d154f38038968d00dd15b6bb0",
"0x93ec583b27a85fd65107696332b409e4eb17f50bb1339edd3e4f5e2fe3a2329e",
"0x6a77c21ddd7fe4bdaeaff01606f23dff9ee8472e5cf720b3fa80fe4ed690fd48",
"0x7e8821a4247b6397486751375cbb931b130050dac525f5a5494c7333abb72519",
"0x9ccb832f79fff5a337d9e65c15e4d89edc2b60b2c6028c5026658f04a7ac04de"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

