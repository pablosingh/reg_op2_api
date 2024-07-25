import Operation from "../models/Operation.js";

export const createOperation = async (req, res) => {
    console.log(req.body);
    const { date, ticker, amount, price, total, buy, exchange, comment } = req.body;
    try {
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
        res.json(newOperation);
    } catch (error) {
        res.json({message: error});
    }
};

export const getOperation = async (req, res) => {
    try {
        const arrayOp = await Operation.findAll();
        res.json(arrayOp);   
    } catch (error) {
        res.json({message: error});
    }
};