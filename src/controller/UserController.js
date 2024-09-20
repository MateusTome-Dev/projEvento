const User = require("../models/User");

(exports.create = async (req, res) => {
  try {
    const { nome, email, eventoid } = req.body;

    const userCriado = await User.create({ nome, email, eventoid });

    return res.status(200).json({
      msg: "Usuario criado com sucesso!",
      user: userCriado,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Acione o Suporte" });
  }
}),
  (exports.update = async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, eventoid } = req.body;

      console.log("Atualizando o objeto");
      console.log({ id });
      console.log({ nome, email, eventoid });

      const userUpdate = await User.findByPk(id);

      if (userUpdate == null) {
        return res.status(404).json({
          msg: "usuario nao encontrado",
        });
      }

      const updated = await userUpdate.update({
        nome,
        email,
        eventoid,
      });

      if (updated) {
        return res.status(200).json({
          msg: "Usuario atualizado com sucesso!",
        });
      }

      return res.status(500).json({
        msg: "Erro ao atualizar usuario",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  }),
  (exports.getAll = async (req, res) => {
    try {
      const usuarios = await User.findAll();
      return res.status(200).json({
        msg: "Usuarios encontrados!",
        usuarios,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  }),
  (exports.getOne = async (req, res) => {
    try {
      const { id } = req.params;
      const usuarioEncontrado = await User.findByPk(id);

      if (usuarioEncontrado == null) {
        return res.status(404).json({
          msg: "Usuario nao encontrado!",
        });
      }

      return res.status(200).json({
        msg: "Usuario encontrado com sucesso!",
        usuario: usuarioEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  }),
  (exports.delete = async (req, res) => {
    try {
      const { id } = req.params;

      const userFinded = await User.findByPk(id);

      if (userFinded == null) {
        return res.status(404).json({
          msg: "user nao encontrado",
        });
      }
      await userFinded.destroy();

      return res.status(200).json({
        msg: "Usuario deletado com sucesso!",
        user: userFinded,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  });
  exports.getAllParticipantes = async (req, res) => {
    try {
      const { id } = req.params;
      const usuarios = await User.findAll({
        where: { eventoid: id },
        attributes: ["nome", "email", "eventoid"],
      });
   
      return res.status(200).json({
        msg: "Usuarios encontrados!",
        usuarios,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  };
  exports.getAllEventos = async (req, res) => {
    try {
      const { eventoid } = req.params;
      const usuarios = await User.findAll({
        where: { eventoid: eventoid },
        attributes: ["nome", "email", "eventoid"],
      });
  
      return res.status(200).json({
        msg: "Usuarios encontrados!",
        usuarios,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  };