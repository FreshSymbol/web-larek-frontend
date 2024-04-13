# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:

- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:

- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск

Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```

## Сборка

```
npm run build
```

или

```
yarn build
```

## Типы

**Categoty** -описывает тип категорий для карточки товара.  
**CategoryStyle** - описывает тип категорий для стилей. карточки товара.  
**FormErrors** = описывает тип ошибки.

## Интерфейсы

**IProduct** - описывает модель данных продукта.  
**IOrder** - описывает модель данных заказа. Используется в компоненте Order в качестве типа дженирика класса Form.  
**IContacts** - описывает модель данных контактов заказа. Используется в компоненте Contacts в качестве типа дженирика класса Form.  
**IProduct** - описывает модель данных продукта. Используется в компоненте Card в качестве типа дженирика класса Component.  
**IBasket** - описывает корзину. Имеет колекцию Map как хранилище.Используется в компоненте Basket в качестве типа дженирика класса Component.  
Методы: addProduct для добавления продукта в корзину.  
 removeProduct для удаления продукта из корзины.  
**IProductBasket** - описывает продукт в корзине.  
**ICatalog** - описывает каталог на главной странице, хранит масив IProduct.  
Методы: setProduct устанавливает список продуктов.  
**IFormState** - описывает состояние формы и ее валидность. Используется в компоненте Form в качестве типа дженирика класса Component.
getProduct получает продукт по id;  
**IPage** - описывает главную страницу. Используется в компоненте Page в качестве типа дженирика класса Component.  
**ICardActions** - описывает событие карточки. Используется в конструкторе класса Card.  
**ISuccess** - описывает окончательную стоимость. Используется в компоненте Success в качестве типа дженирика класса Component.  
**SuccessActions** - описывает событие формы. Используется в конструкторе класса Success.  
**IModalData** - описывает модальное окно. Используется в классе Modal в качесвте типа дженерика класса Component.  
**ICard** - описывает карту товара. Используется в компоненте Card в качесве типа дженерика Component.

## Классы

**Component** - базовый абстрактный класс компонентов.  
Методы:  
 _toggleClass_ для смены класса.  
 _setText для_ установки текстового содержимого.  
 _setDisabled_ для смены состояние блокировки.  
 _setHidden_ для скрытия элемента.  
 _setVisibled_ для показа элемента.  
 _setImage_ для установки изображения с алтернативным текстом.  
 _render_ для рендкринга элемента на странице  
**Model** - базовый абстрактный класс моделей. Содержит методо emitChanges для уведомления моделям об изменении состояния.  
**Form** - класс реализации формы. Используется в расширении классов Order,Contacts.  
Методы:  
 _onInputChange_ обрабатывает событие формы инпута.  
 _valid_ для установки на валидность.  
 _errors_ для установки сообщения ошибки.  
 _render_ для рендкринга элемента на странице.  
**Basket** класс реализации корзины.  
Методы:  
 _items_ для установки списка продуктов.  
 _selected_ для установки состояния кнопки.  
 _total_ для установки окончательной стоимости.  
 _disableButton_ делает кнопку неактивной.  
 **StoreItemBasket** - класс реализации продукта в каталоге.  
 Методы:  
 _title_ устанавливает заголовок.  
 _index_ устанавливает индекс.  
 _price_ устанавливает стоимость.  
**Order** - класс реализации заказа. Имеет методы paymant для установки способа оплаты и _address_ для установки адреса.  
**Contacts** - класс реализации контактов заказа. Имеет методы phone для установки номера телефона и _email_ для установки адреса почты.  
**Success** - класс реализации успешного заказа. Имеет метод _sescription_ для установки содержимого списания средств.  
**Card** - класс реализации карточки пролукта.  
**Page** - класс реализации главной страницы.  
Методы:  
 _counter_ для установки содержимого счётчика.  
 _catalog_ для утсановки карточки продукта.  
 **Modal** - класс реализации модального окна.  
 Методы:  
 _open_ открытие модального окна.  
 _close_ закрытие модального окна.  
 **Card** - класс реализации карты товара.  
 Методы:  
_id_ установитье,получить id.  
_title_ устанавливает содержимое заголовка.  
_image_ устанавливает путь изобрадения.  
_selected_ устанавливает выбрана ли карточка.  
_price_ устанавливает содержимое стоимости.  
_category_ устанавливает содержимое категории.  
**Product** - класс реализации продукта.  
**AppState** - класс реализации приложения.  
Методы:
_addToBasket_ добавить товар в корзину.  
_deleteFromBasket_ удалить товар из корзины.  
_clearBasket_ очистить корину.  
_getBasketAmount_ получить количесво.  
_validateOrder_ отвечает за валидацию формы заказа.  
_validateContacts_ отвечает за валидацию формы контактов.  
_setOrderField_ устанавливает поля заказа.  
_updatehOrder_ обновление данных заказа.  
_getTotalPrice_ получить общую сумму заказа.  
_setCatalog_ устанавливает каталог с товарами.  
_resetSelected_ обновление товаров.

## События

**EventEmitter** Реализует паттерн «Наблюдатель» и позволяет подписываться на события и уведомлять подписчиков
о наступлении события.  
Класс имеет методы on , off , emit — для подписки на событие, отписки от события и уведомления
подписчиков о наступлении события соответственно.  
Дополнительно реализованы методы onAll и offAll — для подписки на все события и сброса всех
подписчиков.  
Интересным дополнением является метод trigger , генерирующий заданное событие с заданными
аргументами. Это позволяет передавать его в качестве обработчика события в другие классы. Эти
классы будут генерировать события, не будучи при этом напрямую зависимыми от
класса EventEmitter.

**modal:close** - закрывает модальные окна при нажатии на кретик и область вне окна.  
**items:changed** - производит рендеринг Page при изменение продукта или продуктов.  
**card:select** - открывает модальное окно при выборе карточки.  
**card:toBasket** - изменяет состояние счетчика на главной странице при добавлении/удалении продукта.  
**basket:open** - открывает модальное окно корзины со списком добавленых продуктов.  
**basket:delete** - удаляет продукт из корзины, изменяет состояние счетчика на главной странице, изменяет сумму заказа.  
**basket:order** - открывает модальное окно заказа для ввода способа оплаты и адреса.  
**order:submit** - устанавливает способ оплаты и адрес.  
**contacts:submit** - устанавливает данные заказа телефон и адрес почты.  
**orderInput:change** - активирует валидацию.  
**orderFormErrors:change** - отображает ошибки формы заказа.  
**contactsFormErrors:change** - отображает ошибки формы контактов.  
**order:success** - открывает модальное окно успешного заказа.
