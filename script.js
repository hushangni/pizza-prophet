const pizza = {
	pie: [
		{
			title: 'Maker Pizza',
			price: '$$'
		},
		{
			title: 'Pizza Libretto',
			price: '$$'
		},
		{
			title: 'Dominoes',
			price: '$'
		}
	],
	slice: [
		{
			title: 'Pizzaiolo',
			price: '$$'
		},
		{
			title: 'North of Brooklyn',
			price: '$$'
		},
		{
			title: 'Pizza Pizza',
			price: '$'
		},
		{
			title: 'King Slice',
			price: '$'
		}
	]
};

const randomElement = (array) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

// Listen for a form submit.
const form = document.querySelector('form');
form.addEventListener('submit', e => {
	e.preventDefault();
	// Once form submits, grab values from selected radio inputs.
	const sizeSelected = document.querySelector('input[name=size]:checked').value;
	const priceSelected = document.querySelector('input[name=price]:checked').value;

	console.log(sizeSelected, priceSelected);
	// use radio input values, to look through pizza object.
	const sizePizzaList = pizza[sizeSelected];
	console.log(sizePizzaList);

	const withinPricePizzaList = sizePizzaList.filter((pizzaPlace) => pizzaPlace.price === priceSelected);
	console.log(withinPricePizzaList);

	const finalPizzaPlace = randomElement(withinPricePizzaList);
	console.log("FINAL: ", finalPizzaPlace);

})
// Display the matching pizza joint to user. 