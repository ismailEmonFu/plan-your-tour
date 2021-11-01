const addToDb = id => {
    const exists = getDb();
    let plan_tour_cart = {};
    if (!exists) {
        plan_tour_cart[id] = 1;
    }

    else {
        plan_tour_cart = JSON.parse(exists);
        if (plan_tour_cart[id]) {
            const newCount = plan_tour_cart[id] + 0;
            plan_tour_cart[id] = newCount;
        }
        else {
            plan_tour_cart[id] = 1;
        }
    }
    updateDb(plan_tour_cart);
}
const getDb = () => localStorage.getItem('plan_tour_cart');
const updateDb = tourPack => {
    localStorage.setItem('plan_tour_cart', JSON.stringify(tourPack));
}

const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {

    }
    else {
        const plan_tour_cart = JSON.parse(exists);
        delete plan_tour_cart[id];
        updateDb(plan_tour_cart);
    }
}

const getStoredPack = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
}

const clearThePack = () => {
    localStorage.removeItem('plan_tour_cart');
}

export {
    addToDb,
    removeFromDb,
    clearThePack,
    getStoredPack
}