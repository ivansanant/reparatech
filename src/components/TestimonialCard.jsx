import React from 'react'
import { FaStar } from 'react-icons/fa'
import '../styles/Home.css'

export const TestimonialCard = ({ quote, author, role, initials }) => {
  return (
    <div className="testimonial-card">
        <div className="text-warning mb-2">
            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
        </div>
        <p className="small text-muted fst-italic">"{quote}"</p>
        <div className="d-flex align-items-center mt-3">
            <div className="testimonial-avatar me-2">{initials}</div>
            <div>
                <h6 className="mb-0 font-sm fw-bold">{author}</h6>
                <small className="text-muted" style={{fontSize: '0.7rem'}}>{role}</small>
            </div>
        </div>
    </div>
  )
}