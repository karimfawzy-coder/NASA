const {getAllPlanets} = require('../../models/planet');


function getAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets());
}

module.exports = {
  getAllPlanets,
};