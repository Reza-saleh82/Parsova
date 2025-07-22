import { Alert, Container } from 'react-bootstrap'
import './Courses.css'
// import SpinnerMe from '../../../components/spenner/spenner';
import { Link } from 'react-router-dom';

function Courses() {
    const { courses, loading, error } = useProductContext();

    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                <SpinnerMe />
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

    if (!courses || courses.length === 0) {
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
            <div style={{marginTop:'-10px'}} className="container">
                <div className="header">
                    <h1>دسته بندی دوره ها</h1>
                </div>
                <div className="owl-carousel owl-theme">
                    {courses.map((item) => (
                        <div key={item.id} className="team-member">
                            <div className="member-image">
                                <img src={item.src || item.url} alt={item.name} />
                            </div>
                            <h3 className="member-name">{item.name}</h3>
                            <Link to={`/DoreHa/${item.title}`}>
                                <button className="course-button">مشاهده دوره</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Courses