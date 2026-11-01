
let text = "{name: Rohan}";

try {
    let data = JSON.parse(text);
    console.log(data);
} catch (error) {
    console.log("Invalid JSON");
}
