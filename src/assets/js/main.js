//
// Main js
//


'use strict';

(function () {


  // slimscroll for course resume page

  if ($('.course-list, .scrollbar').length) {
    $(".course-list, .scrollbar").slimScroll({
      height: "100%",
    });
  }




  //  slimscroll for sidebar nav

  if ($(".nav-scroller").length) {
    $(".nav-scroller").slimScroll({
      height: "97%",
    });
  }




  // Multi level menu dropdown

  if ($(".dropdown-menu a.dropdown-toggle").length) {
    $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
      if (!$(this)
        .next()
        .hasClass("show")
      ) {
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass("show");

      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function (e) {
          $(".dropdown-submenu .show").removeClass("show");
        });

      return false;
    });
  }




  // Notification dropdown scroll List

  if ($('.notification-list-scroll').length) {
    $(".notification-list-scroll").slimScroll({
      height: 300,
    });
  }




  // Default Tooltip

  if ($('[data-toggle="tooltip"]').length) {
    $('[data-toggle="tooltip"]').tooltip();
  }




  // Default Popover

  if ($('[data-toggle="popover"]').length) {
    $('[data-toggle="popover"]').popover()
  }




  // Radio button - payment method switch

  if ($('#cardRadioone , #cardRadioTwo').length) {
    $('#internetpayment').hide();
    $('#cardRadioone').on("change", function () {
      if (this.checked) {
        $('#cardpayment').show();
        $('#internetpayment').hide();
      }
    });
    $('#cardRadioTwo').on("change", function () {
      if (this.checked) {
        $('#internetpayment').show();
        $('#cardpayment').hide();
      }
    });

  }




  // Magnific popup

  if ($(".popup-youtube").length) {
    $(".popup-youtube").magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true,

    });
  }




  // Flatpickr

  if ($(".flatpickr").length) {
    flatpickr(".flatpickr", {
      disableMobile: true

    });

  }




  // Password field strength

  if ($(".password-field input").length) {
    $('.password-field input').on("keyup", function () {
      var strength = checkPasswordStrength($(this).val());
      var $outputTarget = $(this).parent('.password-field');

      $outputTarget.removeClass(function (index, css) {
        return (css.match(/\level\S+/g) || []).join(' ');
      });
      $outputTarget.addClass('level' + strength);
    });

    function checkPasswordStrength(password) {
      var strength = 0;

      // If password is 6 characters or longer
      if (password.length >= 6) {
        strength += 1;
      }

      // If password contains both lower and uppercase characters, increase strength value.
      if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
      }

      // If it has numbers and characters, increase strength value.
      if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
        strength += 1;
      }

      return strength;
    }
  }





  // Input mask

  if ($("input").length) {
    Inputmask().mask(document.querySelectorAll("input"));
  }





  // Chart sections

  // Earning chart

  if ($("#earning").length) {
    var options = {
      series: [{
        name: "Current Month",
        data: [10, 20, 15, 25, 18, 28, 22, 32, 24, 34, 26, 38]
      }],
      labels: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      chart: {
        fontFamily: '$font-family-base',
        height: '280px',
        type: 'line',
        toolbar: {
          show: false

        },
      },
      colors: ['#754FFE'],
      stroke: {
        width: 4,
        curve: 'smooth',
        colors: ['#754FFE'],
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          show: true
        },
        labels: {
          offsetX: 0,
          offsetY: 5,
          style: {
            fontSize: '13px',
            fontWeight: 400,
            colors: '#a8a3b9',
          },
        }
      },
      yaxis: {
        labels: {
          formatter: function (e) {
            return e + "k"
          },
          style: {
            fontSize: '13px',
            fontWeight: 400,
            colors: '#a8a3b9',
          },
          offsetX: -15
        },
        tickAmount: 3,
        min: 10,
        max: 40
      },
      grid: {
        borderColor: '#e0e6ed',
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true,
          }
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: -50,
        fontSize: '16px',
        markers: {
          width: 10,
          height: 10,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
        },
        itemMargin: {
          horizontal: 0,
          vertical: 20
        }
      },
      tooltip: {
        theme: 'light',
        marker: {
          show: true,
        },
        x: {
          show: false,
        }
      },
      responsive: [{
        breakpoint: 575,
        options: {
          legend: {
            offsetY: -30,
          },
        },
      }]
    };
    var chart = new ApexCharts(document.querySelector("#earning"), options);
    chart.render();
  }




  // Earning second

  if ($("#earningTwo").length) {
    var options = {
      series: [{
        name: "Current Month",
        data: [10, 20, 15, 25, 18, 28, 22, 32, 24, 34, 26, 38]
      }],
      labels: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      chart: {
        fontFamily: '$font-family-base',
        height: '280px',
        type: 'line',
        toolbar: {
          show: false
        },
      },
      colors: ['#754FFE'],
      stroke: {
        width: 4,
        curve: 'smooth',
        colors: ['#754FFE'],
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },

        crosshairs: {
          show: true
        },
        labels: {
          offsetX: 0,
          offsetY: 5,
          style: {
            fontSize: '13px',
            fontWeight: 400,
            colors: '#a8a3b9',
          },
        }
      },
      yaxis: {
        labels: {
          formatter: function (e) {
            return e + "k"
          },
          style: {
            fontSize: '13px',
            fontWeight: 400,
            colors: '#a8a3b9',
          },
          offsetX: -15
        },
        tickAmount: 3,
        min: 10,
        max: 40
      },
      grid: {
        borderColor: '#e0e6ed',
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true,
          }
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: -50,
        fontSize: '16px',
        markers: {
          width: 10,
          height: 10,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
        },
        itemMargin: {
          horizontal: 0,
          vertical: 20
        }
      },
      tooltip: {
        theme: 'light',
        marker: {
          show: true,
        },
        x: {
          show: false,
        }
      },
      responsive: [{
        breakpoint: 575,
        options: {
          legend: {
            offsetY: -30,
          },
        },
      }]
    };
    var chart = new ApexCharts(document.querySelector("#earningTwo"), options);
    chart.render();
  }




  // Order chart

  if ($("#order").length) {
    var options = {
      series: [{
        name: "Days",
        data: [0, 3, 0.5, 3.5, 1, 2.5, 0.5, 4, 1.4, 4.5, 2.5, 4.8]
      }],
      labels: ["12 Jan", "14 Jan", "16 Jan", "18 Jan", "20 Jan", "22 Jan", "24 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
      chart: {
        fontFamily: '$font-family-base',
        height: '280px',
        type: 'line',
        toolbar: {
          show: false
        },
      },
      colors: ['#754FFE'],
      stroke: {
        width: 4,
        curve: 'smooth',
        colors: ['#754FFE'],
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          show: true
        },
        labels: {
          offsetX: 0,
          offsetY: 5,
          style: {
            fontSize: '13px',
            fontWeight: 400,
            colors: '#a8a3b9',
          },
        }
      },
      yaxis: {
        labels: {
          formatter: function (val, index) {
            return val.toFixed(0);
          },
          style: {
            fontSize: '13px',
            fontWeight: 400,
            colors: '#a8a3b9',
          },
          offsetX: -20
        },
        tickAmount: 3,
        min: 0,
        max: 5
      },
      grid: {
        borderColor: '#e0e6ed',
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true,
          }
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: -10
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: -50,
        fontSize: '16px',
        markers: {
          width: 10,
          height: 10,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
        },
        itemMargin: {
          horizontal: 0,
          vertical: 20
        }
      },
      tooltip: {
        theme: 'light',
        marker: {
          show: true,
        },
        x: {
          show: false,
        }
      },
      responsive: [{
        breakpoint: 575,
        options: {
          legend: {
            offsetY: -30,
          },
        },
      }]
    };

    var chart1 = new ApexCharts(document.querySelector("#order"), options);
    chart1.render();

  }




  // Traffic

  if ($("#traffic").length) {
    var options = {
      dataLabels: {
        enabled: false,
      },
      series: [44, 55, 41],
      labels: ['Direct', 'Referral', 'Organic'],
      colors: ['#754FFE', '#CEC0FF', '#E8E2FF'],
      chart: {
        width: 392,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '78%'
          }
        }
      },
      legend: {
        position: 'bottom',
        fontFamily: 'inter',
        fontWeight: 500,
        fontSize: '14px',
        markers: {
          width: 8,
          height: 8,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
        },
        itemMargin: {
          horizontal: 8,
          vertical: 0
        },
      },
      tooltip: {
        theme: 'light',
        marker: {
          show: true,
        },
        x: {
          show: false,
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        }
      }
    };


    var chart = new ApexCharts(document.querySelector("#traffic"), options);
    chart.render();

  }
  // Order column

  if ($("#orderColumn").length) {
    var options = {
      series: [{

        data: [4, 6, 5, 3, 5, 6, 8, 9],
      }],
      chart: {
        toolbar: {
          show: false
        },
        type: 'bar',
        height: 272
      },
      colors: ['#754FFE'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '12%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      grid: {
        borderColor: '#e0e6ed',
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false
          }
        },
      },
      xaxis: {
        categories: ['1 Jun', '9 Jun', '16 jun', '18 Jun', '19 Jun', '22 jun', '24 Jun', '26 Jun'],
        axisBorder: {
          show: false,
        },
        labels: {
          offsetX: 0,
          offsetY: 5,
          style: {
            fontSize: '13px',
            fontWeight: 400,
            colors: '#a8a3b9',
          },
        },
      },
      grid: {
        borderColor: '#e0e6ed',
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true,
          }
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: -10
        },
      },
      yaxis: {
        title: {
          text: undefined
        },
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '80%',
          }
        },
        labels: {
          style: {
            fontSize: '13px',
            fontWeight: 400,
            colors: '#a8a3b9',

          },
          offsetX: -10
        },
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " sales "
          },
        },
        marker: {
          show: true,
        },
      }
    };
    var chart = new ApexCharts(document.querySelector("#orderColumn"), options);
    chart.render();
  }

  // Total earning

  if ($("#totalEarning").length) {
    var options = {
      series: [{
        data: [50, 80, 5, 90, 12, 150, 12, 80, 150]
      }],
      chart: {
        width: 130,
        type: 'line',
        toolbar: {
          show: false,
        }
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: ['#19cb98'],
        width: 2,
        dashArray: 0,
      },
      grid: {
        show: false,
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    };

    var chart = new ApexCharts(document.querySelector("#totalEarning"), options);
    chart.render();

  }
  // Payout chart

  if ($("#payoutChart").length) {
    var options = {
      series: [{
        name: 'Inflation',
        data: [40, 20, 50, 80, 65]
      }],
      chart: {
        height: 150,
        type: 'bar',
        toolbar: {
          show: false,
        }
      },
      colors: ['#E8E2FF'],
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          endingShape: 'flat',
          columnWidth: '65%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        show: false,
      },
    };

    var chart = new ApexCharts(document.querySelector("#payoutChart"), options);
    chart.render();

  }

  // Quill editor

  if ($("#editor").length) {
    var quill = new Quill('#editor', {
      theme: 'snow'
    });
  }

  // File upload with preview for course cover img

  if ($("#courseCoverImg").length) {
    var firstUpload = new FileUploadWithPreview('courseCoverImg', {
      showDeleteButtonOnImages: true,
      text: {
        chooseFile: ' No File Selected',
        browse: 'Upload File',
      }
    });

  }

  // Menu toggle for admin dashboard

  if ($("#nav-toggle").length) {
    $("#nav-toggle").on("click", function (e) {
      e.preventDefault();
      $("#db-wrapper").toggleClass("toggled");
    });

  }

  // Print for invoice

  if ($("#invoice").length) {
    $("#invoice").find('.print-link').on('click', function () {
      //Print invoice with default options
      $.print("#invoice");
    });
  }

  // Sidenav fixed for docs

  if ($(".sidebar-nav-fixed a").length) {
    $(".sidebar-nav-fixed a")
      // Remove links that don't actually link to anything
      .on("click", function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 90
            }, 1000, function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        };
        $('.sidebar-nav-fixed a').each(function () {
          $(this).removeClass('active');
        })
        $(this).addClass('active');
      });
  }

  // Check all for  checkbox

  if ($("#checkAll").length) {
    $("#checkAll").on("click", function () {
      $('input:checkbox').not(this).prop('checked', this.checked);
    });
  }

  // Btn icon for active
  if ($("#btn-icon").length) {
    $('.btn-icon').on("click", function () {
      $(this).parent().addClass('active').siblings().removeClass('active')
    })
  }

  //  Stopevent for dropdown

  if ($(".stopevent").length) {
    $(document).on("click.bs.dropdown.data-api", ".stopevent", function (e) {
      e.stopPropagation();
    });
  }

  //  Input tags (Tagify)

  if ($("input[name=tags]").length) {
    var input = document.querySelector('input[name=tags]');
    new Tagify(input)

  }

  //  Typed js

  if ($(".headingTyped").length) {
    var typed = new Typed('.headingTyped', {
      strings: ["Skills", "Products ", "Teams", "Future"],
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 1000,
      loop: true
    });
  }

})();