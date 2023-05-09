const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className = "inactive" >
            No Comments Yet!
        </h3>
    )
    let rating = (
        <h3 className = "inactive" >
            Not Yet Rated!
        </h3>
    )
    if ( data.place.comments.legnth ) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ""
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐️'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map ( c => {
            return (
                <div className="border">
                   <h2 className="rant">
                    {c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}
                   </h2>
                   <h4>  {c.content} </h4>
                   <h3> <strong> - {c.author} </strong></h3>
                   <h4> Rating: {c.stars}</h4>
                   <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                   <input type="submit" className="btn btn-danger" value="Delete Comment" />
                    </form>
                </div>
            )
        })
    }


    return (
        <Def>
        <html>
        <head>
            <title>SHOW PAGE </title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/css/style.css"/>
        </head>
        <body>
            <main>
                <h1>{data.place.name}</h1>
                <div>
                    <img src={data.place.pic} alt={data.place.name} />
                    <h4>
                        Located in {data.place.city}, {data.place.state}
                    </h4>
                </div>
                <div>
                    <h5> 
                        DESCRIPTION 
                    </h5>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h3>
                        Serving {data.place.cuisines}
                    </h3>
                </div>
                <div id='editDeleteBtn'>
                    <div>
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                            EDIT
                        </a>
                    </div>
                    <div>
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">
                            DELETE
                        </button>
                        </form> 
                    </div>
                </div>
                <div>
                    <hr/>
                    <hr/>
                    <div>
                        <h2> RATINGS</h2>
                        {rating}
                    </div>
                <hr/>
                    <h4>
                        COMMENTS
                    </h4>
                    <div>
                    {comments}
                </div>
                <hr/>
                </div>
                <hr/>
                    <div>
                        <h2>
                            Tell Us About Your Thoughts!
                        </h2>
                        <div className="row-sm-7 row-md-5 row-lg-">
                            <form action={`/places/${data.place.id}/comment`} method="POST">
                                <div>
                                    <label htmlFor="auhtor"> Author </label>
                                    <input id="auhtor" name="auhtor" className="form-control" />
                                </div>
                                <div>
                                    <label htmlFor="content"> Add Comments</label>
                                    <input type='textarea' id='content' name='content' className="form-control"></input>
                                </div>
                                <div>
                                    <label htmlFor="stars"> Star Rating </label>
                                    <input type="range" step={1} max={5} min={1} id="stars" name="stars" className="form-range"/>
                                </div>
                                <div> 
                                    <label htmlFor="rant"> RANT?</label>
                                    <input type="checkbox" id='rant' name='rant' className="form-check-inout form-control"/>
                                </div>
                                <hr/>
                                <div>
                                    <input className="btn btn-primary" type="submit" value="Add Comment!" />
                                </div>
                            </form>   
                        </div>
                    </div>  
                 </main>
            </body>
        </html>

        </Def>
    )
}

module.exports = show


/**
 * 
   let message = ''
     if (data.message) {
        message = (
            <h4 class="alert alert-primary" role="alert">
                {data.message}
            </h4>
        )
     }
 */

/**
 function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
          <main>
            <div className="row">
              ...
            </div>
            <hr />
            <h2>Comments</h2>
            {comments}
          </main>
        </Def>
    )
}

module.exports = show

 */