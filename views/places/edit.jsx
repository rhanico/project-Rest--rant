const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return(
        <Def>
            <html>
                <head>
                    <title>EDIT PLACE</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/css/style.css" />
                </head>
                <body>
                    <main>
                        <form id="newForm" method="POST" action="/places">
                            <div className='row'>
                                <div className="form-group col-sm-6">
                                    <label htmlFor="name">Place Name</label>
                                    <input 
                                        className="form-control" 
                                        id="name" 
                                        name="name" 
                                        value={data.place.name}
                                    required />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label htmlFor="pic">Place Picture</label>
                                    <input 
                                        className="form-control" 
                                        id="name" 
                                        name="name" 
                                        value={data.place.pic}
                                    required />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-group col-sm-6">
                                    <label htmlFor="city">City</label>
                                    <input 
                                        className="form-control" 
                                        id="name" 
                                        name="name" 
                                        value={data.place.city}
                                    required />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label htmlFor="state">State</label>
                                    <input 
                                        className="form-control" 
                                        id="name" 
                                        name="name" 
                                        value={data.place.state}
                                    required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cuisines">Cuisines</label>
                                <input 
                                    className="form-control" 
                                    id="name" 
                                    name="name" 
                                    value={data.place.cuisines}
                                required />
                            </div>
                            <input className="btn btn-primary" type="submit" value="Add Place" />
                        </form>
                    </main>
                </body>
            </html>
        </Def>
    )
}

module.exports = edit_form
