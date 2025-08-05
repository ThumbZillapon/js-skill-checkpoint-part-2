// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        //console.log(data)
        const names = data.map((user) => user.name);
        //console.log(names)
        const filterNames = names.filter((name) => name.length > 17)
        console.log(filterNames)
    }
    catch (error) {
        console.log(error)
    }
    
}
getUsers()
