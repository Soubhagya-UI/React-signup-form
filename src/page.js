import React, { Component } from 'react';
import './css/index.css';

export default class Form extends Component {
  render() {
    return (
      <div>
        <section>
            <div className="background-image">
                <label>My Sign Up Form</label>
                <form>
                    <div className="inputsubdiv">
                        <span><i class="fa fa-user" aria-hidden="true"></i></span>
                        <input type="text" placeholder="First Name"/>
                    </div>
                    <div className="inputsubdiv">
                        <span><i class="fa fa-user" aria-hidden="true"></i></span>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                    <div className="inputsubdiv">
                        <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                        <input type="text" placeholder="Location"/>
                    </div>
                    <div className="inputsubdiv">
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <input type="text" placeholder="Enter Email"  className="speinp"/>
                    </div>
                    <div className="inputsubdiv">
                        <span><i class="fa fa-lock" aria-hidden="true"></i></span>
                        <input type="text" placeholder="Enter password"/>
                    </div>
                    <div className="inputsubdiv">
                        <span><i class="fa fa-lock" aria-hidden="true"></i></span>
                        <input type="text" placeholder="Enter confirm password"/>
                    </div>
                    <div className="inputsubdiv">
                        <button type="submit" >Sign Up</button>
                    </div>
                </form>
                <hr/>
            </div>
        </section>
      </div>
    )
  }
}