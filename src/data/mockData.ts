export const overviewStats = [
  {
    label: "Total Revenue",
    value: "$4.8M",
    delta: "+12.4%",
    trend: "up",
    description: "vs last month"
  },
  {
    label: "Active Users",
    value: "128,450",
    delta: "+4.7%",
    trend: "up",
    description: "daily active"
  },
  {
    label: "Total Bets",
    value: "2.3M",
    delta: "+9.2%",
    trend: "up",
    description: "last 30 days"
  },
  {
    label: "Payout Ratio",
    value: "94.2%",
    delta: "-0.8%",
    trend: "down",
    description: "optimized target"
  }
];

export const activityFeed = [
  {
    id: 1,
    title: "High roller payout approved",
    detail: "$125,000 withdrawal processed for user #A9481",
    time: "2 min ago",
    tone: "success"
  },
  {
    id: 2,
    title: "AML alert triggered",
    detail: "Rapid deposits flagged for user #B5529",
    time: "18 min ago",
    tone: "warning"
  },
  {
    id: 3,
    title: "VIP upgraded",
    detail: "User #H2201 moved to Platinum tier",
    time: "45 min ago",
    tone: "info"
  },
  {
    id: 4,
    title: "New game provider added",
    detail: "BetNova live with 42 titles",
    time: "2 hours ago",
    tone: "neutral"
  }
];

export const revenueSeries = [
  120000,
  142000,
  138000,
  152000,
  168000,
  175000,
  182000,
  190000,
  210000,
  204000,
  218000,
  232000
];

export const topGames = [
  {
    name: "Royal Roulette Live",
    provider: "Infinity Live",
    bets: 18450,
    revenue: "$1.02M",
    rtp: "96.4%"
  },
  {
    name: "Blackjack Elite",
    provider: "CardX",
    bets: 16230,
    revenue: "$870K",
    rtp: "95.1%"
  },
  {
    name: "Crypto Crash",
    provider: "SkyBet",
    bets: 14580,
    revenue: "$792K",
    rtp: "93.8%"
  },
  {
    name: "Mega Spins",
    provider: "SpinCity",
    bets: 13420,
    revenue: "$736K",
    rtp: "97.2%"
  }
];

export const suspiciousActivities = [
  {
    id: "SA-2201",
    player: "Player #44820",
    risk: "High",
    reason: "Multiple IP switches in 5 minutes",
    status: "Review"
  },
  {
    id: "SA-2192",
    player: "Player #77215",
    risk: "Medium",
    reason: "Unusual bet size spikes",
    status: "Investigating"
  },
  {
    id: "SA-2190",
    player: "Player #98302",
    risk: "High",
    reason: "Rapid withdrawal requests",
    status: "Escalated"
  }
];

export const users = [
  {
    id: "U-1024",
    name: "Sasha Hall",
    email: "sasha.hall@example.com",
    status: "Active",
    kyc: "Verified",
    tier: "VIP",
    lastActive: "5 min ago"
  },
  {
    id: "U-1025",
    name: "Diego Ramos",
    email: "diego.ramos@example.com",
    status: "Suspended",
    kyc: "Pending",
    tier: "Standard",
    lastActive: "2 hours ago"
  },
  {
    id: "U-1026",
    name: "Lana Cho",
    email: "lana.cho@example.com",
    status: "Active",
    kyc: "Verified",
    tier: "Platinum",
    lastActive: "10 min ago"
  }
];

export const transactions = [
  {
    id: "T-5041",
    type: "Deposit",
    amount: "$12,400",
    status: "Completed",
    method: "Visa",
    requested: "Today"
  },
  {
    id: "T-5042",
    type: "Withdrawal",
    amount: "$58,000",
    status: "Pending",
    method: "Bank Transfer",
    requested: "2 hours ago"
  },
  {
    id: "T-5043",
    type: "Deposit",
    amount: "$9,750",
    status: "Flagged",
    method: "Crypto",
    requested: "3 hours ago"
  }
];

export const riskAlerts = [
  {
    id: "AML-210",
    title: "Layering suspected",
    detail: "Player #44820 split deposits into 14 wallets",
    severity: "High"
  },
  {
    id: "AML-209",
    title: "Velocity breach",
    detail: "Player #77215 exceeded hourly withdrawal limits",
    severity: "Medium"
  },
  {
    id: "AML-208",
    title: "Geo mismatch",
    detail: "VPN detection triggered for 5 sessions",
    severity: "Low"
  }
];

export const financialReports = [
  {
    title: "Gross Gaming Revenue",
    value: "$3.1M",
    change: "+6.2%",
    period: "Month to date"
  },
  {
    title: "Net Profit",
    value: "$1.4M",
    change: "+3.8%",
    period: "Month to date"
  },
  {
    title: "Tax Liability",
    value: "$420K",
    change: "-1.1%",
    period: "Quarter to date"
  }
];

export const providers = [
  {
    name: "Infinity Live",
    status: "Live",
    games: 18,
    revenueShare: "22%"
  },
  {
    name: "SpinCity",
    status: "Paused",
    games: 32,
    revenueShare: "18%"
  },
  {
    name: "BetNova",
    status: "Live",
    games: 42,
    revenueShare: "24%"
  }
];
