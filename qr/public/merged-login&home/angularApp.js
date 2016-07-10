var app = angular.module('groupContact',[]);

app.controller('MainCtrl',[
    '$scope',
    function($scope){
        $scope.contacts = [
            {name: 'Anisha', phone: 1},
            {name: 'Vibha',phone: 2},
            {name: 'Vanessa', phone: 3},
            {name: 'Veda', phone: 4},
            {name: 'Dhruv', phone: 5},
            {name: 'Prathik', phone: 6},
            {name: 'Sachin', phone: 7},
            {name: 'Siddhant', phone: 8},
            {name: 'Arjun', phone: 9},
            {name: 'Arindam', phone: 10},
            {name: 'Shruti', phone: 11},
            {name: 'Kavya', phone: 12},
            {name: 'Shreya', phone: 13},
            {name: 'Uttara', phone: 14},
            {name: 'Sneha', phone: 15},
            {name: 'Vijitha', phone: 16},
            {name: 'Madhan', phone: 17},
            {name: 'Adarsh', phone: 18},
            {name: 'Tarun', phone: 19},
            {name: 'Simran', phone: 20},
            {name: 'Rishabh', phone: 21},
            {name: 'Pranita', phone: 22}
        ];
        $scope.addContact = function(){
                if(!$scope.name || $scope.name === '' || !$scope.phone || $scope.phone === '') { return; }
                  $scope.contacts.push({name: $scope.name, phone: $scope.phone});
                  $scope.name=''; $scope.phone='';
                 };
        /*$scope.addGroup = function(contact){
            //if(!$scope.name || $scope.name === '' || !$scope.phone || $scope.phone === '') { return; }
            $scope.groups.members.push(
            {name: $scope.contact, phone: 0}
            );
        };*/
}]);