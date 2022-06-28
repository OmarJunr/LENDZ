export const products = [];

export function isRepeated(item){
    let findIndex = products.indexOf(item);
    if(findIndex > -1){
        return true;
    }else{
        return false;
    }
};

export function addItem(item){
    products.push(item)
    console.log(products)
};

export function removeItem(item){
    let toBeRemoved = products.indexOf(item);
    products.splice(toBeRemoved, 1);
}