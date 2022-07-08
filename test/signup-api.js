const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../src/app');
const assert = chai.assert;
chai.use(chaiHttp);

describe('Signup API', () => {

    it('Validations', () => {
        const input = {
            first_name: '',
            last_name: 'Deshpande',
            email: 'gauravd292@gmail.com',
            password: '123456789',
            phone: '9049972671',
            subscribe: '1'
        }
        
        chai.request(server)
            .post('/signup')
            .send(input)
            .end((err, response) => {
                if(err){
                    console.log("error => ", err);
                    return;
                }
                assert.typeOf(response.body, `array`, `Validations are not an array`);

                assert.equal(
                    response.body[0], 
                    `First name can not be empty`,
                    `Please check validation message`);
            })
    });

    it('Subscription taken message', () => {
        const input = {
            first_name: 'Gaurav',
            last_name: 'Deshpande',
            email: 'gauravd292@gmail.com',
            password: '123456789',
            phone: '9049972671',
            subscribe: '1'
        }
        
        chai.request(server)
            .post('/signup')
            .send(input)
            .end((err, response) => {
                if(err){
                    console.log("error => ", err);
                    return;
                }
                assert.equal(
                    response.body, 
                    `Hello ${input.first_name} ${input.last_name}, Thank you for signing up. You would be receiving our periodic newsletters to your email: ${input.email}`,
                    `Please check subscription message`);
            })
    });
})