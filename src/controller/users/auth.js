const { response } = require('express');
const brycpt = require('bcryptjs');
const { User } = require('../../models/users/User');
const { generarJWT } = require('../../helpers/jwt');


const crearUsuario = async (req, res = response) => {

  const { username, email, password } = req.body;

  try {

    let usuario = await User.findOne({ where: { email } });

    if ( usuario ) {
      return res.status(400).json({
        ok: false,
        Message: 'Un usuario existe con ese correo'
      })
    }

    usuario = await User.create(req.body);

    const salt = brycpt.genSaltSync();
    usuario.password = brycpt.hashSync( password, salt );

    const token = await generarJWT(usuario._id, usuario.username)

    await usuario.save()

    res.status(201).json({
      ok: true,
      uid: usuario._id,
      name: usuario.username,
      token
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      Message: 'Se produjo un error a la hora de crear el usuario'
    })
  }

}

const loginUsuario = async (req, res) => {
  const { email, password } = req.body
  try {
    let usuario = await User.findOne({ where: { email } });

    if ( !usuario ) {
      return res.status(400).json({
        ok: false,
        Message: 'Un usuario existe con ese correo o no se encuentra registrado' //No es recomendable dar el error eacto
      })
    }

    const validPassword = brycpt.compareSync( password, usuario.password )

    if ( !validPassword ) {
      return res.status(400).json({
        ok: false,
        Message: 'Contraseña inválida' //No es recomendable dar el error eacto
      })
    }

    //Generar JWT
    const token = await generarJWT(usuario._id, usuario.username)

    res.status(200).json({
      ok: true,
      uid: usuario._id,
      name: usuario.username,
      token
    })
    
  } catch (error) {
    console.log('Has an error on auth controller');
    console.log(error);
    res.status(500).json({
      ok: false,
      Message: 'Se produjo un error a la hora de crear el usuario'
    })
  }

}

const validateTokenAndAuth = async (req, res) => {
  
  const { uid, name } = req

  const token = await generarJWT(uid, name)

  res.json({
    ok: true,
    token,
    uid, name,
  })

}


module.exports = {
  crearUsuario,
  loginUsuario,
  validateTokenAndAuth

}