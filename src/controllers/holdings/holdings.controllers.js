import Holding from "../../models/Holding.js";
import User from "../../models/User.js";
import Operation from '../../models/Operation.js';

export const getHoldingsByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const foundHoldings = await Holding.findAll({
            where: {
                UserId: userId
            },
            include: [ Operation, User ]
        });
        res.json(foundHoldings);
    } catch (error) {
        res.json({msg: error});
    }
};


export const getHoldings = async (req, res) => {
    try {
        const foundHoldings = await Holding.findAll({
            include: [ Operation, User ]
        });
        res.json(foundHoldings);
    } catch (error) {
        res.json({msg: error});
    }
};

export const createHolding = async (req, res) => {
    const { date, ticker, amount, price, total, comment, UserId } = req.body;
    const toCreate = { 
        date: date,
        ticker: ticker?.toUpperCase(), 
        amount: Number.parseFloat(amount),
        price: Number.parseFloat(price), 
        total: Number.parseFloat(total), 
        comment,
        UserId,
    };
    try {
        const newHolding = await Holding.create(toCreate);
        res.json(newHolding);
    } catch (error) {
        res.json({msg: error});
    };
};

export const updateHolding = async (req, res) => {
    const { ticker, HoldingId, id, comment } = req.body;
    try {
        const foundHolding = await Holding.findOne({
            where: {
                id
            },
            include: [ Operation ]
        });
        if(foundHolding){
            const objToUpdate = foundHolding.Operations?.reduce((acumulador, op) => {
                if(op.buy == true){
                    acumulador.amount += op.amount;
                    acumulador.total += op.total;
                }else{
                    acumulador.amount -= op.amount;
                    acumulador.total -= op.total;
                }
                return acumulador;
            }, {});
            objToUpdate.price = objToUpdate.total / objToUpdate.amount;
            foundHolding.comment = comment;
            foundHolding.amount = objToUpdate.amount;
            foundHolding.total = objToUpdate.total;
            foundHolding.price = objToUpdate.price;
            await foundHolding.save();
            res.json(foundHolding);
        }else{
            res.json({msg: "Holding not found"});
        }
    } catch (error) {
        res.json({msg: error});
    }
};