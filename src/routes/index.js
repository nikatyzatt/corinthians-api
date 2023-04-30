import express from "express";
import teams from "./teamsRoutes.js";
import states from "./statesRoutes.js";
import registers from "./registersRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send("Futebol Brasileiro")
  })

  app.use(
    express.json(),
    teams,
    states,
    registers
  )
}

export default routes