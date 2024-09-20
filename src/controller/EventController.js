const Evento = require("../models/evento");
  exports.create= async (req, res) => {
    try {
      const { nome, data, localizacao } = req.body;


      const eventCriado = await Evento.create({ nome, data, localizacao  });

      return res.status(200).json({
        msg: "Evento criado com sucesso!",
        evento: eventCriado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  exports.update= async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, data, localizacao } = req.body;

      console.log("Atualizando o evento");
      console.log({ id });
      console.log({ nome, data, localizacao  });

      const eventoUpdate = await Evento.findByPk(id);

      if ( eventoUpdate == null) {
        return res.status(404).json({
          msg: "Evento nao encontrado",
        });
      }

      const updated = await eventoUpdate.update({
        nome, email 
      });

      if (updated) {
        return res.status(200).json({
          msg: "Evento atualizado com sucesso!",
        });
      }

      return res.status(500).json({
        msg: "Erro ao atualizar evento",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  exports.getAll= async (req, res) => {
    try {
      const eventos = await Evento.findAll();
      return res.status(200).json({
        msg: "Eventos encontrados!",
        eventos,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  exports.getOne= async (req, res) => {
    try {
      const { id } = req.params;
      const eventoEncontrado = await Evento.findByPk(id);

      if (eventoEncontrado == null) {
        return res.status(404).json({
          msg: "Evento nao encontrado!",
        });
      }

      return res.status(200).json({
        msg: "Evento encontrado com sucesso!",
        evento: eventoEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  exports.delete= async (req, res) => {
    try {
      const { id } = req.params;

      const eventoFinded = await Evento.findByPk(id);

      if (eventoFinded == null) {
        return res.status(404).json({
          msg: "evento nao encontrado",
        });
      }
      await eventoFinded.destroy();

      return res.status(200).json({
        msg: "Evento deletado com sucesso!",
        evento: eventoFinded,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  }