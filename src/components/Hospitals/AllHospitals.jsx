import React from 'react'
import { hospitalDetails } from '../configs/hospitalDetails'
import HospitalCard from './HospitalCard'

function AllHospitals() {
  return (
    <div className="row mt-2">
        {hospitalDetails.map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
          <HospitalCard hospitalData={item} />
        </div>
      ))}
    </div>
  )
}

export default AllHospitals