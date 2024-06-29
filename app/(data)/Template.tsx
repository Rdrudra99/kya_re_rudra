export default [
  {
    title: "Blog Title Generator",
    desc: "An AI tool that generates blog titles based on your blog information.",
    category: "Blog",
    icon: "blog-icon.png", // Assuming you have an icon file, replace with appropriate path
    prompt: `
    Please provide 5 blog topic ideas in Markdown format with proper headings and subheadings. 

### Blog Topic Ideas

1. #### The Art of Mindful Eating
    - Dive deep into how practicing mindful eating can transform your relationship with food and improve overall well-being.

2. #### Traveling on a Budget: Tips and Tricks
    - Explore creative ways to travel on a budget without compromising on experiences or comfort.

3. #### Mastering the Art of Productivity
    - Learn effective strategies and tools to boost productivity and achieve your goals efficiently.

4. #### Sustainable Fashion Trends for Every Season
    - Discover the latest sustainable fashion trends and how you can incorporate them into your wardrobe sustainably.

5. #### Exploring the Benefits of Outdoor Exercise
    - Uncover the numerous physical and mental health benefits of exercising outdoors and how it can enhance your fitness journey.
`,
    slug: "generate-blog-title",
    form: [
      {
        label: "Blog Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Blog Outline",
        field: "textarea",
        name: "outline",
        required: false, // Optional field
      },
      {
        label: "Type",
        field: "select",
        name: "type",
        options: [ "Clickbait 📢", "Funny 😄", "Educational 🎓", "News 📰", "Personal 🧑‍💻"],
        required: true,
        initialValue: "Type"
      }      
    ],
  },
  {
    title: "Product Description Generator",
    desc: "Generates compelling product descriptions based on features, benefits, and target audience.",
    category: "E-commerce Tools",
    icon: "product-icon.png",
    prompt: `Create product descriptions for new products based on provided specifications.`,
    slug: "generate-product-description",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Features",
        field: "textarea",
        name: "features",
        required: true,
      },
      {
        label: "Target Audience",
        field: "input",
        name: "targetAudience",
        required: false,
      },
    ],
  },
  {
    title: "SEO Product Title Optimizer",
    desc: "Optimizes product titles for search engines by analyzing keyword relevance and click-through potential.",
    category: "E-commerce Tools",
    icon: "seo-icon.png",
    prompt: `Optimize product titles for SEO to improve search engine visibility and click-through rates.`,
    slug: "seo-product-title-optimizer",
    form: [
      {
        label: "Current Product Title",
        field: "input",
        name: "currentTitle",
        required: true,
      },
      {
        label: "Keywords",
        field: "textarea",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    title: "Review Sentiment Analyzer",
    desc: "Analyzes customer reviews to determine sentiment (positive, negative, neutral) and extract key insights.",
    category: "Customer Feedback Analysis",
    icon: "sentiment-icon.png",
    prompt: `Analyze customer reviews for sentiment and provide a summary of key insights.`,
    slug: "review-sentiment-analyzer",
    form: [
      {
        label: "Customer Reviews",
        field: "textarea",
        name: "reviews",
        required: true,
      },
    ],
  },
  {
    title: "Price Monitoring and Competitive Analysis",
    desc: "Monitors competitor prices and analyzes market trends to optimize pricing strategy.",
    category: "Market Analysis",
    icon: "price-icon.png",
    prompt: `Monitor competitor prices and provide analysis to optimize pricing strategy.`,
    slug: "price-monitoring",
    form: [
      {
        label: "Competitor Products",
        field: "textarea",
        name: "competitorProducts",
        required: true,
      },
      {
        label: "Market Trends",
        field: "textarea",
        name: "marketTrends",
        required: false,
      },
    ],
  },
  {
    title: "Personalized Product Recommendation Engine",
    desc: "Recommends products to customers based on their browsing history, purchase behavior, and preferences.",
    category: "Personalization",
    icon: "recommendation-icon.png",
    prompt: `Generate personalized product recommendations for customers based on their past interactions.`,
    slug: "product-recommendation-engine",
    form: [
      {
        label: "Customer ID",
        field: "input",
        name: "customerId",
        required: true,
      },
      {
        label: "Recent Purchases",
        field: "textarea",
        name: "recentPurchases",
        required: false,
      },
    ],
  },
  {
    title: "Inventory Management Assistant",
    desc: "Assists in managing inventory levels by predicting demand trends and suggesting reorder quantities.",
    category: "Inventory Management",
    icon: "inventory-icon.png",
    prompt: `Predict demand trends and suggest optimal reorder quantities for inventory management.`,
    slug: "inventory-management-assistant",
    form: [
      {
        label: "Current Inventory Data",
        field: "textarea",
        name: "inventoryData",
        required: true,
      },
      {
        label: "Demand Forecast",
        field: "textarea",
        name: "demandForecast",
        required: true,
      },
    ],
  },
  {
    title: "Customer Support Ticket Classifier",
    desc: "Classifies customer support tickets into categories (e.g., product issues, shipping inquiries) for efficient handling.",
    category: "Customer Support",
    icon: "ticket-icon.png",
    prompt: `Classify customer support tickets into appropriate categories and provide summaries for each category.`,
    slug: "ticket-classifier",
    form: [
      {
        label: "Customer Support Ticket",
        field: "textarea",
        name: "supportTicket",
        required: true,
      },
    ],
  },
  {
    title: "Promotional Campaign Content Generator",
    desc: "Generates content for promotional campaigns, including email newsletters, social media posts, and product advertisements.",
    category: "Marketing Tools",
    icon: "campaign-icon.png",
    prompt: `Create content for an upcoming promotional campaign, including email newsletters and social media posts.`,
    slug: "promotional-campaign-generator",
    form: [
      {
        label: "Campaign Theme",
        field: "input",
        name: "campaignTheme",
        required: true,
      },
      {
        label: "Products to Promote",
        field: "textarea",
        name: "products",
        required: false,
      },
    ],
  },
  {
    title: "Product Comparison Tool",
    desc: "Compares features, specifications, and customer reviews of similar products to assist shoppers in making informed decisions.",
    category: "Product Comparison",
    icon: "comparison-icon.png",
    prompt: `Compare features and specifications of two products in your catalog to help customers make a choice.`,
    slug: "product-comparison-tool",
    form: [
      {
        label: "Product 1",
        field: "input",
        name: "product1",
        required: true,
      },
      {
        label: "Product 2",
        field: "input",
        name: "product2",
        required: true,
      },
    ],
  },
  {
    title: "Return and Refund Policy Generator",
    desc: "Generates comprehensive return and refund policies based on industry standards and legal requirements.",
    category: "Legal Tools",
    icon: "legal-icon.png",
    prompt: `Create a return and refund policy for your e-commerce store, considering industry standards and legal requirements.`,
    slug: "return-refund-policy-generator",
    form: [
      {
        label: "Store Information",
        field: "textarea",
        name: "storeInfo",
        required: true,
      },
    ],
  },
  {
    title: "Code Generator",
    desc: "An AI tool that generates code snippets based on your input specifications.",
    category: "Development",
    icon: "code-icon.png",
    prompt: `Provide a detailed description of the code you need. Specify the programming language, functionality, and any particular requirements.`,
    slug: "generate-code",
    form: [
      {
        label: "Programming Language",
        field: "input",
        name: "language",
        required: true,
      },
      {
        label: "Functionality Description",
        field: "textarea",
        name: "description",
        required: true,
      },
    ],
  },
  {
    title: "SEO Keywords Generator",
    desc: "An AI tool that generates SEO keywords based on your website content.",
    category: "SEO",
    icon: "seo-icon.png",
    prompt: `Generate a list of 10 SEO keywords in bullet points based on the provided website content.`,
    slug: "generate-seo-keywords",
    form: [
      {
        label: "Website Content",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    title: "Email Subject Line Generator",
    desc: "An AI tool that generates catchy email subject lines.",
    category: "Email Marketing",
    icon: "email-icon.png",
    prompt: `Generate 5 catchy email subject lines in bullet points based on the provided email content and purpose.`,
    slug: "generate-email-subject",
    form: [
      {
        label: "Email Content",
        field: "textarea",
        name: "emailContent",
        required: true,
      },
      {
        label: "Email Purpose",
        field: "input",
        name: "emailPurpose",
        required: true,
      },
    ],
  },
  {
    title: "Social Media Post Ideas Generator",
    desc: "An AI tool that generates engaging social media post ideas.",
    category: "Social Media",
    icon: "social-media-icon.png",
    prompt: `Generate 5 engaging social media post ideas in bullet points based on the provided topic and platform.`,
    slug: "generate-social-post-ideas",
    form: [
      {
        label: "Topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Platform",
        field: "select",
        name: "platform",
        options: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
        required: true,
      },
    ],
  },
  {
    title: "Ad Copy Generator",
    desc: "An AI tool that generates compelling ad copy for various platforms.",
    category: "Advertising",
    icon: "ad-icon.png",
    prompt: `Generate 3 compelling ad copy variations in bullet points based on the provided product details and target audience.`,
    slug: "generate-ad-copy",
    form: [
      {
        label: "Product Details",
        field: "textarea",
        name: "productDetails",
        required: true,
      },
      {
        label: "Target Audience",
        field: "input",
        name: "targetAudience",
        required: true,
      },
    ],
  },
  {
    title: "Text Rewriter Tool",
    desc: "An AI tool that rewrites text to improve clarity and coherence.",
    category: "Text Rewriting",
    icon: "text-rewriter-icon.png",
    prompt: `Rewrite the provided sentence to enhance clarity and coherence and give it in a structured format.`,
    slug: "text-rewriter",
    form: [
      {
        label: "Text to Rewrite",
        field: "textarea",
        name: "textToRewrite",
        required: true,
      },
      {
        label: "Tone",
        field: "select",
        name: "tone",
        options: [
          "Professional",
          "Friendly",
          "Casual",
          "Formal",
          "Humorous",
          "Academic",
          "Technical",
        ],
        required: true,
      },
    ],
  },
];
