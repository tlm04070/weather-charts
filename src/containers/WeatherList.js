import React, { Component } from 'react';

export default class WeatherList extends Comment {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        );
    }
}