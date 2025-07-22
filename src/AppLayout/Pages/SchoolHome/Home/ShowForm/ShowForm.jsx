
import './ShowForm.css'

function FormShow() {

    return (
        <ProductProvider>
            <div className="Box-ShowForms">
                <div>
                    <h3>نظرات کاربران : </h3>
                </div>
                <div>
                    {formsValue.length === 0 ? (
                        <div>نظری ثبت نشده است.</div>
                    ) : (
                        formsValue.map((item, idx) => (
                            <div className="memItem" key={idx}
                                style={{
                                    border: '1px solid #ccc', borderRadius: '10px',
                                    margin: '10px 0', padding: '10px', background: '#f9f9f9'
                                }}>
                                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginBottom: '8px' }}>
                                    <div><strong>اسم:</strong> {item.name}</div>
                                    <div><strong>ایمیل:</strong> {item.gmail}</div>
                                </div>
                                <div><strong>نظر:</strong> {item.text}</div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </ProductProvider>
    )
}

export default FormShow