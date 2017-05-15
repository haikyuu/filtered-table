const searchProducts = (products, params) => {
	let result = [];
	let isOk
	for (var i = 0; i < products.length; i++) {
		//If one of the params is omitted, then it's passing the filter
		//else, we verify it 
		isOk = {
			name: params.name ? false: true,
			price: params.price ? false: true,
		}
		if (!isOk.price && products[i].price <= params.price) {
			isOk.price = true
		}
		if (!isOk.name && products[i].name.toLowerCase().indexOf(params.name) > -1){
			isOk.name = true
		}
		if (isOk.name && isOk.price) {
			result.push(products[i])
		}
	}
	return result;
};

const data = [
	{
		id: 1,
		name: "Bicyclette",
		price: 1000
	},
	{
		id: 2,
		name: "Souris PC",
		price: 500
	},
	{
		id: 3,
		name: "Télévision",
		price: 2134
	},
	{
		id: 4,
		name: "Aspirateur",
		price: 230
	},
	{
		id: 5,
		name: "Cartes",
		price: 50
	},
	{
		id: 6,
		name: "USB",
		price: 640
	},
	{
		id: 7,
		name: "Chaise",
		price: 4500
	},
	{
		id: 8,
		name: "Extincteur",
		price: 630
	},
	{
		id: 9,
		name: "Casquette",
		price: 49
	},
];

export {
	searchProducts,
	data,
}