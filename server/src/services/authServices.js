import db from '../models'
import bcrypt, { hashSync } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 as generateId } from 'uuid'
require('dotenv').config()

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12))

export const register = ({ username, phone, password }) => new Promise(async (resolve, reject) => {
   try {
      const response = await db.User.findOrCreate({
         where: { phone },
         defaults: {
            username,
            phone,
            password: hashPassword(password),
            id: generateId()
         }
      })
      const token = response[1] && jwt.sign({ id: response[0].id, phone: response[0].phone }, process.env.SECRET_KEY, { expiresIn: '60s' })
      resolve({
         error: token ? 0 : 2,
         message: token ? 'Register successfully!' : 'This phone number already exists!',
         token: token || null
      })
   } catch (error) {
      reject(error)
   }
})

export const login = ({ phone, password }) => new Promise(async (resolve, reject) => {
   try {
      const response = await db.User.findOne({
         where: { phone },
         raw: true
      })
      const isCorrectPassword = response && bcrypt.compareSync(password, response.password)
      const token = isCorrectPassword && jwt.sign({ id: response.id, phone: response.phone }, process.env.SECRET_KEY, { expiresIn: '60s' })
      resolve({
         error: token ? 0 : 2,
         message: token ? 'Login successfully!' : response ? 'Password is wrong!' : 'This phone number not found!',
         token: token || null
      })
   } catch (error) {
      reject(error)
   }
})