const toRadians = (coordinate) => {
  return coordinate * Math.PI / 180
}

const distanceBetweenPoints = (lat1, lon1, lat2, lon2) => {
  const lat1Radians = toRadians(lat1)
  const lat2Radians = toRadians(lat2)
  const lonDifference = toRadians(lon2 - lon1)

  const radiusOfEarth = 6371e3 // given in metres

  const distance = Math.acos(Math.sin(lat1Radians) * Math.sin(lat2Radians) + Math.cos(lat1Radians) * Math.cos(lat2Radians) * Math.cos(lonDifference)) * radiusOfEarth
  return distance / 1000
}

const findOfficesToContact = (lat, lon, allowedRadius, partners) => {
  const officesToContact = []

  partners.forEach((partner) => {
    partner.offices.forEach((office) => {
      const coordinates = office.coordinates.split(',')
      const distanceFromPoint = distanceBetweenPoints(lat, lon, parseFloat(coordinates[0]), parseFloat(coordinates[1]))

      if (distanceFromPoint < allowedRadius) {
        officesToContact.push({
          name: partner.organization,
          address: office.address
        })
      }
    })
  })
  return officesToContact
}

module.exports = findOfficesToContact
