import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

const Web3Context = createContext();

export const useWeb3 = () => {
    const context = useContext(Web3Context);
    if (!context) {
        throw new Error('useWeb3 must be used within Web3Provider');
    }
    return context;
};

export const Web3Provider = ({ children }) => {
    const [account, setAccount] = useState(null);
    const [provider, setProvider] = useState(null);
    const [isConnecting, setIsConnecting] = useState(false);
    const [error, setError] = useState(null);

    // Check if wallet is already connected on mount
    useEffect(() => {
        // Small delay to ensure window.ethereum is loaded
        const timer = setTimeout(() => {
            checkIfWalletIsConnected();
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // Listen for account changes
    useEffect(() => {
        if (typeof window !== 'undefined' && window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountsChanged);
            window.ethereum.on('chainChanged', () => window.location.reload());
        }

        return () => {
            if (typeof window !== 'undefined' && window.ethereum && window.ethereum.removeListener) {
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
            }
        };
    }, []);

    const handleAccountsChanged = (accounts) => {
        if (accounts.length === 0) {
            // User disconnected wallet
            setAccount(null);
            setProvider(null);
        } else if (accounts[0] !== account) {
            setAccount(accounts[0]);
        }
    };

    const checkIfWalletIsConnected = async () => {
        try {
            if (typeof window === 'undefined' || !window.ethereum) {
                return;
            }

            const accounts = await window.ethereum.request({ method: 'eth_accounts' });

            if (accounts.length > 0) {
                const web3Provider = new ethers.BrowserProvider(window.ethereum);
                setProvider(web3Provider);
                setAccount(accounts[0]);
            }
        } catch (err) {
            // Silently handle - user just hasn't connected yet
            console.log('Wallet not connected yet');
        }
    };

    const connectWallet = async () => {
        if (typeof window === 'undefined' || !window.ethereum) {
            setError('Please install MetaMask browser extension to connect your wallet.');
            setIsConnecting(false);
            return;
        }

        setIsConnecting(true);
        setError(null);

        try {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });

            if (accounts.length > 0) {
                const web3Provider = new ethers.BrowserProvider(window.ethereum);
                setProvider(web3Provider);
                setAccount(accounts[0]);
            }
            setIsConnecting(false);
        } catch (err) {
            console.error('Error connecting wallet:', err);

            // Handle specific error cases
            if (err.code === 4001) {
                setError('Connection rejected. Please approve the connection in MetaMask.');
            } else if (err.code === -32002) {
                setError('Connection request pending. Please check MetaMask.');
            } else {
                setError('Failed to connect wallet. Please try again.');
            }
            setIsConnecting(false);
        }
    };

    const disconnectWallet = () => {
        setAccount(null);
        setProvider(null);
    };

    const getShortAddress = (address) => {
        if (!address) return '';
        return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    };

    const value = {
        account,
        provider,
        isConnecting,
        error,
        connectWallet,
        disconnectWallet,
        getShortAddress,
    };

    return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};
