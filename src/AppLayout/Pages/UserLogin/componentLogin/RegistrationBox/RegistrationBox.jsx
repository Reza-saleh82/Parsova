import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import './RegistrationBox.css'
import BtnSite from '../../../../component/utils/btnSite/btnSite';
import TextBox from '../../../../component/utils/TextBox/TextBox.jsx';
import { Form } from 'react-bootstrap';
import { useUserContext } from '../../../../context/contextBonk/ContextBonk.jsx';

function RegistrationBox() {
    const navigate = useNavigate()
    const {handleRegis} = useUserContext()
    const { register, handleSubmit, formState: { errors } } = useForm()


    const submit = (data) => {
        console.log(':::::::::::::::::::::::::');
        console.log(data);
        
        handleRegis(data)
    }

    return (
        <div className="Login">
            <div className="LoginBox1">
                <div>
                    <form className='formRe' action="" onSubmit={handleSubmit(submit)}>
                        <div>
                            <div className='inputBox'>
                                <TextBox label={'نام :'} errors={errors} register={register} type={'text'} name={'name'} validdate={{
                                    required: { value: true, massage: 'Enter a phrase !!!' },
                                    minLength: {
                                        value: 2,
                                        message: 'Enter more than 4 letters'
                                    }
                                }} />
                            </div>
                            <div className='inputBox'>
                                <TextBox label={'فامیل :'} errors={errors} register={register} type={'text'} name={'family'} validdate={{
                                    required: { value: true, massage: 'Enter a phrase !!!' },
                                    minLength: {
                                        value: 2,
                                        message: 'Enter more than 4 letters'
                                    }
                                }} />
                            </div>
                            <div className='inputBox'>
                                <TextBox label={'مدرک تحصیلی :'} errors={errors} register={register} type={'text'} name={'education_status'} validdate={{
                                    required: { value: true, massage: 'Enter a phrase !!!' },
                                    minLength: {
                                        value: 2,
                                        message: 'Enter more than 4 letters'
                                    }
                                }} />
                            </div>
                            <div className='inputBox'>
                                <TextBox label={'سن :'} errors={errors} register={register} type={'number'} name={'age'} validdate={{
                                    required: { value: true, massage: 'Enter a phrase !!!' },
                                    min: {
                                        value: 10,
                                        message: 'Age must be over 10 years old'
                                    },
                                    max: {
                                        value: 50,
                                        message: 'Age must be less 50 years old'
                                    },
                                    valueAsNumber: true
                                }} />
                            </div>
                            <div className='inputBox'>
                                <TextBox label={'آدرس ایمیل : '} errors={errors} register={register} type={'email'} name={'email'} validdate={{
                                    required: { value: true, massage: 'Enter a phrase !!!' }
                                }} />
                            </div>
                            <div>
                                <Form.Select {...register('gender')}>
                                    <option>جنسیت :</option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </Form.Select>
                            </div>
                            <div className='inputBox'>
                                <TextBox label={'نام کاربری : '} errors={errors} register={register} type={'text'} name={'userName'} validdate={{
                                    required: { value: true, massage: 'Enter a phrase !!!' },
                                    minLength: {
                                        value: 2,
                                        message: 'Enter more than 4 letters'
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'Less than 10 characters'
                                    }
                                }} />
                            </div>
                            <div className='inputBox'>
                                <TextBox label={'رمز عبور : '} errors={errors} register={register} type={'text'} name={'password'} validdate={{
                                    required: { value: true, massage: 'Enter a phrase !!!' },
                                    minLength: {
                                        value: 4,
                                        message: 'Enter more than 4 letters.'
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'Enter less than 10 letters.'
                                    }
                                }} />
                            </div>
                        </div>
                        <div>
                            <button style={{borderRadius:'10px',backgroundColor:'white'}}>click</button>
                        </div>
                        <div style={{marginTop:'10px'}}>
                            <p onClick={()=>navigate('/')}><span>اکانت کاربری داری !!!</span> <Link style={{textDecoration:'none'}} to={'UserLogin'}>ورود :)</Link></p>
                        </div>

                    </form>
                    {/* <BtnSite label={'Regis'} onClick={() => navigate('/')} style={{ all: 'unset' }} /> */}
                </div>
            </div>
        </div>
    )
}

export default RegistrationBox;