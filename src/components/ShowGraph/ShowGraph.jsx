import React, { useState } from 'react';
import './ShowGraph.css';
import { Container, Button } from 'react-bootstrap';

const ShowGraph = () => {
    const [graphId, setGraphId] = useState(0);
    return (
        <Container className='showGraph__main'>
            <div className="showGraph__show">
                {
                    graphId === 0 ? 0 : graphId === 1 ? 1 : 2
                }
            </div>
            <div className="showGraph__buttons">
                <Button variant="primary" disabled={!graphId && true} onClick={() => setGraphId(prevGraphId => prevGraphId-1)}>Previous</Button>
                <Button variant="primary" disabled={graphId === 2 && true} onClick={() => setGraphId(prevGraphId => prevGraphId+1)}>Next</Button>
            </div>
        </Container>
    )
}

export default ShowGraph;