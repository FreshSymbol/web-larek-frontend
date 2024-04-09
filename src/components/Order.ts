import { IOrder } from '../types';
import { IEvents } from './base/events';
import { Form } from './common/Form';

//Класс реализации  заказа
export class Order extends Form<IOrder> {
	constructor(container: HTMLFormElement, events: IEvents) {
		super(container, events);
	}

	//Установить платежную систему
	set payment(value: string) {
		(this.container.elements.namedItem('cash') as HTMLInputElement).value =
			value;
	}

	//Установить адрес
	set address(value: string) {
		(this.container.elements.namedItem('address') as HTMLInputElement).value =
			value;
	}
}
