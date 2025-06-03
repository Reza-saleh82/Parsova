import { Link } from "react-router-dom";
import { FaRegSave } from "react-icons/fa";
import { Button, Card } from "react-bootstrap";
import { useProductContext } from "../../context/ProductProvider";

function MahsolHa (props){
    const { saveItem } = useProductContext();

    return(
        <div>
            <Card key={props.id} className="product-card">
                        <div className="save-button-container">
                            <Button 
                                className={`save-button ${saveItem.some(savedItem => savedItem.id === props.id) ? 'saved' : ''}`}
                                variant="primary"
                                title="ذخیره محصول"
                                onClick={props.handleSaveItem}
                            >
                                <FaRegSave />
                            </Button>
                        </div>
                        <Link to={`Maghale/${props.id}`}>
                            <Card.Img
                                variant="top"
                                src={props.src}
                                style={{ height: '200px', objectFit: 'cover' }}
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                                }}
                            />
                        </Link>
                        <Card.Body>
                            <Card.Title>{props.name}</Card.Title>
                            <Card.Text>
                                {props.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
        </div>
    )
}

export default MahsolHa