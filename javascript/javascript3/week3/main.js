const redElement = document.querySelector('.marks').children[0];
const blueElement = document.querySelector('.marks').children[1];
const greenElement = document.querySelector('.marks').children[2];

const translateOneByOne = () => {
    moveElement(redElement, { x: 20, y: 300 })
        .then(() => {
            return moveElement(blueElement, { x: 400, y: 300 })
        })
        .then(() => {
            return moveElement(greenElement, { x: 400, y: 20 })
        })
        .then(() => {
        });
}
const translateAllAtOnce = () => {
    return Promise.all([
        moveElement(redElement, { x: 20, y: 300 }),
        moveElement(blueElement, { x: 400, y: 300 }),
        moveElement(greenElement, { x: 400, y: 20 })
    ]);
}
translateAllAtOnce();