e = campaignTrail_temp;

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#006ace";

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#456399";

            document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

            $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

            $(".container")[0].style.backgroundColor = "#a8c6fe";

            document.getElementById("header").src = "https://i.imgur.com/9rr9pHX.png";

            document.body.background = "https://i.imgur.com/XNAHGQ6.jpeg";
  e.election_json = [{"model":"campaign_trail.election","pk":3,"fields":{"year":2012,"summary":"As America gears up for the 2008 election the war in Iraq continues to captivate the American Public.<br><br>- It is in this vein that long shot candidate former senator from Alaska and a man of Pentagon Papers fame Mike Gravel has triumphed over a crowded field of candidates to become the parties nominee.<br><br>-War hero and veteran politician from Arizona John McCain has secured his parties nomination after failing to do so in 2000.<br><br>With Gravel running on what can only be described as a militantly anti war campaign many pundits predict that even with incumbent president Bushes approval ratting being in the gutter, McCain will cruise to victory Ala 1972 Nixon style.","image_url":"https://i.imgur.com/GFyQtiZ.png","winning_electoral_vote_number":270,"advisor_url":"","recommended_reading":"<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>","has_visits":1,"no_electoral_majority_image":"../static/images/2012-no-majority.jpg"}}];e.temp_election_list = [{"id":3,"year":2012,"is_premium":0,"display_year":"2008"}];e.credits = "Ohas";
  e.global_parameter_json = [{"model":"campaign_trail.global_parameter","pk":1,"fields":{"vote_variable":1.125,"max_swing":0.12,"start_point":0.94,"candidate_issue_weight":10,"running_mate_issue_weight":3,"issue_stance_1_max":-0.71,"issue_stance_2_max":-0.3,"issue_stance_3_max":-0.125,"issue_stance_4_max":0.125,"issue_stance_5_max":0.3,"issue_stance_6_max":0.71,"global_variance":0.01,"state_variance":0.005,"question_count":25,"default_map_color_hex":"#C9C9C9","no_state_map_color_hex":"#999999"}}];
  e.candidate_json = [{"model":"campaign_trail.candidate","pk":1001,"fields":{"first_name":"Mike ","last_name":"Gravel","election":3,"party":"Democratic","state":"Alaska","priority":1,"description":"The new McGovern. Thats what the Democratic establishment and the media alike have labeled Gravel.<br><br>Regardless of what the media says Gravel has won the Democratic Party nomination through a grassroots movement of anti-war activists paired with a general dissatisfaction with the establishment of the party. <br><br>Gravel is a veteran of American politics first getting elected to the senate in 1968 representing the new state of Alaska. Gravel would gain fame for his outspoken opposition to the Vietnam war, even going as far as to read the Pentagon papers on the floor of the senate.<br><br>Gravel is a grandfather to a new generation of left wing youth activists disenchanted with the war in Iraq and the Democratic Parties lack of opposition to it. The parallels with McGovern are self evident. There's also age to consider as Gravels seventy eight, the oldest man the parties ever nominated.<br><br>Will he be the next McGovern? Time will tell","color_hex":"#0068dc","secondary_color_hex":null,"is_active":1,"image_url":"https://i.imgur.com/dxunWpf.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":1002,"fields":{"first_name":"Barack ","last_name":"Obama","election":3,"party":"Democratic","state":"Illinois ","priority":1,"description":"The freshman senator from Illinois would make an opportunistic choice for running mate. With your electoral chances being close to none, appealing to the ethnic vote might be what you need to purplell yourself into spitting distance of McCain. On the other hand look what happened to Mondale.<br><br> Obama is an energetic man, the type of guy who's able to wow a crowd on his charisma and optimistic mesaging. <br><br>Obamas youth and charisma is a good contrast to your age and experience. The veteran teaming up with the Freshman. Question is if people will perceive this partnership for what it is: a cooperation rooted in your own desperation.","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"https://i.imgur.com/Yq2e2yw.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"The freshman senator from Illinois would make an opportunistic choice for running mate. With your electoral chances being close to none, appealing to the ethnic vote might be what you need to purplell yourself into spitting distance of McCain. On the other hand look what happened to Mondale.<br><br> Obama is an energetic man, the type of guy who's able to wow a crowd on his charisma and optimistic mesaging. <br><br>Obamas youth and charisma is a good contrast to your age and experience. The veteran teaming up with the Freshman. Question is if people will perceive this partnership for what it is: a cooperation rooted in your own desperation.","candidate_score":1,"running_mate":true,"scrollable":false,"partner":"0"}}];e.running_mate_json = [{"model":"campaign_trail.running_mate","pk":2001,"fields":{"candidate":1001,"running_mate":1002}}];


//music Player
$("#music_player")[0].children[0].style.display="none"
$("#music_player")[0].children[1].style.display="none"

document.getElementById("modLoadReveal").style.display="none"
document.getElementById("modloaddiv").style.display="none"

musicBox = document.getElementById("music_player")
musicBox.style.display=""

var trackSel;
e = campaignTrail_temp
e.selectedSoundtrack = 0

toTime = (seconds) => {
  var date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
}

generateTime = () => {
    // Get the audio element
    var audio = document.getElementById("campaigntrailmusic");

    timeTracker = document.createElement("div");
    timeTracker.style = `
      text-align:left;
      border-style:solid;
      border-width:3px;
      height:150px;
      width:200px;
      background-color:#999999;
      float:right;
      padding: 10px;
    `
    $("#trackSelParent")[0].prepend(timeTracker);
    $("#trackSelParent")[0].prepend(document.createElement("br"));

    // Create a new element to display the current position of the audio
    var positionDisplay = document.createElement("gg");
    positionDisplay.id = "position-display";

    // Create a new slider element to change the time
    var timeSlider = document.createElement("input");
    timeSlider.type = "range";
    timeSlider.min = 0;
    timeSlider.max = 1;
    timeSlider.step = 0.001;
    timeSlider.value = 0;
    timeSlider.style.width = "200px";
    timeSlider.id = "time-slider";

    var pausePlay = document.createElement("button");
    pausePlay.id = "position-display";
    pausePlay.innerHTML = "<b>Pause</b>"
    pausePlay.style.width = "100%";


    pausePlay.addEventListener("click", event => {
      event.preventDefault();
      updatePositionDisplay();
      let audio = document.getElementById("campaigntrailmusic");
      if (audio.paused) {
        audio.play();
        event.target.innerHTML = "<b>Pause</b>";
        return;
      }
      audio.pause();
      event.target.innerHTML = "<b>Play</b>";
      return;
    })

    var volumeLabel = document.createElement("gg");
    volumeLabel.id = "volume-label";
    volumeLabel.innerHTML = "<br><b>Volume: </b>"

    var volumeSlider = document.createElement("input");
    volumeSlider.type = "range";
    volumeSlider.min = 0;
    volumeSlider.max = 1;
    volumeSlider.step = 0.001;
    volumeSlider.value = 0;
    volumeSlider.style.width = "200px";
    volumeSlider.id = "volume-slider";

    volumeSlider.value = audio.volume;

    timeTracker.appendChild(pausePlay);
    timeTracker.appendChild(document.createElement("br"));
    timeTracker.appendChild(document.createElement("br"));
    timeTracker.appendChild(positionDisplay);
    timeTracker.appendChild(timeSlider);
    timeTracker.appendChild(volumeLabel);
    timeTracker.appendChild(volumeSlider);

    updatePositionDisplay();

    //for (let i = 0; i < 10; i++)
    //timeTracker.append(document.createElement("br"));


    // Function to update the position display
    function updatePositionDisplay() {
      positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
      timeSlider.value = audio.duration ? audio.currentTime / audio.duration : 0;
    }

    // Function to change the time of the audio
    function changeTime() {
      positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
      audio.currentTime = timeSlider.value * audio.duration;
    }

    updateVolume = event => {
      audio.volume = event.target.value;
    }
    
    // Update the position display and slider every second
    setInterval(updatePositionDisplay, 1000);

    // Listen for changes to the time slider and change the time of the audio
    timeSlider.addEventListener("input", changeTime);
    volumeSlider.addEventListener("input", updateVolume)
}

function newMusicPlayer() {
  trackSel = document.createElement("div");
  trackSel.id = "trackSelParent"
  let z = `<br><br><br><br><br><br><br><br><br><br><div id='trackSel' style="text-align:left;border-style:solid;border-width:3px;overflow-y: scroll;overflow-x: hidden;height:200px; width:400px;background-color:#999999;float:right;">`
  z += `<b><select id='selectSoundtrack'><option value='`+soundtracks[e.selectedSoundtrack].name+`'>`+soundtracks[e.selectedSoundtrack].name+"</option>"
  for (i in soundtracks) {
    if (soundtracks[e.selectedSoundtrack] != soundtracks[i]) {
      z += `<option value='`+soundtracks[i].name+`'>`+soundtracks[i].name+`</option>`
    }
  }
  z += `</select></b><br><br>`
  // <label><input type="radio" name="option" value="option1">Option 1</label><br>
  for (i in soundtracks[e.selectedSoundtrack].tracklist) {
    let a = soundtracks[e.selectedSoundtrack].tracklist[i]
    let b = `<label><input class="trackSelector" type="radio" name="trackSelector" value="`+i+`">`+a.name+`</label><br>`
    z += b
  }
  z += "</div><br><br>"
  trackSel.innerHTML = z

  // select correct song

  musicBox.appendChild(trackSel);
  Array.from(document.getElementById("trackSel").children).filter(f=>{
    return f.tagName == "LABEL"
  }).map(f=>f.children[0])[0].checked = true

  // set soundtrack changer

  soundtrackSelector = document.getElementById("selectSoundtrack")
  soundtrackSelector.onchange = function() {
    for (i in soundtracks) {
      if (soundtracks[i].name == soundtrackSelector.value) {
        e.selectedSoundtrack = i
        break
      }
    }
    document.getElementById("trackSelParent").remove()
    newMusicPlayer()
  }

  var matches = document.querySelectorAll('.trackSelector');

  for (match in matches) {
    matches[match].onchange = function() {
      audio = $("#campaigntrailmusic")[0];
      audio.src = soundtracks[e.selectedSoundtrack].tracklist[this.value].url
      audio.currentTime = 0
    }
  }

  musicBox.children[2].loop = false
  musicBox.children[2].src = soundtracks[e.selectedSoundtrack].tracklist[0].url

  musicBox.children[2].onended = function() {
    console.log("next track")
    let selected = Number(document.querySelector('input[name="trackSelector"]:checked').value);
    let newSel = clamp(selected+1, soundtracks[e.selectedSoundtrack].tracklist.length-1, 0)
    let buttons = Array.from(document.getElementById("trackSel").children).filter(f=>{
      return f.tagName == "LABEL"
    }).map(f=>f.children[0])
    //let selectedIndex = buttons.map(f=>f.children[0]).map(f=>f.checked)
    buttons[newSel].click()
  }

  for (w = 0; w < 7; w++) {
    document.getElementById("trackSelParent").appendChild(document.createElement("br"))
  }
  
  generateTime();
}

clamp = function(a, max, min, overflow=true) {
  if (overflow) {
    return a > max ? min : a < min ? max : a;
  }
  return a > max ? max : a < min ? min : a;
}


// Track list

var soundtracks = {
  0: {
    name: "Gravel Bangers",
    tracklist: [
      {
        "name": "Power to the People",
        "url": "https://audio.jukehost.co.uk/3TXEoez1VSNvkpwU60MBC5hPmrUh3KCs"
      },
      {
        "name": "Fire",
        "url": "https://audio.jukehost.co.uk/WlsLGMvlMkn9PVplPNY5h8IyfJQwQXNt"
      },
      {
        "name": "Rock",
        "url": "https://audio.jukehost.co.uk/pzHD0SlJFHvi3ppYYS04ttAKvJJmIT6T"
      },
   ]
   }	  
}

// Set up new music player

newMusicPlayer()








