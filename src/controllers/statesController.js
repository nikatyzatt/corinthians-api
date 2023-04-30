import states from "../schemas/State.js"

class StateController {

    static getAllStates = (req, res) => {
      states.find((err, states) => {
        if(err) {
          res.status(400).send({message: "Oops.. Internal Server Error"})
        } else {
          res.status(200).send(states);
    }})
    }

    static getState = (req, res) => {
      const id = req.params.id;

      states.findById(id, (err, states) => {
        if(err) {
          res.status(404).send({message: "Not found. Please make sure you send the right id on your request"})
        } else {
          res.status(200).send(states);
        }
      })
    }

    static addNewState = (req, res) => {
      const { name } = req.body;
      
      if (!name) {
      res.status(422).send({ message: "Please define name" });
      return;
      }
      
      let state = new states(req.body);
      
      state.save((err) => {
         if (err) {
      res.status(400).send({message: "Request failed. Check if this state isn't already saved." })
        } else {
      res.status(201).send(state.toJSON())
        }
      })
     }

    static updateState = (req, res) =>{
      const id = req.params.id;
      const {name} = req.body;

      states.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!name) {
          res.status(422).send({message: "Please define the new name"})
        } else
        if(err) {
            res.status(400).send({message: `The request failed. Please check if you send the right id and if this state isn't already saved!`})
          } else {
          res.status(200).send({message: "Sucess! The state was updated as you requested =)"})
        }
      })
    }

    static deleteState = (req, res) => {
      const id = req.params.id;

      states.findByIdAndDelete(id, (err, deletedState) => {
        if(err) {
          res.status(500).send({message: "The request failed. Please check if you send the right id!"})
        } else if (deletedState == null) {
          res.status(404).send({message: "This state doesn't exists. Seems like you already deleted it!"})
        }
         else {
          res.status(200).send({message: "Success! The state was deleted."})
        }
      })
    }
}

export default StateController