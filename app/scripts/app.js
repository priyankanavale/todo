angular.module("todoApp",{})
    .controller("MainCtrl",function($scope){
        $scope.todos=[
        ];

        $scope.add=function(){
            $scope.todos.push($scope.newTodo);
            $scope.newTodo={};
        }

        $scope.delete=function(item){
            var index =$scope.todos.indexOf(item);
            $scope.todos.splice(index,1);
        }


    });