#!/usr/bin/node
function submitted() {
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
    let read = fs.readFileSync("./users.json","utf-8");
    let users = JSON.parse(read);
    users.push(usr);
    users = JSON.stringify(users);
    console.log(users_);
    $('#success').css('display', 'block');
    // try {
    fs.writeFileSync('./users.json', users);
    $('#success').html("Message Submitted Successfully! &times;");
    $('#success').css('display', 'block');
    // } catch (error) {
    //   $('#success').html(err);
    // }
  }
  
  $('#submitbutton').click(function () {
    $('.contact').css('display', 'none');
    submitted();
  });
