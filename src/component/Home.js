import React from 'react'
import './css/home.css'

export const Home = () => {
    return (
        <div className="flex-column sidebar">
            <a href="/dashboard"><i class="bi bi-house-door" />Dashboard</a>
            <a class="active" href="/"><i class="bi bi-book"></i>Courses</a>
            <a href="/overview">OverView</a>
        </div>
    )
}

