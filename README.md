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
__Categoty__ -описывает тип категорий для карточки товара.

## Интерфейсы
__IProduct__ - описывает модель данных продукта.  
__IOrder__ - описывает модель данных заказа. Используется в компоненте Order в качестве типа дженирика класса Form.  
__IContacts__ - описывает модель данных контактов заказа. Используется в компоненте Contacts в качестве типа дженирика класса Form.  
__IProduct__ - описывает модель данных продукта.  Используется в компоненте Card в качестве типа дженирика класса Component.  
__IBasket__ - описывает корзину. Имеет колекцию Map как хранилище.Используется в компоненте Basket в качестве типа дженирика класса Component.  
Методы: addProduct для добавления продукта в корзину.  
        removeProduct для удаления продукта из корзины.  
__ICatalog__ - описывает каталог на главной странице, хранит масив IProduct.  
Методы: setProduct устанавливает список продуктов.  
__IFormState__ - описывает состояние формы и ее валидность. Используется в компоненте Form в качестве типа дженирика класса Component.
        getProduct получает продукт по id;  
__IPage__ - описывает главную страницу. Используется в компоненте Page в качестве типа дженирика класса Component.  
__ICardActions__ - описывает событие карточки. Используется в конструкторе класса Card.  
__ISuccess__ - описывает окончательную стоимость. Используется в компоненте Success в качестве типа дженирика класса Component.  
__SuccessActions__ -  описывает событие формы. Используется в конструкторе класса Success.  

## Классы
__Component__ - базовый абстрактный класс компонентов.  
Методы: toggleClass для смены класса  
        setText для установки текстового содержимого  
        setDisabled для смены состояние блокировки  
        setHidden для скрытия элемента  
        setVisibled для показа элемента  
        setImage для установки изображения с алтернативным текстом  
        render для рендкринга элемента на странице  
__Model__ - базовый абстрактный класс моделей. Содержит методо emitChanges для уведомления моделям об изменении состояния.  
__Form__ - класс реализации формы. Используется в расширении классов Order,Contacts  
Методы: onInputChange обрабатывает событие формы инпута  
        valid для установки на валидность  
        errors для установки сообщения ошибки  
        render для рендкринга элемента на странице  
__Basket__ класс реализации корзины.  
Методы: items для установки списка продуктов  
        selected для установки состояния кнопки  
        total для установки окончательной стоимости  
__Order__ - класс реализации заказа. Имеет методы paymant для установки способа оплаты и address для установки адреса.  
__Contacts__ - класс реализации контактов заказа. Имеет методы phone для установки номера телефона и email для установки адреса почты.  
__Success__ - класс реализации успешного заказа. Имеет метод sescription для установки содержимого списания средств  
__Card__ - класс реализации карточки пролукта.  
__Page__ - класс реализации главной страницы.  
Методы: counter для установки содержимого счётчика  
        catalog для утсановки карточки продукта  
        locked для установки блокировки прокрутки страницы.  
