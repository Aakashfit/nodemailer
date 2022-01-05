var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aakash.tripathi@tribe.fitness',
    pass: '#########'
  }
});

var mailOptions = {
  from: 'aakash.tripathi@tribe.fitness',
  to: 'aakashkumartripathi7@gmail.com',
  subject: 'using nodemailer',
  text: 'good going'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
