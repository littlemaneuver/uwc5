define 'userOrdersLayout', [
  'cs!userLayout'
  'cs!cars'
  'cs!orders'
  'cs!carMapView'
  'cs!userOrdersView'
  'marionette'
], (UserLayout, Cars, Orders, CarMapView, UserOrdersView, Marionette) ->
  class UserOrdersLayout extends UserLayout
    template: '#user-orders-template'

    regions:
      map: '#map'
      orders: "#orders"

    onShow: ->
      cars = new Cars
      orders = new Orders

      @createMap()
      @map.show new CarMapView collection: cars
      @orders.show new UserOrdersView collection: orders

      orders.fetch reset: true

  UserOrdersLayout