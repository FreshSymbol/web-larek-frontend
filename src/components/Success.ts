import { Component } from './base/Component';

//Интерфейс успешного заказ
interface ISuccess {
	description: number;
}

//Интерфейс события
interface ISuccessActions {
	onClick: () => void;
}

//Класс реализации успешного заказ
export class Success extends Component<ISuccess> {
	protected _button: HTMLElement;
	protected _description: HTMLElement;

	constructor(
		protected blockName: string,
		container: HTMLElement,
		actions?: ISuccessActions
	) {
		super(container);

		this._button = container.querySelector(`.${blockName}__close`);
		this._description = container.querySelector(`.${blockName}__description`);

		if (actions?.onClick) {
			if (this._button) {
				this._button.addEventListener('click', actions.onClick);
			}
		}
	}
	//Установить содержимое списания
	set description(total: number) {
		this.setText(this._description, `Списано ${total} синапсов`);
	}
}
