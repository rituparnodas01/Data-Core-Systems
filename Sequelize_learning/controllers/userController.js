const { sequelize, QueryTypes } = require('sequelize');
const express = require('express');
var db = require('../models/sequelize');
const contact = require('../models/contact');
const education = require('../models/education');
var User = db.user;
var Contact = db.contact;
var Education = db.education;
var addUser = async (req, res) => {
    const jane = await User.create({ firstName: "Rohit", lastName: "Saha" });
    // const jane = User.build({ firstName: "Jane", lastName: "singh" });
    console.log(jane instanceof User); // true
    console.log(jane.firstName); // "Jane"
    // jane.set({firstName: "Rohit", lastName: "Das"});
    // await jane.update({ firstName: "Arun", lastName: "Roy" })
    // await jane.destroy();
    await jane.reload();

    // await jane.save();
    console.log('Jane was saved to the database!');
    console.log(jane.toJSON());
    res.status(200).json(jane.toJSON());
}

var getUsers = async (req, res) => {
    // const jane = await User.fetchAll({ firstName: "Roni", lastName: "Saha" });
    const data = await User.findAll()
    res.status(200).json({ data });
}


var getUserbyid = async (req, res) => {
    // const jane = await User.fetchAll({ firstName: "Roni", lastName: "Saha" });
    const data = await User.findOne({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ data });
}

var getteruser,
    getteruser = async (req, res) => {
        const data = await User.findAll({
            where: { lastName: "saha" }
        })
        res.status(200).json({ data });
    }

var setteruser,
    setteruser = async (req, res) => {
        const data = await User.create({
            firstName: "Arun",
            lastName: "Kumar"
        })
        res.status(200).json({ data });
    }

var virtualuser,
    virtualuser = async (req, res) => {
        const data = await User.findAll({
            where: { lastName: "saha" }
        })
        res.status(200).json({ data });
    }

var validateuser,
    validateuser = async (req, res) => {
        const data = await User.create({
            firstName: "Arun",
            lastName: "Kumar"
        })
        res.status(200).json({ data });
    }

var validationuser,
    validationuser = async (req, res) => {
        var data = {};
        var messages = {};
        try {
            data = await User.create({
                firstName: "Tarun",
                lastName: "Kumar"
            })
        } catch (e) {
            // console.log(e);
            let message;
            e.errors.forEach(error => {
                switch (error.validatorKey) {
                    case 'isAlpha':
                        message = 'Only alphabets are allowed'
                        break;
                }

                messages[error.path] = message
            })

        }
        res.status(200).json({ data, messages });
    }

var rawquser,
    rawquser = async (req, res) => {
        // const users = await db.sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT,
        //     model: User,
        //     mapToModel: true,
        //     plain: true // true for one record
        //  });


        // const users =await db.sequelize.query(
        //     'SELECT * FROM users WHERE id = ?',
        //     {
        //       replacements: ['6'],
        //       type: QueryTypes.SELECT
        //     }
        //   );
        // res.status(200).json({ data: users });

        // const users =await db.sequelize.query(
        //     'SELECT * FROM users WHERE id = :id',
        //     {
        //       replacements: {id :'6'},
        //       type: QueryTypes.SELECT
        //     }
        //   );

        const users = await db.sequelize.query(
            'SELECT * FROM users WHERE id IN(:id)',
            {
                replacements: { id: ['1', '6'] },
                type: QueryTypes.SELECT
            }
        );




        res.status(200).json({ data: users });
    }

var onetooneuser,
    onetooneuser = async (req, res) => {
        // var data = await User.create({firstName: 'Ram', lastName: 'Das'})
        // if (data && data.id){
        //     await Contact.create({permanent_address:"abc", current_address:"xyz",
        // "user_id": data.id})
        // }
        var data = await User.findAll({
            // include:Contact,
            attributes: ['firstName', 'lastName'],
            include: [{
                model: Contact,
                attributes: ['permanent_address', 'current_address']
            }],
            where: { id: '2' }
        })
        res.status(200).json({ data });
    }

