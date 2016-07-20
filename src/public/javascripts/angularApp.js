// including the angular module 
var app = angular.module('groupContact',['ui.router']);

//config for angular
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
    
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/login.html',
      controller: 'FirstCtrl'
    });
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });
  $stateProvider
    .state('contacts', {
      url: '/contacts',
      templateUrl: '/contacts.html',
      controller: 'MainCtrl'
    });
  $stateProvider
    .state('groups', {
      url: '/groups',
      templateUrl: '/groups.html',
      controller: 'MainCtrl'
    });
  $stateProvider
    .state('group', {
      url: '/group/{id}',
      templateUrl: '/group.html',
      controller: 'GroupCtrl'
    });
  $urlRouterProvider.otherwise('login');
}]);

//factory for angular
app.factory('contacts', [function(){
    var o = {
        contacts: []
    };
    return o;
}]);
app.factory('groups', [function(){
    var o = {
        groups: []
    };
    return o;
}]);

//controller for angular 
app.controller('MainCtrl',[
    '$scope',
    'contacts',
    'groups',
    function($scope,contacts,groups){
    $scope.contacts = contacts.contacts;
    // array of objects - contacts
    /*$scope.contacts = [{
      name: 'Anisha',
      phone: 1
    }, {
      name: 'Vibha',
      phone: 2
    }, {
      name: 'Vanessa',
      phone: 3
    }, {
      name: 'Veda',
      phone: 4
    }, {
      name: 'Dhruv',
      phone: 5
    }, {
      name: 'Prathik',
      phone: 6
    }, {
      name: 'Sachin',
      phone: 7
    }, {
      name: 'Siddhant',
      phone: 8
    }, {
      name: 'Arjun',
      phone: 9
    }, {
      name: 'Arindam',
      phone: 10
    }, {
      name: 'Shruti',
      phone: 11
    }, {
      name: 'Kavya',
      phone: 12
    }, {
      name: 'Shreya',
      phone: 13
    }, {
      name: 'Uttara',
      phone: 14
    }, {
      name: 'Sneha',
      phone: 15
    }, {
      name: 'Vijitha',
      phone: 16
    }, {
      name: 'Madhan',
      phone: 17
    }, {
      name: 'Adarsh',
      phone: 18
    }, {
      name: 'Tarun',
      phone: 19
    }, {
      name: 'Simran',
      phone: 20
    }, {
      name: 'Rishabh',
      phone: 21
    }, {
      name: 'Pranita',
      phone: 22
    }];*/

    $scope.groups = groups.groups;
    //array of objects - groups
    /*$scope.groups = [{
      name: 'DPS',
      members: []
    }, {
      name: 'Magnolia',
      members: []
    }, {
      name: 'Quartz',
      members: []
    }, {
      name: 'BITS',
      members: []
    }];*/
        //adding a new contact
        $scope.addContact = function(){
                if(!$scope.name || $scope.name === '' || !$scope.phone || $scope.phone === '') { return; }
                  $scope.contacts.push({name: $scope.name, phone: $scope.phone});
                  $scope.name=''; $scope.phone='';
                 };
        //adding a new group
        $scope.newGroup = function(){
                 if(!$scope.gname || $scope.gname === '' ) {return;}
                  $scope.groups.push({name: $scope.gname, members: []});
                  $scope.gname='';
                 };
        //adding a member to a group 
        $scope.addGroup = function (contact, groupname) {
            contact.name = contact.name;
            contact.phone = contact.phone;
            $scope.groups.forEach(function (elem, index) {
                if (elem.name == groupname) {
                    //checking for duplicates
                    var x = 0;
                    elem.members.some(function (mem, index){
                        if(mem.phone == contact.phone)
                            { x=1;}
                    });
                    //pushing data 
                    if(x===0){
                    elem.members.push({
                        name: contact.name,
                        phone: contact.phone
                    });
                   }
                }
            });
        };
}]);
app.controller('FirstCtrl');

app.controller('GroupCtrl', [
'$scope',
'$stateParams',
'groups',
function($scope, $stateParams, groups){
    $scope.group = groups.groups[$stateParams.id];
}]);