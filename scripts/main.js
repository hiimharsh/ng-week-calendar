var app = angular.module('WeelCalendarApp', []);

app.controller('WeekCalendarController', function ($scope, $http) {
  $scope.name = 'Harsh';

  $scope.currentDate = moment();
  $scope.weekStartDate = $scope.currentDate.clone().startOf('week').format('DD MMM YYYY');
  $scope.weekEndDate = $scope.currentDate.clone().endOf('week').format('DD MMM YYYY');

  $scope.weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  $scope.timeArr = [
    ['08:00am', ['08:00', '09:00'], [[], [], [], [], [], [], []]],
    ['09:00am', ['09:00', '10:00'], [[], [], [], [], [], [], []]],
    ['10:00am', ['10:00', '11:00'], [[], [], [], [], [], [], []]],
    ['11:00am', ['11:00', '12:00'], [[], [], [], [], [], [], []]],
    ['12:00pm', ['12:00', '13:00'], [[], [], [], [], [], [], []]],
    ['01:00pm', ['13:00', '14:00'], [[], [], [], [], [], [], []]],
    ['02:00pm', ['14:00', '15:00'], [[], [], [], [], [], [], []]],
    ['03:00pm', ['15:00', '16:00'], [[], [], [], [], [], [], []]],
    ['04:00pm', ['16:00', '17:00'], [[], [], [], [], [], [], []]],
    ['05:00pm', ['17:00', '18:00'], [[], [], [], [], [], [], []]],
    ['06:00pm', ['18:00', '19:00'], [[], [], [], [], [], [], []]],
    ['07:00pm', ['19:00', '20:00'], [[], [], [], [], [], [], []]],
    ['08:00pm', ['20:00', '21:00'], [[], [], [], [], [], [], []]],
    ['09:00pm', ['21:00', '22:00'], [[], [], [], [], [], [], []]],
    ['10:00pm', []],
  ];

  $scope.selectBox = function ($event, index, timeIndex) {
    if ($scope.timeArr[timeIndex][2][index].length > 0) {
      $scope.timeArr[timeIndex][2][index] = [];
    } else {
      $scope.timeArr[timeIndex][2][index].push('green');
    }
  }

});

app.run();