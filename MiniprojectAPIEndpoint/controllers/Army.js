"use strict";
const axios = require("axios");
const searchArmyData = new Map(); //super basic caching
let allArmies = []; //super basic caching

exports.searchArmy = async (req, res) => {

  try {
    let name = req.query.name;
    name = name.replace(/\s+/g, '-').toLowerCase();

    const armyAPI = process.env.ARMY_API_ENDPOINT + "/" + name;
    //console.log(armyAPI);
    if (searchArmyData.has(name)) 
    {
      console.log('found search army data in cache for '+name)
      res.status(200);
      res.json({ success: true, data: searchArmyData.get(name)});      
    }
    else
    {
      const response = await axios.get(armyAPI);
      searchArmyData.set('name', response.data.data);
      res.status(200);
      res.json({ success: true, data: response.data.data});
    }
    
  } catch (e) {
    res.status(400);
    res.json({ success: false, message: e.message });
    //throw Error(e.message);
  }
};

exports.getArmy = async (req, res) => {

  try {
    const armyAPI = process.env.ARMY_API_ENDPOINT;
    if (allArmies.length > 0)
    {
      console.log('found all army data in cache')
      res.status(200);
      res.json({ success: true, data: allArmies});
    }
    else {
      const response = await axios.get(armyAPI);
      allArmies = response.data.data;
      //console.log(response);
      res.status(200);
      res.json({ success: true, data: response.data.data});
    }
  } catch (e) {
    res.status(400);
    res.json({ success: false, message: e.message });
    //throw Error(e.message);
  }
};
