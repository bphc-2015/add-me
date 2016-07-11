// including the angular module 
var app = angular.module('groupContact',[]);

//controller for angular 
app.controller('MainCtrl',[
    '$scope',
    function($scope){
        
    // array of objects - contacts
    $scope.contacts = [{
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
    }];
        
    //array of objects - groups
    $scope.groups = [{
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
    }];
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