const { response, request } = require('express');
const jwt = require('jsonwebtoken')

const validarJWT = (req = request, res = response, next) => {

  const token = req.header('x-token');

  if( !token ) {
    return res.status(401).json({
      ok: false,
      Message: 'Token no válido'
    })
  }

  try {
    const { uid, name } = jwt.verify(
      token,
      process.env.SECRET_KEY
    );

    req.uid = uid
    req.name = name

  } catch (error) {
    console.log(error);
    return res.status(401).json({
      ok: false,
      Message: 'Token no coincide'
    })
  }
  next();
  
}


module.exports = {
  validarJWT,
}