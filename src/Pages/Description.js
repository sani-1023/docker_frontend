import React, {useEffect, useState} from 'react'
import axios from "axios";
import Card from 'react-bootstrap/Card';


const Description = () => {
    const [data, setData] = useState([]);
    console.log("url",process.env.REACT_APP_API_URL);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/api/tutorials`
        axios.get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <>
            <h1>
                Tutorial 
            </h1>
            {data.length > 0 ? data.map(item => {

                return (<Card key={item.id}>
                        <Card.Header>{item.title}</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {item.description}
                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                )
            }) : <div>empty list.........</div>}
        </>

    )
}

export default Description;