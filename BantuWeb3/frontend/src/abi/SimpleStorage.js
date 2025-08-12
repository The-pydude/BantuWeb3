export const simpleStorageABI = [
    {
        "inputs": [
            { "internalType": "uint256", "name": "_value", "type": "uint256" }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getValue",
        "outputs": [
            { "internalType": "uint256", "name": "", "type": "uint256" }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

export const simpleStorageAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'; // Replace with your actual deployed address
