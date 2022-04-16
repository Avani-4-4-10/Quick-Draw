array_1=[pen,paper,book,bottle]

random_no = Math.floor((Math.random()*array_1.length)+1)

quick_draw_data_set=array_1[random_no]

function setup(){
    canvas= createCanvas(280,280)
    background("white")
    canvas.center()
}
function clearCanvas(){
    background("white")
}