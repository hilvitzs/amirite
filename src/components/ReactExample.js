import React from 'react';
import PieChart from 'organism-react-d3-piechart';

const D3PieChartExample = ({sideOne, sideTwo}) => {
    let data = [
        {value: sideOne, label: 'side one'},
        {value: sideTwo, label: 'side two'},
    ];
    return (
    <PieChart
       data={data}
       style={{maxWidth:300}}
    />
    );
}

export default D3PieChartExample;
