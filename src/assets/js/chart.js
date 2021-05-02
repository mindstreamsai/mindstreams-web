(function () {
	if ($('#userChart').length) {
		var options = {
			chart: {
				height: 60,
				type: 'area',
				toolbar: {
					show: false,
				},
				sparkline: {
					enabled: true,
				},
				grid: {
					show: false,
					padding: {
						left: 0,
						right: 0,
					},
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'smooth',
				width: 2,
			},
			fill: {
				type: 'gradient',
				gradient: {
					shadeIntensity: 0.9,
					opacityFrom: 0.7,
					opacityTo: 0.5,
					stops: [0, 80, 100],
				},
			},
			series: [
				{
					name: 'User',
					data: [28, 40, 36, 52, 38, 60, 55],
				},
			],
			xaxis: {
				labels: {
					show: false,
				},
				axisBorder: {
					show: false,
				},
			},
			yaxis: [
				{
					y: 0,
					offsetX: 0,
					offsetY: 0,
					padding: {
						left: 0,
						right: 0,
					},
				},
			],
			tooltip: {
				x: {
					show: false,
				},
			},
		};

		var chart = new ApexCharts(document.querySelector('#userChart'), options);
		chart.render();
	}

	if ($('#userChartExample').length) {
		var options = {
			chart: {
				height: 60,
				type: 'area',
				toolbar: {
					show: false,
				},
				sparkline: {
					enabled: true,
				},
				grid: {
					show: false,
					padding: {
						left: 0,
						right: 0,
					},
				},
			},
			colors: ['#e53f3c'],
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'smooth',
				width: 2,
			},
			fill: {
				type: 'gradient',
				gradient: {
					shadeIntensity: 0.9,
					opacityFrom: 0.7,
					opacityTo: 0.5,
					stops: [0, 80, 100],
				},
			},
			series: [
				{
					name: 'User',
					data: [28, 40, 36, 52, 38, 60, 55],
				},
			],
			xaxis: {
				labels: {
					show: false,
				},
				axisBorder: {
					show: false,
				},
			},
			yaxis: [
				{
					y: 0,
					offsetX: 0,
					offsetY: 0,
					padding: {
						left: 0,
						right: 0,
					},
				},
			],
			tooltip: {
				x: {
					show: false,
				},
			},
		};

		var chart = new ApexCharts(
			document.querySelector('#userChartExample'),
			options
		);
		chart.render();
	}

	// visitor chart

	if ($('#userChart').length) {
		var options = {
			chart: {
				height: 60,
				type: 'area',
				toolbar: {
					show: false,
				},
				sparkline: {
					enabled: true,
				},
				grid: {
					show: false,
					padding: {
						left: 0,
						right: 0,
					},
				},
			},
			colors: ['#19cb98'],
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'smooth',
				width: 2,
			},
			fill: {
				colors: '#19cb98',
				type: 'gradient',
				gradient: {
					type: 'vertical',
					shadeIntensity: 0.9,
					opacityFrom: 0.7,
					opacityTo: 0.5,
					stops: [0, 100],
				},
			},
			series: [
				{
					name: 'User',
					data: [28, 40, 36, 52, 38, 60, 55],
				},
			],
			xaxis: {
				labels: {
					show: false,
				},
				axisBorder: {
					show: false,
				},
			},
			yaxis: [
				{
					y: 0,
					offsetX: 0,
					offsetY: 0,
					padding: {
						left: 0,
						right: 0,
					},
				},
			],
			tooltip: {
				x: {
					show: false,
				},
			},
		};

		var chart = new ApexCharts(
			document.querySelector('#visitorChart'),
			options
		);
		chart.render();
	}

	if ($('#bounceChart').length) {
		var options = {
			chart: {
				height: 60,
				type: 'line',
				toolbar: {
					show: false,
				},
				sparkline: {
					enabled: true,
				},
				grid: {
					show: false,
					padding: {
						left: 0,
						right: 0,
					},
				},
			},
			colors: ['#c28135'],
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'straight',
				width: 4,
			},
			markers: {
				size: 4,
				hover: {
					size: 6,
					sizeOffset: 3,
				},
			},
			series: [
				{
					name: 'Bonus Rate',
					data: [28, 40, 36, 52, 38, 60, 55],
				},
			],
			xaxis: {
				labels: {
					show: false,
				},
				axisBorder: {
					show: false,
				},
			},
			yaxis: [
				{
					y: 0,
					offsetX: 0,
					offsetY: 0,
					padding: {
						left: 0,
						right: 0,
					},
				},
			],
			tooltip: {
				x: {
					show: false,
				},
			},
		};

		var chart = new ApexCharts(document.querySelector('#bounceChart'), options);
		chart.render();
	}

	if ($('#sessionChart').length) {
		var options = {
			series: [
				{
					name: 'Session Duration',
					data: [600, 1000, 400, 2000, 500, 900, 2500, 1800, 3800],
					colors: ['#754ffe'],
				},
				{
					name: 'Page Views',
					data: [1000, 2000, 800, 1200, 300, 1900, 1600, 2000, 1000],
				},
				{
					name: 'Total Visits',
					data: [2200, 1000, 3400, 900, 500, 2500, 3000, 1000, 2500],
				},
			],
			chart: {
				animations: {
					enabled: true,
					easing: 'easeinout',
					speed: 800,
					animateGradually: {
						enabled: true,
						delay: 500
					},
					dynamicAnimation: {
						enabled: true,
						speed: 350
					}
				},
				toolbar: {
					show: false,
				},
				height: 400,
				type: 'line',
				zoom: {
					enabled: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				width: [4, 3, 3],
				curve: 'smooth',
				dashArray: [0, 5, 4],
			},

			legend: {
				show: false,
			},
			colors: ['#754ffe', '#19cb98', '#ffaa46'],
			markers: {
				size: 0,
				hover: {
					sizeOffset: 6,
				},
			},
			xaxis: {
				categories: [
					'01 Jan',
					'02 Jan',
					'03 Jan',
					'04 Jan',
					'05 Jan',
					'06 Jan',
					'07 Jan',
					'08 Jan',
					'09 Jan',
					'10 Jan',
					'11 Jan',
					'12 Jan',
				],
				labels: {
					style: {
						colors: ['#5c5776'],
						fontSize: '12px',
						fontFamily: 'Inter',

						cssClass: 'apexcharts-xaxis-label',
					},
				},
			},
			yaxis: {
				labels: {
					style: {
						colors: ['#5c5776'],
						fontSize: '12px',
						fontFamily: 'Inter',

						cssClass: 'apexcharts-xaxis-label',
					},
					offsetX: -12,
					offsetY: 0,
				},
			},
			tooltip: {
				y: [
					{
						title: {
							formatter: function (val) {
								return val + ' (mins)';
							},
						},
					},
					{
						title: {
							formatter: function (val) {
								return val + ' per session';
							},
						},
					},
					{
						title: {
							formatter: function (val) {
								return val;
							},
						},
					},
				],
			},

			grid: {
				borderColor: '#f1f1f1',
			},
		};

		var chart = new ApexCharts(
			document.querySelector('#sessionChart'),
			options
		);
		chart.render();
	}
	if ($('#support-chart1').length) {
		var options = {
			chart: {
				type: 'bar',
				height: 302,
				sparkline: {
					enabled: true,
				},
			},
			states: {
				normal: {
					filter: {
						type: 'none',
						value: 0,
					},
				},
				hover: {
					filter: {
						type: 'darken',
						value: 0.55,
					},
				},
				active: {
					allowMultipleDataPointsSelection: false,
					filter: {
						type: 'darken',
						value: 0.55,
					},
				},
			},
			colors: ['#8968fe'],
			plotOptions: {
				bar: {
					borderRadius: 4,
					columnWidth: '50%',
				},
			},
			series: [
				{
					data: [
						25,
						66,
						41,
						70,
						63,
						25,
						44,
						22,
						36,
						19,
						54,
						44,
						32,
						36,
						29,
						54,
						25,
						66,
						41,
						65,
						63,
						25,
						44,
						12,
						36,
						39,
						25,
						44,
						42,
						36,
						54,
					],
				},
			],
			xaxis: {
				crosshairs: {
					width: 1,
				},
			},
			tooltip: {
				fixed: {
					enabled: false,
				},
				x: {
					show: false,
				},
				y: {
					title: {
						formatter: function (seriesName) {
							return 'Active User';
						},
					},
				},
				marker: {
					show: false,
				},
			},
		};
		new ApexCharts(document.querySelector('#support-chart1'), options).render();
	}

	if ($('#locationmap').length) {
		const map = new jsVectorMap({
			map: 'world',
			selector: '#locationmap',
			zoomOnScroll: true,
			zoomButtons: true,
			markersSelectable: true,
			markers: [
				{ name: 'United Kingdom', coords: [53.613, -11.6368] },
				{ name: 'India', coords: [20.7504374, 73.7276105] },
				{ name: 'United States', coords: [37.2580397, -104.657039] },
				{ name: 'Australia', coords: [-25.0304388, 115.2092761] },
			],
			markerStyle: {
				initial: { fill: '#754FFE' },
			},
			markerLabelStyle: {
				initial: {
					fontFamily: 'Inter',
					fontSize: 13,
					fontWeight: 500,
					cursor: 'default',
					fill: '#18113C',
				},
			},
			labels: {
				markers: {
					render: (marker) => marker.name,
				},
			},
		});
	}

	if ($('#trafficDountChart').length) {
		var options = {
			series: [60, 55, 12, 17],
			labels: ['Organic Search', 'Direct', 'Refferrals', 'Social Media'],
			colors: ['#754FFE', '#19cb98', '#e53f3c', '#ffaa46'],
			chart: {
				type: 'donut',
				height: 260,
			},
			legend: {
				show: false,
			},
			dataLabels: {
				enabled: false,
			},
			plotOptions: {
				pie: {
					donut: {
						size: '50%',
					},
				},
			},
			stroke: {
				width: 2,
			},
		};

		var chart = new ApexCharts(
			document.querySelector('#trafficDountChart'),
			options
		);
		chart.render();
	}

	if ($('#operatingSystem').length) {
		var options = {
			series: [55, 88, 80, 75],
			labels: ['Window', 'macOS', 'Linux', 'Android'],
			chart: {
				type: 'polarArea',
				height: 350,
			},

			colors: ['#e53f3c', '#19cb98', '#754FFE', '#29BAF9'],
			legend: {
				show: false,
			},
			stroke: {
				colors: ['#fff'],
			},
			fill: {
				opacity: 0.9,
			},
		};

		var chart = new ApexCharts(
			document.querySelector('#operatingSystem'),
			options
		);
		chart.render();
	}
})();
