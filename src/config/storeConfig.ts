export const storeConfig = {
  // System Routing
  storeId: "store-1", // Change this to dynamically switch the active store database queries
  
  // Brand identity
  storeName: "WinterCreamyLand",
  tagline: "Handcrafted ice cream, scooped with love.",
  themeColor: "#EC4899", // Pink
  
  // Localization
  currency: {
    symbol: "$",
    code: "USD"
  },
  
  // Assets
  heroImage: "https://images.unsplash.com/photo-1570197780067-ea4b78632128?q=80&w=2000&auto=format&fit=crop", 
  
  // Layout preferences
  featuredCategories: ["Gelato", "Sundaes", "Pints", "Drinks"],

  // UI Text Translations / Customizations
  ui: {
    nav: {
      menu: "Flavors",
      cart: "Bowls",
    },
    home: {
      exploreMenu: "See Flavors",
      whyOrderTitle: "Why choose us?",
      step1Title: "Pick Your Scoops",
      step1Desc: "Choose from our wide variety of handcrafted flavors.",
      step2Title: "Fast Checkout",
      step2Desc: "Skip the line. Order online quickly and securely.",
      step3Title: "Enjoy Your Treat",
      step3Desc: "Relish your sweet treat, made fresh just for you.",
    },
    buttons: {
      addToCart: "Add Scoop",
      browseMenu: "View Flavors",
      proceedToCheckout: "Go to Checkout",
      confirmOrder: "Place Order",
      processing: "Scooping...",
      backToHome: "Return Home",
    },
    menu: {
      title: "Our Flavors",
      subtitle: "Discover your next sweet obsession",
      allCategory: "All Flavors",
      noProducts: "No treats available here right now.",
      loadingText: "Scooping up the menu...",
    },
    cart: {
      title: "Your Sweets",
      subtitle: "Review your basket",
      emptyTitle: "Your Basket is Empty",
      emptySubtitle: "No scoops here! Time to add some sweetness.",
      summaryTitle: "Order Details",
      subtotal: "Subtotal",
      estimatedTax: "Estimated Tax",
      taxCalculatedAtCheckout: "Calculated at checkout",
      total: "Total",
      each: "per scoop",
    },
    checkout: {
      title: "Checkout",
      subtitle: "Where should we deliver your treats?",
      formTitle: "Delivery Details",
      labels: {
        name: "Full Name",
        phone: "Mobile Number",
        address: "Delivery Base",
        notes: "Flavor Notes (Optional)",
      },
      placeholders: {
        name: "Jane Doe",
        phone: "(555) 123-4567",
        address: "123 Sweet St",
        notes: "e.g., Please put the chocolate scoop on the bottom",
      },
      validation: {
        required: "Please complete all delivery details.",
        failedOrder: "Oops, something melted! Please try again.",
      }
    },
    confirmation: {
      title: "Order Placed!",
      subtitle: "Your sweet treats will be ready shortly.",
      orderIdPrefix: "Order ID:",
    }
  }
};
