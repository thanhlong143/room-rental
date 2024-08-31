import React, { useCallback } from "react"
import logo from "../../assets/logo.png"
import { Button } from "../../components"
import icons from "../../utils/icons"
import { useNavigate } from "react-router-dom"
import { path } from "../../utils/path"

const { AiOutlinePlusCircle } = icons

const Header = () => {
   const navigate = useNavigate()
   const goLogin = useCallback(() => {
      navigate(path.LOGIN)
   }, [])

   return (
      <div className="w-1100">
         <div className="w-full flex items-center justify-between">
            <img
               src={logo}
               alt="logo"
               className="w-[70px] h-[70px] object-cover"
            />
            <div className="flex items-center gap-1">
               <span>Xin chào!</span>
               <Button
                  text={"Đăng nhập"}
                  textColor={"text-white"}
                  bgColor={"bg-blue-600"}
                  onClick={goLogin}
               />
               <Button
                  text={"Đăng ký"}
                  textColor={"text-white"}
                  bgColor={"bg-blue-600"}
                  onClick={goLogin}
               />
               <Button text={"Đăng tin mới"} textColor={"text-white"} bgColor={"bg-secondary2"} Icon={AiOutlinePlusCircle} />
            </div>
         </div>
      </div>
   )
}

export default Header