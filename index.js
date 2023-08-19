function moneyButton(button) {
    const income = button.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].value;
    const incomeString = parseFloat(income);
    const food = button.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[3].value;
    const foodString = parseFloat(food);
    const rent = button.parentNode.parentNode.childNodes[3].childNodes[7].childNodes[3].value;
    const rentString = parseFloat(rent);
    const clothes = button.parentNode.parentNode.childNodes[3].childNodes[9].childNodes[3].value;
    const clothesString = parseFloat(clothes);
    // console.log(incomeString, foodString, rentString, clothesString,sum)
    // inputValue(income);
    // inputValue(food);
    // inputValue(rent);
    // inputValue(clothes);
    const totalExpense = foodString + rentString + clothesString;
    const balance = incomeString - totalExpense;
    innerSum('total-expenses', totalExpense);
    innerSum('balance', balance);
}

function presentElement(present) {
    const presentValue = present.parentNode.childNodes[3].value;
    const totalIncome = clearElement('total-income')
    const sumValue = parseFloat(presentValue) / 100;
    const saving = sumValue * totalIncome
    const remainingValue = remaining('balance');
    const sum = remainingValue - saving;
    innerSum('saving-amount', saving)
    innerSum('remaining', sum)
    clearElement('saving-amount');
}
function clearElement(element){
    const getElement = document.getElementById(element);
    const getElementString = getElement.value;
    const getElementNumber = parseFloat(getElementString);
    return getElementNumber;
}
function remaining(addElement) {
    const remaining = document.getElementById(addElement);
    const remainingString = remaining.innerText;
    const remainingNumber = parseFloat(remainingString);
    return remainingNumber;
}
function innerSum(element, sum) {
    const addElement = document.getElementById(element);
    addElement.innerText = sum;
}