import connection from '../database/database';

const getAllBread = async () => {
    const[result, field] = await connection.query('SELECT * FROM bread');
    return result;
}

const getAllChicken = async () => {
    const[result, field] = await connection.query('SELECT * FROM chicken');
    return result;
}

const getAllFries = async () => {
    const[result, field] = await connection.query('SELECT * FROM fries');
    return result;
}

const getAllDrinks = async () => {
    const[result, field] = await connection.query('SELECT * FROM drinks');
    return result;
}

const getAllGrillChill = async () => {
    const[result, field] = await connection.query('SELECT * FROM grill_chill');
    return result;
}

const getAllSalad = async () => {
    const[result, field] = await connection.query('SELECT * FROM salad');
    return result;
}

const getAllSpaghetti = async () => {
    const[result, field] = await connection.query('SELECT * FROM spaghetti');
    return result;
}

const getMixedPizza = async () => {
    const[result, field] = await connection.query('SELECT * FROM mixed_pizza');
    return result;
}

const getSeaPizza = async () => {
    const[result, field] = await connection.query('SELECT * FROM sea_pizza');
    return result;
}

const getSpecialPizza = async () => {
    const[result, field] = await connection.query('SELECT * FROM special_pizza');
    return result;
}

const getTraditionPizza = async () => {
    const[result, field] = await connection.query('SELECT * FROM tradition_pizza');
    return result;
}

const getUniquePizza = async () => {
    const[result, field] = await connection.query('SELECT * FROM unique_pizza');
    return result;
}   

const getAllPizza = async () => {   
    const mixedPizza = await getMixedPizza();
    const seaPizza = await getSeaPizza();
    const specialPizza = await getSpecialPizza();
    const traditionPizza = await getTraditionPizza();
    const uniquePizza = await getUniquePizza();
    return {mixedPizza, seaPizza, specialPizza, traditionPizza, uniquePizza};
}

export default {getAllBread, getAllChicken, getAllFries, getAllDrinks, getAllGrillChill, getAllSalad, getAllSpaghetti, getAllPizza, getMixedPizza, getSeaPizza, getSpecialPizza, getTraditionPizza, getUniquePizza};
    