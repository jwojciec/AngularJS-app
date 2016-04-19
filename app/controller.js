angular.module('productsApp', [])
  .controller('ProductListController', function() {
    var productList = this;
	
    productList.getAllProducts = function() {
		return productList.products;
	};
	
	productList.deleteProduct = function(id) {
		productList.products.splice(id, 1);
	}
	
	productList.editProduct = function(id) {
		//ToDo
	}

	productList.addProduct = function(id) {
		//ToDo
	}		
 
	productList.products = [
		{product_id: 1, product_name: 'Intel CPU', category: 'CPU', description: 'CPU test description', product_price: 123, expiration_date: '12/12/2016'},
		{product_id: 2, product_name: 'Asus GPU', category: 'GPU', description: 'GPU test description', product_price: 231, expiration_date: '12/12/2016'}
	]; 

  });

