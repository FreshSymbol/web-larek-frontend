import { FormErrors, IAppState, IOrder, IOrderForm, IProduct } from '../types';
import { Model } from '../components/base/Model';

export class Product extends Model<IProduct> {
	id: string;
	category: string;
	title: string;
	image: string;
	description: string;
	price: number | null;
	selected: boolean;
}

export class AppState extends Model<IAppState> {
	catalog: Product[];
	order: IOrder = {
		items: [],
		payment: '',
		address: '',
		phone: '',
		email: '',
		total: 0,
	};
	formErrors: FormErrors = {};
	basket: Product[] = [];

	addToBasket(value: Product) {
		this.basket.push(value);
	}

	deleteFromBasket(id: string) {
		this.basket = this.basket.filter((item) => item.id !== id);
	}

	clearBasket() {
		this.basket.length = 0;
	}

	getBasketAmount() {
		return this.basket.length;
	}

	setItems() {
		this.order.items = this.basket.map((item) => item.id);
	}

	validateOrder() {
		const errors: typeof this.formErrors = {};
		if (!this.order.payment) {
			errors.payment = 'Поле способа оплаты обязательное';
		}
		if (!this.order.address) {
			errors.address = 'Поле адрес обязательное';
		}
		this.formErrors = errors;
		this.events.emit('orderFormErrors:change', this.formErrors);
		return Object.keys(errors).length === 0;
	}

	validateContacts() {
		const errors: typeof this.formErrors = {};
		if (!this.order.email) {
			errors.email = 'Поле почты обязательное';
		}
		if (!this.order.phone) {
			errors.phone = 'Поле номера телефона бязательное';
		}
		this.formErrors = errors;
		this.events.emit('contactsFormErrors:change', this.formErrors);
		return Object.keys(errors).length === 0;
	}

	setOrderField(field: keyof IOrderForm, value: string) {
		this.order[field] = value;

		if (this.validateContacts()) {
			this.events.emit('contacts:ready', this.order);
		}
		if (this.validateOrder()) {
			this.events.emit('order:ready', this.order);
		}
	}

	updatehOrder() {
		this.order = {
			items: [],
			total: 0,
			address: '',
			email: '',
			phone: '',
			payment: '',
		};
	}

	getTotalPrice() {
		return this.basket.reduce((sum, elem) => {
			elem.price ??= 0;
			return sum + elem.price;
		}, 0);
	}

	setCatalog(items: IProduct[]) {
		this.catalog = items.map(
			(item) => new Product({ ...item, selected: false }, this.events)
		);
		this.emitChanges('items:changed', { catalog: this.catalog });
	}

	resetSelected() {
		this.catalog.forEach((item) => (item.selected = false));
	}
}
