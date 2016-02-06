(function(){
  angular
    .module('loc8rApp')
    .controller('aboutCtrl', aboutCtrl);

  function aboutCtrl(){
    var vm = this;

    vm.pageHeader = {
      title: 'About Loc8r',
    };
    vm.main = {
      content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nRoof party banjo pickled polaroid. Sriracha meditation ennui street art typewriter, kickstarter vice man bun. Literally master cleanse swag, blog occupy dreamcatcher locavore XOXO tofu ramps. Banjo waistcoat letterpress chartreuse +1 kinfolk meditation. \n\nBitters squid tote bag, lo-fi tacos swag fingerstache helvetica stumptown microdosing meditation. Kombucha aesthetic tote bag chartreuse flexitarian chia, put a bird on it echo park synth sartorial fingerstache sustainable butcher art party. Slow-carb selvage chartreuse, distillery neutra letterpress man braid williamsburg master cleanse.'
    };
  }
})();
