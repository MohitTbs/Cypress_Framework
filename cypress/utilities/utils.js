export function generateRandomString() {
    //Can change 7 to 2 for longer results.
    let r = (Math.random() + 1).toString(36).substring(7);
    console.log("random", r);
    return r;
}