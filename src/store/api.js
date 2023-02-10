export default {
    getOrderBook(token) {
        return fetch(`https://api.binance.com/api/v3/depth?symbol=${token}&limit=20`).then(response => response.json())
    }
}