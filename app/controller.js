(function () {
    var app = angular.module('productsApp', []);

    app.controller('ProductListController', function () {
        var productList = this;
        productList.isFormVisible = false;

        productList.getAllProducts = function () {
            return productList.products;
        };

        productList.getCurrentProduct = function () {
            return productList.currentProduct;
        };

        productList.addNewProduct = function (product) {
            var newProduct = {
                product_id: 99,
                product_name: 'Logitech keyboard',
                category: 'keyboard',
                description: 'keyboard description',
                product_price: 140,
                expiration_date: '12/12/2016'
            };
            productList.products.push(product);
            productList.currentProduct = {};
        };

        productList.deleteProduct = function (id) {
            var index = productList.products.indexOf(productList.currentProduct);
            if (index === id) {
                productList.closeForm();
            }
            productList.products.splice(id, 1);
        };

        productList.editProduct = function (id) {
            productList.isFormVisible = true;
            productList.currentProduct = productList.products[id];
        };

        productList.openEmptyForm = function () {
            productList.isFormVisible = true;
            productList.currentProduct = {};
        };

        productList.closeForm = function () {
            productList.isFormVisible = false;
        };

        productList.products = [
            {
                product_id: 8,
                product_name: 'Gigabyte GPU',
                category: 'GPU',
                description: 'Gigabyte GPU test description',
                product_price: 1123,
                expiration_date: '12/12/2016'
            },
            {
                product_id: 3,
                product_name: 'Intel CPU',
                category: 'CPU',
                description: 'CPU test description',
                product_price: 123,
                expiration_date: '12/12/2016'
            },
            {
                product_id: 4,
                product_name: 'Asus GPU',
                category: 'GPU',
                description: 'GPU test description',
                product_price: 231,
                expiration_date: '12/12/2016'
            },
            {
                product_id: 10,
                product_name: 'Logitech mouse',
                category: 'mouse',
                description: 'mouse description',
                product_price: 40,
                expiration_date: '12/12/2016'
            }
        ];
    });
})();