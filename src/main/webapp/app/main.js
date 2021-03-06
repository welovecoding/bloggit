(function () {
  var applicationName = 'store';
  var dependencies = ['store-products'];

  var app = angular.module(applicationName, dependencies);

  app.controller('PanelController', function () {
    this.tab = 1;

    this.selectTab = function (setTab) {
      this.tab = setTab;
    };

    this.isSelected = function (checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('StoreController',
    [
      '$http', function ($http) {
        var store = this;
        store.products = [];

        $http.get('products.json').success(function (data) {
          store.products = data;
        });
      }
    ]
    );

  app.controller('ReviewController', function () {
    this.review = {};

    this.addReview = function (product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
})();
