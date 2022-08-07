export const getItems = async name => {
    const res = await fetch(`https://donermarket-db-default-rtdb.firebaseio.com/${name}.json`);
    const data = await res.json();
    return data;
};