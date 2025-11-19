import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, BarChart3, Zap, Users, Activity, Award, BarChart2, X, Wallet, ExternalLink, ChevronDown, ChevronUp, Lock, Bell, Cpu, LineChart, PieChart, TrendingDown, Globe, Database, RefreshCw, ArrowRight, Check } from 'lucide-react';

const RyzoWallet = () => {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('free');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <BarChart3 size={32} />,
      title: 'Advanced Portfolio Analytics',
      description: 'Track your portfolio performance with real-time charts, comprehensive profit and loss analysis, detailed transaction history, and historical performance data across all your connected wallets. Get insights into your asset allocation, risk exposure, and investment returns.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Multi-Chain Support',
      description: 'Connect wallets from Ethereum, Solana, Binance Smart Chain, Polygon, Avalanche, Arbitrum, Optimism, and over 50 other blockchain networks. View all your crypto assets in one unified dashboard with automatic balance updates and cross-chain transaction tracking.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Real-Time Market Tracking',
      description: 'Receive instant notifications for wallet activity, significant price changes, and critical market movements. Set custom alerts for specific tokens, price thresholds, and transaction confirmations. Stay informed with push notifications and email updates.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'AI-Powered Trading Insights',
      description: 'Leverage artificial intelligence to analyze your trading patterns, identify winning strategies, and receive portfolio optimization suggestions. Our machine learning algorithms provide personalized recommendations to maximize your returns and minimize risk exposure.'
    },
    {
      icon: <Lock size={32} />,
      title: 'Bank-Level Security',
      description: 'Your private keys never leave your device. We use read-only API connections, end-to-end encryption, and military-grade security protocols. All data is encrypted at rest and in transit. Regular security audits ensure your assets remain safe and secure.'
    },
    {
      icon: <Bell size={32} />,
      title: 'Smart Alert System',
      description: 'Configure intelligent alerts for wallet movements, token swaps, large transactions, and gas fee optimizations. Get notified about potential security threats, suspicious activities, and opportunities for profitable trades based on market conditions.'
    },
    {
      icon: <PieChart size={32} />,
      title: 'Portfolio Diversification Tools',
      description: 'Analyze your asset allocation with interactive pie charts and diversification scores. Identify concentration risks, discover underweighted sectors, and receive recommendations for portfolio rebalancing based on your investment goals and risk tolerance.'
    },
    {
      icon: <LineChart size={32} />,
      title: 'Tax Reporting & Documentation',
      description: 'Generate comprehensive tax reports with detailed transaction histories, capital gains calculations, and IRS-compliant documentation. Export reports in multiple formats including CSV, PDF, and direct integration with popular tax software like TurboTax and CoinTracker.'
    },
    {
      icon: <Database size={32} />,
      title: 'DeFi Position Tracking',
      description: 'Monitor all your DeFi positions including liquidity pools, yield farming, staking rewards, and lending protocols. Track impermanent loss, APY changes, and total value locked across platforms like Uniswap, Aave, Compound, and Curve Finance.'
    },
    {
      icon: <Cpu size={32} />,
      title: 'API Integration & Automation',
      description: 'Access our comprehensive REST API to integrate Ryzo Wallet data into your own applications. Build custom dashboards, automate trading strategies, and create personalized analytics tools with our developer-friendly API documentation and SDKs.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Cross-Platform Synchronization',
      description: 'Access your portfolio from any device with automatic synchronization across web, mobile, and desktop applications. Your settings, alerts, and custom dashboards stay consistent across all platforms with real-time cloud backup and restoration.'
    },
    {
      icon: <RefreshCw size={32} />,
      title: 'Historical Data & Backtesting',
      description: 'Access years of historical price data, transaction records, and market trends. Backtest your trading strategies, analyze past performance, and simulate investment scenarios to make more informed decisions about future trades and portfolio adjustments.'
    }
  ];

  const leaderboardData = [
    { rank: 1, wallet: '0x742d...a4b9', pnl: '+$2,847,392', winRate: '94.2%', trades: 1247, avgProfit: '$2,283', volume: '$42.3M' },
    { rank: 2, wallet: '0x8f3c...d2e1', pnl: '+$1,923,581', winRate: '91.8%', trades: 893, avgProfit: '$2,154', volume: '$38.7M' },
    { rank: 3, wallet: '0x1a5b...c7f3', pnl: '+$1,654,290', winRate: '89.5%', trades: 1089, avgProfit: '$1,519', volume: '$31.2M' },
    { rank: 4, wallet: '0x9e2d...b8a4', pnl: '+$1,432,167', winRate: '87.3%', trades: 756, avgProfit: '$1,894', volume: '$28.4M' },
    { rank: 5, wallet: '0x4c7f...e3d2', pnl: '+$1,298,543', winRate: '85.9%', trades: 982, avgProfit: '$1,322', volume: '$24.1M' },
    { rank: 6, wallet: '0x6b8a...f5c2', pnl: '+$1,187,234', winRate: '84.6%', trades: 834, avgProfit: '$1,423', volume: '$22.8M' },
    { rank: 7, wallet: '0x3d9e...b7a1', pnl: '+$1,094,567', winRate: '83.2%', trades: 912, avgProfit: '$1,200', volume: '$21.3M' },
    { rank: 8, wallet: '0x5a2c...e8d4', pnl: '+$987,432', winRate: '82.1%', trades: 789, avgProfit: '$1,251', volume: '$19.7M' },
    { rank: 9, wallet: '0x7f4b...c3a9', pnl: '+$876,198', winRate: '80.9%', trades: 723, avgProfit: '$1,212', volume: '$18.2M' },
    { rank: 10, wallet: '0x9c1d...a6f8', pnl: '+$789,543', winRate: '79.5%', trades: 698, avgProfit: '$1,131', volume: '$16.9M' }
  ];

  const faqs = [
    { 
      question: 'What is Ryzo Wallet and how does it work?', 
      answer: 'Ryzo Wallet is a comprehensive cryptocurrency portfolio analytics platform designed for serious traders and investors. It provides real-time tracking, advanced analytics, and portfolio management across multiple blockchains. By connecting your wallet addresses, you gain instant access to detailed insights including transaction history, profit and loss calculations, trading patterns, and performance metrics. Our platform aggregates data from over 50 blockchain networks, providing a unified view of all your digital assets. The system uses read-only API connections, ensuring your private keys remain secure while giving you powerful analytics tools to optimize your investment strategy.' 
    },
    { 
      question: 'Which wallets and blockchain networks are supported?', 
      answer: 'Ryzo Wallet supports all major cryptocurrency wallets including MetaMask, Phantom, Trust Wallet, Coinbase Wallet, Ledger hardware wallets, and Trezor devices. Our platform is compatible with over 50 blockchain networks including Ethereum (ETH), Solana (SOL), Binance Smart Chain (BSC), Polygon (MATIC), Avalanche (AVAX), Arbitrum, Optimism, Fantom, Cronos, Harmony, and many more. We continuously add support for new chains and Layer 2 solutions. You can connect multiple wallets from different blockchains and view all your assets in a single, unified dashboard. The platform automatically detects tokens, NFTs, and DeFi positions across all supported networks.' 
    },
    { 
      question: 'What are the pricing plans and what features do they include?', 
      answer: 'Ryzo Wallet offers three pricing tiers to suit different needs. The Free plan includes basic portfolio tracking, up to 3 wallet connections, daily balance updates, and access to our mobile app. The Pro plan costs $29 per month and includes unlimited wallet connections, real-time updates, advanced analytics, tax reporting, API access, priority support, and custom alerts. The Enterprise plan at $99 per month includes everything in Pro plus white-label options, dedicated account manager, custom integrations, advanced API limits, and team collaboration features. Annual subscriptions receive a 20% discount. All paid plans come with a 14-day money-back guarantee.' 
    },
    {
      question: 'How secure is my data and wallet information?',
      answer: 'Security is our highest priority at Ryzo Wallet. We employ bank-level security measures to protect your data and assets. We never request or store your private keys or seed phrases. All wallet connections use read-only API access, meaning we can only view your transactions and balances but cannot initiate any transfers or trades. All data transmission is encrypted using TLS 1.3 protocol, and all stored data is encrypted at rest using AES-256 encryption. We conduct regular third-party security audits and penetration testing. Our infrastructure is hosted on enterprise-grade cloud servers with 99.9% uptime SLA. We are SOC 2 Type II compliant and follow industry best practices for data protection and privacy. Two-factor authentication is available for all accounts.'
    },
    {
      question: 'Can I track multiple wallets and DeFi positions?',
      answer: 'Yes, Ryzo Wallet is designed to handle complex portfolio scenarios. Free users can connect up to 3 wallets, while Pro and Enterprise users can connect unlimited wallets across all supported blockchains. The platform automatically detects and tracks all your DeFi positions including liquidity pools on Uniswap, SushiSwap, PancakeSwap, and other DEXs. We track your staking positions, yield farming rewards, lending and borrowing on Aave, Compound, and Venus, as well as NFT holdings and their floor prices. You can organize your wallets into custom portfolios, set up separate tracking for business and personal holdings, and view consolidated reports across all your positions.'
    },
    {
      question: 'Does Ryzo Wallet provide tax reporting and documentation?',
      answer: 'Yes, Ryzo Wallet includes comprehensive tax reporting features for users in the United States, Canada, United Kingdom, Australia, and other major jurisdictions. Our tax module automatically categorizes all your transactions, calculates capital gains and losses using your preferred accounting method (FIFO, LIFO, or HIFO), and generates IRS-compliant tax reports. You can export your transaction history in formats compatible with TurboTax, TaxAct, H&R Block, and other tax software. The system tracks cost basis, holding periods, and generates Form 8949 data. Tax reporting is included in Pro and Enterprise plans, with options to download reports for specific tax years.'
    },
    {
      question: 'How accurate is the portfolio tracking and price data?',
      answer: 'Ryzo Wallet uses real-time price data from multiple reliable sources including CoinGecko, CoinMarketCap, and direct blockchain data to ensure maximum accuracy. Prices are updated every 30 seconds for Pro users and every 5 minutes for Free users. We cross-reference data from multiple exchanges to provide the most accurate market prices. Transaction history is pulled directly from blockchain explorers, ensuring 100% accuracy. Our system automatically handles token swaps, airdrops, and complex DeFi transactions. In the rare case of a discrepancy, you can manually adjust transaction details and the system will recalculate your portfolio accordingly.'
    },
    {
      question: 'What kind of analytics and insights does the platform provide?',
      answer: 'Ryzo Wallet offers extensive analytics including real-time portfolio value, profit and loss calculations, ROI percentages, win rate statistics, average trade profit, historical performance charts, asset allocation breakdowns, risk analysis scores, and correlation matrices. Our AI-powered insights identify your best-performing assets, suggest portfolio rebalancing strategies, alert you to concentration risks, and provide market sentiment analysis. You can view performance over custom time periods, compare your portfolio against market benchmarks, and analyze your trading patterns to identify successful strategies. Advanced users can access detailed metrics like Sharpe ratio, maximum drawdown, volatility indicators, and beta values.'
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Yes, Ryzo Wallet is available on iOS and Android platforms. The mobile app provides full functionality including portfolio tracking, real-time alerts, transaction history, and analytics. You can receive push notifications for important events like large transactions, significant price movements, or security alerts. The mobile app syncs seamlessly with the web platform, ensuring your data is always up-to-date across all devices. Biometric authentication (Face ID and fingerprint) is supported for quick and secure access. The app works offline, displaying cached data when internet connection is unavailable, and automatically syncs when connection is restored.'
    },
    {
      question: 'How do I get started with Ryzo Wallet?',
      answer: 'Getting started is simple and takes less than 5 minutes. First, create a free account using your email address or by connecting with Google, Twitter, or Discord. Once logged in, click the "Connect Wallet" button and enter your public wallet address (never your private key). You can add multiple wallets by clicking "Add Another Wallet." The platform will automatically scan and import your transaction history, which may take a few minutes depending on your activity level. Customize your dashboard by setting up alerts, choosing your preferred currency (USD, EUR, GBP, etc.), and selecting which metrics to display. Check out our video tutorials and documentation for guidance on using advanced features. Our support team is available 24/7 via live chat to help with any questions.'
    }
  ];

  const stats = [
    { icon: <Users size={24} />, value: '50,000+', label: 'Active Users', description: 'Trusted by traders worldwide' },
    { icon: <Activity size={24} />, value: '$2.5B+', label: 'Assets Tracked', description: 'Total portfolio value monitored' },
    { icon: <BarChart2 size={24} />, value: '15M+', label: 'Transactions', description: 'Processed and analyzed' },
    { icon: <Award size={24} />, value: '99.9%', label: 'Uptime', description: 'Reliable service guarantee' },
    { icon: <Globe size={24} />, value: '50+', label: 'Blockchains', description: 'Networks supported' },
    { icon: <Shield size={24} />, value: '100%', label: 'Secure', description: 'Bank-level encryption' }
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Track up to 3 wallets',
        'Basic portfolio analytics',
        'Daily balance updates',
        'Mobile app access',
        'Email support',
        'Community access'
      ]
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      popular: true,
      features: [
        'Unlimited wallet tracking',
        'Real-time updates',
        'Advanced analytics & insights',
        'Tax reporting tools',
        'Custom alerts & notifications',
        'API access',
        'Priority support',
        'DeFi position tracking'
      ]
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'per month',
      features: [
        'Everything in Pro',
        'White-label options',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced API limits',
        'Team collaboration',
        'Custom reports',
        'SLA guarantee'
      ]
    }
  ];

  const handleConnectWallet = () => {
    if (walletAddress.trim()) {
      if (walletAddress.length < 10) {
        alert('Please enter a valid wallet address');
        return;
      }
      setIsConnected(true);
      setShowWalletModal(false);
      setTimeout(() => {
        const shortAddress = walletAddress.substring(0, 6) + '...' + walletAddress.substring(walletAddress.length - 4);
        alert('SUCCESS: Wallet ' + shortAddress + ' has been successfully connected to Ryzo Wallet. You can now view your portfolio analytics.');
      }, 500);
    } else {
      alert('WARNING: Please enter a valid wallet address to continue');
    }
  };

  const handleDisconnectWallet = () => {
    const confirmDisconnect = window.confirm('Are you sure you want to disconnect your wallet? Your portfolio data will no longer be tracked.');
    if (confirmDisconnect) {
      setIsConnected(false);
      setWalletAddress('');
      alert('Your wallet has been disconnected successfully. You can reconnect anytime.');
    }
  };

  const handleGetStarted = () => {
    setShowWalletModal(true);
  };

  const handleViewDocs = () => {
    alert('Opening documentation... This would navigate to https://docs.ryzowallet.com with comprehensive guides, API documentation, and tutorials.');
    // Commented out to work in demo: window.open('https://docs.ryzowallet.com', '_blank');
  };

  const handleJoinCommunity = () => {
    alert('Opening community... This would navigate to our Discord server where you can connect with other traders, get support, and share strategies.');
    // Commented out to work in demo: window.open('https://discord.gg/ryzowallet', '_blank');
  };

  const handleViewOnExplorer = (wallet) => {
    alert('Opening blockchain explorer for wallet: ' + wallet + '\n\nThis would navigate to Etherscan.io to view the complete transaction history and token holdings for this address.');
    // Commented out to work in demo: window.open(`https://etherscan.io/address/${wallet}`, '_blank');
  };

  const handleUpgradeToPremium = () => {
    alert('UPGRADE TO PREMIUM\n\nGet access to all premium features including:\n- Unlimited wallet tracking\n- Real-time updates\n- Advanced analytics\n- Tax reporting\n- Priority support\n\nSpecial offer: Get 50% off your first month!');
  };

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName.toLowerCase());
    if (planName === 'Free') {
      alert('You are currently on the Free plan. Sign up to start tracking your portfolio!');
    } else {
      alert('SUBSCRIBE TO ' + planName.toUpperCase() + ' PLAN\n\nYou are about to subscribe to the ' + planName + ' plan. This would redirect to the payment page where you can complete your subscription.');
    }
  };

  const handleTwitterShare = () => {
    alert('Opening Twitter... This would allow you to share Ryzo Wallet with your followers and help grow the community.');
  };

  const handleNewsletterSignup = () => {
    alert('NEWSLETTER SIGNUP\n\nStay updated with the latest features, market insights, and trading tips. Enter your email to subscribe to our weekly newsletter.');
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #0f1729 50%, #1a1f3a 75%, #0a0e27 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          
          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #14b8a6, #06b6d4, #0ea5e9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .glass-effect {
            background: rgba(26, 31, 58, 0.6);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(20, 184, 166, 0.2);
            box-shadow: 0 8px 32px 0 rgba(20, 184, 166, 0.1);
          }
          
          .hover-lift {
            transition: all 0.3s ease;
          }
          
          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(20, 184, 166, 0.3);
          }
          
          .glow {
            box-shadow: 0 0 20px rgba(20, 184, 166, 0.4);
          }
        `}
      </style>
      
      {/* Animated background orbs */}
      <div style={{
        position: 'fixed',
        top: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 8s ease-in-out infinite',
        zIndex: 0
      }}></div>
      
      <div style={{
        position: 'fixed',
        bottom: '10%',
        right: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 10s ease-in-out infinite',
        animationDelay: '2s',
        zIndex: 0
      }}></div>
      
      <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Navigation */}
      <nav style={{
        padding: '20px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(20, 184, 166, 0.15)',
        backdropFilter: 'blur(20px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrollY > 50 ? 'rgba(10, 14, 39, 0.95)' : 'rgba(10, 14, 39, 0.7)',
        transition: 'all 0.3s ease',
        boxShadow: scrollY > 50 ? '0 10px 40px rgba(0, 0, 0, 0.3)' : 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{
            padding: '2px',
            background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
            borderRadius: '12px',
            boxShadow: '0 0 30px rgba(20, 184, 166, 0.4)',
            transition: 'all 0.3s ease'
          }}>
            <img 
              src="/logo.png"
              alt="Ryzo Wallet Logo"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                display: 'block'
              }}
            />
          </div>
          <h1 style={{ 
            fontSize: '26px', 
            margin: 0, 
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #ffffff, #14b8a6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px'
          }}>Ryzo Wallet</h1>
        </div>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <a href="#features" style={{ 
            color: '#14b8a6', 
            textDecoration: 'none', 
            fontSize: '15px',
            fontWeight: '500',
            position: 'relative',
            padding: '8px 0',
            transition: 'all 0.3s ease'
          }}>Features</a>
          <a href="#leaderboard" style={{ 
            color: '#14b8a6', 
            textDecoration: 'none', 
            fontSize: '15px',
            fontWeight: '500',
            position: 'relative',
            padding: '8px 0',
            transition: 'all 0.3s ease'
          }}>Leaderboard</a>
          <a href="#pricing" style={{ 
            color: '#14b8a6', 
            textDecoration: 'none', 
            fontSize: '15px',
            fontWeight: '500',
            position: 'relative',
            padding: '8px 0',
            transition: 'all 0.3s ease'
          }}>Pricing</a>
          <a href="#faq" style={{ 
            color: '#14b8a6', 
            textDecoration: 'none', 
            fontSize: '15px',
            fontWeight: '500',
            position: 'relative',
            padding: '8px 0',
            transition: 'all 0.3s ease'
          }}>FAQ</a>
          {isConnected ? (
            <button onClick={handleDisconnectWallet} style={{
              background: 'linear-gradient(135deg, #ef4444, #dc2626)',
              color: 'white',
              border: 'none',
              padding: '12px 28px',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(239, 68, 68, 0.3)'
            }}>
              <Wallet size={18} />
              Disconnect
            </button>
          ) : (
            <button onClick={handleGetStarted} style={{
              background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
              color: 'white',
              border: 'none',
              padding: '12px 28px',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(20, 184, 166, 0.4)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(20, 184, 166, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(20, 184, 166, 0.4)';
            }}>
              <Wallet size={18} />
              Connect Wallet
            </button>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '120px 60px',
        textAlign: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative'
      }}>
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(6, 182, 212, 0.15))',
          border: '1px solid rgba(20, 184, 166, 0.4)',
          borderRadius: '50px',
          padding: '10px 30px',
          marginBottom: '40px',
          fontSize: '15px',
          color: '#14b8a6',
          fontWeight: '500',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(20, 184, 166, 0.2)',
          animation: 'fadeInUp 0.8s ease'
        }}>
          Professional-Grade Portfolio Analytics for Serious Traders
        </div>
        <h2 className="gradient-text" style={{
          fontSize: '72px',
          margin: '0 0 35px 0',
          fontWeight: '800',
          lineHeight: '1.1',
          letterSpacing: '-2px',
          animation: 'fadeInUp 1s ease',
          textShadow: '0 0 80px rgba(20, 184, 166, 0.3)'
        }}>
          Your All-in-One<br />Crypto Analytics Hub
        </h2>
        <p style={{
          fontSize: '22px',
          color: '#94a3b8',
          maxWidth: '900px',
          margin: '0 auto 60px',
          lineHeight: '1.8',
          animation: 'fadeInUp 1.2s ease',
          fontWeight: '400'
        }}>
          Connect any crypto wallet and gain instant access to professional-grade analytics across 50+ blockchains. Track your complete portfolio, monitor DeFi positions, analyze trading performance, and optimize your investment strategy with AI-powered insights. Trusted by over 50,000 traders managing $2.5 billion in digital assets.
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '25px', 
          justifyContent: 'center',
          animation: 'fadeInUp 1.4s ease',
          marginBottom: '100px'
        }}>
          <button onClick={handleGetStarted} style={{
            background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
            color: 'white',
            border: 'none',
            padding: '18px 45px',
            borderRadius: '14px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 40px rgba(20, 184, 166, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 15px 50px rgba(20, 184, 166, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(20, 184, 166, 0.4)';
          }}>
            Get Started Free
            <ArrowRight size={20} />
          </button>
          <button onClick={handleViewDocs} style={{
            background: 'rgba(20, 184, 166, 0.1)',
            color: '#14b8a6',
            border: '2px solid #14b8a6',
            padding: '18px 45px',
            borderRadius: '14px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(20, 184, 166, 0.2)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(20, 184, 166, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            View Documentation
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '35px',
          marginTop: '0',
          animation: 'fadeInUp 1.6s ease'
        }}>
          {stats.map((stat, index) => (
            <div key={index} className="glass-effect hover-lift" style={{
              background: 'rgba(20, 184, 166, 0.08)',
              borderRadius: '20px',
              padding: '40px 35px',
              textAlign: 'center',
              transition: 'all 0.4s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(20, 184, 166, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(20, 184, 166, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.2)';
            }}>
              <div style={{ 
                color: '#14b8a6', 
                marginBottom: '20px', 
                display: 'flex', 
                justifyContent: 'center',
                filter: 'drop-shadow(0 0 10px rgba(20, 184, 166, 0.5))'
              }}>
                {stat.icon}
              </div>
              <div style={{ 
                fontSize: '42px', 
                fontWeight: 'bold', 
                marginBottom: '10px', 
                color: '#ffffff',
                letterSpacing: '-1px'
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '16px', color: '#ffffff', marginBottom: '8px', fontWeight: '600' }}>{stat.label}</div>
              <div style={{ fontSize: '13px', color: '#94a3b8' }}>{stat.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{
        padding: '120px 60px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="gradient-text" style={{
            fontSize: '56px',
            marginBottom: '25px',
            fontWeight: '800',
            letterSpacing: '-1px'
          }}>Powerful Features</h2>
          <p style={{ fontSize: '20px', color: '#94a3b8', maxWidth: '700px', margin: '0 auto' }}>
            Everything you need to track and optimize your crypto portfolio
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px'
        }}>
          {features.map((feature, index) => (
            <div key={index} className="glass-effect hover-lift" style={{
              background: 'rgba(20, 184, 166, 0.05)',
              borderRadius: '24px',
              padding: '45px 40px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(20, 184, 166, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(20, 184, 166, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.2)';
            }}>
              <div style={{ 
                color: '#14b8a6', 
                marginBottom: '25px',
                padding: '15px',
                background: 'rgba(20, 184, 166, 0.1)',
                borderRadius: '16px',
                display: 'inline-block',
                boxShadow: '0 0 30px rgba(20, 184, 166, 0.2)'
              }}>{feature.icon}</div>
              <h3 style={{ 
                fontSize: '22px', 
                marginBottom: '18px', 
                fontWeight: 'bold',
                color: '#ffffff'
              }}>{feature.title}</h3>
              <p style={{ 
                fontSize: '15px', 
                color: '#94a3b8', 
                lineHeight: '1.7',
                margin: 0
              }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" style={{
        padding: '120px 60px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="gradient-text" style={{
            fontSize: '56px',
            marginBottom: '25px',
            fontWeight: '800',
            letterSpacing: '-1px'
          }}>Top Traders</h2>
          <p style={{ fontSize: '20px', color: '#94a3b8' }}>
            See how the best performers are doing in real-time
          </p>
        </div>
        <div className="glass-effect" style={{
          background: 'rgba(20, 184, 166, 0.05)',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(20, 184, 166, 0.15)' }}>
                <th style={{ padding: '25px 25px', textAlign: 'left', fontSize: '14px', color: '#14b8a6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Rank</th>
                <th style={{ padding: '25px 25px', textAlign: 'left', fontSize: '14px', color: '#14b8a6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Wallet Address</th>
                <th style={{ padding: '25px 25px', textAlign: 'right', fontSize: '14px', color: '#14b8a6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Total PnL</th>
                <th style={{ padding: '25px 25px', textAlign: 'right', fontSize: '14px', color: '#14b8a6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Win Rate</th>
                <th style={{ padding: '25px 25px', textAlign: 'right', fontSize: '14px', color: '#14b8a6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Trades</th>
                <th style={{ padding: '25px 25px', textAlign: 'right', fontSize: '14px', color: '#14b8a6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Avg Profit</th>
                <th style={{ padding: '25px 25px', textAlign: 'right', fontSize: '14px', color: '#14b8a6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Volume</th>
                <th style={{ padding: '25px 25px', textAlign: 'center', fontSize: '14px', color: '#14b8a6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((trader, index) => (
                <tr key={index} style={{
                  borderBottom: '1px solid rgba(20, 184, 166, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(20, 184, 166, 0.1)';
                  e.currentTarget.style.transform = 'scale(1.01)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  <td style={{ padding: '30px 25px' }}>
                    <span style={{
                      background: trader.rank <= 3 ? 'linear-gradient(135deg, #14b8a6, #0d9488)' : 'rgba(20, 184, 166, 0.2)',
                      padding: '8px 16px',
                      borderRadius: '10px',
                      fontWeight: 'bold',
                      fontSize: '15px',
                      boxShadow: trader.rank <= 3 ? '0 4px 15px rgba(20, 184, 166, 0.4)' : 'none'
                    }}>#{trader.rank}</span>
                  </td>
                  <td style={{ padding: '30px 25px', fontSize: '16px', fontFamily: 'monospace', fontWeight: '500' }}>{trader.wallet}</td>
                  <td style={{
                    padding: '30px 25px',
                    textAlign: 'right',
                    color: '#10b981',
                    fontWeight: '700',
                    fontSize: '17px'
                  }}>{trader.pnl}</td>
                  <td style={{
                    padding: '30px 25px',
                    textAlign: 'right',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#ffffff'
                  }}>{trader.winRate}</td>
                  <td style={{
                    padding: '30px 25px',
                    textAlign: 'right',
                    fontSize: '16px',
                    color: '#94a3b8',
                    fontWeight: '500'
                  }}>{trader.trades}</td>
                  <td style={{
                    padding: '30px 25px',
                    textAlign: 'right',
                    fontSize: '16px',
                    color: '#14b8a6',
                    fontWeight: '600'
                  }}>{trader.avgProfit}</td>
                  <td style={{
                    padding: '30px 25px',
                    textAlign: 'right',
                    fontSize: '16px',
                    color: '#94a3b8',
                    fontWeight: '500'
                  }}>{trader.volume}</td>
                  <td style={{ padding: '30px 25px', textAlign: 'center' }}>
                    <button onClick={() => handleViewOnExplorer(trader.wallet)} style={{
                      background: 'rgba(20, 184, 166, 0.2)',
                      color: '#14b8a6',
                      border: '1px solid rgba(20, 184, 166, 0.3)',
                      padding: '10px 20px',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: '600',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(20, 184, 166, 0.3)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(20, 184, 166, 0.2)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      <ExternalLink size={14} />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <button onClick={handleUpgradeToPremium} style={{
            background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
            color: 'white',
            border: 'none',
            padding: '16px 40px',
            borderRadius: '14px',
            cursor: 'pointer',
            fontSize: '17px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(20, 184, 166, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(20, 184, 166, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(20, 184, 166, 0.3)';
          }}>
            Upgrade to See Full Leaderboard
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{
        padding: '120px 60px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="gradient-text" style={{
            fontSize: '56px',
            marginBottom: '25px',
            fontWeight: '800',
            letterSpacing: '-1px'
          }}>Frequently Asked Questions</h2>
          <p style={{ fontSize: '20px', color: '#94a3b8' }}>
            Everything you need to know about Ryzo Wallet
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {faqs.map((faq, index) => (
            <div key={index} className="glass-effect hover-lift" style={{
              background: expandedFaq === index 
                ? 'rgba(20, 184, 166, 0.12)' 
                : 'rgba(20, 184, 166, 0.06)',
              borderRadius: '18px',
              overflow: 'hidden',
              transition: 'all 0.4s ease',
              border: expandedFaq === index 
                ? '1px solid rgba(20, 184, 166, 0.4)' 
                : '1px solid rgba(20, 184, 166, 0.2)',
            }}>
              <button onClick={() => toggleFaq(index)} style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                padding: '30px 35px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                color: 'white',
                fontSize: '19px',
                fontWeight: '600',
                textAlign: 'left',
                transition: 'all 0.3s ease'
              }}>
                <span style={{ flex: 1, paddingRight: '20px' }}>{faq.question}</span>
                <div style={{
                  background: 'rgba(20, 184, 166, 0.2)',
                  borderRadius: '10px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  transform: expandedFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  <ChevronDown size={24} color="#14b8a6" />
                </div>
              </button>
              {expandedFaq === index && (
                <div style={{
                  padding: '0 35px 30px 35px',
                  fontSize: '16px',
                  color: '#cbd5e1',
                  lineHeight: '1.8',
                  animation: 'fadeInUp 0.4s ease'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{
        padding: '120px 60px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="gradient-text" style={{
            fontSize: '56px',
            marginBottom: '25px',
            fontWeight: '800',
            letterSpacing: '-1px'
          }}>Simple, Transparent Pricing</h2>
          <p style={{ fontSize: '20px', color: '#94a3b8' }}>
            Choose the plan that fits your trading needs
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '35px',
          alignItems: 'stretch'
        }}>
          {pricingPlans.map((plan, index) => (
            <div key={index} className="hover-lift" style={{
              background: plan.popular 
                ? 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(13, 148, 136, 0.1))' 
                : 'rgba(20, 184, 166, 0.06)',
              border: plan.popular ? '2px solid #14b8a6' : '1px solid rgba(20, 184, 166, 0.2)',
              borderRadius: '24px',
              padding: '50px 45px',
              position: 'relative',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
              backdropFilter: 'blur(20px)',
              boxShadow: plan.popular 
                ? '0 20px 60px rgba(20, 184, 166, 0.3)' 
                : '0 10px 30px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 25px 70px rgba(20, 184, 166, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = plan.popular ? 'scale(1.05)' : 'scale(1)';
              e.currentTarget.style.boxShadow = plan.popular 
                ? '0 20px 60px rgba(20, 184, 166, 0.3)' 
                : '0 10px 30px rgba(0, 0, 0, 0.2)';
            }}>
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                  padding: '8px 25px',
                  borderRadius: '25px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  boxShadow: '0 5px 20px rgba(20, 184, 166, 0.5)',
                  letterSpacing: '1px'
                }}>
                  MOST POPULAR
                </div>
              )}
              <h3 style={{ 
                fontSize: '32px', 
                marginBottom: '20px', 
                fontWeight: 'bold',
                color: '#ffffff'
              }}>{plan.name}</h3>
              <div style={{ marginBottom: '35px' }}>
                <span style={{ 
                  fontSize: '56px', 
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>{plan.price}</span>
                <span style={{ fontSize: '18px', color: '#94a3b8', fontWeight: '500' }}> {plan.period}</span>
              </div>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: '0 0 40px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{ 
                    fontSize: '15px', 
                    color: '#e2e8f0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    lineHeight: '1.6'
                  }}>
                    <Check size={20} style={{ 
                      color: '#14b8a6', 
                      minWidth: '20px',
                      marginTop: '2px',
                      filter: 'drop-shadow(0 0 5px rgba(20, 184, 166, 0.5))'
                    }} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleSelectPlan(plan.name)} style={{
                width: '100%',
                background: plan.popular 
                  ? 'linear-gradient(135deg, #14b8a6, #0d9488)' 
                  : 'rgba(20, 184, 166, 0.15)',
                color: plan.popular ? 'white' : '#14b8a6',
                border: plan.popular ? 'none' : '2px solid #14b8a6',
                padding: '16px 40px',
                borderRadius: '14px',
                cursor: 'pointer',
                fontSize: '17px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: plan.popular ? '0 5px 20px rgba(20, 184, 166, 0.4)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (!plan.popular) {
                  e.currentTarget.style.background = 'rgba(20, 184, 166, 0.25)';
                } else {
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(20, 184, 166, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.popular) {
                  e.currentTarget.style.background = 'rgba(20, 184, 166, 0.15)';
                } else {
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(20, 184, 166, 0.4)';
                }
              }}>
                {plan.name === 'Free' ? 'Get Started' : 'Subscribe Now'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '120px 60px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(6, 182, 212, 0.1), rgba(20, 184, 166, 0.15))',
        borderTop: '1px solid rgba(20, 184, 166, 0.3)',
        borderBottom: '1px solid rgba(20, 184, 166, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-50%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="gradient-text" style={{
            fontSize: '56px',
            marginBottom: '25px',
            fontWeight: '800',
            letterSpacing: '-1px'
          }}>Ready to Level Up Your Crypto Game?</h2>
          <p style={{
            fontSize: '22px',
            color: '#cbd5e1',
            marginBottom: '50px',
            maxWidth: '700px',
            margin: '0 auto 50px',
            lineHeight: '1.7',
            fontWeight: '400'
          }}>
            Join thousands of traders using Ryzo Wallet to track and optimize their portfolios
          </p>
          <div style={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
            <button onClick={handleGetStarted} style={{
              background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
              color: 'white',
              border: 'none',
              padding: '18px 45px',
              borderRadius: '14px',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 40px rgba(20, 184, 166, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(20, 184, 166, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(20, 184, 166, 0.4)';
            }}>
              Connect Your Wallet
              <ArrowRight size={20} />
            </button>
            <button onClick={handleJoinCommunity} style={{
              background: 'rgba(20, 184, 166, 0.15)',
              color: '#14b8a6',
              border: '2px solid #14b8a6',
              padding: '18px 45px',
              borderRadius: '14px',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(20, 184, 166, 0.25)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(20, 184, 166, 0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              Join Community
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '60px 40px',
        borderTop: '1px solid rgba(20, 184, 166, 0.1)',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '40px',
          marginBottom: '40px',
          textAlign: 'left'
        }}>
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '20px', color: '#14b8a6', fontWeight: 'bold' }}>Product</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#features" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Features</a>
              <a href="#pricing" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Pricing</a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Security documentation would open here, detailing our encryption methods, security audits, and compliance certifications.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Security</a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('API documentation would open here with comprehensive guides for developers.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>API</a>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '20px', color: '#14b8a6', fontWeight: 'bold' }}>Resources</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); handleViewDocs(); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Documentation</a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('API Reference with detailed endpoint documentation, authentication guides, and code examples would open here.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>API Reference</a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Video tutorials and step-by-step guides for getting started with Ryzo Wallet would open here.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Tutorials</a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Blog with market insights, trading strategies, and platform updates would open here.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Blog</a>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '20px', color: '#14b8a6', fontWeight: 'bold' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('About Us page with company history, mission statement, and team information would open here.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>About</a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Career opportunities at Ryzo Wallet would be displayed here.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Careers</a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Press kit with logos, screenshots, and media resources would be available here.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Press Kit</a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Contact form for general inquiries, partnerships, and support would open here.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Contact</a>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '20px', color: '#14b8a6', fontWeight: 'bold' }}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Terms of Service document would open here.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Terms of Service</a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Privacy Policy detailing how we collect, use, and protect your data would open here.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Privacy Policy</a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Cookie Policy explaining our use of cookies would open here.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Cookie Policy</a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('GDPR compliance information would be displayed here.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>GDPR</a>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '20px', color: '#14b8a6', fontWeight: 'bold' }}>Community</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); handleTwitterShare(); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Twitter</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleJoinCommunity(); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Discord</a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Opening Telegram community... Join our Telegram group to chat with other traders and get instant support.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Telegram</a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Opening Reddit community... Join discussions on r/RyzoWallet.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>Reddit</a>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto 40px',
          padding: '40px',
          background: 'rgba(20, 184, 166, 0.05)',
          border: '1px solid rgba(20, 184, 166, 0.2)',
          borderRadius: '15px'
        }}>
          <h4 style={{ fontSize: '20px', marginBottom: '10px', fontWeight: 'bold' }}>Stay Updated</h4>
          <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px' }}>
            Get the latest market insights, trading tips, and platform updates delivered to your inbox
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                flex: 1,
                padding: '12px 20px',
                borderRadius: '8px',
                border: '1px solid rgba(20, 184, 166, 0.3)',
                background: 'rgba(20, 184, 166, 0.05)',
                color: 'white',
                fontSize: '14px'
              }}
            />
            <button onClick={handleNewsletterSignup} style={{
              background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              whiteSpace: 'nowrap'
            }}>
              Subscribe
            </button>
          </div>
        </div>
        
        <div style={{
          paddingTop: '40px',
          borderTop: '1px solid rgba(20, 184, 166, 0.1)',
          color: '#94a3b8',
          fontSize: '14px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div>
            Copyright 2024 Ryzo Wallet. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Status page showing system uptime and performance metrics would open here.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>Status</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Help center with FAQs and troubleshooting guides would open here.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>Help Center</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Support portal for submitting tickets and tracking issues would open here.'); }} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>Support</a>
          </div>
        </div>
      </footer>

      {/* Wallet Connection Modal */}
      {showWalletModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(10px)',
          animation: 'fadeInUp 0.3s ease'
        }} onClick={() => setShowWalletModal(false)}>
          <div className="glass-effect" style={{
            background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.95), rgba(10, 14, 39, 0.95))',
            border: '1px solid rgba(20, 184, 166, 0.4)',
            borderRadius: '24px',
            padding: '50px',
            maxWidth: '550px',
            width: '90%',
            position: 'relative',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5)',
            animation: 'fadeInUp 0.4s ease'
          }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowWalletModal(false)} style={{
              position: 'absolute',
              top: '25px',
              right: '25px',
              background: 'rgba(20, 184, 166, 0.1)',
              border: 'none',
              color: '#14b8a6',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(20, 184, 166, 0.2)';
              e.currentTarget.style.transform = 'rotate(90deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(20, 184, 166, 0.1)';
              e.currentTarget.style.transform = 'rotate(0deg)';
            }}>
              <X size={24} />
            </button>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 30px',
              boxShadow: '0 10px 40px rgba(20, 184, 166, 0.4)'
            }}>
              <Wallet size={40} color="white" />
            </div>
            <h3 style={{
              fontSize: '32px',
              marginBottom: '15px',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>Connect Your Wallet</h3>
            <p style={{
              color: '#94a3b8',
              marginBottom: '35px',
              fontSize: '16px',
              textAlign: 'center',
              lineHeight: '1.6'
            }}>
              Enter your public wallet address to start tracking your portfolio. We never store your private keys or seed phrases.
            </p>
            <input
              type="text"
              placeholder="0x742d35Cc6634C0532925a3b844Bc9e7595f0a4b9"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              style={{
                width: '100%',
                padding: '18px 20px',
                borderRadius: '14px',
                border: '2px solid rgba(20, 184, 166, 0.3)',
                background: 'rgba(20, 184, 166, 0.08)',
                color: 'white',
                fontSize: '16px',
                marginBottom: '25px',
                fontFamily: 'monospace',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.6)';
                e.currentTarget.style.background = 'rgba(20, 184, 166, 0.12)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.3)';
                e.currentTarget.style.background = 'rgba(20, 184, 166, 0.08)';
              }}
            />
            <button onClick={handleConnectWallet} style={{
              width: '100%',
              background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
              color: 'white',
              border: 'none',
              padding: '18px',
              borderRadius: '14px',
              cursor: 'pointer',
              fontSize: '17px',
              fontWeight: '600',
              marginBottom: '20px',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 25px rgba(20, 184, 166, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 35px rgba(20, 184, 166, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 25px rgba(20, 184, 166, 0.4)';
            }}>
              Connect Wallet
            </button>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              justifyContent: 'center',
              padding: '20px',
              background: 'rgba(20, 184, 166, 0.08)',
              borderRadius: '12px',
              border: '1px solid rgba(20, 184, 166, 0.2)'
            }}>
              <Shield size={18} color="#14b8a6" />
              <p style={{
                fontSize: '13px',
                color: '#94a3b8',
                margin: 0
              }}>
                We never store your private keys. Read-only access only.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default RyzoWallet;