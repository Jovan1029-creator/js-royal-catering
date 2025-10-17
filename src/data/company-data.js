export const companyInfo = {
  name: "JS Royal Inn Catering Services",
  phone: "0765365358",
  phones: ["0765365358", "0754207117", "0715207117"],
  email: "contact@jsroyalcatering.com",
  tagline: "Ubora Ni Fahari Yetu",

  location: {
    address: "Dar es Salaam, Tanzania",
    serviceAreas: ["Morogoro", "Dar es Salaam", "Dodoma"]
  },

  // Hero image
  heroImage: "/assets/images/events/4.jpg",

  // Gallery images - randomized order
  galleryImages: [
    // Food & Dishes
    { src: "/assets/images/events/2.jpg", category: "food", alt: "Delicious Food Presentation" },
    { src: "/assets/images/events/5.jpg", category: "food", alt: "Freshly Prepared Dishes" },
    { src: "/assets/images/events/6.jpg", category: "food", alt: "Gourmet Catering Spread" },
    // Event Setups (including 4.jpg)
    { src: "/assets/images/events/1.jpg", category: "events", alt: "Beautiful Event Setup" },
    { src: "/assets/images/events/3.jpg", category: "events", alt: "Elegant Dining Setup" },
    { src: "/assets/images/events/4.jpg", category: "events", alt: "Premium Event Catering" }, // ← ADDED BACK!
    { src: "/assets/images/events/7.jpg", category: "events", alt: "Wedding Catering Service" },
    { src: "/assets/images/events/8.jpg", category: "events", alt: "Corporate Event Catering" },
    { src: "/assets/images/events/9.jpg", category: "events", alt: "Private Party Setup" },
    { src: "/assets/images/events/10.jpg", category: "events", alt: "Special Occasion Catering" }
  ],

  menuPackages: [
    // ... your existing menu packages remain the same ...
    {
      id: 1,
      name: "Silver Package",
      price: "Tsh 10,500",
      originalName: "Menu 1",
      items: [
        "Starter (Mtorí na Pop Corn)",
        "Pilau",
        "Wali Maua",
        "Ndizi za Nazi/Nyama",
        "Viazi/Chipsi",
        "Kuku wa Kukaanga (1/4)",
        "Nyama ya Ng'ombe (Mshikaki/Mapande)",
        "Mchuzi Plain",
        "Nigele Mix Nazi",
        "Saladi",
        "Pilipili Chachandu",
        "Matunda Aina Mbalimbali"
      ]
    },
    {
      id: 2,
      name: "Gold Package",
      price: "Tsh 12,500",
      originalName: "Menu 2",
      items: [
        "Starter (Mtorí, Sambusa na Pop Corn)",
        "Pilau",
        "Wali Mweupe",
        "Ndizi Bukoba/Malindi",
        "Viazi vya Kukaanga/Kuchoma (1/4)",
        "Nyama ya Ng'ombe (Mishikaki/Mapande)",
        "Mchuzi Plain",
        "Tambi za Nazi/Chapati",
        "Mchuzi wa Nigele",
        "Saladi Mbalimbali",
        "Pilipili (Chachandu)",
        "Matunda Aina Tatu Saladi"
      ]
    },
    {
      id: 3,
      name: "Platinum Package",
      price: "Tsh 14,500",
      originalName: "Menu 3",
      items: [
        "Starter (Mtorí, Kongoro, Pumpkin Soup, Bagia, Chapati)",
        "Pilau",
        "Wali Mweupe",
        "Ndizi Bukoba/Malindi",
        "Viazi vya Kukaanga/Kuchoma (1/4)",
        "Nyama ya Ng'ombe (Mishikaki/Mapande)",
        "Samaki Sato/Kibua",
        "Tambi za Mbogamboga",
        "Vegetable Sauce",
        "Chinese ya Karanga/Sanyuse",
        "Saladi Mbalimbali",
        "Pilipili (Chachandu)",
        "Matunda Aina Mbalimbali"
      ]
    },
    {
      id: 4,
      name: "Royal Package",
      price: "Tsh 16,500",
      originalName: "Menu 4",
      items: [
        "Starter (Mtorí, Kongoro, Pumpkin Soup, Bagia, Chapati, Mishikaki ya Ng'ombe/Shawarma, Sambusa)",
        "Pilau",
        "Wali Maua",
        "Ndizi Bukoba/Malindi",
        "Viazi Roast/Chipsi",
        "Kuku wa Kuchoma (1/4)",
        "Nigele Mchuzi Plain",
        "Nyama ya Ng'ombe",
        "Nyama ya Mbuzi Choma",
        "Makaloni/Tambi",
        "Kisamvu cha Karanga",
        "Saladi Mbalimbali",
        "Pilipili (Chachandu)",
        "Matunda Aina Mbalimbali"
      ]
    }
  ]
};