import express from "express";
import times from "./timesRoutes.js"
import estados from "./estadosRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send("Futebol Brasileiro")
  })

  app.use(
    express.json(),
    times,
    estados
  )
}

export default routes