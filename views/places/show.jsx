const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className = "inactive" >
            No Comments Yet!
        </h3>
    )
    if ( data.place.comments.legnth ) {
        comments = data.place.comments.map ( c => {
            return (
                <div className="border">
                   <h2 className="rant">
                         {c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}
                   </h2>
                   <h4>
                         {c.content}
                   </h4>
                   <h3>
                          <strong> - {c.author} </strong>
                   </h3>
                   <h4>
                         Rating: {c.stars}
                   </h4>
                </div>
            )
        })
    }

    let message = ''
     if (data.message) {
        message = (
            <h4 class="alert alert-primary" role="alert">
                {data.message}
            </h4>
        )
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
                    {message}
                <div>
                    <img src={data.place.pic} alt={data.place.name} />
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>
                <div>
                    <h3> 
                        DESCRIPTION 
                    </h3>
                    <h4>
                        {data.place.showEstablished()}
                    </h4>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>
                </div>
                <div>
                    <h3>
                        RATINGS
                    </h3>
                    <h4> 
                        CURRENTLY UNRATED!
                    </h4>
                </div>
                <hr/>
                <div>
                    <h4>
                        COMMENTS
                    </h4>
                        {comments}
                </div>
                <div id='editDeleteBtn'>
                    <div>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                            EDIT
                        </a>
                    </div>
                    <div>
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">
                            DELETE
                        </button>
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