import { Container, Alert } from "react-bootstrap";
// import { useProductContext } from "../../../context/ProductProvider";

import './Mahsol.css';
// import SpinnerMe from "../../../components/spenner/spenner";
import MahsolHa from "../../../components/MahsolHa/MahsolHa";

function Mahsol() {
    const { data, loading, error, saveItem, setSaveItem } = useProductContext();

    const handleSave = (item) => {
        const isItemSaved = saveItem.some(savedItem => savedItem.id === item.id);
        
        if (isItemSaved) {
            setSaveItem(saveItem.filter(savedItem => savedItem.id !== item.id));
        } else {
            setSaveItem([...saveItem, item]);
        }
    };

    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                    <SpinnerMe/>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="py-4">
                <Alert variant="danger">
                    {error}
                </Alert>
            </Container>
        );
    }

    // Filter products where imp is true
    const importantProducts = data.filter(item => item.imp === "true");

    if (!importantProducts || importantProducts.length === 0) {
        return (
            <Container className="py-4">
                <Alert variant="info">
                    محصولی یافت نشد
                </Alert>
            </Container>
        );
    }

    return (
        <Container>
            <div className="card-grid">
                {importantProducts.map((item) => (
                    <MahsolHa
                        key={item.id}
                        {...item}
                        handleSaveItem={() => handleSave(item)}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Mahsol;