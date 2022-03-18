#!/usr/bin/node
export default function submitted() {
    let email = $('#email').val();
    let name = $('#name').val();
    let message = $('#message').val();
    let user;
    // import fs from 'fs';
    let fs = require('fs');
    user = {
    //'id': $id + 1,
    'name': name,
    'message': message,
    'email': email
    };
    let usr = user;
    let data = JSON.stringify(usr, null, 4);
    let read = fs.readFileSync("users.json","utf-8");
    let users = JSON.parse(read);
    users.push(usr);
    read = JSON.stringify(users);
    try {
      fs.writeFileSync('users.json', users);
      $('#success').html("Message Submitted Successfully! &times;");
      $('#success').css('display', 'block');
    } catch (error) {
      $('#success').html(err);
    }
  }
