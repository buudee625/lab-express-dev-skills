const langDB = require('../data/LangSkillsDB');
const frameDB = require('../data/FrameSkillsDB');

module.exports = {
    getAll,
    getAllFrame,
    getOne,
    create,
    deleteOne,
    edit
  };

function getAll() {
	return langDB;
  };

function getAllFrame() {
  return frameDB;
}

function getOne(id) {
  return langDB.find(obj => obj.id === parseInt(id));
};

function create(lang) {
	lang.id = langDB.length
	lang.learned = false;
	langDB.push(lang);
  console.log(langDB)
}

function deleteOne(id) {
	const idx = langDB.findIndex(i => i.id === parseInt(id));
	langDB.splice(idx, 1);
  }

function edit(id, value) {
  const idx = langDB.findIndex(i => i.id === parseInt(id));
  langDB[idx].lang = value;
}