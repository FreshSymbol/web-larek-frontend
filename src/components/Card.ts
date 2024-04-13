import { Category } from '../types';
import { CDN_URL, categoryStyle } from '../utils/constants';
import { ensureElement } from '../utils/utils';
import { Component } from './base/Component';

//Интерфейс события
interface ICardActions {
	onClick: (event: MouseEvent) => void;
}

export interface ICard {
	id: string;
	title: string;
	category: string;
	description: string;
	image: string;
	price: number | null;
	selected: boolean;
}

//Класс реализации карточки товара
export class Card extends Component<ICard> {
	protected _category: HTMLElement;
	protected _title: HTMLElement;
	protected _image: HTMLImageElement;
	protected _description: HTMLElement;
	protected _price: HTMLElement;
	protected _button: HTMLButtonElement;

	constructor(
		protected blockName: string,
		container: HTMLElement,
		actions?: ICardActions
	) {
		super(container);
		this._category = container.querySelector(`.${blockName}__category`);
		this._title = ensureElement<HTMLElement>(`.${blockName}__title`, container);
		this._image = ensureElement<HTMLImageElement>(
			`.${blockName}__image`,
			container
		);
		this._description = container.querySelector(`.${blockName}__description`);
		this._price = container.querySelector(`.${blockName}__price`);
		this._button = container.querySelector(`.${blockName}__button`);

		if (actions?.onClick) {
			if (this._button) {
				this._button.addEventListener('click', actions.onClick);
			} else {
				container.addEventListener('click', actions.onClick);
			}
		}
	}
	set id(value: string) {
		this.container.dataset.id = value;
	}
	get id(): string {
		return this.container.dataset.id || '';
	}

	// Сеттер и гетер для названия
	set title(value: string) {
		this.setText(this._title, value);
	}
	get title(): string {
		return this._title.textContent || '';
	}

	// Сеттер для кратинки
	set image(value: string) {
		this._image.src = CDN_URL + value;
	}

	// Сеттер для определения выбрали товар или нет
	set selected(value: boolean) {
		if (!this._button.disabled) {
			this._button.disabled = value;
		}
	}

	// Сеттер для цены
	set price(value: number | null) {
		this.setText(this._price, value ? `${value} синапсов` : 'Бесценно');
		if (this._button && !value) {
			this._button.disabled = true;
		}
	}

	// Сеттер для категории
	set category(value: Category) {
		this._category.textContent = value;
		this._category.classList.add(categoryStyle[value]);
	}
}

export class CatalogItem extends Card {
	constructor(container: HTMLElement, actions?: ICardActions) {
		super('card', container, actions);
	}
}

export class CatalogItemPreview extends Card {
	protected _description: HTMLElement;

	constructor(container: HTMLElement, actions?: ICardActions) {
		super('card', container, actions);

		this._description = container.querySelector(`.${this.blockName}__text`);
	}

	set description(value: string) {
		this.setText(this._description, value);
	}
}
