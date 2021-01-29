export class APIService {
    static sendMail(name, company, comment) {
        return fetch('/sendEmail', {
            method:
                'POST',
            body:
                JSON.stringify({name, company, comment}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

}