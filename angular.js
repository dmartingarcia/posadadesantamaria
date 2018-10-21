var app = angular.module("rgMenu",[]);

app.controller("MenuController",function($scope, $http) {

    $scope.items = [
    {"itemId":1, "title":"Google", "description":"Google Search Engine", 
     "sublinks":[
            {"title":"Google", "href":"http://google.com/", "target":"_blank"},
            {"title":"Play", "href":"http://play.google.com/", "target":"_blank"},
            {"title":"Plus", "href":"http://plus.google.com/", "target":"_blank" }
    ]},
    {"itemId":2, "title":"Yahoo", "description":"Yahoo Search Engine",
        "sublinks":[ 
            {"title":"Yahoo", "href":"http://yahoo.com/", "target":"_blank" },
            {"title":"Sports", "href":"http://sports.yahoo.com/", "target":"_blank" },
            {"title":"News", "href":"http://news.yahoo.com/", "target":"_blank" }
        ]},
    {"itemId":3, "title":"Bing", "description":"Bing Search Engine", 
         "sublinks":[
            {"title":"Bing", "href":"http://www.bing.com", "target":"_blank" },
            {"title":"Entertainment", "href":"http://www.bing.com/entertainment", "target":"_blank" },
            {"title":"Videos", "href":"http://www.bing.com/videos/browse?FORM=L8SP7", "target":"_blank" }
         ]},
    {"itemId":4, "title":"Dogpile", "description":"Dogpile Search Engine",
         "sublinks":[
             {"title":"Dogpile", "href":"http://www.dogpile.com", "target":"_blank"},
             {"title":"FAQ", "href":"http://www.dogpile.com/info.dogpl.t6.1/support/Faqs", "target":"_blank"},
             {"title":"Contact", "href":"http://m.dogpile.com/support/contactus", "target":"_blank" }
        ]}
    ];
    
    // Defaults
    $scope.sublinks = null;
    $scope.activeItem = null;

    // Default submenu left padding to 0
    $scope.subLeft = {'padding-left':'0px'};

    /*
     * Set active item and submenu links
     */
    $scope.showSubMenu = function(item,pos) {
        // Move submenu based on position of parent
        $scope.subLeft = {'padding-left':(80 * pos)+'px'};
        // Set activeItem and sublinks to the currectly
        // selected item.
        $scope.activeItem = item;
        $scope.sublinks = item.sublinks;
    };
    
});