 export default function getCountInStorage() {
    let transactions = localStorage.getItem("TRANSACTIONS")
    if (transactions === null || transactions === undefined) {
        transactions = []
    }
    else {
        transactions = [JSON.parse(localStorage.getItem("TRANSACTIONS"))]
    }

    return transactions
}

