import { useParams } from 'react-router-dom';
import { useProductContext } from '../../../context/ProductProvider';
import { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import './Cards.css';
import SpinnerMe from '../../../components/spenner/spenner';

function Cards() {
    const { id } = useParams();
    const { data, loading, error } = useProductContext();
    const product = data.find(item => String(item.id) === String(id));

    // فرم انتخاب‌ها
    const [teacher, setTeacher] = useState('');
    const [startDate, setStartDate] = useState('');
    const [days, setDays] = useState('');
    const [hour, setHour] = useState('');
    const [count, setCount] = useState(1);

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

    if (!product) {
        return <div>محصول مورد نظر یافت نشد.</div>;
    }

    // نمونه داده‌ها برای فرم (در صورت نیاز می‌توانید از API بگیرید)
    const teachers = ['استاد الف', 'استاد ب', 'استاد ج'];
    const startDates = ['1404/04/01', '1404/04/15', '1404/05/01'];
    const daysList = ['شنبه و دوشنبه', 'یکشنبه و سه‌شنبه', 'پنجشنبه'];
    const hours = ['9 تا 11', '14 تا 16', '17 تا 19'];

    return (
        <>
            <div style={{marginTop:'30px'}} className="navbar-spacer"></div>
            <Container className="maghale-container mt-4 mb-4">
                <Row className="align-items-center">
                    <Col md={7} className="mb-4 mb-md-0">
                        <div className="maghale-title">{product.name}</div>
                        <div className="maghale-rating">
                            <span className="maghale-stars">{'★'.repeat(5)}</span>
                            <span className="maghale-rating-count">(نظر ۱۳ کاربر)</span>
                        </div>
                        <div className="maghale-price-box">
                            <span className="maghale-price-discounted">۲۲,۰۰۰,۰۰۰ ریال</span>
                            <span className="maghale-price-old">۲۳,۵۰۰,۰۰۰ ریال</span>
                        </div>
                        <div className="maghale-discount">٪۶-</div>
                        <div className="maghale-register-title">جهت ثبت نام آموزش ICDL مشهد</div>
                        <div className="maghale-register-desc">نام استاد - تاریخ شروع - روز و ساعت کلاس را انتخاب نمایید</div>
                        <Form className="maghale-form mt-3">
                            <Form.Group className="mb-3 d-flex align-items-center">
                                <Form.Label className="maghale-form-label">نام استاد :</Form.Label>
                                <Form.Select value={teacher} onChange={e => setTeacher(e.target.value)} className="maghale-form-select">
                                    <option value="">یک گزینه را انتخاب کنید</option>
                                    {teachers.map(t => <option key={t}>{t}</option>)}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex align-items-center">
                                <Form.Label className="maghale-form-label">تاریخ شروع :</Form.Label>
                                <Form.Select value={startDate} onChange={e => setStartDate(e.target.value)} className="maghale-form-select">
                                    <option value="">یک گزینه را انتخاب کنید</option>
                                    {startDates.map(d => <option key={d}>{d}</option>)}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex align-items-center">
                                <Form.Label className="maghale-form-label">روزهای :</Form.Label>
                                <Form.Select value={days} onChange={e => setDays(e.target.value)} className="maghale-form-select">
                                    <option value="">یک گزینه را انتخاب کنید</option>
                                    {daysList.map(d => <option key={d}>{d}</option>)}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex align-items-center">
                                <Form.Label className="maghale-form-label">ساعت :</Form.Label>
                                <Form.Select value={hour} onChange={e => setHour(e.target.value)} className="maghale-form-select">
                                    <option value="">یک گزینه را انتخاب کنید</option>
                                    {hours.map(h => <option key={h}>{h}</option>)}
                                </Form.Select>
                            </Form.Group>
                            <InputGroup className="mb-3 maghale-qty-group">
                                <Button variant="outline-secondary" onClick={() => setCount(Math.max(1, count - 1))}>-</Button>
                                <Form.Control value={count} readOnly className="maghale-qty-input" />
                                <Button variant="outline-secondary" onClick={() => setCount(count + 1)}>+</Button>
                                <Button style={{ margin: '0 5px' }} className="maghale-add-btn ms-3">افزودن به دوره‌های ثبت نام شده</Button>
                            </InputGroup>
                        </Form>
                    </Col>
                    <Col md={5} className="text-center">
                        <div className="maghale-img-box">
                            <img src={product.src} alt={product.name} className="maghale-img" onError={e => e.target.src = 'https://via.placeholder.com/300x400?text=No+Image'} />
                            <div className="maghale-img-discount">٪۶-</div>
                            <div className="maghale-img-title">دوره آموزشی<br />کاربر ICDL</div>
                            <div className="maghale-img-footer">آموزشگاه فنی و حرفه ای آزاد پارسوا<br /><a href="https://www.42020.ir" target="_blank" rel="noopener noreferrer">www.42020.ir</a></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cards