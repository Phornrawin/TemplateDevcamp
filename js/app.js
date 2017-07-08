var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngScrollSpy']);
    app.config(function ($routeProvider, $sceProvider, scrollspyConfigProvider) {
        $sceProvider.enabled(false);
        $routeProvider
            .when('/', {
                templateUrl: 'view/home.html'
            })
            // .when('/page1', {
            //     templateUrl: 'view/page1.html'
            // })
            .when('/page2', {
                templateUrl: 'view/page2.html'
            })
            .when('/page3', {
                templateUrl: 'view/page3.html'
            })
            .otherwise({
                templateUrl: 'view/home.html'
            });
        scrollspyConfigProvider.config = {
            offset: 250, //offset added to element

            // //include your fav throttle function
            // throttle: _.throttle,

            // or define your own
            throttle: function(e,t,n){var r,i;return function(){var s=n||this;var o=+(new Date),u=arguments;if(r&&o<r+t){clearTimeout(i);i=setTimeout(function(){r=o;e.apply(s,u)},t)}else{r=o;e.apply(s,u)}}},

            delay: 100 //the delay between scroll events
        };
    });

    app.service('animalList', function () {
        var animalsType = [
            {'btn': 'Bear', 'typeFilter': 'bear'},
            {'btn': 'Seal', 'typeFilter': 'seal'},
            {'btn': 'Fish', 'typeFilter': 'fish'}
        ];
        this.returnBtnAnimal = function () {
            return animalsType;
        };


    });
    app.controller('loopCtrl', function ($scope, animalList, $http, $sce, $sceDelegate) {
        $scope.animals = [];
        $scope.fetch = function () {
            var url = "php/animals-list.php";

            $sce.trustAsResourceUrl(url);
            $sceDelegate.trustAs($sce.RESOURCE_URL, url);

            $http.get(url)
                .then(function (data) {
                    console.log("success");
                    console.dir(data.data);
                    var animal = data.data;
                    for(i = 0; i < animal.length; i++){
                        $scope.animals.push({
                            'type': animal[i].type,
                            'name': animal[i].name,
                            'hobby': animal[i].hobby,
                            'score': animal[i].score,
                            'img': animal[i].img,
                            'modal': animal[i].modal
                        });
                    }

                }, function (data) {
                    console.log("failure");
                    console.error(data);
                });
        }

        console.log("news controller");
        $scope.fetch();
        $scope.btnList = animalList.returnBtnAnimal();

    });
    app.controller("MyCtrl", function($scope, $uibModal) {
        $scope.showModal = function(local){
            var modalInstance = $uibModal.open({
                templateUrl: local,
                controller: 'ModalDialogController'
            });
            modalInstance.result.then(
                function () {
                    alert("OK");
                },
                function () {
                    alert("Cancel");
                }
            );
        }
    });
    app.controller("ModalDialogController", function ($scope, $uibModalInstance) {
        $scope.ok = function () {
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });
    app.service('newsList', function ($http, $sce, $sceDelegate) {
        var list = [];
        this.pushNews = function (news) {
            list.push(news);
        };
        this.returnList = function () {
            return list;
        };

    });
    app.controller('newsCtrl', function ($scope, newsList, $http, $sce, $sceDelegate) {
        $scope.newslist = [];
        $scope.fetch = function () {
            console.log("hello it's me")

            var url = "php/news-list.php";

            $sce.trustAsResourceUrl(url);
            $sceDelegate.trustAs($sce.RESOURCE_URL, url);

            $http.get(url)
                .then(function (data) {
                    console.log("success");
                    console.dir(data.data);
                    var newses = data.data;
                    for(i = 0; i < newses.length; i++){
                        $scope.newslist.push({
                            'date': newses[i].date,
                            'news': newses[i].name,
                            'link': newses[i].link
                        });
                    }

                }, function (data) {
                    console.log("failure");
                    console.error(data);
                });
        }

        console.log("news controller");
        $scope.fetch();
    });


