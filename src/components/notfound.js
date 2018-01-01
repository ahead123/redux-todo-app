import React, { Component } from 'react'

export default class NotFound extends Component {
  constructor(props) {
      super(props);
      
  }
  
  render() {
    const { history: { goBack }, location: { pathname} } = this.props;
    return (
       <div className="col-md-12">
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <p className="display-3 text-center">404</p>
                <p className="text-muted">We suggest you take a moment to think about how you landed here at "{pathname}"...</p>
                <p className="text-muted">And then once you're clear about how that happened...</p>
                <p className="text-muted">Figure out a way to not make that dumb ass mistake again...</p>
                <p className="text-center">😁 Cheers mate! 😁</p>
                <button 
                    className="btn btn-danger btn-block"
                    onClick={()=> {goBack()}}
                >
                    Dummy Relief Button
                </button>
            </div>
        </div>
      </div>
    )
  }
}
