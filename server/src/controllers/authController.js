import * as authService from "../services/authServices"

export const register = async (req, res) => {
   const { username, phone, password } = req.body;
   
   try {
      if (!username || !phone || !password) return res.status(400).json({
         error: 1,
         message: 'Missing inputs'
      })
      const response = await authService.register(req.body)
      return res.status(200).json(response)
   } catch (error) {
      res.status(500).json({
         error: -1,
         message: 'Fail at auth controller: ' + error
      })
   }
}

export const login = async (req, res) => {
   const { phone, password } = req.body;
   
   try {
      if ( !phone || !password) return res.status(400).json({
         error: 1,
         message: 'Missing inputs'
      })
      const response = await authService.login(req.body)
      return res.status(200).json(response)
   } catch (error) {
      res.status(500).json({
         error: -1,
         message: 'Fail at auth controller: ' + error
      })
   }
}