// สร้างเครื่องทอนเงิน ที่ทอนจำนวนเหรียญหรือแบงค์จำนวนรวมกันน้อยที่สุด
// ประเภทเงินทอน 1,2,5,10,20,50,100,500,1000

let cash = 54700;
let expen = 52389;
let change = cash - expen;
let changeS = change;
console.log(change);

const arr = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
const billCont = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function changeFn(change) {
    for (let i = arr.length - 1; i >= 0; i--) {
        // console.log(i);
        while (change >= arr[i]) {
            if (change >= arr[i]) {
                change -= arr[i];
                billCont[i] += 1;
                // console.log(billCont[i]);
                console.log(change);
            }
        }
    }
    let ans = '';
    console.log(`ลูกค้าให้เงินจำนวน ${cash} บาท ชำระสินค้า ${expen} บาท เหลือเป็นเงินทอน ${changeS}`);
    for (let i = arr.length - 1; i >= 0; i--) {
        // console.log(`ทอนเป็น ${arr[i]} จำนวน ${billCont[i]} ${arr[i] > 10 ? 'แบงค์' : 'เหรียญ'}`);
        ans += `ทอนเป็น ${arr[i]} จำนวน ${billCont[i]} ${arr[i] > 10 ? 'แบงค์' : 'เหรียญ'}, `
    }
    console.log(ans);

}

changeFn(change);


// for long code
// while (change >= arr[8]) {
//     if (change >= arr[8]) {
//         change -= arr[8];
//         billCont[8] += 1;
//         // console.log(billCont[8]);
//         console.log(change);
//     }
// }
// while (change >= arr[7])
//     if (change >= arr[7]) {
//         change -= arr[7];
//         billCont[7] += 1;
//         console.log(change);
//     }
// while (change >= arr[6]) {
//     if (change >= arr[6]) {
//         change -= arr[6];
//         billCont[6] += 1;
//         console.log(change);
//     }
// }
// while (change >= arr[5]) {

//     if (change >= arr[5]) {
//         change -= arr[5];
//         billCont[5] += 1;
//         console.log(change);
//     }
// }
// while (change >= arr[4]) {

//     if (change >= arr[4]) {
//         change -= arr[4];
//         billCont[4] += 1;
//         console.log(change);
//     }
// }
// while (change >= arr[3]) {

//     if (change >= arr[3]) {
//         change -= arr[3];
//         billCont[3] += 1;
//         console.log(change);
//     }
// }
// while (change >= arr[2]) {

//     if (change >= arr[2]) {
//         change -= arr[2];
//         billCont[2] += 1;
//         console.log(change);
//     }
// }
// while (change >= arr[1]) {

//     if (change >= arr[1]) {
//         change -= arr[1];
//         billCont[1] += 1;
//         console.log(change);
//     }
// }
// while (change >= arr[0]) {

//     if (change >= arr[0]) {
//         change -= arr[0];
//         billCont[0] += 1;
//         console.log(change);
//     }
// }
