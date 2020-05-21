import React from "react"

import "./Header.css"

function Header() {
    const appName = "MyApp"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 30,
        color: "#FFFFFF",
        paddingLeft: 10
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#b9bf12"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }

    return (
        <div>
            <header className="navbar">
                <span>{/*{appName}*/}{`${appName}`} says</span>
                <span style={styles}>Good {timeOfDay}!</span>
            </header>
        </div>
    )
}

export default Header
