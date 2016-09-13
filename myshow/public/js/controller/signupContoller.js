module.exports = function($scope, $http,$rootScope,$location){
/*signup insertion control code*/
  $scope.signupinsert = function(){
      $http.post('/signup/signupinsert', $scope.post).success(function (response) {
      });

console.log(response);
    };


/* star insertion code into database*/
$scope.insertRatingValue=function(){
$scope.ratingMod.moviename=$rootScope.Moviename;
$scope.ratingMod.noofuser=1;
  $http.post('/signup/ratinginsert', $scope.ratingMod).success(function (response) {
//  console.log($scope.ratingMod);

  });

  $http.get('/signup/ratingDisplay').success(function (response) {
  $scope.ratingData=response;
//console.log(reponse);


  });




  /*$http.put('/signup/ratingUpdate/' + $scope.ratingMod.moviename+'/'+val).success(function (response) {
       console.log(response);
     });*/
};



};
