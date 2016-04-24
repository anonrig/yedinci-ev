angular.module('starter.controllers', [])

.controller('FeedDetailController', function($scope, $stateParams) {
  console.log($stateParams.feedId)
})
.controller('FeedController', function($scope) {

  $scope.news = [
    {
      '_id': '1',
      'title': '7 Nisan Konser',
      'description': 'Unutma, 7 Nisan\'da Bronx Pi Sahne\'deyiz!!!'
    },
    {
      '_id': '2',
      'title': '7 Nisan Konser - Kaza Raporu',
      'description': '7 Nisan\' da, kardeş grup Kaza Raporu ile Bronx Pi Sahne\'deyiz. Kavuşalım mı? Sarılırız biraz hem.'
    }
  ];

  localStorage.setItem('feeds', JSON.stringify($scope.news));
})
.controller('SongsController', function($scope) {})
.controller('ConcertsController', function($scope) {})
.controller('AboutController', function($scope) {})



;
