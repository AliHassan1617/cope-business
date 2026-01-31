export const mockUser = {
  id: 1,
  name: 'John Davidson',
  email: 'john@example.com',
  avatar: 'https://i.pravatar.cc/150?img=1',
  walletBalance: 1250.50,
  joinDate: '2024-01-15'
};

export const mockServices = [
  {
    id: 1,
    name: 'SEO Optimization',
    description: 'Comprehensive SEO strategy to improve your search rankings',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    plans: [
      { tier: 'Basic', price: 299, description: 'Basic keyword research and on-page optimization' },
      { tier: 'Standard', price: 599, description: 'Keyword research, on-page, technical SEO, and link building' },
      { tier: 'Premium', price: 1199, description: 'Full service including monthly reporting and strategy adjustments' }
    ]
  },
  {
    id: 2,
    name: 'Content Writing',
    description: 'Professional blog posts, articles, and web content creation',
    category: 'Content',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    plans: [
      { tier: 'Basic', price: 149, description: '5 blog posts (500 words each)' },
      { tier: 'Standard', price: 349, description: '10 blog posts (1000 words each) + keyword research' },
      { tier: 'Premium', price: 699, description: '20 blog posts + keyword research + monthly strategy' }
    ]
  },
  {
    id: 3,
    name: 'Social Media Management',
    description: 'Post scheduling, content creation, and community management',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    plans: [
      { tier: 'Basic', price: 199, description: 'Posting to 2 social media platforms (4 posts per week)' },
      { tier: 'Standard', price: 399, description: 'Posting to 4 platforms + basic analytics (8 posts per week)' },
      { tier: 'Premium', price: 799, description: 'All platforms + full analytics + community engagement (daily)' }
    ]
  },
  {
    id: 4,
    name: 'Web Design',
    description: 'Custom website design and development',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    plans: [
      { tier: 'Basic', price: 999, description: '5-page static website' },
      { tier: 'Standard', price: 1999, description: '10-page website with CMS integration' },
      { tier: 'Premium', price: 3999, description: 'Custom e-commerce solution with full functionality' }
    ]
  }
];

export const mockOrders = [
  {
    id: 'ORD-001',
    serviceId: 1,
    serviceName: 'SEO Optimization',
    plan: 'Standard',
    date: '2024-01-20',
    price: 599,
    status: 'Completed',
    progress: 100,
    deliveredFiles: ['SEO_Report_Jan2024.pdf', 'Keywords_Analysis.xlsx']
  },
  {
    id: 'ORD-002',
    serviceId: 2,
    serviceName: 'Content Writing',
    plan: 'Premium',
    date: '2024-02-01',
    price: 699,
    status: 'In Progress',
    progress: 65,
    deliveredFiles: []
  },
  {
    id: 'ORD-003',
    serviceId: 3,
    serviceName: 'Social Media Management',
    plan: 'Basic',
    date: '2024-02-10',
    price: 199,
    status: 'Pending',
    progress: 10,
    deliveredFiles: []
  },
  {
    id: 'ORD-004',
    serviceId: 1,
    serviceName: 'SEO Optimization',
    plan: 'Basic',
    date: '2024-01-05',
    price: 299,
    status: 'Completed',
    progress: 100,
    deliveredFiles: ['Initial_Audit.pdf']
  }
];

export const mockTransactions = [
  {
    id: 'TXN-001',
    date: '2024-02-15',
    description: 'Order ORD-003: Social Media Management',
    type: 'Order Deduction',
    amount: -199,
    balance: 1449.50
  },
  {
    id: 'TXN-002',
    date: '2024-02-10',
    description: 'Wallet top-up via Credit Card',
    type: 'Payment',
    amount: 500,
    balance: 1648.50
  },
  {
    id: 'TXN-003',
    date: '2024-02-01',
    description: 'Order ORD-002: Content Writing',
    type: 'Order Deduction',
    amount: -699,
    balance: 1148.50
  },
  {
    id: 'TXN-004',
    date: '2024-01-20',
    description: 'Order ORD-001: SEO Optimization',
    type: 'Order Deduction',
    amount: -599,
    balance: 1847.50
  },
  {
    id: 'TXN-005',
    date: '2024-01-15',
    description: 'Wallet top-up via PayPal',
    type: 'Payment',
    amount: 1000,
    balance: 2446.50
  }
];

export const mockInvoices = [
  {
    id: 'INV-001',
    date: '2024-02-15',
    amount: 199,
    status: 'Paid',
    orderId: 'ORD-003'
  },
  {
    id: 'INV-002',
    date: '2024-02-01',
    amount: 699,
    status: 'Paid',
    orderId: 'ORD-002'
  },
  {
    id: 'INV-003',
    date: '2024-01-20',
    amount: 599,
    status: 'Paid',
    orderId: 'ORD-001'
  },
  {
    id: 'INV-004',
    date: '2024-01-05',
    amount: 299,
    status: 'Paid',
    orderId: 'ORD-004'
  }
];

export const mockTickets = [
  {
    id: 'TKT-001',
    subject: 'Delayed order delivery',
    status: 'Open',
    lastUpdated: '2024-02-14',
    priority: 'High',
    orderId: 'ORD-002',
    messages: [
      {
        id: 1,
        author: 'You',
        timestamp: '2024-02-10 14:30',
        message: 'Hi, I ordered content writing service 10 days ago and haven\'t received anything yet. When can I expect it?',
        isSupport: false
      },
      {
        id: 2,
        author: 'Support Agent - Sarah',
        timestamp: '2024-02-10 16:45',
        message: 'Thank you for reaching out! We\'ve reviewed your order (ORD-002). Our team is currently working on your 10 blog posts and we expect to deliver them by February 20th. We appreciate your patience!',
        isSupport: true
      },
      {
        id: 3,
        author: 'You',
        timestamp: '2024-02-12 10:15',
        message: 'Thanks for the update. That timeline works for us. Please confirm once they\'re ready.',
        isSupport: false
      }
    ]
  },
  {
    id: 'TKT-002',
    subject: 'Question about SEO package features',
    status: 'Resolved',
    lastUpdated: '2024-02-05',
    priority: 'Medium',
    orderId: 'ORD-001',
    messages: [
      {
        id: 1,
        author: 'You',
        timestamp: '2024-02-01 09:20',
        message: 'Does the Premium SEO package include competitor analysis?',
        isSupport: false
      },
      {
        id: 2,
        author: 'Support Agent - Mike',
        timestamp: '2024-02-01 11:00',
        message: 'Yes! The Premium package includes comprehensive competitor analysis, keyword mapping, and monthly strategy adjustments.',
        isSupport: true
      }
    ]
  },
  {
    id: 'TKT-003',
    subject: 'Billing inquiry',
    status: 'Open',
    lastUpdated: '2024-02-16',
    priority: 'Low',
    messages: [
      {
        id: 1,
        author: 'You',
        timestamp: '2024-02-16 13:40',
        message: 'Can I get an invoice for order ORD-003?',
        isSupport: false
      }
    ]
  }
];
