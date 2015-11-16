 

 function Homes(name,pic,picWidth,address,status,askPrice,estVal,deal,mortage){
    this.name = name;
    this.pic = pic;
    this.picWidth = picWidth;
    this.address = address;
    this.status= status;
    this.askPrice = askPrice;
    this.estVal = estVal;
    this.deal = deal;
    this.mortage = mortage;
};        
        

homes = [];

    homes.push(new Homes ('The Villa','http://photos3.zillowstatic.com/p_h/IShf3c5r7s3xw60000000000.jpg','"300"','4747 Northside Dr, Atlanta, GA 30327','For Sale','$2,999,000','Zestimate®: $4,031,664','A good deal!! (25% off!)','Estimated Mortgage: $11,179/mo'));
    homes.push(new Homes ('The Pool House','http://photos2.zillowstatic.com/p_h/IS1n6j1pnfqv2b1000000000.jpg','"300"','1101 Garmon Dr NW,Atlanta, GA 30327','For Sale','$2,399,000','Zestimate®: $2,684,66','Average Deal','Estimated Mortgage: $8,943/mo'));
    homes.push(new Homes ('The Awesome','http://ak.t1.tiles.virtualearth.net/tiles/cmd/ObliqueHybrid?a=03200231131-48125-20-101&g=4510','"200">','914 Davis Dr, Atlanta, GA 30327','NOT for Sale','-','Zestimate®: $2,134',' -','Estimated Mortgage: -'));
    homes.push(new Homes ('Versailles','http://photos3.zillowstatic.com/p_h/ISx35uo0fixyhb0000000000.jpg','"200"','5115 Northside Dr,Atlanta, GA 30327','For Sale','$8,000,000','Zestimate®: $12,360,014','A crazy deal!! (30% off!)','Estimated Mortgage: $29,821/mo'));
    


 
angular.module('myApp', []).controller('myController', houseListCtrl)

    function houseListCtrl($scope){  

        $scope.homes = []; 
         var index = 0;

         $scope.addHouse = function(){
            $scope.homes.push(homes[index++])
         };

        $scope.enableAdd = function(){
                    return index < homes.length;
        };

         $scope.removeHouse = function(){
            $scope.homes = [];
            index = 0;
         };

        
    }; 






