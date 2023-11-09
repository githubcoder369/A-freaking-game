const canvas = 
    document.querySelector("[data-canvas]") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (!ctx) {
    throw new Error("Canvas context2d ain't found!");
}

const game_objects = [];

ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.transform(1, 0, 0, -1, 0, 0);

function render() {
    
}