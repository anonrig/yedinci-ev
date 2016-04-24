angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.feed', {
    url: '/feed',
    views: {
      'tab-feed': {
        templateUrl: 'templates/feed.html',
        controller: 'FeedController'
      }
    }
  })
  .state('tab.about', {
      url: '/about',
      views: {
        'tab-about': {
          templateUrl: 'templates/about.html',
          controller: 'AboutController'
        }
      }
    })
  .state('tab.concerts', {
      url: '/concerts',
      views: {
        'tab-concerts': {
          templateUrl: 'templates/concerts.html',
          controller: 'ConcertsController'
        }
      }
    })

  .state('tab.songs', {
      url: '/songs',
      views: {
        'tab-songs': {
          templateUrl: 'templates/songs.html',
          controller: 'SongsController'
        }
      }
    })
  .state('tab.song-detail', {
    url: '/song/:id',
    views: {
      'tab-songs': {
        templateUrl: 'templates/song-detail.html',
        controller: 'SongDetailController'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/feed');

});
