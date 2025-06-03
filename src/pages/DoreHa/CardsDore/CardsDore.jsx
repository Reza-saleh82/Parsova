import { Alert, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../../context/ProductProvider'
import SpinnerMe from '../../../components/spenner/spenner'
import './CardsDore.css'
import MahsolHa from '../../../components/MahsolHa/MahsolHa'

function CardsDore() {
    const { title } = useParams();
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

    // فیلتر کردن دوره‌ها بر اساس عنوان
    const filteredCourses = data.filter(course => course.subject === title);

    if (!filteredCourses || filteredCourses.length === 0) {
        return (
            <Container className="py-4">
                <Alert variant="info">
                    دوره‌ای یافت نشد
                </Alert>
            </Container>
        );
    }

    return (
        <Container>
            <div className="Box-Cards">
                <div>
                    <h3>
                        {filteredCourses[0]?.subject === 'it' && 'دوره‌های فناوری اطلاعات'}
                        {filteredCourses[0]?.subject === 'graphics' && 'دوره‌های گرافیک'}
                        {filteredCourses[0]?.subject === 'web-design' && 'دوره‌های طراحی سایت'}
                        {filteredCourses[0]?.subject === 'engineering' && 'دوره‌های فنی و مهندسی'}
                        {filteredCourses[0]?.subject === 'accounting' && 'دوره‌های امور بازرگانی'}
                    </h3>
                </div>
                <div className="cards-container">
                    {filteredCourses.map((item) => (
                        <MahsolHa
                            key={item.id}
                            {...item}
                            src={item.src || item.url}
                            handleSaveItem={() => handleSave(item)}
                        />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default CardsDore