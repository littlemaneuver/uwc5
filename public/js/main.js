requirejs.config({
	baseUrl: 'js/',
	paths: {
		// THIRD PART
        jquery: 'components/jquery/jquery',
		validator: 'components/jquery.validation/jquery.validate',
		bootstrap: 'components/bootstrap.css/js/bootstrap',
        timepicker: 'components/bootstrap-timepicker/js/bootstrap-timepicker',
        underscore: "components/underscore/underscore",
        backbone: "components/backbone/backbone",
        marionette: "components/backbone.marionette/lib/backbone.marionette",

        // MODELS
        car: 'app/models/car',
        cars: 'app/collections/cars',
        order: 'app/models/order',
        orders: 'app/collections/orders',
        user: 'app/models/users',
        users: 'app/collections/users',

        // ROUTERS
        userRouter: 'app/routers/user_router',
        adminRouter: 'app/routers/admin_router',

        // VIEWS
        adminLayout: 'app/views/admin_layout',
        userLayout: 'app/views/user_layout',
        userOrdersLayout: 'app/views/user_orders_layout',
        userOrdersView: 'app/views/user_orders_view',
        userOrderView: 'app/views/user_order_view',
        navView: 'app/views/nav_view',
        carMapView: 'app/views/car_map_view',
        carListView: 'app/views/car_list_view',
        carView: 'app/views/car_view',
        dummyView: 'app/views/dummy_view',
        createOrderView: 'app/views/CreateOrderView',
        getCarView: 'app/views/get_car_view',
        modalView: 'app/views/modal_view',
        orderListView: 'app/views/OrderListView',
        orderView: 'app/views/OrderView'
	},
	shim: {
		bootstrap: {
			deps: ['jquery']
		},
        timepicker: {
          deps: ["jquery"]
        },
		validator: {
			deps: ['jquery']
		},
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        marionette: {
            deps: ["underscore", "backbone", "jquery"],
            exports: "Marionette"
        }
	},
	urlArgs: "bust=" + (new Date()).getTime()
});

requirejs(['cs!app/app'], function (App) {
    console.log("start");
    return $(function(){
        App.start();
    });
});
