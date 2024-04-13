import { Product } from '../components/AppData';

//Типы категорий товаров
export type Category =
	| 'софт-скил'
	| 'хард-скил'
	| 'другое'
	| 'дополнительное'
	| 'кнопка';

export type CategoryStyle = {
	[Key in Category]: string;
};

//Интерфейс модели данных продукта
export interface IProduct {
	id: string;
	category: Category;
	title: string;
	image: string;
	price: number | null;
	description: string;
	selected: boolean;
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

export interface IOrder {
	items: string[];
	payment: string;
	total: number;
	address: string;
	email: string;
	phone: string;
}

export interface IOrderForm {
	payment: string;
	address: string;
	email: string;
	phone: string;
}

export type FormErrors = Partial<Record<keyof IOrderForm, string>>;

export interface IAppState {
	basket: Product[];
	store: Product[];
	order: IOrder;
	formErrors: FormErrors;
	addToBasket(value: Product): void;
	deleteFromBasket(id: string): void;
	clearBasket(): void;
	getBasketAmount(): number;
	getTotalPrice(): number;
	setItems(): void;
	setOrderField(field: keyof IOrder, value: string): void;
	validateContacts(): boolean;
	validateOrder(): boolean;
	refreshOrder(): boolean;
	setCatalog(items: IProduct[]): void;
	resetSelected(): void;
}

export interface ApiResponse {
	items: IProduct[];
}
