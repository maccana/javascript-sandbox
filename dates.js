function getFutureDate(year, month, day) {
    const today = new Date(year, month, day)
    const futureDate = new Date()
    // Set future date - 13 days later
    futureDate.setDate(today.getDate() + 13)
    console.log('Future date: ', futureDate)
}


console.log(getFutureDate(2023, 0, 8))