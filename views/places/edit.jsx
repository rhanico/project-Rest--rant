const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
            <html>
                <head>
                    <title>title</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/css/style.css" />
                </head>
                <main>
                <div>
                    <h1>
                        EDIT PAGE
                    </h1>
                </div>
                <form id="newForm" method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            value={data.place.name}
                        required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input 
                            className="form-control" 
                            id="pic" 
                            name="pic" 
                            value={data.place.pic}
                        required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input 
                            className="form-control" 
                            id="city" 
                            name="city" 
                            value={data.place.city}
                        required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input 
                            className="form-control" 
                            id="state" 
                            name="state" 
                            value={data.place.state}
                        required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input 
                            className="form-control" 
                            id="cuisines" 
                            name="cuisines" 
                            value={data.place.cuisines}
                        required />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Update Place" />
                </form>
                </main>
            </html>
        </Def>
    )
}

module.exports = edit_form
