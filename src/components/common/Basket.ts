import { Component } from '../base/Component';
import { createElement, ensureElement, formatNumber } from '../../utils/utils';
import { EventEmitter } from '../base/events';
import { IProduct } from '../../types';

//Интерфейс описывающий корзину продуктов
interface IBasket {
	items: HTMLElement[];
	total: number;
	selected: string[];
}

export interface IProductBasket extends IProduct {
	id: string;
	index: number;
}

export interface IStoreItemBasketActions {
	onClick: (event: MouseEvent) => void;
}

export class StoreItemBasket extends Component<IProductBasket> {
	protected _index: HTMLElement;
	protected _title: HTMLElement;
	protected _price: HTMLElement;
	protected _button: HTMLButtonElement;

	constructor(
		protected blockName: string,
		container: HTMLElement,
		actions?: IStoreItemBasketActions
	) {
		super(container);

		this._title = container.querySelector(`.${blockName}__title`);
		this._index = container.querySelector(`.basket__item-index`);
		this._price = container.querySelector(`.${blockName}__price`);
		this._button = container.querySelector(`.${blockName}__button`);

		if (this._button) {
			this._button.addEventListener('click', (evt) => {
				this.container.remove();
				actions?.onClick(evt);
			});
		}
	}

	set title(value: string) {
		this.setText(this._title, String(value));
	}

	set index(value: number) {
		this.setText(this._index, String(value));
	}

	set price(value: number) {
		this.setText(this._price, `${value} синапсов`);
	}
}

//Класс реализации корзины продуктов
export class Basket extends Component<IBasket> {
	protected _list: HTMLElement;
	protected _total: HTMLElement;
	protected _button: HTMLButtonElement;

	constructor(
		protected blockName: string,
		container: HTMLElement,
		protected events: EventEmitter
	) {
		super(container);

		this._list = ensureElement<HTMLElement>(
			`.${blockName}__list`,
			this.container
		);
		this._total = this.container.querySelector(`.${blockName}__price`);
		this._button = this.container.querySelector(`.${blockName}__button`);

		if (this._button) {
			this._button.addEventListener('click', () => {
				events.emit('basket:order');
			});
		}

		this.items = [];
	}

	//Установить список товаров
	set items(items: HTMLElement[]) {
		if (items.length) {
			this._list.replaceChildren(...items);
		} else {
			this._list.replaceChildren(
				createElement<HTMLParagraphElement>('p', {
					textContent: 'Добавьте товар в корзину',
				})
			);
		}
	}

	//Установить состоянии кнопки
	set selected(items: string[]) {
		if (items.length) {
			this.setDisabled(this._button, false);
		} else {
			this.setDisabled(this._button, true);
		}
	}

	//Установить окончательную цену
	set total(total: number) {
		this.setText(this._total, total + ' синапсов');
	}

	updateCounter() {
		Array.from(this._list.children).forEach(
			(item, index) =>
				(item.querySelector(`.basket__item-index`)!.textContent = (
					index + 1
				).toString())
		);
	}

	disableButton() {
		this._button.disabled = true;
	}
}
