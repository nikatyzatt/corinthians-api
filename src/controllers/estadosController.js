import estados from "../schemas/Estado.js"

class EstadoController {

    static listarEstados = (req, res) => {
      estados.find((err, estados) => {
        if(err) {
          res.status(400).send({message: "Oops.. Internal Server Error"})
        } else {
          res.status(200).send(estados);
    }})
    }

    static listarEstadoPorId = (req, res) => {
      const id = req.params.id;

      estados.findById(id, (err, estados) => {
        if(err) {
          res.status(404).send({message: "Not found. Please make sure you send the right id on your request"})
        } else {
          res.status(200).send(estados);
        }
      })
    }

    static adicionarEstado = (req, res) => {
      let estado = new estados(req.body);
      const {nome} = req.body;

      estado.save((err) => {

      if(!nome) {
        res.status(422).send({message: "Please define nome and estado"})
      } else
      if(err) {
          res.status(400).send({message: `Request failed. Chek if this team isn't already saved.`})
        } else {
          res.status(201).send(estado.toJSON())
        }
      })
    }

    static atualizarEstado = (req, res) =>{
      const id = req.params.id;
      const {nome} = req.body;

      estados.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!nome) {
          res.status(422).send({message: "Please define the new name"})
        } else
        if(err) {
            res.status(400).send({message: `The request failed. Please check if you send the right id and if this state isn't already saved!`})
          } else {
          res.status(200).send({message: "Sucess! The state was updated as you requested =)"})
        }
      })
    }

    static excluirEstado = (req, res) => {
      const id = req.params.id;

      estados.findByIdAndDelete(id, (err) => {
        if(!err) {
          res.status(200).send({message: "Success! The state was deleted."})
        } else {
          res.status(500).send({message: "The request failed. Please check if you send the right id!"})
        }
      })
    }
}

export default EstadoController