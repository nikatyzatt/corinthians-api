import teams from "../schemas/Team.js"

class TeamController {

    static getAllTeams = (req, res) => {
      teams.find((err, teams) => {
        if(err) {
          res.status(400).send({message: "Oops.. Internal Server Error"})
        } else {
          res.status(200).send(teams);
    }})
    }

    static getTeam = (req, res) => {
      const id = req.params.id;

      teams.findById(id, (err, teams) => {
        if(err) {
          res.status(404).send({message: "Not found. Please make sure you send the right id on your request"})
        } else {
          res.status(200).send(teams);
        }
      })
    }

    static addNewTeam = (req, res) => {
      let team = new teams(req.body);
      const {name, state_id} = req.body;

      team.save((err) => {

      if(!name || !state_id) {
        res.status(422).send({message: "Please define the name and state id"})
      } else
      if(err) {
          res.status(400).send({message: `Request failed. Check if this team isn't already saved, and if the state is registered.`})
        } else {
          res.status(201).send(team.toJSON())
        }
      })
    }

    static updateTeam = (req, res) =>{
      const id = req.params.id;
      const {name, state_id} = req.body;

      teams.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!name && !state_id) {
          res.status(422).send({message: "Please define name or state"})
        } else
        if(err) {
            res.status(400).send({message: `The request failed. Please check if you send the right id and if this team isn't already saved!`})
          } else {
          res.status(200).send({message: "Sucess! The team was updated as you requested =)"})
        }
      })
    }

    static deleteTeam = (req, res) => {
      const id = req.params.id;

      teams.findByIdAndDelete(id, (err, deletedTeam) => {
        if(err) {
          res.status(500).send({message: "The request failed. Please check if you send the right id!"})
        } else if (deletedTeam == null) {
          res.status(404).send({message: "This team doesn't exists. Seems like you already deleted it!"})
        }
         else {
          res.status(200).send({message: "Success! The team was deleted."})
        }
      })
    }


    static findTeam = (req, res) => {
      const state = req.query.state
  
      teams.find({'state': state}, {}, (err, teams) => {
        res.status(200).send(teams);
  
      })
    }
  
}

export default TeamController