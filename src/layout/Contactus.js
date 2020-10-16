import React from 'react'

const Contactus = () => {
    return (
        <div className="row">
            <div className="col-md-8">
                <h3>LEAVE A FEEDBACK</h3>
                <form>
                    <div className="form-group">
                        <label>Name</label><br />
                        <input type="text" name="name" className="form-control" /><br />
                    </div>
                    <div className="form-group">
                        <label>Email</label><br />
                        <input type="email" name="name" className="form-control" /><br />
                    </div>
                    <div className="form-group">
                        <label>Message</label><br />
                        <textarea className="form-control" rows="4"></textarea><br />
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form><br /><br /><br /><br /><br /><br />
            </div>
        </div>

    )
}

export default Contactus
