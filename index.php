﻿<!DOCTYPE html>
<html ng-app="gemStore">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <script type="text/javascript" src="app.js"></script>
    <script type="text/javascript" src="products.js"></script>
</head>

<body ng-controller="StoreController as store">
    <!--  Store Header  -->
    <header>
        <h1 class="text-center">Danny's Jeeps</h1>
        <h2 class="text-center">– Sports, Rubicons, Saharas –</h2>
    </header>

    <!--  Products Container  -->
    <div class="list-group">
        <!--  Product Container  -->
        <div class="list-group-item" ng-repeat="product in store.products">
            <h3>{{product.name}} <em class="pull-right">{{product.price | currency}}</em></h3>

            <!-- Image Gallery  -->
            <product-gallery></product-gallery>

            <!-- Product Tabs  -->
            <product-tabs></product-tabs>
        </div>

    </div>
</body>

</html>  