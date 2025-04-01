let userChoice = Number(prompt("Zəhmət olmasa seçiminizi edin:\n1-Dizel (dizel)\n2-Adi (benzin)\n3-Premium (premium)"));

if (userChoice == 1 || userChoice ==2 || userChoice == 3){

    let getFuel = Number(prompt("Zəhmət olmasa almaq istədiyiniz yanacağın miqdarını daxil edin(litr): "));

    let myMoney = Number(prompt("Zəhmət olmasa mövcud pulunuzu daxil edin(AZN): "));

    let fuelPrice;
    
    switch (userChoice) {
        case 1:
            fuelPrice = 0.9;
            break;
        case 2:
            fuelPrice = 1;
            break;
        case 3:
            fuelPrice = 1.5;
            break;
    }

    let money = fuelPrice*getFuel;

    if (money <= myMoney){
        myMoney -= money;
        alert(`Ödənilməli məbləğ: ${money}AZN. Cari balansınız: ${myMoney}AZN`);
    } else {
        let lost = money - myMoney;
        alert(`Ödənilməli məbləğ: ${money}AZN\nCari balansınız: ${myMoney}AZN\nÇatışmayan məbləğ: ${lost}AZN`);
    }
    
} else {
    alert("Yanlış seçim! Lütfən, düzgün yanacaq növünü seçin.");
}