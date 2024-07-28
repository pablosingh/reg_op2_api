import Cripto from "../models/Cripto.js";
const apiKeyCoinM = '6b555911-d0f2-417f-9bd1-95cf5ea375aa';

import fetch from 'node-fetch';
export const getActualPrice = async (req, res) => {
    const { ticker } = req.params;
    try {
        await fetch(`https://www.binance.us/api/v3/ticker/price?symbol=${ticker.toUpperCase()}`)
            .then(responseApi => responseApi.json())
            .then(responseApi => res.json(responseApi))
            .catch(err => res.json({message: err}) );
    } catch (error) {
        res.json({message: error});
    }
};

export const getActualPriceFunc = async (ticker) => {
    try {
        let price = 0;
        await fetch(`https://www.binance.us/api/v3/ticker/price?symbol=${ticker.toUpperCase()}`)
            .then(responseApi => responseApi.json())
            .then(responseApi => price=responseApi.price)
            .catch(err => price=err );
        return price;
    } catch (error) {
        return {message: error};
    }
};

export const updatePriceDB = async (req, res) =>{
    const btcDB = await Cripto.findOne({
        where: {
            cripto: "BTCUSDT"
        }
    });
    console.log(btcDB);
    const dateDB = new Date(btcDB.dataValues.update);
    const today = new Date();
    const difdate = Math.round((today-dateDB)/86400000);
    console.log(difdate);
    res.json({ ok: "ok"});
};
