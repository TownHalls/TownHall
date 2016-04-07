var TownHall = angular.module('TownHall', ['firebase', 'ui.router', 'ngMaterial', 'angularInlineEdit', 'dndLists', 'luegg.directives'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  .state('landing', {
    url: '/',
    templateUrl: 'app/landing/landing.html',
    controller: 'landingCtrl',
    resolve: {
      requireNoAuth: function($state, Auth) {
        return Auth.auth.$requireAuth().then(function(auth) {
          $state.go('profile');
        }, function(error) {
          return;
        });
      }
    }
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'app/auth/signup.html',
    controller: 'authCtrl',
    resolve: {
      requireNoAuth: function($state, Auth) {
        return Auth.auth.$requireAuth().then(function(auth) {
          $state.go('profile');
        }, function(error) {
          return;
        });
      }
    }
  })
  .state('signin', {
    url: '/signin',
    templateUrl: 'app/auth/signin.html',
    controller: 'authCtrl',
    resolve: {
      requireNoAuth: function($state, Auth) {
        return Auth.auth.$requireAuth().then(function(auth) {
          $state.go('profile');
        }, function(error) {
          return;
        });
      }
    }
  })

  .state('dashboard', {
    url: '/dashboard',
    params: {
      obj: null
    },
    views: {
      '': {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'dashboardCtrl'
      },
      'board@dashboard': {
        templateUrl: 'app/board/board.html',
        controller: 'boardCtrl'
      },
      'chat@dashboard': {
        templateUrl: 'app/chat/chat.html',
        controller: 'chatCtrl'
      }
    },
    resolve: {
      currentAuth: function($state, Auth) {
        return Auth.auth.$requireAuth().catch(function() {
          $state.go('signin');
        });
      }
    }
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'app/profile/profile.html',
    controller: 'profileCtrl',
    resolve: {
      currentAuth: function($state, Auth) {
        return Auth.auth.$requireAuth().catch(function() {
          $state.go('signin');
        });
      }
    }
  });

  $urlRouterProvider.otherwise('/');
})
.constant('FirebaseUrl', 'https://townhallapp.firebaseio.com/');
