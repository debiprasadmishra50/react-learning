import React from "react";

const ActiveNews = ({ active }) => {
    if (!active) return "";

    return (
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <a className="header" href={active.url}>
                        {active.title}
                    </a>
                    <div className="description">
                        <h4>By: {active.by}</h4>
                        <div className="meta">
                            <span>score: {active.score}</span>
                            <span>type: {active.type}</span>
                        </div>
                    </div>
                    <a href={active.url}>[visit link]</a>
                </div>
            </div>
        </div>
    );
};

export default ActiveNews;
