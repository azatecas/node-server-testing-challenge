const request = require('supertest');
const server = require('../api/server');

describe('server.js endpoints', () => {
    describe('GET /', () => {
        it('should return 200 ok, server is running', async () => {
            const response = await request(server).get('/')
            expect(response.status).toBe(200);
        })

        it('should return 200 ok, /api/characters', async () => {
            const response = await request(server).get('/api/characters')
            expect(response.status).toBe(200);
        })
        it('should return object, /api/characters', async () => {
            const response = await request(server).get('/api/characters')
            expect(response.type).toMatch(/json/i);
            
        })

        it(' should return 500 if invalid input', async () => {
            return request(server)
                .post('/api/characters/char')
                .send({ 
                    "username": "kyle2",                    
                })
                .expect(500);
        })
    })
})
