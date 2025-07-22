import { useEffect, useState } from 'react';
import { useUserContext } from '../../../../context/contextBonk/ContextBonk';
import './Profile.css'
import uSerStore from '../../../../../redux/store';
import { useSelector } from 'react-redux';
function profile() {
  
  // const [ loginUser , setLoginUser ] = useState({})
  // useEffect(()=>{
  //   const getLoginUser = async()=>{
  //     setLoginUser(uSerStore.getState().loginUser)
  //   }
  //   getLoginUser()
  // },[])


  const {loginUser}=useSelector(state=>state)
  // console.log(state,'test');
  

  return (
    <div className='profileBox'> 
      <div className='impoBox'>
        {loginUser ? <div className='Row'>
          <div className='Row1'>
            <div style={{ display: 'flex', flexDirection: 'row' }}> 
              <div style={{color:'blue'}}>نام </div><div style={{margin:'0 5px'}}> : </div><div>{loginUser.name}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{color:'blue'}}>فامیلی </div><div style={{margin:'0 5px'}}> : </div><div>{loginUser.family}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{color:'blue'}}>جنسیت </div><div style={{margin:'0 5px'}}> : </div><div>{loginUser.gender}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}> 
              <div style={{color:'blue'}}>مدرک تحصیلی </div><div style={{margin:'0 5px'}}> : </div><div>{loginUser.education_status}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{color:'blue'}}>سن </div><div style={{margin:'0 5px'}}> : </div><div>{loginUser.age}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{color:'blue'}}>آدرس </div><div style={{margin:'0 5px'}}> : </div><div>{loginUser.address}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{color:'blue'}}>ایمیل </div><div style={{margin:'0 5px'}}> : </div><div>{loginUser.email}</div>
            </div>
          </div>
          <div className='Row2'>
            <img className='imgBox' src={loginUser.image} alt="" /> 
          </div>
        </div> : <></>}
      </div>
    </div>
  )
}

export default profile; 