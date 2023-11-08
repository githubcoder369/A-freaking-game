const canvas = 
    document.querySelector("[data-canvas]") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (!ctx) {
    throw new Error("Canvas ain't found!");
}

const game_objects = [];



function render() {

}
