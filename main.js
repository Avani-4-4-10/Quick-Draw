array_1=[pen,paper,book,bottle]

random_no = Math.floor((Math.random()*array_1.length)+1)

sketch=array_1[random_no]
timer_counter=0
timer_check=""
drawn_sketch=""
answer_holder=""
score=0

function setup(){
    canvas= createCanvas(280,280)
    background("white")
    canvas.center()
    canvas.mouseReleased(ClassifyCanvas)
    synth= window.speechSynthesis
}
function clearCanvas(){
    background("white")
}
function preload(){
    classifier = ml5.imageClassifier('DoodleNet')
    }
    function draw(){
        strokeWeight(13)
        stroke(0)
        if (mouseIsPressed){
            line(pmouseX , pmouseY , mouseX , mouseY)
        }
    }
    function ClassifyCanvas(){
        classifier.classify(canvas , gotResults)
    }
    function gotResults(error , results){
        if(error){
            console.error(error)
        }
        else{
            console.log(results)
            document.getElementById("result_sketch").innerHTML="Your Sketch: "+results[0].label
            document.getElementById("result_confidence").innerHTML="Confidence: "+Math.round(results[0].confidence * 100)+ "%"
            utterThis=new SpeechSynthesisUtterance(results[0].label)
            synth.speak(utterThis)
        }
    }
    