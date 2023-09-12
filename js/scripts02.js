// console.log('DTI.....');

console.log(111);
console.log(222);
console.log(333);console.log(444);console.log(555);

var a = 100
let b = 100
console.log(a + b);
console.log('----------------------------');

{
    {
        var c = 300
        let d = 400
        // console.log(a);
        // console.log(b);
        // console.log(c);
        // console.log(d);
    }
    console.log(a);
    console.log(b);
    console.log(c);
    //console.log(d); error

    const DATA_A1 = 52
    const INFO1 = "Wow"
    const INFO2 = "Wee"
    //INFO1 = "Wee" error
    console.log(INFO1 + '@@@' + INFO2);
    console.log('SAU\nDTI\t\t2023');
    console.log('I love "SAU"');
    console.log("I love 'SAU'");
    console.log('สวัสดี %s', INFO1);

    {
        {
            const INFO3 ='Wee'
            console.log(INFO3);
        }
        //console.log(INFO3); error
    }

    //console.log(INFO3); error
    console.log(`welcome....`);

    let name = 'สมชาย'
    let year = 2000
    let age = 15
    console.log("สวัสดี" + name + 'คุณเกิดปี' + year + 'อายุ' + age +'ปี' + (20*5));
    console.log(`สวัสดี ${name} คุณเกิดปี  ${year}  อายุ  ${age} ปี ${20*5}`);
    
    let data = 'Southeast Asia University'

    console.log(data);
    console.log(data.length);
    console.log(data.trim());
    console.log(data.trim().length);
    console.log(data.toUpperCase());
    console.log(data.toLowerCase());
    console.log(data.substring(10));

    let data2 = 'welcome to'

    console.log(data2.substring (5));
    console.log(data2.substring (3,9));
    console.log(data2.repeat(5));
    console.log(data2.replace('To','To Thailand'));
    console.log(data.replace('e','XXX'));
    console.log(data.replaceAll('e','XXX'));
}