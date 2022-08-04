const Skill = require('../models/skill')

function index(req, res, next) {
    res.render('./skills.ejs', {
        langSkills: Skill.getAll(),
        frameSkills: Skill.getAllFrame()
    })
};

function show(req, res){
    res.render('./show.ejs', {
		langSkills: Skill.getOne(req.params.id)
	})
    console.log(req.params.id)
}

function newSkill(req, res){
    res.render('./new.ejs')
}

function create(req, res){
    Skill.create(req.body)
    res.redirect('/skills');
}

function deleteLang(req, res){
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

function edit(req, res){
    res.render('./edit.ejs')
    Skill.edit(req.body, value)
    // res.redirect('/skills')
}

module.exports = {
    index,
    show,
    newSkill,
    create,
    deleteLang,
    edit
};