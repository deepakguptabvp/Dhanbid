const businessCategories = [
  { value: "retail", label: "Retail" },
  { value: "wholesale", label: "Wholesale" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "manufacturing", label: "Manufacturing & Industrial" },
  { value: "textiles", label: "Textiles & Garments" },
  { value: "electronics", label: "Electronics & Hardware" },
  { value: "pharmaceuticals", label: "Pharmaceuticals & Chemicals" },
  { value: "services", label: "Professional Services" },
  { value: "it-software", label: "IT & Software Development" },
  { value: "marketing", label: "Marketing & Advertising" },
  { value: "consulting", label: "Consulting Services" },
  { value: "legal", label: "Legal & Compliance" },
  { value: "finance", label: "Finance & Accounting" },
  { value: "healthcare", label: "Healthcare & Medical" },
  { value: "education", label: "Education & Training" },
  { value: "real-estate", label: "Real Estate & Property" },
  { value: "transportation", label: "Transportation & Logistics" },
  { value: "hospitality", label: "Hospitality & Tourism" },
  { value: "construction", label: "Construction & Infrastructure" },
  { value: "agriculture", label: "Agriculture & Farming" },
  { value: "automotive", label: "Automotive & Vehicle Services" },
  { value: "media", label: "Media & Entertainment" },
  { value: "energy", label: "Energy & Renewable Resources" },
  { value: "food-beverage", label: "Food & Beverage" },
  { value: "event-management", label: "Event Management" },
  { value: "other", label: "Other" }
];
const myBids = [
  // Tender 1 - Plastic Bottles
  {
    tenderId: "TND-PLB-0001",
    name: "Require 10,000 Plastic Bottles",
    company: "AquaFresh Ltd",
    bidderName: "ClearPlast Pvt Ltd",
    amount: 115000,
    date: "2025-05-13",
  },
  {
    tenderId: "TND-PLB-0001",
    name: "Require 10,000 Plastic Bottles",
    company: "AquaFresh Ltd",
    bidderName: "SmartPackers",
    amount: 125000,
    date: "2025-05-15",
  },

  // Tender 2 - Corrugated Boxes
  {
    tenderId: "TND-CBX-0002",
    name: "Need 5 Tons of Corrugated Boxes",
    company: "QuickCart Pvt Ltd",
    bidderName: "BoxBuilders",
    amount: 160000,
    date: "2025-05-17",
  },
  {
    tenderId: "TND-CBX-0002",
    name: "Need 5 Tons of Corrugated Boxes",
    company: "QuickCart Pvt Ltd",
    bidderName: "WrapMaster Co.",
    amount: 170000,
    date: "2025-05-18",
  },

  // Tender 3 - Steel Rods
  {
    tenderId: "TND-SRD-0003",
    name: "2000 Steel Rods for Factory Setup",
    company: "Infratech",
    bidderName: "BuildStrong Industries",
    amount: 540000,
    date: "2025-05-15",
  },
  {
    tenderId: "TND-SRD-0003",
    name: "2000 Steel Rods for Factory Setup",
    company: "Infratech",
    bidderName: "MetroSteel Corp.",
    amount: 565000,
    date: "2025-05-16",
  },

  // Tender 4 - Custom T-Shirts
  {
    tenderId: "TND-APT-0004",
    name: "500 Custom Printed T-Shirts",
    company: "EventX",
    bidderName: "UrbanInk",
    amount: 43000,
    date: "2025-05-12",
  },
  {
    tenderId: "TND-APT-0004",
    name: "500 Custom Printed T-Shirts",
    company: "EventX",
    bidderName: "Shirtify Co.",
    amount: 41000,
    date: "2025-05-13",
  },
];

export {businessCategories, myBids};