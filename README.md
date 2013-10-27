 UWC V (TaxiSky)
===============
Зависимости
-----------
1. Nodejs & NPM [офф.сайт](http://nodejs.org/)
2. Mongodb (процесс установки и запуска на [офф.сайте](http://www.mongodb.org/)
3. Nodemon (`npm install -g nodemon`)
4. Grunt (`npm install -g grunt-cli grunt`)
5. Coffee-script (`npm install -g coffee-script`)
6. Bower (`npm install -g bower`)

Инсталяция
----------
1. Сделать клон репозитория проекта
2. Установить все зависимости описанные выше
3. В корне проекта выполнить `npm install` и `bower install`
4. Запустить сервер MongoDB
5. В корне выполнить `grunt`

Архитектура
-----------
Приложение cостоит из 3 частей:

1. Клиентская часть (главная) [localhost:3000](http://localhost:3000).
2. Админка (диспетчерская) [localhost:3000/admin](http://localhost:3000/admin). 
3. Водительская часть (мобильное приложение) [localhost:3000/mobile](http://localhost:3000/mobile).

Описание функционала
--------------------
1. **Клиентская часть**. Заказ такси, автодополнение адреса, расчет пути и стоимости, отображение на карте. Возможность авторизации и регистрации. Для авторизированого пользователя доступен просмотр истории заказов и отображение их на карте.
2. **Диспетчерская часть**. Просмотр информации о заказах в реальном времени, возможность удалять, создавать заказы (с просчетом пути и стоимости). Просмотр информации о водителях (имя, статус) и расположения на карте в реальном времени. Возможность назначать заказ первому в очереди водителю или выбраному. При клике на заказ или на водителя с активным заказом, отображается путь на карте. Возможность редактировать путь по точкам.
3. **Водительская часть**. Создание учетной записи таксиста, или авторизация ранее созданого. Выход в онлайн и логирование координатов. Отображение назначеных заказов в реальном времени. Возможность принять заказ или отказаться. Выход в оффлайн.

