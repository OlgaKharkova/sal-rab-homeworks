function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки
   
    let shippingSum;   
  if (productsSum == 0 || productsSum >= freeShippingMinSum){
    console.log("первое условие " + shippingSum);
    shippingSum = 0;
    } else  if (productsSum > 0 && productsSum < freeShippingMinSum){
        console.log("второе условие " + shippingSum);
        shippingSum = shippingPrice;
    }
   
   
    console.log("shippingSum " + shippingSum);
    
    console.log("freeShippingMinSum " + freeShippingMinSum);
    
    // Задание №2.1. Рассчитать доставку
    
    // создайте переменную shippingSum

    // если productsSum равно 0,
    // то shippingSum присвоить значение 0

    // если productsSum Больше или равна freeShippingMinSum,
    // то shippingSum присвоить значение 0

    // если productsSum больше 0 и меньше freeShippingMinSum,
    // то shippingSum присвоить значение shippingPrice

    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах
    let discountPrice;
    let discountSum;
    if (productsSum >= discountMinSum){
        discountSum = productsSum/100*discountPart;
      
    } else {
        discountSum = 0;
    } 
   

    


    // Задание №2.2. Рассчитать скидку

    // создайте переменную discountSum

    // если productsSum больше или равно discountMinSum,
    // то присвойте discountSum значение discountPart процентов от productsSum,
    // иначе присвойте discountSum значение 0

    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);
    let totalSum;
    totalSum = productsSum;
    totalSum = totalSum - discountSum;
    


    // Задача №2.3. Рассчитать скидки и доставку в корзине

    // создайте переменную totalSum

    // присвойте totalSum значение productsSum
    // уменьшите totalSum на discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
    
    totalSum = totalSum + shippingSum;
    let freeShipping = shippingSum == 0;
    freeShipping != shippingPrice;
    console.log("shippingsum " + shippingSum);

    console.log("shippingsum " + shippingSum);
    // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
