import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { parseAbi } from 'viem';
import './App.css';

// ✅ Replace with your actual deployed contract address
const CONTRACT_ADDRESS = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9';

// ✅ Contract ABI for both setMessage/getMessage and setValue
const CONTRACT_ABI = parseAbi([
  'function getMessage() view returns (string)',
  'function setMessage(string newMessage)',
  'function setValue(uint256 newValue)'
]);

export default function App() {
  const { isConnected } = useAccount();
  const [newMessage, setNewMessage] = useState('');
  const [newValue, setNewValue] = useState('');

  const { data: message, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getMessage',
    watch: true,
  });

  const { writeContractAsync, isPending } = useWriteContract();

  const handleSetMessage = async () => {
    try {
      await writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'setMessage',
        args: [newMessage],
      });
      await refetch();
      setNewMessage('');
    } catch (err) {
      console.error('Transaction failed:', err);
    }
  };

  const handleSetValue = async () => {
    try {
      await writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'setValue',
        args: [parseInt(newValue)],
      });
      alert('setValue transaction sent!');
      setNewValue('');
    } catch (err) {
      console.error('setValue failed:', err);
    }
  };

  return (
    <div className="app">
      <header>
        <ConnectButton />
      </header>

      <main>
        <h1>BantuWeb3 Dapp</h1>

        {!isConnected ? (
          <p>Please connect your wallet to interact with the smart contract.</p>
        ) : (
          <>
            <div className="card">
              <h3>📦 Current Message:</h3>
              <p>{message}</p>
            </div>

            <div className="card">
              <h3>✏️ New Message</h3>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Enter new message"
              />
              <button onClick={handleSetMessage} disabled={isPending}>
                {isPending ? 'Sending...' : 'Update Message'}
              </button>
            </div>

            <div className="card">
              <h3>🔢 Set Value</h3>
              <input
                type="number"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                placeholder="Enter number"
              />
              <button onClick={handleSetValue} disabled={isPending}>
                {isPending ? 'Sending...' : 'Send setValue'}
              </button>
            </div>
          </>
        )}
      </main>

      {/* Botpress Webchat will be injected from index.html */}
    </div>
  );
}
