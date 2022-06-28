jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });



  // JavaScript Chart
  var doughnutData = [{
      value: 60,
      color: "#1abc9c"
    },
    {
      value: 40,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);



  // Bootstrap Chart
  var doughnutData = [{
    value: 40,
    color: "#1abc9c"
  },
  {
    value: 60,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);



  // Css Chart
  var doughnutData = [{
    value: 65,
    color: "#1abc9c"
  },
  {
    value: 35,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("css").getContext("2d")).Doughnut(doughnutData);



  // HTML Chart
  var doughnutData = [{
    value: 75,
    color: "#1abc9c"
  },
  {
    value: 25,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

 

  // Python Chart
  var doughnutData = [{
    value: 65,
    color: "#1abc9c"
  },
  {
    value: 35,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("python").getContext("2d")).Doughnut(doughnutData);

  // Java Chart
  var doughnutData = [{
    value: 65,
    color: "#1abc9c"
  },
  {
    value: 35,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("java").getContext("2d")).Doughnut(doughnutData);

  // PHP Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("php").getContext("2d")).Doughnut(doughnutData);

  // REACT Chart
  var doughnutData = [{
    value: 55,
    color: "#1abc9c"
  },
  {
    value: 45,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("react").getContext("2d")).Doughnut(doughnutData);

  // Spring Chart
  var doughnutData = [{
    value: 65,
    color: "#1abc9c"
  },
  {
    value: 35,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("spring").getContext("2d")).Doughnut(doughnutData);

  // django-flask Chart
  var doughnutData = [{
    value: 55,
    color: "#1abc9c"
  },
  {
    value: 45,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("flask").getContext("2d")).Doughnut(doughnutData);

  // MySQL Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("mysql").getContext("2d")).Doughnut(doughnutData);

  // PostgreSQL Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("postgresql").getContext("2d")).Doughnut(doughnutData);

  // MongoDB Chart
  var doughnutData = [{
    value: 60,
    color: "#1abc9c"
  },
  {
    value: 40,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("mongo").getContext("2d")).Doughnut(doughnutData);






});







