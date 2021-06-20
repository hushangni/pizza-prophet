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

const pizzaProphetInit = () => {
	const form = document.querySelector('form');
	form.addEventListener('submit', e => {
		e.preventDefault();

		const sizeSelected = document.querySelector('input[name=size]:checked').value;
		const priceSelected = document.querySelector('input[name=price]:checked').value;

		const sizePizzaList = pizza[sizeSelected];

		const withinPricePizzaList = sizePizzaList.filter((pizzaPlace) => pizzaPlace.price === priceSelected);

		const finalPizzaPlace = randomElement(withinPricePizzaList);

		const pizzaHtml = `
			<h2>Go here ⏩ <span class="restaurant">${finalPizzaPlace.title}</span></h2>
		`;

		document.querySelector('.results').innerHTML = pizzaHtml;
	})
}

// Vanilla JS document ready
if (document.readyState === 'complete') {
	// IE 8 support
	pizzaProphetInit();
} else {
	// Other modern browsers
	document.addEventListener('DOMContentLoaded', pizzaProphetInit);
}