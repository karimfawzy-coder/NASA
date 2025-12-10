const {planets} = require('../../models/planet');


function getAllPlanets(req, res) {
  // Implementation to get all planets
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
};