"use strict";
const axios = require("axios");

exports.searchArmy = async (req, res) => {

  try {
    let name = req.query.name;
    name = name.replace(/\s+/g, '-').toLowerCase();
    const armyAPI = process.env.ARMY_API_ENDPOINT + "/" + name;
    //console.log(armyAPI);
    const response = await axios.get(armyAPI);
    console.log(response.data);
    res.status(200);
    res.json({ success: true, data: response.data.data});
    
  } catch (e) {
    res.status(400);
    res.json({ success: false, message: e.message });
    //throw Error(e.message);
  }
};

exports.getArmy = async (req, res) => {

  try {
    const armyAPI = process.env.ARMY_API_ENDPOINT;
    const response = await axios.get(armyAPI);
    //console.log(response);
    res.status(200);
    res.json({ success: true, data: response.data.data});
    
  } catch (e) {
    res.status(400);
    res.json({ success: false, message: e.message });
    //throw Error(e.message);
  }
};
