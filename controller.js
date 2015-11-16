angular.module('myApp', []).controller('myController', function($scope){
 

 function Home(name,pic,picWidth,address,status,askPrice,estVal,deal,mortage){
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
        

$scope.homes = [];

    $scope.homes.push(new Home ('The Villa','http://photos3.zillowstatic.com/p_h/IShf3c5r7s3xw60000000000.jpg','"300"','4747 Northside Dr, Atlanta, GA 30327','For Sale','$2,999,000','Zestimate®: $4,031,664','A good deal!! (25% off!)','Estimated Mortgage: $11,179/mo'));
    $scope.homes.push(new Home ('The Pool House','http://photos2.zillowstatic.com/p_h/IS1n6j1pnfqv2b1000000000.jpg','"300"','1101 Garmon Dr NW,Atlanta, GA 30327','For Sale','$2,399,000','Zestimate®: $2,684,66','Average Deal','Estimated Mortgage: $8,943/mo'));
    $scope.homes.push(new Home ('The Awesome','http://ak.t1.tiles.virtualearth.net/tiles/cmd/ObliqueHybrid?a=03200231131-48125-20-101&g=4510','"200">','914 Davis Dr, Atlanta, GA 30327','NOT for Sale','-','Zestimate®: $2,134',' -','Estimated Mortgage: -'));
    $scope.homes.push(new Home ('Versailles','http://photos3.zillowstatic.com/p_h/ISx35uo0fixyhb0000000000.jpg','"200"','5115 Northside Dr,Atlanta, GA 30327','For Sale','$8,000,000','Zestimate®: $12,360,014','A crazy deal!! (30% off!)','Estimated Mortgage: $29,821/mo'));
    
    
 	console.log($scope.homes);
});