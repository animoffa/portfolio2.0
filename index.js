const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anastasiatest0550@gmail.com',
        pass: 'qwerty0550'
    }
});

app.post('/sendEmail', (req, res) => {
    const {name, company, comment} = req.body;

    const template = `
<body style="margin: 0 auto;max-width: 300px;font-family: 'Roboto', sans-serif;">
    <div style="margin: 0 auto;max-width: 300px;padding: 20px 20px;border: 3px solid #2CAAE2;border-radius: 20px;box-shadow: 0 0 1px 1px #2CAAE2;">
        <h3 style="text-align: center;margin-bottom: 15px;">Новое предложение</h3>
        <hr style="width: 25%;border: 1px solid #2CAAE2;margin-bottom: 25px;">
        <div class="form">
            <div style="display: flex;margin: 15px 0px;">
                <strong style="min-width: 105px;margin-right: 3px;">Имя:</strong><span style="word-wrap: break-word;overflow-wrap: anywhere;">${name}</span>
            </div>
            <div style="display: flex;margin: 15px 0px;">
                <strong style="min-width: 105px;margin-right: 3px;">Компания:</strong><span style="word-wrap: break-word;overflow-wrap: anywhere;">${company}</span>
            </div>
           <div style="display: flex;margin: 15px 0px;"><strong style="min-width: 105px;margin-right: 3px;">Комметарий:</strong><span style="word-wrap: break-word;overflow-wrap: anywhere;"> ${comment}</span></div>
        </div>
    </div>
</body>
    `;
    const mailData = {
        from: `anastasiatest0550`,
        to: 'animoffa1352@gmail.com',
        subject: '[Landing] work',
        text:'hello',
        html: template
    };

    transporter.sendMail(mailData, (err) => {
        if (err) {
            res.status(500).send('Ошибка сервера, повторите попытку позже!');
            return console.log(err.toString());
        }
        res.status(200).send();
    });
});

app.listen(process.env.PORT || 8080, () => console.log(`Server is running on 8080 port!`));
