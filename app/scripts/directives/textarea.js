app.directive('textArea', function($rootScope,$http) {
    return {
        template: '<div class="modal fade" style="margin: 100px auto;">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<button type="button" class="close" ng-click="cancel()">&times;</button>' +
            '<h3 class="modal-title text-center">{{ title }}</h3>' +
            '</div>' +
            '<form class="modal-body"  name="mydialog" novalidate>' +
            '<div  class="form-group" ><textArea class="form-control"type="text" placeholder="Feedback goes here" rows="10" ng-Model="feedbackarea" required/></div>' +
             
            '<button type="submit" ng-click="submit()" class="btn btn-success" ng-disabled="mydialog.$invalid" style="margin-right:10px">Submit</button>' +
            '<button  class="btn btn-primary" ng-click="beAnonymous()" ng-disabled="mydialog.$invalid" style="margin-right:10px">Submit Anonymous</button>'+
            '<button class="btn btn-default" ng-click="cancel()">Cancel</button>' +
            '</div>' +
            '</form>' +
            '</div>' +
            '</div>' +
            '</div>',
        restrict: 'E',
        replace: true,
        scope: {
            title: "@title",
            item: "="
        },
        link: function postLink(scope, element, attrs) {
            // scope.title = attrs.title;
            $scope = scope.$parent;

            $scope.$watch(attrs.visible, function(value) {
                if (value == true)
                    $(element).modal('show');
                else
                    $(element).modal('hide');
            });

            $(element).on('shown.bs.modal', function() {
                $scope.$apply(function() {
                    $scope.$parent[attrs.visible] = true;
                });
            });

            $(element).on('hidden.bs.modal', function() {
                $scope.$apply(function() {
                    $scope.$parent[attrs.visible] = false;
                });
            });
            scope.cancel = function() {
                $scope.textVisible = false;
                
            };

            scope.beAnonymous = function() {
                var feedbacks = {
                    userId: $scope.UID,
                    feedback: scope.feedbackarea,
                    author: 'Anonymous',
                    creatTime: new Date()
                };
                 $http({
                    method: 'POST',
                    url: 'http://localhost:3000/api/feedback',
                    data: feedbacks
                }).then(function successCallback(success) {
                       
                    },
                    function errorCallback(error) {
                        console.log('error');
                    });
                scope.cancel();
            };

            scope.submit = function() {
                var feedbacks = {
                    userId: $scope.UID,
                    feedback: scope.feedbackarea,
                    author: $rootScope.user,
                    creatTime: new Date()
                };
                 $http({
                    method: 'POST',
                    url: 'http://localhost:3000/api/feedback',
                    data: feedbacks
                }).then(function successCallback(success) {
                       
                    },
                    function errorCallback(error) {
                        console.log('error');
                    });
                scope.cancel();
            };
        }
    };
});
