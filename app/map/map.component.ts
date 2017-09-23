import {Component, OnInit, OnDestroy} from '@angular/core';

declare var google: any;

@Component({
    selector: 'map',
    templateUrl: './app/map/map.html',
    styleUrls: ['./app/assets/css/map.css']
})

export class MapComponent implements OnInit, OnDestroy{
  ngOnInit(){
           function initMap() {
        var markerObjects = [];
        var markers = [{
  "title": 'Cafe Coffee Day',
  "lat": '12.991296',
  "lng": '80.234234',
  "description": 'Alibaug is a coastal town and a municipal council in Raigad District in the Konkan region of Maharashtra, India.'
}, {
  "title": 'Central Library',
  "lat": '12.990699',
  "lng": '80.233853',
  "description": 'Aurangabad'
}, {
  "title": 'Sarayu Hostel',
  "lat": '12.990784',
  "lng": '80.234629',
  "description": 'Dombivli'
}, {
  "title": 'Department of Management Studies',
  "lat": '12.991590',
  "lng": '80.234578',
  "description": 'Lonavla'
}, {
  "title": 'Vindhya Satpura Mess',
  "lat": '12.990442',
  "lng": '80.235050',
  "description": 'Malegaon'
}, {
  "title": 'Sharavati Hostel',
  "lat": '12.990052',
  "lng": '80.234585',
  "description": 'Mumbai formerly Bombay, is the capital city of the Indian state of Maharashtra.'
}, {
  "title": 'Girls Ramu Tea Stall',
  "lat": '12.990104',
  "lng": '80.234025',
  "description": 'Nashik'
}, {
  "title": 'Sabarmati Hostel ',
  "lat": '12.989562',
  "lng": '80.234314',
  "description": 'Pune is the seventh largest metropolis in India, the second largest in the state of Maharashtra after Mumbai.'
}, {
  "title": 'Open Air Theatre',
  "lat": '12.989009',
  "lng": '80.233613',
  "description": 'Shahpur'
}, {
  "title": 'DoMS Cycle Parking',
  "lat": '12.991747',
  "lng": '80.234569',
  "description": 'Shirdi'
}, {
  "title": 'Department of Mathematics',
  "lat": '12.990476',
  "lng": '80.232071',
  "description": 'Thane'
}, {
  "title": 'Department of Physics',
  "lat": '12.988886',
  "lng": '80.231805',
  "description": 'Vashi'
},

{
  "title": 'Building Sciences Block',
  "lat": '12.989640',
  "lng": '80.229271',
  "description": 'Thane'
},
{
  "title": 'Class Room Complex',
  "lat": '12.990055',
  "lng": '80.230344',
  "description": 'Thane'
},
{
  "title": 'Mechanical Sciences Block',
  "lat": '12.990307',
  "lng": '80.230915',
  "description": 'Thane'
},

{
  "title": 'Department Of Chemistry',
  "lat": '12.987831',
  "lng": '80.232060',
  "description": 'Thane'
},

{
  "title": 'Physics Lecture Theatre',
  "lat": '12.988886',
  "lng": '80.231805',
  "description": 'Thane'
},

{
  "title": 'Central Lecture Theatre',
  "lat": '12.989529',
  "lng": '80.232088',
  "description": 'Thane'
},

{
  "title": 'Carnival Road',
  "lat": '12.987066',
  "lng": '80.237495',
  "description": 'Thane'
},

{
  "title": 'Gajendra Circle',
  "lat": '12.991673',
  "lng": '80.233594',
  "description": 'Thane'
},

{
  "title": 'IC&SR',
  "lat": '12.991773',
  "lng": '80.232156',
  "description": 'Thane'
},

{
  "title": 'Open Air Theatre',
  "lat": '12.989009',
  "lng": '80.233613',
  "description": 'Thane'
},

{
  "title": 'SBI Branch',
  "lat": '12.993137',
  "lng": '80.234189',
  "description": 'Thane'
},

{
  "title": 'Gajendra Circle Bus Stop',
  "lat": '12.991788',
  "lng": '80.233782',
  "description": 'Thane'
},

{
  "title": 'SBI ATM',
  "lat": '12.986461',
  "lng": '80.234317',
  "description": 'Thane'
},

{
  "title": 'Bose Einstein Guest House',
  "lat": '12.992635',
  "lng": '80.234329',
  "description": 'Thane'
},

{
  "title": 'Shiva and Vinayaka Temple',
  "lat": '12.987327',
  "lng": '80.234236',
  "description": 'Thane'
},

{
  "title": 'Sophisticated Analytical Instruments Facility',
  "lat": '12.989501',
  "lng": '80.231591',
  "description": 'Thane'
},

{
  "title": 'Indo-German Centre for Sustainability',
  "lat": '12.989384',
  "lng": '80.231282',
  "description": 'Thane'
},

{
  "title": 'Department of Electrical Engineering',
  "lat": '12.988728',
  "lng": '80.230754',
  "description": 'Thane'
},

{
  "title": 'Department of Humanities and Social Sciences',
  "lat": '12.989886',
  "lng": '80.231993',
  "description": 'Thane'
},

{
  "title": 'Central Workshop',
  "lat": '12.991467',
  "lng": '80.231002',
  "description": 'Thane'
},

{
  "title": 'Center For Innovation',
  "lat": '12.991814',
  "lng": '80.230901',
  "description": 'Thane'
},

{
  "title": 'Car Parking - MSB',
  "lat": '12.991008',
  "lng": '80.230618',
  "description": 'Thane'
},

{
  "title": 'Car Parking - ICSR',
  "lat": '12.991468',
  "lng": '80.231977',
  "description": 'Thane'
},

{
  "title": 'Bike Parking Area, HSB',
  "lat": '12.990588',
  "lng": '80.231932',
  "description": 'Thane'
},

{
  "title": 'Campus Cafe',
  "lat": '12.992349',
  "lng": '80.230570',
  "description": 'Thane'
},

{
  "title": 'Institute Hospital',
  "lat": '12.992939',
  "lng": '80.231469',
  "description": 'Thane'
},

{
  "title": 'Car Parking, RAC',
  "lat": '12.992431',
  "lng": '80.229444',
  "description": 'Thane'
},

{
  "title": 'Department of Aerospace Engineering',
  "lat": '12.991773',
  "lng": '80.228627',
  "description": 'Thane'
},

{
  "title": 'Apollo Pharmacy',
  "lat": '12.993186',
  "lng": '80.231721',
  "description": 'Thane'
},

{
  "title": 'Kendriya Vidyalaya',
  "lat": '12.992964',
  "lng": '80.232450',
  "description": 'Thane'
},

{
  "title": 'IITM Post Office',
  "lat": '12.993524',
  "lng": '80.234031',
  "description": 'Thane'
},

{
  "title": 'Kubhera Insulation',
  "lat": '12.994745',
  "lng": '80.233408',
  "description": 'Thane'
},

{
  "title": 'Apple Kids International Pre School',
  "lat": '12.993989',
  "lng": '80.232333',
  "description": 'Thane'
},

{
  "title": 'Cycle Parking, Aerospace Engineering',
  "lat": '12.991527',
  "lng": '80.228621',
  "description": 'Thane'
},

{
  "title": 'Bike Parking Area, MPS',
  "lat": '12.990588',
  "lng": '80.231932',
  "description": 'Thane'
},

{
  "title": 'Rarified Gas Dynamics Lab',
  "lat": '12.992674',
  "lng": '80.228423',
  "description": 'Thane'
},

{
  "title": 'IITM Main Gate',
  "lat": '13.006572',
  "lng": '80.241906',
  "description": 'Thane'
},

{
  "title": 'IITM Community Hall',
  "lat": '12.998845',
  "lng": '80.240147',
  "description": 'Thane'
},
{
  "title": 'IITM Ladies Club',
  "lat": '12.998221',
  "lng": '80.240062',
  "description": 'Thane'
},

{
  "title": 'Vana Vani Matriculation Higher Secondary School',
  "lat": '12.998644',
  "lng": '80.238877',
  "description": 'Thane'
},

{
  "title": 'Tamraparani Hostel',
  "lat": '12.988255',
  "lng": '80.238283',
  "description": 'Thane'
},

{
  "title": 'Mahanadi Hostel',
  "lat": '12.987967',
  "lng": '80.238885',
  "description": 'Thane'
},

{
  "title": 'Sindhu Hostel',
  "lat": '12.987915',
  "lng": '80.237621',
  "description": 'Thane'
},

{
  "title": 'Pampa Hostel',
  "lat": '12.987570',
  "lng": '80.238312',
  "description": 'Thane'
},

{
  "title": 'Ganga Hostel',
  "lat": '12.987126',
  "lng": '80.238743',
  "description": 'Thane'
},

{
  "title": 'Suprabha Food Court',
  "lat": '12.987538',
  "lng": '80.237286',
  "description": 'Thane'
},

{
  "title": 'ICICI Bank ATM',
  "lat": '12.987180',
  "lng": '80.237466',
  "description": 'Thane'
},

{
  "title": 'Mandakini Hostel',
  "lat": '12.986459',
  "lng": '80.239952',
  "description": 'Thane'
},

{
  "title": 'Jamuna Hostel',
  "lat": '12.986190',
  "lng": '80.239098',
  "description": 'Thane'
},

{
  "title": 'Alakananda Hostel',
  "lat": '12.985385',
  "lng": '80.238928',
  "description": 'Thane'
},

{
  "title": 'Godavari Hostel',
  "lat": '12.985968',
  "lng": '80.237118',
  "description": 'Thane'
},

{
  "title": 'Sangam Ground and Skating Rink',
  "lat": '12.985424',
  "lng": '80.237621',
  "description": 'Thane'
},

{
  "title": 'Saraswathi Hostel',
  "lat": '12.984906',
  "lng": '80.236492',
  "description": 'Thane'
},

{
  "title": 'Zaitoon',
  "lat": '12.985356',
  "lng": '80.236416',
  "description": 'Thane'
},

{
  "title": 'Tapti Hostel',
  "lat": '12.984619',
  "lng": '80.235076',
  "description": 'Thane'
},

{
  "title": 'Narmada Hostel New Block',
  "lat": '12.985703',
  "lng": '80.234792',
  "description": 'Thane'
},

{
  "title": 'Gurunath Juice Center',
  "lat": '12.986660',
  "lng": '80.235417',
  "description": 'Thane'
},

{
  "title": 'Gurunath Departmental Stores',
  "lat": '12.986803',
  "lng": '80.235324',
  "description": 'Thane'
},

{
  "title": 'Himalaya Students Mess',
  "lat": '12.987118',
  "lng": '80.235943',
  "description": 'Thane'
},

{
  "title": 'IIT Madras Main Gate',
  "lat": '13.006334',
  "lng": '80.242025',
  "description": 'Thane'
},

{
  "title": 'Taramani Guest House',
  "lat": '12.986671',
  "lng": '80.234035',
  "description": 'Thane'
},

{
  "title": 'Cauvery Hostel',
  "lat": '12.985728',
  "lng": '80.233874',
  "description": 'Thane'
},

{
  "title": 'Krishna Hostel',
  "lat": '12.984496',
  "lng": '80.233046',
  "description": 'Thane'
},

{
  "title": 'Brahmaputra Hostel',
  "lat": '12.983662',
  "lng": '80.234244',
  "description": 'Thane'
},

{
  "title": 'IIT Madras, Krishna Gate',
  "lat": '12.985165',
  "lng": '80.232026',
  "description": 'Thane'
},

{
  "title": 'IIT Madras Sports Complex',
  "lat": '12.986716',
  "lng": '80.232959',
  "description": 'Thane'
},

{
  "title": 'Department of Computer Science and Engineering',
  "lat": '12.988951',
  "lng": '80.229552',
  "description": 'Thane'
},

{
  "title": 'RISE',
  "lat": '12.989179',
  "lng": '80.229513',
  "description": 'Thane'
},

{
  "title": 'Chemplast Cricket Ground',
  "lat": '12.988306',
  "lng": '80.226348',
  "description": 'Thane'
},

{
  "title": 'IITM Church',
  "lat": '12.989303',
  "lng": '80.227107',
  "description": 'Thane'
},

{
  "title": 'Department Of Biotechnology',
  "lat": '12.989447',
  "lng": '80.227629',
  "description": 'Thane'
},

{
  "title": 'Car Parking, Biotech',
  "lat": '12.989453',
  "lng": '80.227024',
  "description": 'Thane'
},

{
  "title": 'GATE Office',
  "lat": '12.989680',
  "lng": '80.226848',
  "description": 'Thane'
},

{
  "title": 'Velachery Gate Bus Stop',
  "lat": '12.988464',
  "lng": '80.223309',
  "description": 'Thane'
},

{
  "title": 'Car Parking, Ocean Engineering',
  "lat": '12.990243',
  "lng": '80.226642',
  "description": 'Thane'
},

{
  "title": 'Coffe Shop, Ocean Engineering Dept',
  "lat": '12.991154',
  "lng": '80.226879',
  "description": 'Thane'
},

{
  "title": 'Machine Design Section',
  "lat": '12.991733',
  "lng": '80.226840',
  "description": 'Thane'
},

{
  "title": 'Department of Engineering Design',
  "lat": '12.989498',
  "lng": '80.226404',
  "description": 'Thane'
},

{
  "title": 'Faculty Ball-Badminton Court',
  "lat": '12.987971',
  "lng": '80.233221',
  "description": 'Thane'
},

{
  "title": 'Bhadra Hostel',
  "lat": '12.986325',
  "lng": '80.232629',
  "description": 'Thane'
},

{
  "title": 'Tunga Hostel',
  "lat": '12.985489',
  "lng": '80.232553',
  "description": 'Thane'
},

{
  "title": 'Cauvery Mess',
  "lat": '12.985728',
  "lng": '80.233874',
  "description": 'Thane'
},

{
  "title": 'IITM Cycle Repair Shop',
  "lat": '12.985892',
  "lng": '80.238031',
  "description": 'Thane'
},

{
  "title": 'Students Activity Center (SAC)',
  "lat": '12.989344',
  "lng": '80.237795',
  "description": 'Thane'
},

{
  "title": 'BRU, Jamuna Hostel',
  "lat": '12.986190',
  "lng": '80.239098',
  "description": 'Thane'
},

{
  "title": 'Humanities and Sciences Block',
  "lat": '12.989886',
  "lng": '80.231993',
  "description": 'Thane'
},

{
  "title": 'Central Electronics Center',
  "lat": '12.988756',
  "lng": '80.231043',
  "description": 'Thane'
},

{
  "title": 'IIT Madras Space Lab',
  "lat": '12.988665',
  "lng": '80.231080',
  "description": 'Thane'
},


];



        // Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.
        var styledMapType = new google.maps.StyledMapType(
            [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
],
{name: 'Styled Map'});

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
          zoom: 16,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

        // drop markers one by one
    var i = 0;
    var interval = setInterval(() => {
      var data = markers[i];
      var myLatlng = new google.maps.LatLng(data.lat, data.lng);

      // initial icon
      var defaultMarkerColor = 'ff0000';
      var pinImage = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + defaultMarkerColor);

      // marker object for the marker
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: data.title,
        animation: google.maps.Animation.DROP,
        icon: pinImage
      });

      // store in a global array
      var markerIndex = markerObjects.push(marker) - 1;

      // click listener on a marker itself
      google.maps.event.addListener(markerObjects[markerIndex], 'click', () =>  {
        //var marker = this;
        if (marker.getAnimation() != null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      });

      // create a row in the overlay table and bind onhover
      let row = jQuery('<div>')
        .addClass('list-group-item')
        .html(data.title)
        .on('mouseenter', () =>  {
          var marker = markerObjects[markerIndex];
          marker.setAnimation(google.maps.Animation.BOUNCE);
        })
        .on('mouseleave', () =>  {
          var marker = markerObjects[markerIndex];
          if (marker.getAnimation() != null) {
            marker.setAnimation(null);
          }
        });

      let cp_div = jQuery('<a href="#" class="btn small pull-right colpick">#' + defaultMarkerColor + '</a>');
      cp_div.colorpicker().on('changeColor', function(ev) {
        var color = ev.color.toHex();

        jQuery(this).text(color);

        if (color.substring(0, 1) == '#') {
          color = color.substring(1);
        }
        var marker = markerObjects[markerIndex];
        marker.setIcon("https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + color);

        console.log('changed color to ' + color);

      });
      cp_div.appendTo(row);

      row.appendTo('#overlay');

      i++;
      
      if (i == markers.length) {
        clearInterval(interval);
      }
    }, 200);

        // google.maps.event.addDomListener(window, 'load', initMap);
      }
      initMap();
  }
  ngOnDestroy(){
      jQuery('div.colorpicker.dropdown-menu.colorpicker-hidden').remove();
  }
}
