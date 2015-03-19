soccerStats.controller('loginController', function loginController($scope, $rootScope, $timeout, $location, viewService) {
        // User object
        $scope.user = {email: '', password: ''};

        $scope.goToPage = function(path) {
            console.log("loginsuccess");
            viewService.goToPage(path);
        }

        $scope.login = function(user) {
            if (viewService.validateAreaByFormName('loginForm')) {
                Parse.User.logIn(user.email, user.password, {
                    success: function (user) {
                        console.log("loginsuccess");
                        $scope.goToPage('/home');
                    },
                    error: function(user, error) {
                        // Todo: Send Toast notification that the login was unsuccessful based on the error given
                        console.log("failed to login");
                    }
                });
            } else {
                // Todo: Send Toast notification that the form is invalid
            }
        };

    });
