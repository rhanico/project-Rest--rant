const React = require('react')
const Def = require('../default')

function new_form (data) {
    return(
        <Def>
            <html>
                <head>
                    <title>ADD PLACE</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/css/style.css" />
                </head>
                <body>
                <main>
                <h1> ADD A NEW PLACE </h1>
                <form id="newForm" method="POST" action="/places">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <label for="founded">Founded Year</label>
                        <input className="form-control" 
                                      id="founded" 
                                      name="founded" 
                                      value= {new Date().getFullYear()} />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <input className="btn btn-primary" type="submit" value="Add Place" />
                    </div>
                </form>
            </main>
                </body>
            </html>
        </Def>
    )
}

module.exports = new_form





/**                 MY ORGINAL FORM 
 
<form id="newForm" method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <div className="form-group">
                        <label for="founded">Founded Year</label>
                        <input className="form-control" id="founded" name="founded" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>


 */