const React = require('react')
const Def = require('../default')

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="row-sm-6 row-md-4 row-lg-3">
        <h2>
          <a href={`/places/${place.id}`} >
            {place.name}
          </a>
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  
    return (
      <Def>
          <main>
              <h1> RECOMMENDED RESTO TO RAVE OR RANT ABOUT! </h1>
              <div className="row-sm-6 row-md-4 row-lg-3">
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  
module.exports = index
