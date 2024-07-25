import Operation from "../models/Operation.js";

export const createOperation = async (req, res) => {
    console.log(req.body);
    const { date, ticker, amount, price, total, buy, exchange, comment } = req.body;

    const newOperation = await Operation.create({ 
        // date,
        date: new Date(),
        ticker, 
        amount, 
        price, 
        total, 
        buy, 
        exchange, 
        comment 
});
    console.log("nueva op");
    console.log(newOperation);
    res.send('creating operation');
};

export const getOperation = (req, res) => {
    res.send('getting operation');
};