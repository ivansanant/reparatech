import React from 'react'
import { FaClock, FaStar, FaUserTie } from 'react-icons/fa'
import '../styles/Home.css'

export const CourseCard = ({ title, level, duration, rating, students }) => {
  return (
    <div className="course-card p-3">
        <h6 className="fw-bold mb-2">{title}</h6>
        
        <div className="d-flex align-items-center mb-3 small">
            <span className="badge bg-light text-dark border me-3">{level}</span>
            <span className="text-muted me-auto d-flex align-items-center">
                <FaClock className="me-1 text-blue-theme"/> {duration}
            </span>
            <div className="text-warning">
                <FaStar/> <span className="text-dark fw-bold">{rating}</span>
            </div>
        </div>

        <div className="d-flex justify-content-between align-items-center border-top pt-2 mt-1">
            <small className="text-muted d-flex align-items-center">
                <FaUserTie className="me-1"/> {students} estudiantes
            </small>
            <button className="btn btn-sm btn-blue-theme px-3">Ver Curso</button>
        </div>
    </div>
  )
}