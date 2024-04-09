//Типы категорий товаров
export type Category =
	| 'софт-скил'
	| 'хард-скил'
	| 'другое'
	| 'допольнительное'
	| 'кнопка';

//Интерфейс модели данных продукта
export interface IProduct {
	id: string;
	category: Category;
	title: string;
	image: string;
	price: number | null;
	description: string;
}

//Интерфейс модели данных заказа
export interface IOrder {
	payment: string;
	address: string;
}

//Интерфейс модели контактов заказа
export interface IContacts {
	email: string;
	phone: string;
}

//Интерфейс содержит коллекцию продуктов,возможность добавлять и удалять товары из корзины
export interface IBasket {
	products: Map<string, number>;
	addProduct(product: IProduct): void;
	removeProduct(product: IProduct): void;
}

//Интерфейс каталога, можно инициализировать и получить продукт
export interface ICatalog {
	products: IProduct[];
	setProducts(products: IProduct): void;
	getProduct(id: string): IProduct;
}
