export const products = [];

// export function addItem(item){
//     let indexar = products.indexOf(item);
//     if(indexar != -1){
//         products[indexar].quant += 1;
//     }else{
//         products.push(item);
//     }
//     console.log(products)
// };

export function addItem(item){
    products.push(item)
    console.log(products)
};

export function removeItem(item){
    let toBeRemoved = products.indexOf(item);
    products.splice(toBeRemoved, 1);
}