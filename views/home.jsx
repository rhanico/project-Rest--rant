const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
             <div id="title">
             <h1> REST-Rant! </h1>
             </div>
              <div>
                <img id='breadImg' src="./images/bread.jpg" alt="bread" />
              </div>
              <div>
                <h6>
                Photo by 
                <a href="https://unsplash.com/@caiopezzo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Caio Pezzo</a> on 
                <a href="https://unsplash.com/photos/6K9LDPXxRsA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
                </h6>
              </div>
              <a href="/places">
                <button className='btn-primary'>Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  
module.exports = home
