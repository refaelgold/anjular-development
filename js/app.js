'use strict';

/* App Module */

var myAppModule = angular.module('OriellyAnjularStarter', []);




//Filter Definition
myAppModule.filter('titleCase', function() {
    var titleCaseFilter = function(input) {
            var words = input.split(' ');
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    };
    return titleCaseFilter;
});
/*************************************************/




//CONTROLLER DEFINITION
myAppModule.controller('TextController',
    function($scope) {
        var someText = {};
        someText.message = 'You have started your journey.';
        $scope.someText = someText;
    });




myAppModule.controller('CartController',function ($scope) {
        $scope.bill = {};
        $scope.items = [
            {title: 'Paint pots', quantity: 8, price: 3.95},
            {title: 'Polka dots', quantity: 17, price: 12.95},
            {title: 'Pebbles', quantity: 5, price: 6.95}
        ];
        $scope.totalCart = function() {
            var total = 0;
            for (var i = 0, len = $scope.items.length; i < len; i++) {
                total = total + $scope.items[i].price * $scope.items[i].quantity;
            }
            return total;
        }
        $scope.subtotal = function() {
            return $scope.totalCart()-$scope.bill.discount;
        };
        function calculateDiscount(newValue, oldValue, scope) {
            $scope.bill.discount = newValue > 100 ? 10 : 0;
        }


//        make two function together
        $scope.$watch($scope.totalCart, calculateDiscount);



    }
);





myAppModule.controller('StudentController',function ($scope) {
        $scope.students = [
            {name: 'Refael gold', id:1},
            {name: 'Eyal Goldman', id:2},
            {name: 'Albert einstein', id: 3}
        ];



//        definition of function

        $scope.insertRockey=function(){
            $scope.students.splice(1,0,{name:'Rockey Balboha',id:'4'})

        }

    }
);



myAppModule.controller('AlbumController',function ($scope) {

        $scope.album= [
            {name: 'In the Jungle', duration:'04:30'},
            {name: 'Circle Of Life', duration:'03:20'},
            {name: 'Can You Feel the Love Tonight', duration:'03:45'}

        ];
    }
);





myAppModule.controller('HelloController',function ($scope){
        $scope.greeting={text:"Hello"};
});




myAppModule.controller('InputController',function InputController($scope){

    $scope.funding={startingEstimate:0};

    var computeNeeded=function(){
        $scope.funding.needed=$scope.funding.startingEstimate*10;
    }


//    create the evenet to change basic to <input ng-change="computeNeeded()" ng-model="funding.startingEstimate"/>
    $scope.$watch("funding.startingEstimate",computeNeeded);

    $scope.reset=function(){
        $scope.funding={startingEstimate:0};
    }

    $scope.requestFunding=function(){
//        this condition is check if the method reset is called and skip this method
        if (($scope.funding.needed==0)){
            return;
        }
//       check the value of the funding
        if ($scope.funding.needed<100)
        {
            window.alert("Sorry , please get more customer first.");
        }
        else{
            window.alert("Good! you reach the Limit!");

        }
    }
});





myAppModule.controller('DeathrayMenuController', function DeathrayMenuController($scope) {
        $scope.show = false;
        $scope.isDisabled = false;
        $scope.messageText="this is a code sample";


        $scope.toggleMenu = function() {
            $scope.show = !$scope.show;
        };




        $scope.erase = function() {
            $scope.show =false;
        };



        $scope.stun = function() {
        // stun the target, then disable menu to allow regeneration
            $scope.isDisabled = 'true';
        };
// death ray functions left as exercise to reader
    }
);



myAppModule.controller('HeaderController', function HeaderController($scope) {
        $scope.isError=false;
        $scope.isWarning=false;

        $scope.showError=function(){
            $scope.messageText="this is an fatal error";
            $scope.isError=true;
            $scope.isWarning=false;

        }
        $scope.showWarning=function(){
            $scope.messageText="this is an just a warning";
            $scope.isError=false;
            $scope.isWarning=true;

        }
    }
);


myAppModule.controller('RestaurantTableController', function RestaurantTableController($scope) {
        $scope.directory = [{name:'The Handsome Heifer', cuisine:'BBQ'},
            {name:'green green green', cuisine:'Salads'},
            {name:'House of Fine Fish', cuisine:'Seafood'}];
        $scope.selectRestaurant = function(row) {
            $scope.selectedRow = row;
        };

    }
);



myAppModule.controller('CountController', function CountController($scope) {
        $scope.setCount=function(){
            $scope.count=3;
        }

    }
);


myAppModule.controller('FilterController', function CountController($scope) {
        $scope.filterExample="this is an example for filter with uppercase";
    }
);
/*************************************************/























// Create a module to support our shopping views
var shoppingModule = angular.module('ShoppingModule', []);

// Set up the service factory to create our Items interface to the
// server-side database
shoppingModule.factory('Items', function() {
    var items = {};
    items.query = function() {
    // In real apps, we'd pull this data from the server...
        return [
            {title: 'Paint pots', description: 'Pots full of paint', price: 3.95},
            {title: 'Polka dots', description: 'Dots with polka', price: 2.95},
            {title: 'Pebbles', description: 'Just little rocks', price: 6.95}
        ];
    };
    return items;
});




shoppingModule.controller('ShoppingController',
    function($scope,$http) {

        $http.get('/anjular-development/products/productList.json').success(function(data) {
            $scope.items = data;
            console.log(data);
        });

    });

//
//    config(['$routeProvider', function($routeProvider) {
//        $routeProvider.
//            when('/', {templateUrl: 'partials/helloworld.html',   controller: HelloController}).
//            when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
//            otherwise({redirectTo: '/phones'});
//    }]
//    );




