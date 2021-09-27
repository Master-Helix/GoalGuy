import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Report=()=>{
    return(
        <>
                      <h4 class="card-title text-center">Report Bug</h4>
                      <form className="form1">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/><br/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/><br/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 -Main Street"/><br/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Issue Faced</label>
    <input type="text" class="form-control" id="isuefaced" placeholder="Description of Issue"/><br/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/><br/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
      <br/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Pincode</label>
      <input type="text" class="form-control" id="inputZip"/><br/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label><br/><br/>
    </div>
  </div>
  <button type="submit" className="btn5 btn-primary">Submit</button>
</form>          
        </>  
    );
};

export default Report;