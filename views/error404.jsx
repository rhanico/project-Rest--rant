const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img id="coneImg" src="./images/cone.jpg" alt="empty cone" />
              </div>
              <div>
              Photo by <a href="https://unsplash.com/es/@picoftasty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mae Mu</a> 
              on <a href="https://unsplash.com/images/food/ice-cream?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
