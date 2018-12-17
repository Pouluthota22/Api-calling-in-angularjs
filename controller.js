app.controller("londonCtrl", function ($scope) {
    $scope.msg = "I love London";
    $scope.roomscount=1;
    $scope.adultcount=1;
    $scope.childcount=0;
    
$scope.roomscount1=false;
$scope.roomscount5=false;
$scope.adultcount1=false;
$scope.adultcount5=false;
$scope.childcount1=false;
$scope.childcount5=false;
if($scope.roomscount==5){
    $scope.roomscount5=true;
}
if($scope.roomscount==1){
    $scope.roomscount1=true;
    $scope.childcount=0;
    $scope.adultcount=1;
}

if($scope.adultcount==1){
    $scope.roomscount=1;
    $scope.adultcount1=true;
    
}

if($scope.adultcount>1){
    $scope.adultcount1=false;
}
if($scope.childcount==0){
    $scope.childcount1=true;
}
if($scope.childcount>0){
    $scope.childcount1=false;
}

    $scope.roomsPlus=function(){

        $scope.roomscount++;
        $scope.adultcount++;
        if($scope.roomscount==5){
            $scope.roomscount5=true;
            $scope.roomscount1=false;
        }
        $scope.roomscount1=false;
        if($scope.adultcount>1){
            $scope.adultcount1=false;

        }
        if($scope.adultcount>=20){
            $scope.adultcount5=true;
        }
        if(($scope.adultcount + $scope.childcount)>=20){
            $scope.adultcount5=true;
            $scope.childcount5=true;
        }else{
            $scope.adultcount5=false;
            $scope.childcount5=false;
        }
    }
    $scope.adultPlus=function(){
        $scope.adultcount++;
        if($scope.adultcount>$scope.roomscount){
            $scope.roomscount++;
        }
        if($scope.roomscount>=5){
$scope.roomscount=5;
$scope.roomscount5=true;
$scope.roomscount1=false;
        }
        if($scope.adultcount >=20){
            alert();
            $scope.adultcount5=true;
            $scope.childcount5=true;
        
        }
       if(($scope.adultcount + $scope.childcount)>=20){
           alert();
           $scope.adultcount5=true;
           $scope.childcount5=true;
       }
       if($scope.adultcount>1){
           $scope.adultcount1=false;
       }
    }

    $scope.childPlus=function(){
        $scope.childcount++;
        if($scope.childcount>0){
            $scope.childcount1=false;
        }
        if($scope.adultcount >=20){
            alert();
            $scope.adultcount5=true;
            $scope.childcount5=true;
        
        }
       if(($scope.adultcount + $scope.childcount)>=20){
           alert();
           $scope.adultcount5=true;
           $scope.childcount5=true;
       }
    }
    
    $scope.roomsMinus=function(){

        $scope.roomscount--;
        $scope.adultcount--;
        $scope.roomscount5=false;
        if($scope.adultcount+$scope.childcount){

        }
        if($scope.roomscount==1){
            $scope.roomscount1=true;
            $scope.roomscount5=false;
        }
        if($scope.childcount<=3){
        $scope.childcount=0;
        }
        if($scope.childcount>3){
        $scope.childcount=$scope.childcount-3;
        }
        if($scope.adultcount>1){
            
            $scope.adultcount1=false;
        }
        if($scope.adultcount==1){
            $scope.adultcount1=true;
        }

    }
    $scope.adultMinus=function(){
        $scope.childcount5=false;
        // if($scope.childcount+$scope.adultcount>=4*$scope.roomscount){

        // }
        
        // else 
        if($scope.roomscount==$scope.adultcount){
            $scope.adultcount--;
            $scope.roomscount--;
        }
       else if(3*$scope.roomscount <= $scope.adultcount){
            $scope.adultcount--;
        }else{
            $scope.adultcount--;
        }
    $scope.adultcount5=false;
        if($scope.adultcount==1){
            $scope.adultcount1=true;
        }
        if($scope.roomscount==1){
            $scope.roomscount1=true;
            $scope.roomscount5=false;
        }
        if($scope.adultcount>1){
            $scope.adultcount1=false;
        }
    }
    $scope.childMinus=function(){
if($scope.childcount>0){
    $scope.childcount--;
}

if($scope.childcount==0){
    $scope.childcount1=true;
}
    }


});