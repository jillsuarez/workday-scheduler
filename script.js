const today = moment().format('LL')
var timeNow = moment().hour()
var events = {}

$( '#currentDay').append("Today's date is: " + today)

function textAreaColor(){
    $(".time-block").each(function(){

        var currentHour = parseInt($(this).attr("id"));

        if(currentHour < timeNow){
            $(this).addClass("past")
        }

        else if(currentHour === timeNow){
            $(this).addClass("present")
        }

        else {
            $(this).addClass("future")
        }
    })
}

var createEvent = function(eventText, eventList) {
    // create elements that make up a event item
    var eventLi = $("<li>").addClass("description");
    var eventP = $("<p>")
      .addClass("col-md-10")
      .text(eventText);
  
    // append span and p element to parent li
    eventLi.append(eventP);
    
    // append to ul list on the page
    $("#list-" + eventList).append(eventLi);
  };

var saveEvents = function() {
    localStorage.setItem("events", JSON.stringify(events), console.log("this is save events:", events));
  };

  var loadEvents = function() {
    events = JSON.parse(localStorage.getItem("events"));
  };

$(".saveBtn").click(function(){
    console.log("I've been clicked")
    var eventText = $(".description").val();
    // var eventHour = $(".hour").val();&& eventHour
   
    if (eventText) {
        console.log("if activated")
        createEvent(eventText, "toDo");
    
        // save in tasks array
        events.toDo.push({
          text: eventText,
          hour: eventHour
        });

    saveTasks();
    }
});

textAreaColor();