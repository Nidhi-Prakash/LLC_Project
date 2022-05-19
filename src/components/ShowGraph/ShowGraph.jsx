import React, { useState, useEffect } from 'react';
import './ShowGraph.css';
import { Container, Button } from 'react-bootstrap';
import BarChart from '../BarChart/BarChart';

const ShowGraph = () => {

    //data for barchart
    const datas = [
        [10, 30, 40, 20],
        [10, 40, 30, 20, 50, 10],
        [60, 30, 40, 20, 30],
        [40, 100, 20, 90, 40],
        [100, 90, 80, 70, 60],
        [10, 20, 10, 20, 10],
    ]
    var i = 0;

    const [data, setData] = useState([]);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if (i === datas.length) i = 0;
    }


    const [graphId, setGraphId] = useState(0);
    return (
        <Container fluid className='showGraph__main'>

            <h2 className='text-dark text-center'>Graphs with React</h2>
            <BarChart width={700} height={500} data={data} />
            <button className= 'mt-5 btn2' onClick={changeData}>Change Data</button>

        </Container>
    )
}

export default ShowGraph;