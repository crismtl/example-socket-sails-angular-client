app.controller('ChatCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    var credentials = $stateParams.credentials;
    console.log('username', credentials.username);
    console.log('chatname', credentials.chatname);

    $scope.chat;

    io.socket.get('http://localhost:1337/Message', function (resData, jwres) {
        console.log('suscribe blueprint');
        console.log('resData', resData);
        console.log('jwres', jwres);
        $scope.chat = resData;
        $scope.$digest();
        console.log('chat', $scope.chat);
    });

    $scope.send = function () {
        console.log('send...');
        $scope.message.username = credentials.username;
        $scope.message.sendTime = new Date();
        io.socket.post('http://localhost:1337/Message', $scope.message, function (resData, jwres) {
            console.log('post: resData', resData);
            console.log('post: jwsres', jwres);
        });
        $scope.message = {};
    }

    io.socket.on('message', function (res) {
        console.log('In socket.on...', res.verb);
        if (res.verb === 'created') {
            $scope.chat.push(res.data);
            $scope.$digest();
        }
    });
}]);