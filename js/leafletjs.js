// Map initialization
var map = L.map('map').setView([23.6850, 90.3563], 10);

// Osm map
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map)

// OpenTopoMap
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
maxZoom: 17,
attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});


// GoogleStreets
var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3']
});


// Marker
var myIcon = L.icon({
iconUrl: 'image/maplogo.webp',
iconSize: [38, 38],
});

var locations = [
    { name: 'রামপুরা', coords: [23.7509, 90.4250], info: 'লেফটেন্যান্ট কর্নেল রেহগির আল শাহিদ<br> 📞 +8801769053150' },
    { name: 'যাত্রাবাড়ী', coords: [23.7104, 90.4500], info: 'ক্যাপ্টেন হেমেল<br> 📞 +8801766162077' },
    { name: 'উত্তরা', coords: [23.8740, 90.4000], info: 'CO<br> 📞 01769024280' },
    { name: 'এয়ারপোর্ট', coords: [23.8493, 90.4000], info: 'Adjt<br> 📞 01769024284' },
    { name: 'দিয়াবাড়ী', coords: [23.8600, 90.3800], info: 'ক্যাপ্টেন সাজ্জাদ<br> 📞 01769510457' },
    { name: 'মিরপুর (এলাকা ১, ২ - ৬)', coords: [23.8040, 90.3667], info: 'ক্যাপ্টেন মাহমুদ<br> 📞 01833585736 / 01769024256' },
    { name: 'মোহাম্মদপুর', coords: [23.7500, 90.3667], info: 'ক্যাপ্টেন সায়কাত<br> 📞 +8801769510515' },
    { name: 'সেগুনবাগিচা', coords: [23.7370, 90.4000], info: 'ক্যাপ্টেন আশিক<br> 📞 +8801738998458' },
    { name: 'মিরপুর (১০, ১১-১৪)', coords: [23.8150, 90.3667], info: 'ক্যাপ্টেন আতহার ইশতিয়াক<br> 📞 +8801769511144' },
    { name: 'পল্টন', coords: [23.7333, 90.4167], info: 'ক্যাপ্টেন জাররাফ<br> 📞 01708375371' },
    { name: 'বারিধারা', coords: [23.8000, 90.4333], info: 'ক্যাপ্টেন নাসিফ<br> 📞 +8801769510803' },
    { name: 'আগারগাঁও', coords: [23.7750, 90.3667], info: 'লেফটেন্যান্ট ইমরুল<br> 📞 +8801705260019' },
    { name: 'গুলশান/বনানী', coords: [23.7925, 90.4250], info: 'Adjt 21 Engrs Bn<br> 📞 +8801769013094' },
    { name: 'মতিঝিল', coords: [23.7333, 90.4167], info: 'ক্যাপ্টেন শিহাব<br> 📞 +8801766047323' },
    { name: 'বাংলাদেশ ব্যাংক', coords: [23.7290, 90.4125], info: 'বাংলাদেশ ব্যাংক<br> 📞 0232901' },
];


locations.forEach(function(location) {
    var singleMarker = L.marker(location.coords, { icon: myIcon, draggable: true });
    var popup = singleMarker.bindPopup('(' + location.name + ')<br>' + location.info).openPopup();
    popup.addTo(map);

});

var singelMarker = L.marker([23.7509, 90.4250],{icon: myIcon, draggable: true});
var popup = singelMarker.bindPopup('(রামপুরা)<br> লেফটেন্যান্ট কর্নেল রেহগির আল শাহিদ<br> 📞 +8801769053150').openPopup();
popup.addTo(map);



// layers-control
var baseMaps = {
"Osm map": osm,
"OpenTopoMap": OpenTopoMap,
"GoogleStreets": googleStreets,
};


var layerControl = L.control.layers(baseMaps, {}, {collapsed: false}).addTo(map);


