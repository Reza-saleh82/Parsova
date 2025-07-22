import './LoginBox.css'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yap from 'yup';
import { Link, useNavigate } from 'react-router';
import { useUserContext } from '../../../../context/contextBonk/ContextBonk';
import { toast } from 'react-toastify';
import TextBox from '../../../../component/utils/TextBox/TextBox.jsx';
import BtnSite from '../../../../component/utils/btnSite/btnSite.jsx';
import uSerStore from '../../../../../redux/store.jsx';
function LoginBox() {
    const {handleLogin} = useUserContext()
    const navigate = useNavigate()
    const { register, handleSubmit ,formState: { errors }} = useForm()
    

    const submit = (data) => {
        const users = uSerStore.getState().users || []
        const findUser = users.find((item)=>item.username == data.userName)
        if(findUser){
            handleLogin(data,findUser)
        }
        else{
            alert('User not found !!!')
        }
    } 

    

    return (
        <div className="Login">
            <div className="LoginBox">
                <div>
                    
                    <form action="" onSubmit={handleSubmit(submit)}>
                        <div>
                            <div className='inputBox'>
                                <TextBox label={'آدرس ایمیل'} errors={errors} register={register} type={'email'} name={'email'} validdate={{
                                    required: { value: true, massage: 'Enter a phrase !!!' }
                                }} />
                            </div>
                            <div className='inputBox'>
                                <TextBox label={'نام کاربری'} errors={errors} register={register} type={'text'} name={'userName'} validdate={{
                                    required: { value: true, massage: 'Enter a phrase !!!' }
                                }} />
                            </div>
                            <div className='inputBox'>
                                <TextBox label={'رمز عبور'} errors={errors} register={register} type={'text'} name={'password'} validdate={{
                                    required: { value: true, massage: 'Enter a phrase !!!' }
                                }} />
                            </div>
                        </div>
                        <div>
                            <button style={{borderRadius:'10px',backgroundColor:'white'}}>click</button>
                        </div>
                        <div style={{marginTop:'10px'}}>
                            <p><span>اکانت کاربری نداری ؟ </span> <Link style={{textDecoration:'none'}} to={'Registration'}>ثبت نام کن :)</Link></p>
                        </div>
                    </form>
                    <BtnSite label={'Regis'} onClick={() => navigate('/')} style={{ all: 'unset' }} />
                </div>
            </div>
        </div>
    )
}

export default LoginBox;