let name;
const getRandomStr = () => {
    let id = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let i = 0;
    while (i < 2) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
        i++;
    }
    while (i < 5) {
        const element = Math.round(Math.random() * 9);
        id += element;
        i++;
    }
    console.log(id);
    
    return id;
}
console.log(getRandomStr());
  