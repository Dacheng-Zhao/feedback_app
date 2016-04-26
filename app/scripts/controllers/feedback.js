app.controller("feedbackCtrl", ['$scope', '$http', '$rootScope',
    function($scope, $http, $rootScope) {
        var userId = $rootScope.user;
        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/feedback',
            params: {
                "userId": userId
            }
        }).then(function successCallback(success) {
                $scope.feedbacks = success.data.file;
                
            },
            function errorCallback(error) {});

        
        $scope.textVisible=false;
        $scope.openTextarea=function(username){
        	$scope.textVisible=true;
        	$scope.UID=username;
        	
        }


    }

]);
