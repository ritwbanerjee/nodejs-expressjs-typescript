import { Client, Config, CheckoutAPI } from '@adyen/api-library';
import dotenv from "dotenv";
import { resolve } from 'dns';

export class AdyenInilializer {

    constructor() {
        this.initAdyen();
    }

    initAdyen() {
        dotenv.config();
        const config = new Config();
        config.apiKey = process.env.API_KEY;
        config.merchantAccount = process.env.MERCHANT_ACCOUNT;
        const client = new Client({ config });
        client.setEnvironment("TEST");
        const checkout = new CheckoutAPI(client);

        const obj = {
            amount: {
                currency: "EUR",
                value: 1000,
            },
            countryCode: "NL",
            merchantAccount: "AllianzDirectECOM"
        };

        checkout.paymentMethods(obj).then((res: any) => {
            console.log('Available payment options: ', res);
        });
        
    }
}