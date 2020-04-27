const request = require("./request");

const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http')

describe('request_test', function () {

    // параллельно
    it('request_test_0', () => {
        return request(5,0)
            .then((res) => {
                expect(res.length).toBe(5);
            })
    });
	
	// последовательно
	it('request_test_1', () => {
        return request(10,1)
            .then((res) => {
                expect(res.length).toBe(10);
            })
    });
});
