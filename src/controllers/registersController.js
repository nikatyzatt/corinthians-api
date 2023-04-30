import registers from "../schemas/Register.js";

class RegisterController {

    static getAllRegisters = (req, res) => {
      registers.find((err, registers) => {
        if(err) {
          res.status(500).send({message: "Oops.. Internal Server Error"})
        } else {
          res.status(200).send(registers);
    }})
    }

    static getRegister = (req, res) => {
      const id = req.params.id;

      registers.findById(id, (err, registers) => {
        if(err) {
          res.status(404).send({message: "Not found. Please make sure you send the right id on your request"})
        } else {
          res.status(200).send(registers);
        }
      })
    }

    static addNewRegister = (req, res) => {
      let register = new registers(req.body);
      const {name, username, team} = req.body;

      register.save((err) => {

      if(!name || !username || !team) {
        res.status(422).send({message: "Please define a name, username and the team id!"})
      } else
      if(err) {
          res.status(400).send({message: `Request failed. Check if this username isn't already used and if you send the right team id`})
        } else 
        if (!err){
            if(team === "644eb63a91e62c4b9ea18579") {
                res.status(200).send({message: "Viciado(a) em sofrer! VAI CORINTHIANS!!!"}, register.toJSON())
            } else {
          res.status(201).send(register.toJSON())
        }}
      })
    }

    static updateRegister = (req, res) =>{
      const id = req.params.id;
      const {name, username, team} = req.body;

      registers.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!name && !username && !team) {
          res.status(422).send({message: "Please define name or state"})
        } else
        if(err) {
            res.status(400).send({message: `The request failed. Please check if you send the right id and the right data!`})
          } else {
          res.status(200).send({message: "Sucess! The register was updated as you requested =)"})
        }
      })
    }

    static deleteRegister = (req, res) => {
      const id = req.params.id;

      registers.findByIdAndDelete(id, (err, deletedregister) => {
        if(err) {
          res.status(500).send({message: "The request failed. Please check if you send the right id!"})
        } else if (deletedregister == null) {
          res.status(404).send({message: "This register doesn't exists. Seems like you already deleted it!"})
        }
         else {
          res.status(200).send({message: "Success! The register was deleted."})
        }
      })
    }

    static findRegister = (req, res) => {
      const team = req.query.team
      const name = req.query.name
  
      const promiseRegistersByTeam = new Promise((resolve, reject) => {
        if (team) {
        registers.find({'team': team}, {}, (err, registers) => {
        if (err) reject(err);
        resolve(registers);
        })
        } else {
        resolve([]);
        }
        });
        
        const promiseRegistersByName = new Promise((resolve, reject) => {
        if (name) {
        registers.find({'name': name}, {}, (err, registers) => {
        if (err) reject(err);
        resolve(registers);
        })
        } else {
        resolve([]);
        }
        });
        
        Promise.all([promiseRegistersByTeam, promiseRegistersByName])
        .then(([registersByTeam, registersByName]) => {
        const registers = registersByTeam.concat(registersByName);
        res.status(200).send(registers);
        })
        .catch(err => {
        res.status(404).send({ message: "No results. Check if you send the right data"});
        })
        }

  
}

export default RegisterController