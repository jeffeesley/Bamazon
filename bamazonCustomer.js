var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	port: 3306,
	password: '',
	database: 'Bamazon', 
});

display();

function display(){
	connection.query("SELECT * FROM products", function(err, data) {
		if (err) throw err;

		console.log('Products: \n');
		
		for (var i = 0; i < data.length; i++) {
			console.log("Item Id: " + data[i].item_id + "\n");
			console.log("Product: " + data[i].product_name + "\n");
			console.log("Department:" + data[i].department_name + "\n");
			console.log("Price: " + data[i].price + "\n");
			console.log("Quantity: " + data[i].stock_quantity + "\n");
			console.log("-----------------");
		}
		userPrompt();
	});
};
function userPrompt(){
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Select item by ID',
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many would you like?',
			filter: Number
		}
	]).then(function(input){
			var item = input.item_id;
			var quantity = input.quantity;


			connection.query("SELECT * FROM products WHERE ?", {item_id: item}, function(err, data) {
				if (err) throw err;
				if(data.length == 0){
					console.log("Invalid item id");
					display();
				}
				else{
					var product = data[0];

					if(quantity <= product.stock_quantity){
						newQuant = product.stock_quantity - quantity;
						var madLongQuery = "UPDATE products SET stock_quantity = " + newQuant + " WHERE item_id = " + item;

						connection.query(madLongQuery, function(err, data){
							if(err) throw err;

							console.log("Your total comes to " + product.price * quantity + "\n");
							connection.end();
						});
					}
					else{
						console.log("Sorry, we don't have enough in stock to meet your request");
						console.log("Scope out the quantities, here they are");

						display();
					}
				}
			});
		});
}