import React, { useEffect, useState } from 'react'
import { Button, InputForm } from '../../components'
import { useLocation } from 'react-router-dom'
import { apiRegister } from '../../services/authService'
import * as actions from '../../store/actions'
import { useDispatch } from 'react-redux'

const Login = () => {
   const location = useLocation()
   const dispatch = useDispatch()
   const [isRegister, setIsRegister] = useState(location.state?.flag)
   const [payload, setPayload] = useState({
      username: '',
      phone: '',
      password: ''

   })

   useEffect(() => {
      setIsRegister(location.state?.flag)
   }, [location.state?.flag])

   const handleSubmit = async () => {
      dispatch(actions.register(payload))
   }

   return (
      <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
         <h3 className='font-semibold text-2xl mb-3'>{isRegister ? 'Đăng ký' : 'Đăng nhập'}</h3>
         <div className='w-full flex flex-col gap-5'>
            {isRegister && <InputForm label={'Họ tên'} value={payload.username} setValue={setPayload} type={'username'} />}
            <InputForm label={'Số điện thoại'} value={payload.phone} setValue={setPayload} type={'phone'} />
            <InputForm label={'Mật khẩu'} value={payload.password} setValue={setPayload} type={'password'} />
            <Button
               text={isRegister ? 'Đăng ký' : 'Đăng nhập'}
               bgColor={'bg-secondary1'}
               textColor={'text-white'}
               fullWidth
               onClick={handleSubmit}
            />
         </div>
         <div className='mt-7 flex items-center justify-between'>
            {isRegister
               ? <small>Bạn đã có tài khoản? <span
                  onClick={() => setIsRegister(false)}
                  className='text-blue-500 hover:underline cursor-pointer'
               >
                  Đăng nhập ngay
               </span></small>
               : <>
                  <small className='text-blue-700 hover:text-red-700 cursor-pointer'>Quên mật khẩu?</small>
                  <small onClick={() => setIsRegister(true)} className='text-blue-700 hover:text-red-700 cursor-pointer'>Tạo tài khoản mới</small>
               </>}
         </div>
      </div >
   )
}

export default Login