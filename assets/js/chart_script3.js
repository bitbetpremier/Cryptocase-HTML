/*!
 * Chart_script.js
 * Author       : Bestwebcreator.
 * Template Name: Cryptocash – ICO, Cryptocurrency Website & ICO Landing Page HTML + Dashboard Template
 * Version      : 1.7
*/
var config3 = {
  type: 'doughnut',
  data: {
    datasets: [
    {
     data: [33.75, 16.25, 13, 12, 10, 7.5, 5, 2.5],
      backgroundColor: ['#000091','#9d8a1e','#00d8ff','#06ff00','#c0cc00','#ff9600','#1a8800','#f01077'],
	  borderWidth: 2,
	  labels: [
      "Pinksale",
      "Pancake",
      "Presale",
	    "Private Sale",
	    "Team",
      "CEX Listing",
	    "BitBet Platform",
	    "Marketing 2,5%"
	  ]
    },
    /* Outer doughnut data ends*/
    /* Inner doughnut data starts
    {
      data: [53.97, 6.12, 12.2, 7.12, 10.59],
      backgroundColor: ['#9a46cc','#d3b62f','#d26187','#00e1f4','#4449cc'],
	  borderWidth: 1,
	  labels: [
	  "interconnection Dev",
	  "Marketing & General",
	  "Mobile Ad Platform",
	  "Ad Platform Integration",
	  "Operational Overhead"
    ]
    }
    Inner doughnut data ends*/
    ],

  },
  options: {
    maintainAspectRatio : false,
    responsive: true,
    legend: {
      display: false,
    },
	tooltips: {
		callbacks: {
			label: function(tooltipItem, data) {
				var dataset = data.datasets[tooltipItem.datasetIndex];
				var index = tooltipItem.index;
				return dataset.labels[index] ;
			}
		}
	},
    title: {
      display: false,
      text: 'Chart.js Doughnut Chart'
    },
	 pieceLabel: {
	  render: 'percentage',
	  fontColor: ['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'],
	  fontSize: 12,
	  arc: true,
	  fontStyle: 'normal',
	  position: 'inside',
	  precision: 2
	 },
    animation: {
      animateScale: true,
      animateRotate: true
    },
  }
};

window.onload = function() {
var ctx3 = document.getElementById("token_dist2").getContext("2d");
window.myDoughnut = new Chart(ctx3, config3);
};