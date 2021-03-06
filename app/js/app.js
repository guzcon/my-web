var app = angular.module('myApp', ['ui.router','ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state('intro',{
        url: '',
        templateUrl: 'views/intro.html'
      })

      //HOME STATES AND VIEWS======================

      .state('home',{
        url: '/home',
        templateUrl: 'views/home.html'
      })

      .state('home.design',{
        url: '/design',
        templateUrl: 'views/partials/home-design.html',
        controller: function($scope){
          $scope.designWorks = [
            {
              name: 'Titi\'s Hair Art',
              tool: 'Photoshop',
              bigImg: 'img/titi-work.jpg'
            },
            {
              name: 'Artworks',
              tool: 'Illustrator',
              bigImg: ''
            }

          ]
        }

      })

      .state('home.coding',{
        url: '/coding',
        templateUrl: 'views/partials/home-coding.html',
        controller: function($scope){
          $scope.codingWorks = [
            {
              name: 'Fincoda',
              tool: 'HTML, CSS',
              bigImg: ''
            },
            {
              name: 'Metsatie',
              tool: 'HTML, CSS, JS',
              bigImg: ''
            },
            {
              name: 'Life before Death',
              tool: 'HTML, CSS',
              bigImg: ''
            }
          ]
        }
      })



      //CONTACT=======================================
      .state('contact',{
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: function($scope){
          $scope.contactInfo = {
            firstName: 'Anh',
            lastName: 'Nguyen',
            phone: '+358 401 877668',
            email: 'tramanh.nguyenth@gmail.com',
            skype: 'conguzcon'
          };
        }
      })
});
