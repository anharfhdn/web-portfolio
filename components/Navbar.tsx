"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import Web3 from "web3";

const Notification = ({ message, type, onClose }: { message: string; type: 'success' | 'error' | 'info'; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'error' ? 'bg-red-500' : type === 'success' ? 'bg-green-500' : 'bg-blue-500';

  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-3 animate-slide-in`}>
      <span>{message}</span>
      <button onClick={onClose} className="text-white hover:text-gray-200">×</button>
      <style jsx>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in { animation: slide-in 0.3s ease-out; }
      `}</style>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);

  const showNotification = useCallback((message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setNotification({ message, type });
  }, []);

  const handleAccountsChanged = useCallback((accounts: string[]) => {
    if (accounts.length === 0) {
      setIsConnected(false);
      setAccount(null);
      showNotification('Wallet disconnected', 'info');
    } else if (account !== accounts[0]) {
      setAccount(accounts[0]);
      showNotification('Account changed', 'info');
    }
  }, [account, showNotification]);

  const handleChainChanged = useCallback(() => {
    window.location.reload();
  }, []);

  const checkConnection = useCallback(async () => {
    if (!web3) return;
    try {
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        setIsConnected(true);
        setAccount(accounts[0]);
      }
    } catch (error) {
      console.error("Error checking connection:", error);
      showNotification('Error checking wallet connection', 'error');
    }
  }, [web3, showNotification]);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ethereum) {
      setIsMetaMaskInstalled(true);
      const web3Instance = new Web3((window as any).ethereum);
      setWeb3(web3Instance);
      checkConnection();
      (window as any).ethereum.on('accountsChanged', handleAccountsChanged);
      (window as any).ethereum.on('chainChanged', handleChainChanged);
    }
    return () => {
      if ((window as any).ethereum) {
        (window as any).ethereum.removeListener('accountsChanged', handleAccountsChanged);
        (window as any).ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, [checkConnection, handleAccountsChanged, handleChainChanged]);

  const connectWallet = async () => {
    if (!isMetaMaskInstalled) {
      showNotification('Please install MetaMask to connect your wallet!', 'error');
      return;
    }
    if (!web3) return;
    try {
      const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
      setIsConnected(true);
      setAccount(accounts[0]);
      showNotification('Wallet connected successfully!', 'success');
    } catch (error: any) {
      console.error("Error connecting wallet:", error);
      if (error.code === 4001) {
        showNotification('Connection rejected by user', 'error');
      } else {
        showNotification('Error connecting wallet', 'error');
      }
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAccount(null);
    showNotification('Wallet disconnected', 'info');
  };

  const downloadResume = async () => {
    if (!isConnected || !web3) {
      showNotification('Please connect your wallet first to download the resume (on progress)', 'error');
      return;
    }
    try {
      const accounts = await web3.eth.getAccounts();
      const fromAddress = accounts[0];
      const transaction = { from: fromAddress, to: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e', value: web3.utils.toWei('0.001', 'ether'), data: '0x' };
      showNotification('Please confirm transaction in MetaMask...', 'info');
      const receipt = await web3.eth.sendTransaction(transaction);
      if (receipt.status) {
        showNotification('Transaction successful! Downloading resume...', 'success');
        window.open('/resume.pdf', '_blank');
      } else {
        showNotification('Transaction failed', 'error');
      }
    } catch (error: any) {
      console.error("Error processing transaction:", error);
      if (error.code === 4001) showNotification('Transaction rejected by user', 'error');
      else if (error.message?.includes('insufficient funds')) showNotification('Insufficient funds for transaction', 'error');
      else showNotification('Error processing transaction', 'error');
    }
  };

  const formatAddress = (address: string) => `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;

  return (
    <>
      <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a href="/" title="anhar logo" className="h-auto w-auto flex flex-row items-center">
            <Image src="/Logo.png" alt="Anhar Fahrudin - Developer" width={100} height={100} sizes="100vw" className="w-full h-auto" />
          </a>
          <div className="flex flex-row gap-5">
            <div className="flex items-center gap-3">
              {isConnected && (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-cyan-300 bg-slate-800 py-1 px-3 rounded-lg border border-cyan-500/50 shadow-md">{formatAddress(account!)}</span>
                  <button onClick={disconnectWallet} className="bg-transparent border border-purple-500/50 hover:bg-purple-900/30 text-white py-2 px-4 rounded-xl transition-all duration-300 shadow-md">
                    <Image src="/disconnect.svg" alt="Disconnect Wallet" width={20} height={20} className="inline-block" />&nbsp; Disconnect
                  </button>
                </div>
              )}
              {!isConnected && (
                <button onClick={connectWallet} className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:via-purple-700 hover:to-indigo-800 text-white py-2 px-5 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                  <Image src="/metamask.svg" alt="Connect Wallet" width={20} height={20} className="inline-block" /> Connect Wallet
                </button>
              )}
              <button onClick={downloadResume} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center gap-2">
                <Image src="/download.svg" alt="Download" width={20} height={20} className="inline-block" /> Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
      {notification && <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />}
    </>
  );
};

export default Navbar;

