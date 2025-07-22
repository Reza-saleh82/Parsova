import { Button, Container } from "react-bootstrap"
import './SaveForm.css'
// import { useProductContext } from "../../../context/ProductProvider";


function SaveForm() {
    const { updateForm, setNewText, newText } = useProductContext();

    const handle = (e) => {
        const { name, value } = e.target;
        setNewText((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }


    return (
        <Container>
            <div className="Box-Forms">
                <div>
                    <h3>ثبت نظرات : </h3>
                </div>
                <div>
                    <label htmlFor="">نام : </label>
                    <input onChange={handle} name="name" type="text" value={newText.name} />
                </div>
                <div>
                    <label htmlFor="">ایمیل : </label>
                    <input onChange={handle} name="gmail" type="text" value={newText.gmail} />
                </div>
                <div>
                    <label htmlFor="">نظرات : </label>
                    <textarea onChange={handle} name="text" value={newText.text}></textarea>
                </div>
                <div style={{margin:'5px 0',width:'100px'}}>
                    <Button onClick={updateForm} variant="outline-primary">ارسال</Button>
                </div>
            </div>
        </Container>
    )
}

export default SaveForm