import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useWeb3 } from '@/components/web3/Web3Context';
import { Wallet, ExternalLink, RefreshCw, Image as ImageIcon, X, ZoomIn } from "lucide-react";
import { ethers } from 'ethers';

// ERC-721 ABI (minimal - just what we need)
const ERC721_ABI = [
    "function balanceOf(address owner) view returns (uint256)",
    "function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)",
    "function tokenURI(uint256 tokenId) view returns (string)"
];

export default function NFTSection() {
    const { account, provider } = useWeb3();
    const [nfts, setNfts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [selectedNFT, setSelectedNFT] = useState(null);

    // Popular NFT contract addresses (Ethereum mainnet examples)
    const popularContracts = [
        '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D', // BAYC
        '0x60E4d786628Fea6478F785A6d7e704777c86a7c6', // MAYC
        '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB', // CryptoPunks
        '0xED5AF388653567Af2F388E6224dC7C4b3241C544', // Azuki
    ];

    useEffect(() => {
        if (account && provider) {
            fetchNFTs();
        } else {
            setNfts([]);
        }
    }, [account, provider]);

    const fetchNFTMetadata = async (uri) => {
        try {
            // Handle IPFS URLs
            let fetchUrl = uri;
            if (uri.startsWith('ipfs://')) {
                fetchUrl = uri.replace('ipfs://', 'https://ipfs.io/ipfs/');
            }

            const response = await fetch(fetchUrl);
            const metadata = await response.json();

            let imageUrl = metadata.image;
            if (imageUrl && imageUrl.startsWith('ipfs://')) {
                imageUrl = imageUrl.replace('ipfs://', 'https://ipfs.io/ipfs/');
            }

            return {
                name: metadata.name || 'Unnamed NFT',
                description: metadata.description || '',
                image: imageUrl || 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=400&fit=crop',
                attributes: metadata.attributes || []
            };
        } catch (err) {
            console.error('Error fetching metadata:', err);
            return {
                name: 'NFT',
                description: 'Unable to load metadata',
                image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=400&fit=crop',
                attributes: []
            };
        }
    };

    const fetchNFTsFromContract = async (contractAddress) => {
        try {
            const contract = new ethers.Contract(contractAddress, ERC721_ABI, provider);
            const balance = await contract.balanceOf(account);
            const balanceNum = Number(balance);

            if (balanceNum === 0) return [];

            const nftPromises = [];
            const maxToFetch = Math.min(balanceNum, 5); // Limit to 5 per contract

            for (let i = 0; i < maxToFetch; i++) {
                nftPromises.push(
                    (async () => {
                        try {
                            const tokenId = await contract.tokenOfOwnerByIndex(account, i);
                            const tokenURI = await contract.tokenURI(tokenId);
                            const metadata = await fetchNFTMetadata(tokenURI);

                            return {
                                id: `${contractAddress}-${tokenId}`,
                                tokenId: tokenId.toString(),
                                contractAddress,
                                ...metadata
                            };
                        } catch (err) {
                            console.error(`Error fetching NFT at index ${i}:`, err);
                            return null;
                        }
                    })()
                );
            }

            const results = await Promise.all(nftPromises);
            return results.filter(nft => nft !== null);
        } catch (err) {
            console.error(`Error fetching from contract ${contractAddress}:`, err);
            return [];
        }
    };

    const fetchNFTs = async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Fetch from multiple popular contracts
            const allNFTsPromises = popularContracts.map(contract => fetchNFTsFromContract(contract));
            const results = await Promise.all(allNFTsPromises);
            const allNFTs = results.flat();

            if (allNFTs.length === 0) {
                // If no NFTs found, show mock NFTs for demo
                setNfts(getMockNFTs());
            } else {
                setNfts(allNFTs);
            }
        } catch (err) {
            console.error('Error fetching NFTs:', err);
            setError('Failed to load NFTs. Showing demo collection.');
            setNfts(getMockNFTs());
        } finally {
            setIsLoading(false);
        }
    };

    const getMockNFTs = () => {
        return [
            // Divine / God NFTs (Top Priority)
            {
                id: 'krishna-divine-1',
                name: 'Lord Sri Krishna',
                description: 'The Supreme Personality of Godhead. Divine Flute Edition.',
                image: '/images/krishna.png',
                price: '108.00 ETH',
                likes: 10800,
                attributes: [{ trait_type: 'Category', value: 'Divine' }, { trait_type: 'Aura', value: 'Eternal' }]
            },
            {
                id: 'jagannath-puri-1',
                name: 'Lord Jagannath',
                description: 'Lord of the Universe. Ratha Yatra Special Edition.',
                image: '/images/jagannath.png',
                price: '108.00 ETH',
                likes: 10800,
                attributes: [{ trait_type: 'Category', value: 'Divine' }, { trait_type: 'Place', value: 'Puri' }]
            },
            {
                id: 'hanuman-divine-1',
                name: 'Lord Hanuman',
                description: 'The Symbol of Strength and Devotion. Bajrangbali Edition.',
                image: '/images/hanuman.png',
                price: '108.00 ETH',
                likes: 9999,
                attributes: [{ trait_type: 'Category', value: 'Divine' }, { trait_type: 'Power', value: 'Infinite' }]
            },
            {
                id: 'puri-temple-1',
                name: 'Puri Jagannath Temple',
                description: 'Ancient architectural marvel. The abode of the Lord.',
                image: '/images/puri_temple.png',
                price: '50.00 ETH',
                likes: 5000,
                attributes: [{ trait_type: 'Category', value: 'Landmark' }, { trait_type: 'Place', value: 'Odisha' }]
            },
            // Sports Legends (Below)
            {
                id: 'khabib-ufc-1',
                name: 'Khabib "The Eagle" #29-0',
                description: 'Undefeated UFC Lightweight Champion. Legacy Edition.',
                image: '/images/khabib.png',
                price: '29.00 ETH',
                likes: 2900,
                attributes: [{ trait_type: 'Sport', value: 'MMA' }, { trait_type: 'Status', value: 'Legend' }]
            },
            {
                id: 'cena-wwe-1',
                name: 'John Cena "You Can\'t See Me"',
                description: '16-time World Champion. Hustle, Loyalty, Respect.',
                image: '/images/john_cena.png',
                price: '16.00 ETH',
                likes: 1000,
                attributes: [{ trait_type: 'Sport', value: 'Wrestling' }, { trait_type: 'Status', value: 'GOAT' }]
            },
            {
                id: 'messi-goat-1',
                name: 'Lionel Messi "La Pulga"',
                description: 'World Cup Champion. The greatest playmaker of all time.',
                image: '/images/messi.png',
                price: '10.00 ETH',
                likes: 10000,
                attributes: [{ trait_type: 'Sport', value: 'Football' }, { trait_type: 'Number', value: '10' }]
            },
            {
                id: 'ronaldo-cr7-1',
                name: 'Cristiano Ronaldo "CR7"',
                description: 'The greatest goalscorer in football history. SIUUU!',
                image: '/images/ronaldo.png',
                price: '7.00 ETH',
                likes: 7777,
                attributes: [{ trait_type: 'Sport', value: 'Football' }, { trait_type: 'Number', value: '7' }]
            },

        ];
    };

    // Calculate visible mock NFTs
    const allMockNFTs = React.useMemo(() => getMockNFTs(), []);
    const visibleMockNFTs = showAll ? allMockNFTs : allMockNFTs.slice(0, 8);

    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-[#0a0f1c] to-[#0f172a] relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="inline-block text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4">
                        Web3 Showcase
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Digital Asset
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Portfolio (Demo)</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        {account
                            ? 'Explore the connected wallet\'s digital assets and NFT collection'
                            : 'Connect your wallet to demonstrate our Web3 integration capabilities'
                        }
                    </p>
                </motion.div>

                {/* Content */}
                {!account ? (
                    // Not Connected State: Split Layout with Hero Image
                    <div className="space-y-24">
                        {/* Hero Section (Keep existing split layout) */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            {/* Left: Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-left"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                    <span className="text-cyan-400 text-sm font-medium">Web3 Integration Ready</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                    Experience the Future of <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                        Digital Ownership
                                    </span>
                                </h3>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    Connect your wallet to explore our seamless NFT integration. We build platforms that make buying, selling, and showcasing digital assets effortless and secure.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        size="lg"
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-cyan-500/25 flex items-center gap-2"
                                    >
                                        <Wallet className="w-5 h-5" />
                                        Connect Wallet
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-slate-700 hover:border-cyan-500/50 text-white px-8 py-6 text-lg font-semibold rounded-xl"
                                    >
                                        Learn More
                                    </Button>
                                </div>
                            </motion.div>

                            {/* Right: Hero NFT Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative flex justify-center"
                            >
                                {/* Abstract Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-[100px] opacity-20" />

                                {/* Card Container */}
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-4 max-w-sm w-full shadow-2xl cursor-pointer"
                                    onClick={() => setSelectedNFT({
                                        name: 'Cosmic Cube #88',
                                        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&h=750&fit=crop'
                                    })}
                                >
                                    <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-4 relative group">
                                        <img
                                            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&h=750&fit=crop"
                                            alt="Featured Web3 Asset"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold border border-white/10">
                                            #001
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-white text-xl font-bold">Cosmic Cube #88</h4>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-400">Current Bid</span>
                                            <span className="text-cyan-400 font-mono font-bold">2.5 ETH</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-6 -right-6 bg-slate-900/90 border border-slate-700 backdrop-blur-md p-4 rounded-xl shadow-xl max-w-[150px]"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                                        </div>
                                        <span className="text-slate-300 text-xs font-medium">Live Auction</span>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                                            <div className="h-full w-[70%] bg-gradient-to-r from-green-400 to-emerald-500" />
                                        </div>
                                        <div className="flex justify-between text-[10px] text-slate-500">
                                            <span>12h 30m left</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Trending Collections Grid */}
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-bold text-white">Trending Collections</h3>
                                <Button
                                    variant="ghost"
                                    onClick={() => setShowAll(!showAll)}
                                    className="text-cyan-400 hover:text-cyan-300"
                                >
                                    {showAll ? 'View Less' : 'View All'} <ExternalLink className="ml-2 w-4 h-4" />
                                </Button>
                            </div>

                            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {visibleMockNFTs.map((nft, index) => (
                                    <motion.div
                                        key={nft.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => setSelectedNFT(nft)}
                                        layoutId={`nft-${nft.id}`}
                                        className="group bg-slate-800/20 border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
                                    >
                                        <div className="aspect-square relative overflow-hidden">
                                            <motion.img
                                                layoutId={`nft-image-${nft.id}`}
                                                src={nft.image}
                                                alt={nft.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <ZoomIn className="w-8 h-8 text-white opacity-80" />
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <motion.h4 layoutId={`nft-title-${nft.id}`} className="text-white font-medium truncate">{nft.name}</motion.h4>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-slate-400 text-xs">Price</span>
                                                <span className="text-cyan-400 text-sm font-bold">{nft.price}</span>
                                            </div>
                                            <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-700/50">
                                                <span className="text-slate-500 text-xs flex items-center gap-1">
                                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                                    Listing
                                                </span>
                                                <span className="text-slate-400 text-xs">{nft.likes} Likes</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Wallet Info & Refresh */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50"
                        >
                            <div>
                                <p className="text-slate-400 text-sm mb-1">Connected Wallet</p>
                                <p className="text-white font-mono font-medium">{account}</p>
                            </div>
                            <Button
                                onClick={fetchNFTs}
                                disabled={isLoading}
                                variant="outline"
                                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                            >
                                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                                Refresh Collection
                            </Button>
                        </motion.div>

                        {/* Loading State */}
                        {isLoading && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="animate-pulse">
                                        <div className="aspect-square bg-slate-800/50 rounded-2xl mb-4" />
                                        <div className="h-4 bg-slate-800/50 rounded mb-2" />
                                        <div className="h-3 bg-slate-800/50 rounded w-2/3" />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* NFT Grid */}
                        {!isLoading && nfts.length > 0 && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <AnimatePresence>
                                    {nfts.map((nft, index) => (
                                        <motion.div
                                            key={nft.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => setSelectedNFT(nft)}
                                            layoutId={`nft-${nft.id}`}
                                            className="group relative rounded-2xl overflow-hidden bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 cursor-pointer"
                                        >
                                            {/* Image */}
                                            <div className="relative aspect-square overflow-hidden">
                                                <motion.img
                                                    layoutId={`nft-image-${nft.id}`}
                                                    src={nft.image}
                                                    alt={nft.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    onError={(e) => {
                                                        e.target.src = 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=400&fit=crop';
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent opacity-60" />

                                                {/* Overlay */}
                                                <div className="absolute inset-0 bg-cyan-500/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <ZoomIn className="w-8 h-8 text-white opacity-80" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-5">
                                                <motion.h3 layoutId={`nft-title-${nft.id}`} className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                    {nft.name}
                                                </motion.h3>
                                                <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                                                    {nft.description || 'No description'}
                                                </p>

                                                {/* Attributes */}
                                                {nft.attributes && nft.attributes.length > 0 && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {nft.attributes.slice(0, 2).map((attr, i) => (
                                                            <span
                                                                key={i}
                                                                className="px-2 py-1 rounded-lg bg-slate-800/50 text-slate-400 text-xs border border-slate-700/50"
                                                            >
                                                                {attr.trait_type}: {attr.value}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        )}

                        {/* Empty State */}
                        {!isLoading && nfts.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center p-12 rounded-2xl bg-slate-800/30 border border-slate-700/50"
                            >
                                <ImageIcon className="w-16 h-16 mx-auto mb-4 text-slate-600" />
                                <h3 className="text-xl font-bold text-white mb-2">No NFTs Found</h3>
                                <p className="text-slate-400">
                                    This wallet doesn't have any NFTs from popular collections yet.
                                </p>
                            </motion.div>
                        )}
                    </>
                )}
            </div>

            {/* NFT Zoom Modal */}
            <AnimatePresence>
                {selectedNFT && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedNFT(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            layoutId={`nft-${selectedNFT.id}`}
                            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedNFT(null)}
                                className="absolute -top-12 right-0 p-2 text-white/50 hover:text-white transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <motion.img
                                layoutId={`nft-image-${selectedNFT.id}`}
                                src={selectedNFT.image}
                                alt={selectedNFT.name}
                                className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
                            />

                            <motion.h2
                                layoutId={`nft-title-${selectedNFT.id}`}
                                className="mt-6 text-2xl md:text-3xl font-bold text-white text-center"
                            >
                                {selectedNFT.name}
                            </motion.h2>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
