angular.module('myApp',[])

    .controller('myCtrl', function($scope, $http){
        console.log("XXX");
        var url = 'https://gdata.youtube.com/feeds/api/users/orbitalofficial/uploads?alt=json-in-script&callback=JSON_CALLBACK';
        
        $http.jsonp(url)
            .success(function(data){
                $scope.fakeData = data.feed.entry;
            });
            
    });