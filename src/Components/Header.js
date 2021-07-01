import React, { Component } from 'react';
import morningImage from '../imgs/morning.jpg';
import afternoonImage from '../imgs/afternoon.jpg';
import nightImage from '../imgs/night.jpg';



class Header extends Component {

    
    render() {
        const date = new Date();
        const hour = date.getHours();
        const day = date.getDate();
        const weekDay = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ][date.getDay()];
        const month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ][date.getMonth()];

        const enOrdinalRules = new Intl.PluralRules("en", { type: "ordinal" });
        const enOrdinalRulesMap = {
            one: "st",
            two: "nd",
            few: "rd",
            other: "th",
        };
        const enOrdinalSuffix = enOrdinalRulesMap[enOrdinalRules.select(day)];

        const getHeaderImageClass = (hour) => {
            if (hour >= 5 && hour < 12) {
            // Day time - 05:00 to 12:00
                return { background: `url(${morningImage}) no-repeat center`, backgroundSize: 'cover' };
            } else if (hour >= 12 && hour < 18) {
            // Afternoon - 12:00 to 18:00
                return { background: `url(${afternoonImage}) no-repeat center`, backgroundSize: 'cover' };
            } else if (hour >= 18 || hour <= 4) {
            // Night time - 18:00 to 04:00
                return { background: `url(${nightImage}) no-repeat center`, backgroundSize: 'cover' };
            }
        };
        return (
            <section className="header-todo" style={getHeaderImageClass(hour)}>
                <div className="todo-date">
                    <h2>{ `${weekDay}, ${day}${enOrdinalSuffix}` }</h2>
                    <span>{ month }</span>
                </div>
            </section>
        )
    }
}

export default Header;
