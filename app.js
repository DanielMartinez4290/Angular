(function () {
    var app = angular.module('gemStore', ['store-directives']);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review);

            this.review = {};
        };
    });



    var gems = [
        {
            name: 'Jeep Wrangler Sport',
            description: "A tough, authentic legend born to rule the trails and the open road, the 2015 Wrangler Sport is made to make every day behind the wheel a thrilling adventure.",
            soundsystem: 'Pioneer',
            price: 22595,
            drive: '4WD',
            color: 'Blue, Gray, Black',
            ecoboost: 'No',
            images: [
              "images/bluesport.jpg",
              "images/graysport.jpg",
              "images/blacksport.jpg"
            ],
            reviews: [{
                stars: 5,
                body: "I love this Jeep! So good for travel.",
                author: "joe@example.org"
            }, {
                stars: 1,
                body: "This Jeep is not all it is cracked up to be. Buyer beware.",
                author: "tim@example.org"
            }]
        }, {
            name: 'Jeep Wrangler Rubicon',
            description: "The Jeep Wrangler Rubicon is a much more off road version of the Jeep Wrangler Sport. It can climb bolders as well as get you out of a tight jam. ",
            soundsystem:'JVC',
            price: 27000,
            drive: '4WD',
            color: 'Red, White, Gray',
            ecoboost: 'No',
            images: [
              "images/redrubicon.jpg",
              "images/whiterubicon.jpg",
              "images/grayrubicon.jpg"
            ],
            reviews: [{
                stars: 3,
                body: "I think this Jeep was just OK, could honestly use more shine, IMO.",
                author: "JimmyDean@example.org"
            }, {
                stars: 4,
                body: "Very cool. I liked the offroad capabilites but I wanted a little more of the luxury experience.",
                author: "gemsRock@example.org"
            }]
        }, {
            name: 'Jeep Wrangler Sahara',
            description: "The Jeep Wrangler Sahara is a much more luxurious version of the Jeep. Leather seats and nice interior make it great for family. ",
            soundsystem: 'Infinity',
            price: 33000,
            drive: '4WD',
            color: 'Red, Tan, Black',
            ecoboost: 'No',
            images: [
              "images/redsahara.JPG",
              "images/tansahara.jpg",
              "images/blacksahara.jpg"
            ],
            reviews: [{
                stars: 1,
                body: "This Jeep is WAY too expensive. The Rubicon is just as nice but has better off road capabilities and a better value. ",
                author: "turtleguyy@example.org"
            }, {
                stars: 3,
                body: "Very nice but the price tag is a little much. Definitely great if you can afford it.",
                author: "LouisW407@example.org"
            }, {
                stars: 5,
                body: "Incredible interior. Feels like I'm in a limo. Highly recommend. ",
                author: "nat@example.org"
            }]
        }
    ];
})();