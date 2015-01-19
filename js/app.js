angular.module('myApp', ['firebase'])
    .constant('FIREBASE_URI', 'https://siekiera.firebaseio.com/')
/*.controller('myCtrl',function($scope,$http){
    var url = 'https://gdata.youtube.com/feeds/api/users/orbitalofficial/uploads?alt=json-in-script&callback=JSON_CALLBACK';
    $http.jsonp(url).success(function(data) {
        $scope.results = data.feed.entry;
    });
    
    $scope.finder = function(entry){
        return ~entry.title.$t.toLowerCase().indexOf($scope.filtering.toLowerCase());
    };
});*/
.controller('myCtrl',function($scope, ItemsService){
    
    $scope.items = ItemsService.getItems();
    
    $scope.addItem = function(text) {
        ItemsService.addItem({text: text});
    }
    $scope.updateItem = function (id){
        $scope.isUpdated = true;
        ItemsService.updateItem(id);
    };
     $scope.removeItem = function (id) {
        ItemsService.removeItem(id);
    };
})

.factory('ItemsService', function($firebase, FIREBASE_URI) {
    var ref = new Firebase(FIREBASE_URI+"/items");
    var sync = $firebase(ref);
    var items = sync.$asArray();
    
    var getItems = function() {
        return items;
    };
    
    var addItem = function(item) {
        items.$add(item);
    };
    
    var updateItem = function (id) {
        items.$save(id);
    };
    
    var removeItem = function (id) {
        items.$remove(id);
    };
    
    return {
        getItems: getItems,
        addItem: addItem,
        updateItem: updateItem,
        removeItem: removeItem
    }
})