'use strict';

const sgMail = require('@sendgrid/mail');
const config = require('../config');

sgMail.setApiKey(config.sendgridKey);


exports.send = async (to, subject, body) => {

    sgMail.send({
        to: to,
        from: 'r.normando@outlook.com',
        subject: subject,
        html: body,
    });
}