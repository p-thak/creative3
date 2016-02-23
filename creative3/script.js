


var winnerName;
var winnerURL;
var winnerScore;
var loserScore;
var loserName;

var app = angular.module('app', []);
app.directive('avatar',avatarDirective);


app.controller('mainCtrl', mainCtrl);

function mainCtrl ($scope) {
   $scope.winner = 'test';
  
  $scope.users = [{
    name: 'Tom Cruise',
    weight: 148,
    age: 53,
    athletics: 9,
    relationships: 6,
    spiritAnimal: 'dolphin',
    avatarUrl: 'https://pbs.twimg.com/profile_images/3540801931/ea661360f4d36fc06d60e63199939615_400x400.jpeg'
  },{
    name: 'Ghandi',
    weight: 110,
    age: 78,
    athletics: 2,
    relationships: 1,
    spiritAnimal: 'sloth',
    avatarUrl: 'http://www.wisdompills.com/wp-content/uploads/2015/08/ghandi.jpg'
  }, {
    name: 'Taco',
    weight: 160,
    age: 21,
    athletics: 7,
    relationships: 10,
    spiritAnimal: "cobra",
    avatarUrl: 'https://media.giphy.com/media/3KAxGKtEQpTmo/giphy.gif'
  }, {
    name: 'Ron Swanson',
    weight: 200,
    age: 45,
    athletics: 6,
    relationships: 3,
    spiritAnimal: "Ron Swanson",
    avatarUrl: 'http://a.fod4.com/misc/swansonsmile1.gif'
  }, {
    name: 'Grilled Cheese',
    weight: 160,
    age: 23,
    athletics: 9,
    relationships: 6,
    spiritAnimal: 'tiger',
    avatarUrl: 'http://rack.3.mshcdn.com/media/ZgkyMDEzLzA0LzEyLzhjL0dyaWxsZWRDaGVlLjI1ZDJhLmdpZgpwCXRodW1iCTEyMDB4OTYwMD4/4f5b8964/81f/Grilled-Cheese-GIF-8.gif'
  }, {
    name: 'Dr. Mark Clement',
    weight: 180,
    age: 53,
    athletics: 10,
    relationships: 1,
    spiritAnimal: 'dragon',
    avatarUrl: 'http://mclement.us/xClem1.png.pagespeed.ic.HVNBEj_8JG.webp'
  }];
  
  $scope.addNew = function (user) {

    if(isNaN(user.weight)|| isNaN(user.age)||isNaN(user.athletics)||isNaN(user.relationships)|| user.spiritAnimal===""||user.name==="")
    {

    }
    else{

    $scope.users.push({
      name: user.name,
      weight: user.weight,
      age: user.age,
      athletics: user.athletics,
      relationships: user.relationships,
      spiritAnimal: user.spiritAnimal,
      avatarUrl: user.url
    });
    user.name = '';
    user.weight= '';
    user.age= '';
    user.athletics = '';
    user.relationships = '';
    user.spiritAnimal = '';
    user.url = '';

   }
  };

  $scope.open = function () {
    console.log("PLAYER 1: " + $scope.myselect.name + " PLAYER 2: " + $scope.myselect2.name);
        
            $scope.showModal = true;
        
        };

        $scope.ok = function () {
            $scope.showModal = false;
        };

        $scope.cancel = function () {
            $scope.showModal = false;
        };
  
  $scope.battleScore = function (user) {
console.log("I AM HERE!");
    $scope.showModal = true;
    var weight = Number(user.weight);
    var age = Number(user.age);
    var numofRelationships=Number(user.relationships);
    var animalLength=Number(user.spiritAnimal.length);
    var nameLength=Number(user.name.length);
    var totalScore=Number(0);
    console.log(weight);
    console.log(age);
    console.log(numofRelationships);
    console.log(animalLength);
    console.log(nameLength);
    console.log(totalScore);

    totalScore+=weight;

                if(weight>200){

                        totalScore-=(weight-200)*5;
                }

                if(weight<160){

                        totalScore-=(160-weight)*8;
                }

         totalScore+=age;
         console.log(totalScore);

                if(age>40){

                        totalScore-=(age-40)*8;
                }

                if(age<18){

                        totalScore-=(18-age)*5;
                }

          totalScore+=animalLength;
          console.log(totalScore);

           if(animalLength>10){

                        totalScore-=(animalLength-10)*5;
                }

                if(animalLength<5){

                        totalScore-=(5-animalLength)*8;
                }

          totalScore+=nameLength;
          console.log(totalScore);

           if(nameLength>10){

                        totalScore-=(nameLength-10)*5;
                }

                if(nameLength<5){

                        totalScore-=(5-nameLength)*8;
                }
                totalScore+=numofRelationships*5;
                console.log(totalScore);

           if(numofRelationships>6){

                        totalScore-=(numofRelationships-6)*5;
                }

                if(numofRelationships<2){

                        totalScore-=(2-numofRelationships)*20;
                }
                console.log(totalScore);

                if(user.spiritAnimal==="dragon"){
                  totalScore+=1000;
                }
                console.log(user.name);
                totalScore=totalScore/10;
                console.log(totalScore);
                return totalScore;

   };

  
$scope.Battle = function (user1,user2) {
console.log("I AM HERE!");
        if($scope.battleScore(user1)>$scope.battleScore(user2)){
               console.log(user1.name);

                 $scope.winnerName = user1.name;
                 $scope.winnerURL = user1.avatarUrl;
                 $scope.winnerScore=$scope.battleScore(user1);

                  $scope.loserName = user2.name;
                  $scope.loserScore=$scope.battleScore(user2);
                  console.log(winnerURL);
                return user1; 

        }
        else if($scope.battleScore(user1)<$scope.battleScore(user2)){
               console.log(user2.name);

                $scope.winnerName = user2.name;
                 $scope.winnerURL = user2.avatarUrl;
                 $scope.winnerScore=$scope.battleScore(user2);

                  $scope.loserName = user1.name;
                  $scope.loserScore=$scope.battleScore(user1);
                    console.log(winnerURL);
                return user2;
        }

        else
        {
                var number= Math.random() * (10 - 1) + 1;

                if(number % 2 === 0)
          {
            console.log(user2.name);
            $scope.winnerName = user2.name;
             $scope.winnerURL = user2.avatarUrl;
             $scope.winnerScore=$scope.battleScore(user2);

              $scope.loserName = user1.name;
              $scope.loserScore=$scope.battleScore(user1);
            return user2;
          }
      else{
        console.log(user1.name);
         $scope.winnerName = user1.name;
         $scope.winnerURL = user1.avatarUrl;
         $scope.winnerScore=$scope.battleScore(user1);

          $scope.loserName = user2.name;
          $scope.loserScore=$scope.battleScore(user2);
        return user1;
      }

        }


  };

} 


function avatarDirective () {
  return {
    scope: {
      user: '=' /* [1] */
    },
    restrict: 'E', /* [2] */
    template: (
      '<div class="Avatar" ng-click="addOnClick()">' +
        '<img ng-src="{{user.avatarUrl}}" ng-click=alert("here") />' +
        '<h4>{{user.name}}</h4>' +
      '<p>Weight: {{user.weight}}</p>' + '<p>Age: {{user.age}}</p>' +
      '<p>Athletics: {{user.athletics}}</p>' + 
      '<p>Relationships: {{user.relationships}}</p>' +
      '<p>Spirit Animal: {{user.spiritAnimal}}</p>' +
      '</div>'
    ), /* [3] */
    link: link
  };
  
  function addOnClick(scope) {
  $scope.items.push();
}


  function link (scope) { /* [4] */
    if (!scope.user.avatarUrl) {
      scope.user.avatarUrl = 'http://thealmanac.org/assets/img/default_avatar.png';
    }
  }
  function go(user) { /* [4] */
      console.log(user.name + "in directive");
        
  }
  
  
 function test(user1, user2) {
   console.log("USER 1: " + user1.name + " USER 2: " + user2.name);
 }
}
