const React = require('react')
const Def = require('../default')

function show (data) {
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
                </div>
                <div>
                    <h3> 
                        DESCRIPTION 
                    </h3>
                    <h5>
                        Located in {data.place.city}, {data.place.state} 
                        and serving {data.place.cuisines}!
                    </h5>
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
                    <p>NO COMMENTS YET</p>
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