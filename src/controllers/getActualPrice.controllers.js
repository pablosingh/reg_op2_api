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