import React from 'react'
import { Link} from 'react-router-dom'

export default function NavbarTop() {
  return (
    <div className="row my-2 justify-content-between align-items-center my-4">
        <div className="col-lg-6">
          <Link to="/" className='text-light fs-2 '>
            Booking
          </Link>
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          
            <Link to="/signup" className="btn mx-2 bg-light text-primary">
              Register
            </Link>
          
          
            <Link to="/login" className="btn mx-2 bg-light text-primary">
              Login
            </Link>
          
        </div>
      </div>
  )
}