var onetomanyuser,
    onetomanyuser = async (req, res) => {
        // await Contact.create({permanent_address:"saltlake", current_address:"USA",
        // "user_id": 1})
        // var data = await User.findAll({
        //     // include:Contact,
        //     attributes:['firstName', 'lastName'],
        //     include:[{
        //         model: Contact,
        //         attributes: ['permanent_address','current_address']
        //     }],
        //     // where:{id:'2'}
        // })

        var data = await Contact.findAll({
            // include:Contact,
            attributes: ['permanent_address', 'current_address'],
            include: [{
                model: User,
                attributes: ['firstName', 'lastName']
            }],
            // where:{id:'2'}
        })
        res.status(200).json({ data });
    }

var manytomanyuser,
    manytomanyuser = async (req, res) => {
        // var data = await User.create({firstName: 'Raja', lastName: 'Sen'})
        // if (data && data.id){
        //     await Contact.create({permanent_address:"xyz", current_address:"abc"})
        // }
        // var data={}
        // await Contact.create({permanent_address:"saltlake", current_address:"USA",
        // "user_id": 1})
        // var data = await User.findAll({
        //     // include:Contact,
        //     attributes:['firstName', 'lastName'],
        //     include:[{
        //         model: Contact,
        //         attributes: ['permanent_address','current_address']
        //     }],
        //     // where:{id:'2'}
        // })

        var data = await Contact.findAll({
            // include:Contact,
            attributes: ['permanent_address', 'current_address'],
            include: [{
                model: User,
                attributes: ['firstName', 'lastName']
            }],
            // where:{id:'2'}
        })
        res.status(200).json({ data });
    }

var paranoiduser,
    paranoiduser = async (req, res) => {
        // var data = await User.create({firstName: 'Rana', lastName: 'Sen'})
        var data = await User.destroy({
            where: {
              id: 1
            },
            // force: true
          });
        // var data = await User.restore({where:{
        //     id:6
        // }});
        // console.log('restored!');
        // var data = await User.findAll({
        //     // where: { foo: 'bar' }
        //     paranoid: false
        //   }); 
        // var data = await User.findByPk(6, { paranoid: false });
        res.status(200).json({ data });
    }

var eloadinguser,
    eloadinguser = async (req, res) => {

        // var data = await User.create({firstName: 'Ramu', lastName: 'Saha'})
        // if (data && data.id){
        //     await Contact.create({permanent_address:"abc", current_address:"xyz",'UserId':data.id})
        // }


        // var data = await User.findAll({
        //     where: {
        //         id:2
        //     },
        //     // include: Contact
        // var contactData = await data.getContacts();
        // })
        var data = await Contact.findAll({
            attributes: ['permanent_address', 'current_address'],
            include: [{
                model: User,
                attributes: ['firstName', 'lastName']
            }]

        })


        res.status(200).json({ data });
    }

var aeloadinguser,
    aeloadinguser = async (req, res) => {

        var data = await User.findAll({

            // include:[{
            // model:Contact,
            // required: false,
            // right: true
            // },{
            // model: Education
            // }]

            // include:{all:true, nested: true}

            // include: {
            //     model: Contact, Education
               
            // }
        })

        res.status(200).json({ data });
    }


    var insertalluser,
    insertalluser = async (req, res) => {

        // await Contact.create({
        //     permanent_address:'hapur',
        //     current_address: 'noida',
        //     users:{
        //         firstName:'Raj',
        //         lastName:'Sen'
        //     }
        // },{
        //     include:[db.contactUser]
        // })
            



        var data = await User.findAll({

            // include:[{
            // model:Contact,
            // required: false,
            // right: true
            // },{
            // model: Education
            // }]

            include:{all:true}

            // include: {
            //     model: Contact, Education
               
            // }
        })

        res.status(200).json({ data });
    }


module.exports = {
    addUser,
    getUsers,
    getUserbyid,
    getteruser,
    setteruser,
    virtualuser,
    validateuser,
    validationuser,
    rawquser,
    onetooneuser,
    onetomanyuser,
    manytomanyuser,
    paranoiduser,
    eloadinguser,
    aeloadinguser,
    insertalluser
}