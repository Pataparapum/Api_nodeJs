import { assert } from 'chai';
import { use } from 'chai';
import superagent from 'chai-superagent';
import request from 'supertest'
import {app} from '../../app.js'
import { registerCity} from '../ciudad.controller.js';

use(superagent());

before(() => {
    registerCity('Santiago', 14, 15);
})

describe('Suite de pruebas database de ciudad', () => {
    it('Should return the city name and data', (done) => {
        request(app)
            .get('/ciudades/Santiago')
            .end((err, res) => {
            
                assert.equal(res.statusCode, 200);
                assert.equal(res.body.ciudad, 'Santiago');
                assert.equal(Object.keys(res.body.datos).length, 2);
                assert.equal(res.body.datos.latitud, 14);
                assert.equal(res.body.datos.longitud, 15);
                done()
            })
    })
})