'use strict';

/* Controllers */


function HelloController($scope){
    $scope.greeting={text:"Hello"};
}




function CartController($scope) {
    $scope.items = [
        {title: 'pants', quantity:1, price: 50},
        {title: 'shorts', quantity:1, price: 10},
        {title: 'shoes', quantity: 1, price: 100}
    ];


    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
    }

}



//function TextController($scope){
//    $scope.someText="i am a text controller unit";
//}