import React, { Component } from 'react';
import pq from 'pqgrid';

class PqgridComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }

    componentDidMount() {
    pq.grid(this.refs.grid, {
        width: '100%',
        height: 500,
        colModel: [
            { title: "Rank", width: 100, dataType: "integer", dataIndx: "rank" },
            { title: "Company", width: 200, dataType: "string", dataIndx: "company" },
            { title: "Revenues", width: 150, dataType: "float", dataIndx: "revenues", format: '#.0' },
            { title: "Profits", width: 150, dataType: "float", dataIndx: "profits", format: '#.0' }
        ],
        dataModel: {
            data: this.state.data
        }
        });
    }

    render() {
        return (
            <div ref="grid"></div>
        );
    }
}

export default PqgridComponent;