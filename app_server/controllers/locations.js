//Get home page
module.exports.homelist = function(req, res) {
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: "Find places to work with wifi near you!"
    },
    locations: [{
      name: "Starcups",
      address: "125 High Street, Reading, RG6 1PS",
      rating: 3,
      facilities: ['Hot Drinks', 'Food', 'Premium wifi'],
      distance: '100m'
    },{
      name: "Cafe Hero",
      address: "125 High Street, Reading, RG6 1PS",
      rating: 4,
      facilities: ["Hot Drinks", "Food", "Premium wifi"],
      distance: '200m'
    },{
      name: "Burger Queen",
      address: "5455 Sheridan rd, Chicago, IL, 60625",
      rating: 2,
      facilities: ["Food", "Premium wifi"],
      distance: '4500km'
    }]
  });
};

//get Location info page
module.exports.locationInfo = function(req, res) {
  res.render('location-info', { title: 'Location info'});
};

//get Add review page
module.exports.addReview = function(req, res){
  res.render('location-review-form', { title: 'Add review'});
};
