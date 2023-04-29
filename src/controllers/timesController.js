import times from "../schemas/Time.js"

class TimeController {

    static listarTimes = (req, res) => {
      times.find((err, times) => {
        if(err) {
          res.status(400).send({message: "Oops.. Internal Server Error"})
        } else {
          res.status(200).send(times);
    }})
    }

    static listarTimePorId = (req, res) => {
      const id = req.params.id;

      times.findById(id, (err, times) => {
        if(err) {
          res.status(404).send({message: "Not found. Please make sure you send the right id on your request"})
        } else {
          res.status(200).send(times);
        }
      })
    }

    static adicionarTime = (req, res) => {
      let time = new times(req.body);
      const {nome, estado} = req.body;

      time.save((err) => {

      if(!nome || !estado) {
        res.status(422).send({message: "Please define nome and estado"})
      } else
      if(err) {
          res.status(400).send({message: `Request failed. Chek if this team isn't already saved.`})
        } else {
          res.status(201).send(time.toJSON())
        }
      })
    }

    static atualizarTime = (req, res) =>{
      const id = req.params.id;
      const {nome, estado} = req.body;

      times.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!nome && !estado) {
          res.status(422).send({message: "Please define nome or estado"})
        } else
        if(err) {
            res.status(400).send({message: `The request failed. Please check if you send the right id and if this team isn't already saved!`})
          } else {
          res.status(200).send({message: "Sucess! The team was updated as you requested =)"})
        }
      })
    }

    static excluirTime = (req, res) => {
      const id = req.params.id;

      times.findByIdAndDelete(id, (err) => {
        if(!err) {
          res.status(200).send({message: "Success! The team was deleted."})
        } else {
          res.status(500).send({message: "The request failed. Please check if you send the right id!"})
        }
      })
    }
}

export default TimeController