import React from 'react';

const Form = ({ onSubmit, onchange1, onchange2 }) => {
  return (
    <form className="col-md-6" onSubmit={onSubmit}>
      <div className="form-group">
        <input 
          className="form-control text-center" 
          placeholder="enter usersname"
          type="text"
          onChange={onchange2} 
        />
      </div>
      <div className="form-group">
        <input 
          className="form-control text-center" 
          placeholder="enter password"
          type="password"
          onChange={onchange1} 
        />
      </div>
      <div className="form-group text-center">
        <button type="submit" className="btn btn-outline-success">Login</button>
      </div>
    </form>
  )
}
 
export default Form;