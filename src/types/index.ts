//Тип описывающий категории продукта
type Category =
	| 'софт-скил'
	| 'другое'
	| 'кнопка'
	| 'дополнительное'
	| 'хард-скил';

//Тип описывающий айди
type Id = number | string;

//Интерфейс для эмитера, обрабатывает события
interface IEventEmitter {
	emit(event: string, data: unknown): void;
}

//Интерфейс данных продукта
interface IProductModel {
	category: Category;
	title: string;
	image: string;
	about: string;
	price: number;
}

//Интерфейс данных заказа
interface IOrderModel {
	payment: string;
	address: string;
	email: string;
	phone: string;
}

//Интерфейс каталог продуктов
interface ICatalog<T> {
	products: T;
	setProducts(products: T[]): void;
	getProducts(): T[];
}

//Интерфейс корзины
interface IBacket<T> {
	products: Set<T>;
	add(id: Id): void;
	remove(id: Id): void;
}

//Интерфейс вью, служит базовым для классов отобрадение
interface IView {
	render(data?: object): HTMLElement;
}
