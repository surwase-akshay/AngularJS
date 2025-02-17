catlogModule.controller("ProductController", function ($scope) {
    $scope.products = [
        { name: "Smartphone", price: 30000, image: "smartphone.jpg", description: "Latest Android smartphone with high-end features" },
        { name: "Headphones", price: 2500, image: "headphones.jpg", description: "Wireless noise-canceling headphones" },
        { name: "Backpack", price: 1500, image: "backpack.jpg", description: "Durable and spacious backpack for travel and work" }
    ];
});
