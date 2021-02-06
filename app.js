var myName = document.getElementById('myName');
myName.innerText = 'Ernest'

var menuObj = {
        // appitizer
        wings: {
            checked: false,
            value: 6.99,
            qty: 0
        },
        queso: {
            checked: false,
            value: 6.99,
            qty: 0
        },
        guac: {
            checked: false,
            value: 6.99,
            qty: 0
        },
        taco: {
            checked: false,
            value: 6.99,
            qty: 0
        },
        burger: {
            checked: false,
            value: 6.99,
            qty: 0
        },
        burrito: {
            checked: false,
            value: 6.99,
            qty: 0
        },
        // dessert
        coffeecake: {
            checked: false,
            value: 6.99,
            qty: 0
        },
        cheesecake: {
            checked: false,
            value: 7.99,
            qty: 0
        },
        canoli: {
            checked: false,
            value: 9.99,
            qty: 0
        },
        // beverages
        soda: {
            checked: false,
            value: 6.99,
            qty: 0
        },
        tea: {
            checked: false,
            value: 7.99,
            qty: 0
        },
        water: {
            checked: false,
            value: 9.99,
            qty: 0
        }
        
}

function getSubtotal() {
    var Subtotal = 0;
    var wings = document.getElementById('wings').value
    Subtotal = 2 * wings;
    console.log(Subtotal);
    var wingQty = parseInt(document.getElementById(wings))

    var queso = document.getElementById('queso').value;
    queso = parseFloat(queso).toFixed(2);
    queso = parseInt(queso);
    //
    var guac = document.getElementById('guac').value;
    guac = parseFloat(guac).toFixed(2);
    guac = parseInt(guac);
    //
    var taco = document.getElementById('taco').value;
    taco = parseFloat(taco).toFixed(2);
    taco = parseInt(taco);
    //
    var burger = document.getElementById('burger').value;
    burger = parseFloat(burger).toFixed(2);
    burger = parseInt(burger);
    //
    var burrito = document.getElementById('burrito').value;
    burrito = parseFloat(burrito).toFixed(2);
    burrito = parseInt(burrito);
    //
    var coffeecake = document.getElementById('coffeecake').value;
    coffeecake = parseFloat(coffeecake).toFixed(2);
    coffeecake = parseInt(coffeecake);
    //
    var cheesecake = document.getElementById('cheesecake').value;
    cheesecake = parseFloat(cheesecake).toFixed(2);
    cheesecake = parseInt(cheesecake);
    //
    var canoli = document.getElementById('canoli').value;
    canoli = parseFloat(canoli).toFixed(2);
    canoli = parseInt(canoli);
    //
    var soda = document.getElementById('soda').value;
    soda = parseFloat(soda).toFixed(2);
    soda = parseInt(soda);
    //
    var tea = document.getElementById('tea').value;
    tea = parseFloat(tea).toFixed(2);
    tea = parseInt(tea);
    //
    var water = document.getElementById('water').value;
    water = parseFloat(water).toFixed(2);
    water = parseInt(water);


    if (wings.checked) {
        menuObj.wings.checked = true;
        menuObj.wings.qty = wingQty;
        console.log(menuObj.wings);
    }
    if (queso.checked) {
        menuObj.queso.checked = true;
        menuObj.queso.qty = quesoQty;
        console.log(menuObj.queso);
    }
    if (guac.checked) {
        menuObj.guac.checked = true;
        menuObj.guac.qty = guacQty;
        console.log(menuObj.guac);
    }
    if (taco.checked) {
        menuObj.taco.checked = true;
        menuObj.taco.qty = tacoQty;
        console.log(menuObj.taco);
    }
    if (burger.checked) {
        menuObj.burger.checked = true;
        menuObj.burger.qty = burgerQty;
        console.log(menuObj.wings);
    }
    if (burrito.checked) {
        menuObj.burrito.checked = true;
        menuObj.burrito.qty = burritoQty;
        console.log(menuObj.burrito);
    }
    //
    if (coffeecake.checked) {
        menuObj.coffeecake.checked = true;
        menuObj.coffeecake.qty = coffeecakeQty;
        console.log(menuObj.coffeecake);
    }
    if (cheesecake.checked) {
        menuObj.cheesecake.checked = true;
        menuObj.cheesecake.qty = cheesecakeQty;
        console.log(menuObj.cheesecake);
    }
    if (canoli.checked) {
        menuObj.canoli.checked = true;
        menuObj.canoli.qty = canoliQty;
        console.log(menuObj.canoli);
    }
    //
    if (soda.checked) {
        menuObj.soda.checked = true;
        menuObj.soda.qty = sodaQty;
        console.log(menuObj.soda);
    }
    if (tea.checked) {
        menuObj.tea.checked = true;
        menuObj.tea.qty = teaQty;
        console.log(menuObj.tea);
    }
    if (water.checked) {
        menuObj.water.checked = true;
        menuObj.water.qty = waterQty;
        console.log(menuObj.water);
    }
    for (const key in menuObj) {
        const menuItem = menuObj[key];
        if (menuItem.checked) {
            Subtotal += menuItem.value * menuItem.qty;
        }
        var subTotalDiplay = document.getElementById('receiptSub')
    }
}

function getTotal() {
    var receiptSub = Number(document.getElementById('receiptSub').innerText);
    var taxTotal = document.getElementById('taxTotal');
    var tipAmount = document.getElementById('tipAmount');
    var totalBill = document.getElementById('totalBill');
    var tip = parseFloat(document.getElementById('tip').value)

    var total = 0;

    var tax = 0;

    tax = receiptSub * .07;
    taxTotal.innerText = tax;

    tipAmount.innerText = tip;

    total = receiptSub + tax + tip;

    totalBill.innerText = total;
}
