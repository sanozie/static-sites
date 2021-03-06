//Data
var iconData = [
     {
          "id": 1,
          "color": "#EB1C2E",
          "url": "<img class = 'icon img-fluid' src ='./public/nonumicons/1.png'>"
     },
     {
          "id": 2,
          "color": "rgba(211, 160, 42, 1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/2.png'>"
     },
     {
          "id": 3,
          "color": "rgba(39, 155, 71, 1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/3.png'/>"
     },
     {
          "id": 4,
          "color": "rgba(194, 31, 50, 1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/4.png'/>"
     },
     {
          "id": 5,
          "color": "rgba(255, 58, 32, 1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/5.png'/>"
     },
     {
          "id": 6,
          "color": "rgba(1, 174, 217, 1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/6.png'/>"
     },
     {
          "id": 7,
          "color": "rgba(252, 183, 17,1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/7.png'/>"
     },
     {
          "id": 8,
          "color": "rgba(143, 24, 56,1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/8.png'/>"
     },
     {
          "id": 9,
          "color": "rgba(243, 109, 36,1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/9.png'/>"
     },
     {
          "id": 10,
          "color": "rgba(224, 20, 131, 1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/10.png'/>"
     },
     {
          "id": 11,
          "color": "rgba(250, 157, 38, 1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/11.png'/>"
     },
     {
          "id": 12,
          "color": "rgba(206, 141, 41,1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/12.png'/>"
     },
     {
          "id": 13,
          "color": "rgba(71, 119, 61, 1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/13.png'/>"
     },
     {
          "id": 14,
          "color": "rgba(0, 125, 189, 1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/14.png'/>"
     },
     {
          "id": 15,
          "color": "rgba(63, 175, 73, 1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/15.png'/>"
     },
     {
          "id": 16,
          "color": "rgba(2, 85, 139, 1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/16.png'/>"
     },
     {
          "id": 17,
          "color": "rgba(24, 54, 104, 1)",
          "url": "<img class = 'icon img-fluid' src = './public/nonumicons/17.png'/>"
     }
]

$(function() {
     //Making color change on wheel and font
     $(document).on('mouseover', 'area', function() {
          var id = this.title;
          console.log(id);
          var color;
          color = iconData[id-1].color;
          var url = iconData[id-1].url;
          $("#background").animate({
               backgroundColor: color
          }, "fast");
          $(".whiteText").animate({
               color: "white"
          }, "slow");
          $(".coloredText").animate({
               color: color
          }, "slow");
          $("#namePaste").html(url);
     });

     //making background image scroll differently
     $('#background').each(function(){
          var $bgobj = $(this); // assigning the object

          $(window).scroll(function() {
               var yPos = -($(window).scrollTop() / $bgobj.data('speed'));

               // Put together our final background position
               var coords = '50% '+ yPos + 'px';

               // Move the background
               $bgobj.css({ backgroundPosition: coords });
          });
     });
     //Make IMG map responsive

});
