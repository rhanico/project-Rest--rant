const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1> REST-Rant! </h1>
              <div>
                <img id='saladImg' src="./images/saladbowl.jpg" alt="salad bowl" />
              </div>
              <div>
                Photo by <a href="https://unsplash.com/@pwign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anh Nguyen</a> 
                on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
              <a href="/places">
                <button className='btn-primary'>Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  
module.exports = home
