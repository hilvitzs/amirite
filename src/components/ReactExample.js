import React from 'react';
import PieChart from 'organism-react-d3-piechart';

const D3PieChart = ({sideOne, sideTwo}) => {
    let data = [
        {value: sideTwo, label: "Wrong"},
        {value: sideOne, label: "Right"},
    ];
    return (
    <PieChart
       data={data}
       style={{maxWidth:300}}
    />
    );
}

export default D3PieChart;
