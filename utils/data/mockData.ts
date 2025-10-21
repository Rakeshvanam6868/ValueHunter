export const deals = [{
  id: 'deal1',
  title: 'Apple AirPods Pro (2nd Generation) - 20% Off',
  description: 'Experience the next level of audio with active noise cancellation, spatial audio, and a more comfortable design.',
  originalPrice: 249.99,
  dealPrice: 199.99,
  discount: 20,
  image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
  merchant: 'Amazon',
  merchantLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
  category: 'Electronics',
  expiryDate: '2023-12-31T23:59:59',
  popularity: 352,
  isHot: true
}, {
  id: 'deal2',
  title: 'Nike Air Zoom Pegasus 38 Running Shoes - 30% Off',
  description: 'Responsive cushioning and breathable mesh for your most comfortable run yet.',
  originalPrice: 120.0,
  dealPrice: 84.0,
  discount: 30,
  image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
  merchant: 'Nike',
  merchantLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png',
  category: 'Fashion',
  expiryDate: '2023-11-15T23:59:59',
  popularity: 287
}, {
  id: 'deal3',
  title: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker - 25% Off',
  description: '7 appliances in 1: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker and warmer.',
  originalPrice: 99.95,
  dealPrice: 74.96,
  discount: 25,
  image: 'https://images.unsplash.com/photo-1585569695919-db237f5d79c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
  merchant: 'Walmart',
  merchantLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1200px-Walmart_logo.svg.png',
  category: 'Home & Kitchen',
  expiryDate: '2023-11-30T23:59:59',
  popularity: 412,
  isHot: true,
  couponCode: 'INSTANT25'
}, {
  id: 'deal4',
  title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones - 15% Off',
  description: 'Industry-leading noise cancellation with improved call quality and long battery life.',
  originalPrice: 399.99,
  dealPrice: 339.99,
  discount: 15,
  image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
  merchant: 'Best Buy',
  merchantLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1200px-Best_Buy_Logo.svg.png',
  category: 'Electronics',
  expiryDate: '2023-12-15T23:59:59',
  popularity: 198
}, {
  id: 'deal5',
  title: 'Kindle Paperwhite - 8GB, Waterproof - 20% Off',
  description: 'The thinnest, lightest Kindle Paperwhite yet with a flush-front design and 300 ppi glare-free display.',
  originalPrice: 139.99,
  dealPrice: 111.99,
  discount: 20,
  image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
  merchant: 'Amazon',
  merchantLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
  category: 'Electronics',
  expiryDate: '2023-12-20T23:59:59',
  popularity: 245,
  couponCode: 'KINDLE20'
}, {
  id: 'deal6',
  title: 'Dyson V11 Cordless Vacuum Cleaner - 18% Off',
  description: 'Intelligently optimizes suction and run time across all floor types.',
  originalPrice: 599.99,
  dealPrice: 491.99,
  discount: 18,
  image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
  merchant: 'Target',
  merchantLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/1200px-Target_Corporation_logo_%28vector%29.svg.png',
  category: 'Home & Kitchen',
  expiryDate: '2023-11-25T23:59:59',
  popularity: 176,
  isHot: true
}];

export type BlogPost = {
  id: string;
  slug: string; // ← added
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  commentCount: number;
  tags?: string[];
};

