import React from 'react'
import { useParams } from 'react-router'
import "./DashbordNavbar.css"

export default function DashbordNavbar() {
    const {name} = useParams()
    return (
        <div className = "dash-board-nav">
            <h1>Current wallet : {name} </h1>
        </div>
    )
}
