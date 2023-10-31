import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getFeatureItem } from "@/actions/get-feautres-items/get-features-items";
import data from "@/db.json"

const mockAxios = new MockAdapter(axios);

describe('getFeatureItem', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('Should fetches successfully data from an API', async () => {
        const responseData = { data };
        mockAxios.onGet('https://fake-api-ndrws.onrender.com/items').reply(200, responseData);

        const featureItem = await getFeatureItem();

        expect(featureItem).toEqual(responseData);
    });

    it('Should return data matching FeatureItem structure', async () => {
        const mockResponse = { data };

        mockAxios.onGet('https://fake-api-ndrws.onrender.com/items').reply(200, mockResponse);

        const response = await getFeatureItem();
        const featureItems = response.data; 

        expect(featureItems).toEqual(expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            title: expect.objectContaining({
              pt: expect.any(String),
              en: expect.any(String),
              es: expect.any(String),
            }),
            description: expect.objectContaining({
              pt: expect.any(String),
              en: expect.any(String),
              es: expect.any(String),
            }),
          })
        ]));
    });
});