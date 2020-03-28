 const request = require ('supertest');
 const app = require ('../../app');
 const connection = require ('../../database/connection');

describe('ONG', () =>{
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () =>{
        await connection.destroy();
    });
    
    it('shoud be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD5",
	        email: "apad@apad.com.br",
	        numero: "85997491480",
            city: "Pacoti",
	        uf: "CE"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});