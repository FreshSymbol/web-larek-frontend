import { IEvents } from './base/events';
import { Form } from './common/Form';

//Интерфейс модели контактов заказа
export interface IContacts {
	email: string;
	phone: string;
}

//Класс реализации контактов заказа
export class Contacts extends Form<IContacts> {
	constructor(container: HTMLFormElement, events: IEvents) {
		super(container, events);
	}

	//Установить номер
	set phone(value: string) {
		(this.container.elements.namedItem('phone') as HTMLInputElement).value =
			value;
	}

	//Установить адрес почты
	set email(value: string) {
		(this.container.elements.namedItem('email') as HTMLInputElement).value =
			value;
	}
}
