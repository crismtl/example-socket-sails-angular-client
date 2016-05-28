app.controller('UserCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.credentials = {};
    $scope.goChat = function () {
        $state.go('chat', {
            credentials: $scope.credentials
        });
    }
}]);