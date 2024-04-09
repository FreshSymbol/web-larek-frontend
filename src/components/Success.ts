import { ensureElement } from '../utils/utils';
import { Component } from './base/Component';

//Интерфейс успешного заказ
interface ISuccess {
	total: number;
}

//Интерфейс события
interface ISuccessActions {
	onClick: () => void;
}

//Класс реализации успешного заказ
export class Success extends Component<ISuccess> {
	protected _close: HTMLElement;
	protected _description: HTMLElement;

	constructor(container: HTMLElement, actions: ISuccessActions) {
		super(container);

		this._close = ensureElement<HTMLElement>(
			'.order-success__close',
			this.container
		);
		this._description = container.querySelector('.order-success__description');

		if (actions?.onClick) {
			this._close.addEventListener('click', actions.onClick);
		}
	}

	//Установить содержимое списания
	set sescription(total: number) {
		this.setText(this._description, `Списано ' ${total} + ' синапсов`);
	}
}
