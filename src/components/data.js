// src/data.js
export const notification = {
    message: "John (San Francisco) purchased Red Apple",
    timeAgo: "35 minutes ago",
};

export const faqData = [
    { title: "Frequently Asked Questions (FAQ)", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Refund", content: "Refund policy content here." },
    { title: "Delivery", content: "Delivery policy content here." },
    { title: "Shipping & Returns", content: "Shipping & Returns policy content here." },
];

export const reviewsData = [
    {
        username: "ADMIN",
        review: "A Auto Parts is the indispensable for high-end automotive parts...",
        product: "Village Tomato",
        rating: 5,
        time: "5 hours ago"
    },
    {
        username: "JOHN DOE",
        review: "The brake parts I purchased from Auto Parts are incredibly high-quality and durable.",
        product: "Organic Cucumber",
        rating: 4,
        time: "10 months ago"
    }
];

export const brandsData = [
    { name: "Savor", count: 12 },
    { name: "Trendy", count: 22 },
    { name: "Zuma", count: 15 },
    { name: "Vanilla", count: 20 },
    { name: "Lancaster", count: 25 }
];

export const productsData = [
    { name: "Organic Potato", price: "$9.99 - $41.99", discount: "25%", id: "BSC12004" },
    { name: "Village Tomato", price: "$11.99 - $51.99", discount: "15%", id: "BSC13005" },
    { name: "Organic Cucumber", price: "$25.99 - $21.99", discount: "10%", id: "BSC14006" },
    { name: "Red Apple", price: "$16.99 - $21.99", discount: "5%", id: "BSC15007" },
    { name: "Green Bell Pepper", price: "$89.99 - $120.99", discount: "7%", id: "BSC16008" },
];
