import axios from 'axios';
import { createContext, useContext, useEffect, useState} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saveItem, setSaveItem] = useState([]);
  const [formsValue , setFormValue] = useState([]);
  const [newText , setNewText] = useState(
    {name:"",gmail:"",text:""}
  )

  const updateForm = () => {
    setFormValue(prev => [...prev, newText]);
    setNewText({ name: "", gmail: "", text: "" });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const result = await axios.get("http://localhost:3000/prodact");
        setData(result.data);
        setError(null);
      } catch (err) {
        setError(err.message || 'خطا در دریافت اطلاعات محصولات');
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const result = await axios.get("http://localhost:3000/courses");
        setCourses(result.data);
        setError(null);
      } catch (err) {
        setError(err.message || 'خطا در دریافت اطلاعات محصولات');
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ data, courses, loading, error, saveItem, setSaveItem ,updateForm,newText,setNewText ,
      formsValue 
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProductContext = () => useContext(ProductContext);

