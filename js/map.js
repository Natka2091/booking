import { offers } from './data.js';
import { createCard } from './offer.js';
import { enableForm } from './page-state.js';
const tokyoCenter = [35.68950, 139.69170];
const map = L.map('map-canvas').setView(tokyoCenter, 13);
const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52]
});
const pinIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40]
});
const mainPinMarker = L.marker(tokyoCenter,{
        draggable: true,
        icon: mainPinIcon
    }
);
const addressField = document.querySelector('#address');
addressField.readOnly = true;

addressField.value = `${tokyoCenter[0].toFixed(5)}, ${tokyoCenter[1].toFixed(5)}`;

mainPinMarker.on('moveend', (event) => {
    const coordinates = event.target.getLatLng();

    addressField.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`
})
offers.forEach((offerData) => {
    const marker = L.marker([
            offerData.location.x,
            offerData.location.y
        ], {
            icon: pinIcon
        }
    );
    marker
        .addTo(map)
        .bindPopup(createCard(offerData));
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
mainPinMarker.addTo(map);
