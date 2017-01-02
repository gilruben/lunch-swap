const toRadians= deg => deg * Math.PI / 180

const haversineDistance = (point1, point2) => {
  let R = 6371e3; // meters

  let lat1Rad = toRadians(point1.lat);
  let lat2Rad = toRadians(point2.lat);

  let deltaLatRad = toRadians(point2.lat - point1.lat);
  let deltaLngRad = toRadians(point2.lng - point1.lng);

  let a = Math.sin(deltaLatRad/2) * Math.sin(deltaLatRad/2) +
        Math.cos(lat1Rad) * Math.cos(lat2Rad) *
        Math.sin(deltaLngRad/2) * Math.sin(deltaLngRad/2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c;
}

module.exports = haversineDistance;
