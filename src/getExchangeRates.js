export async function getExchangeRates() {
    let data = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    return await data.json()
}