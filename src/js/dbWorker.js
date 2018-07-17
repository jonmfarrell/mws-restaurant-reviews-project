importScripts('./dbhelper.js');

self.addEventListener('message', function(e) {
    switch(e.data.action){
        case 'fetchNeighborhoods':
            // Fetch all restaurants
            DBHelper.fetchRestaurants((error, restaurants) => {
                if (error) {
                    self.postMessage('error');
                } else {
                    // Get all neighborhoods from all restaurants
                    const neighborhoods = restaurants.map((v, i) => restaurants[i].neighborhood)
                    // Remove duplicates from neighborhoods
                    const uniqueNeighborhoods = neighborhoods.filter((v, i) => neighborhoods.indexOf(v) == i)
                    self.postMessage({'neighborhoods':uniqueNeighborhoods});
                }
            });
            break;
        case 'fetchCuisines':
              // Fetch all restaurants
            DBHelper.fetchRestaurants((error, restaurants) => {

                if (error) {
                    self.postMessage('error');
                } else {
                    // Get all cuisines from all restaurants
                    const cuisines = restaurants.map((v, i) => restaurants[i].cuisine_type)
                    // Remove duplicates from cuisines
                    const uniqueCuisines = cuisines.filter((v, i) => cuisines.indexOf(v) == i)
                    self.postMessage({'cuisines':uniqueCuisines});
                }
            });
            break;
        case 'fetchRestaurantByCuisineAndNeighborhood':

            // Fetch all restaurants
            DBHelper.fetchRestaurants((error, restaurants) => {
                if (error) {
                    self.postMessage('error');
                } else {
                    console.log('e.data',e.data.neighborhood)
                    let results = restaurants
                    console.log('results',results)
                    if (e.data.cuisine != 'all') { // filter by cuisine
                        results = results.filter(r => r.cuisine_type == e.data.cuisine);
                    }
                    if (e.data.neighborhood != 'all') { // filter by neighborhood
                        results = results.filter(r => r.neighborhood == e.data.neighborhood);
                    }
                    self.postMessage({'results':results});
                }
            });

            break; 
        case 'createRestaurantHTML':
            const restaurant = e.data.restaurant;
            const webpsrcset = DBHelper.imageWebPSrcSetForRestaurant(restaurant);
            const jpgsrcset = DBHelper.imageJpgSrcSetForRestaurant(restaurant);
            const imagetext = DBHelper.imageTextForRestaurant(restaurant);
            const imageurl = DBHelper.imageUrlForRestaurant(restaurant);
            const urltext = DBHelper.urlTextForRestaurant(restaurant)
            const url = DBHelper.urlForRestaurant(restaurant)
            const fetchResults = fetch(`http://localhost:1337/restaurants/${e.data.restaurant.id}`)
                .then((res)=>{
                    return res.json();
                })
                .then((results)=>{
                    return results
                })
            const fetchReviews = fetch(`http://localhost:1337/reviews/?restaurant_id=${e.data.restaurant.id}`)
                .then((res)=>{
                    return res.json();
                })
                .then((results)=>{
                    let total = 0;
                    let sum = 0;
                    results.map((item)=>{
                        total += 1;
                        sum += parseInt(item.rating)
                    })
                    return Math.round(sum/total);
                })
            Promise.all([fetchResults,fetchReviews,webpsrcset, jpgsrcset, imagetext,imageurl,urltext,url]).then((values)=>{
                self.postMessage({'restaurant':values[0], 'reviews': values[1],webpsrcset, jpgsrcset, imagetext,imageurl,urltext,url});
            })
            break;
        case 'fetchRestaurantById':
            const restaurantDetails = fetch(`http://localhost:1337/restaurants/${e.data.id}`)
                .then((res)=>{
                    return res.json();
                }).then((res)=>{
                    return res;
                });
            const restaurantReviews = fetch(`http://localhost:1337/reviews/?restaurant_id=${e.data.id}`)
                .then((res)=>{
                    return res.json();
                })
                .then((results)=>{
                    let total = 0;
                    let sum = 0;
                    results.map((item)=>{
                        total += 1;
                        sum += parseInt(item.rating)
                    })
                    return Math.round(sum/total);
                })
            Promise.all([restaurantDetails,restaurantReviews]).then((values)=>{
                console.log('values',values)
                self.postMessage({'restaurant':values[0], 'reviews': values[1]});
            });
            break;
        case 'fillReviewsHTML':
            // make ajax request to get reviews for a given restaurant
            fetch(`http://localhost:1337/reviews/?restaurant_id=${e.data.id}`)
                .then((res)=>{
                    return res.json();
                })
                .then((results)=>{
                    self.postMessage({reviews:results});
                });
        default:
          console.log('none of the above')
    }



    
}, false);