export const blogPosts: BlogPost[] = [{
  id: 'blog1',
  slug:'top-10-budget-friendly-laptops-for-students-2023',
  title: 'Top 10 Budget-Friendly Laptops for Students in 2023',
  excerpt: "Looking for an affordable laptop that can handle coursework and entertainment? Check out our top picks that won't break the bank.",
  image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
  category: 'Electronics',
  date: '2023-10-15T10:30:00',
  author: {
    name: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  commentCount: 24,
  tags: ['Laptops', 'Student Deals', 'Budget Tech']
}, {
  id: 'blog2',
  slug:'how-to-find-the-best-black-friday-deals-before-anyone-else',
  title: 'How to Find the Best Black Friday Deals Before Anyone Else',
  excerpt: 'Insider tips and tricks to help you snag the best Black Friday deals before they sell out. Learn how to prepare and what to watch for.',
  image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
  category: 'Shopping Tips',
  date: '2023-11-01T14:15:00',
  author: {
    name: 'Samantha Lee',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  commentCount: 47,
  tags: ['Black Friday', 'Shopping Strategy', 'Discounts']
}, {
  id: 'blog3',
  slug:'the-5-best-smart-home-devices-that-actually-save-you-money',
  title: 'The 5 Best Smart Home Devices That Actually Save You Money',
  excerpt: 'These smart home gadgets not only make your life easier but can significantly reduce your utility bills over time.',
  image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
  category: 'Smart Home',
  date: '2023-10-22T09:45:00',
  author: {
    name: 'Marcus Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  commentCount: 31,
  tags: ['Smart Home', 'Energy Saving', 'Tech Deals']
}, {
  id: 'blog4',
  slug:'ultimate-guide-to-gaming-monitors-what-to-look-for-in-2023',
  title: 'Ultimate Guide to Gaming Monitors: What to Look for in 2023',
  excerpt: 'From refresh rates to response times, we break down everything you need to know to choose the perfect gaming monitor.',
  image: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
  category: 'Gaming',
  date: '2023-10-28T16:20:00',
  author: {
    name: 'Ryan Park',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  commentCount: 59,
  tags: ['Gaming', 'Monitors', 'PC Gaming']
}, {
  id: 'blog5',
  slug:'the-best-kitchen-gadgets-under-50-that-make-cooking-a-breeze',
  title: 'The Best Kitchen Gadgets Under $50 That Make Cooking a Breeze',
  excerpt: 'These affordable kitchen tools will revolutionize your cooking routine and make meal prep faster and more enjoyable.',
  image: 'https://images.unsplash.com/photo-1556909114-44e3e9699e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
  category: 'Home & Kitchen',
  date: '2023-10-18T11:10:00',
  author: {
    name: 'Julia Martinez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  commentCount: 38,
  tags: ['Kitchen Gadgets', 'Budget Finds', 'Cooking']
}, {
  id: 'blog6',
  slug:'honest-reviews-are-expensive-headphones-really-worth-it',
  title: 'Honest Reviews: Are Expensive Headphones Really Worth It?',
  excerpt: 'We compare budget-friendly headphones with high-end models to determine if the premium price tag is actually justified.',
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
  category: 'Electronics',
  date: '2023-10-25T13:40:00',
  author: {
    name: 'David Wilson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  commentCount: 72,
  tags: ['Headphones', 'Audio', 'Product Reviews']
}];
export const categories = [{
  name: 'Electronics',
  icon: 'https://cdn-icons-png.flaticon.com/512/3659/3659898.png',
  count: 145,
  slug: 'electronics'
}, {
  name: 'Fashion',
  icon: 'https://cdn-icons-png.flaticon.com/512/2589/2589175.png',
  count: 98,
  slug: 'fashion'
}, {
  name: 'Home & Kitchen',
  icon: 'https://cdn-icons-png.flaticon.com/512/2082/2082000.png',
  count: 76,
  slug: 'home-kitchen'
}, {
  name: 'Beauty',
  icon: 'https://cdn-icons-png.flaticon.com/512/1005/1005769.png',
  count: 54,
  slug: 'beauty'
}, {
  name: 'Toys',
  icon: 'https://cdn-icons-png.flaticon.com/512/3081/3081986.png',
  count: 42,
  slug: 'toys'
}, {
  name: 'Books',
  icon: 'https://cdn-icons-png.flaticon.com/512/2436/2436874.png',
  count: 67,
  slug: 'books'
}, {
  name: 'Sports',
  icon: 'https://cdn-icons-png.flaticon.com/512/857/857455.png',
  count: 38,
  slug: 'sports'
}, {
  name: 'Travel',
  icon: 'https://cdn-icons-png.flaticon.com/512/2200/2200326.png',
  count: 29,
  slug: 'travel'
}];