import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function Cards(props) {
    return (
        <div>
            <Card key={props.keyCard} style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src={props.urlCard}
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                    }}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                    <Card.Title style={{textAlign:'center',marginBottom:'20px'}}>{props.name}</Card.Title>
                    <Link to={`/DoreHa/${props.title}`}>
                        <Button style={{width:'100%'}} variant="primary">مشاهده دوره</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards