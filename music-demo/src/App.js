import React, { useState } from 'react';

import './App.css';

import useSound from 'use-sound';

import hit_1_file from './assets/morning/hits/hit_1_Gb.wav';
import hit_2_file from './assets/morning/hits/hit_2_Ab.wav';
import hit_3_file from './assets/morning/hits/hit_3_Bb.wav';
import hit_4_file from './assets/morning/hits/hit_4_Cb.wav';
import hit_5_file from './assets/morning/hits/hit_5_Db.wav';
import hit_6_file from './assets/morning/hits/hit_6_Eb.wav';
import hit_7_file from './assets/morning/hits/hit_7_F.wav';
import hit_8_file from './assets/morning/hits/hit_8_Gb.wav';

// import different sounds

var split = {
  1: {
    1: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  2: {
    1: [1, 3, 5, 8],
    2: [2, 4, 6, 7],
  },
  3: {
    1: [1, 5, 8],
    2: [3, 7],
    3: [2, 4, 6],
  },
  4: {
    1: [1, 8],
    2: [3, 5],
    3: [6, 7],
    4: [2, 4]
  },
  5: {
    1: [1, 8],
    2: [3],
    3: [5],
    4: [2, 4],
    5: [6, 7]
  },
  6: {
    1: [1, 8],
    2: [3],
    3: [5],
    4: [2, 4],
    5: [6],
    6: [7]
  },
  7: {
    1: [1, 8],
    2: [3],
    3: [5],
    4: [2],
    5: [6],
    6: [7],
    7: [4]
  },
  8: {
    1: [1],
    2: [3],
    3: [5],
    4: [2],
    5: [4],
    6: [6],
    7: [7],
    8: [8],
  }
}


var RANDOM = false;
var SOUND_INDEX = 0;
var urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('random')) {
    RANDOM = true;
} 
if (urlParams.get('vibe')) {
    if (!isNaN(parseInt(urlParams.get('vibe'))))
    SOUND_INDEX = parseInt(urlParams.get('vibe'));
} 

function App() {
  // load sounds (this will be different in Snap Lens)
  var [hit_1] = useSound(hit_1_file);
  var [hit_2] = useSound(hit_2_file);
  var [hit_3] = useSound(hit_3_file);
  var [hit_4] = useSound(hit_4_file);
  var [hit_5] = useSound(hit_5_file);
  var [hit_6] = useSound(hit_6_file);
  var [hit_7] = useSound(hit_7_file);
  var [hit_8] = useSound(hit_8_file);

  var morningSounds = [hit_1, hit_2, hit_3, hit_4, hit_5, hit_6, hit_7, hit_8]

  // create bank of sounds to switch between
  var sounds = [
    morningSounds
  ]

  var [voices, setVoices] = useState([]);
  var [lastNote, setLastNote] = useState(-1);

  var lensStudioVoices = [];

  var createVoice = function() {
    return {
      id: voices.length + 1,
      lastNoteIndex: 0,
      count: 0,
    }
  }

  var updateVoices = function (newVoices) {
    // update global state of object within Lens object 
    lensStudioVoices = newVoices;
    
    // update object in React
    setVoices(newVoices);
    console.log(lensStudioVoices, newVoices);
  }

  var addVoice = function () {
    if (voices.length < 8) {
      updateVoices(voices.concat(createVoice()));
    }
  }

  var removeVoice = function() {
    if (voices.length) {
      updateVoices(voices.slice(0, voices.length-1));
    }
  }

  var playSound = function(sound) {
    sound();
  }

  // determine the mapping of sounds based on the number of voices, and the selected voice ID
  var selectSound = function(voice) {
    // remember we are using index 1 for the split
    var activeSplit = split[voices.length];
    var selectedNotes = activeSplit[voice.id];
    // select the next note in the array, based on voice.lastNoteIndex
    var index;
    if (RANDOM) {
      index = Math.floor(Math.random()*selectedNotes.length);
    } else {
      index = voice.lastNoteIndex % selectedNotes.length;
    }
    var actualIndex = selectedNotes[index] - 1;
    // update global visual for last note played
    setLastNote(actualIndex+1);
    // update state of voice
    setVoiceState(voice);

    var sound = sounds[0] // default to first value in sounds
    // select song based on song index
    if (sounds[SOUND_INDEX] !== undefined) {
      sound = sounds[SOUND_INDEX]
    }
    playSound(sound[actualIndex])
  }

  // logic to update the new state for the voice
  // allows for algorithmic composition
  var setVoiceState = function(voice) {
    // create copy of original array (use immutable javascript)
    var allVoices = voices.slice();
    var before = allVoices.slice(0, voice.id - 1, 1);
    var after = allVoices.slice(voice.id, allVoices.length);
    var newVoice = voice;
    newVoice.count = voice.count + 1;
    newVoice.lastNoteIndex = voice.lastNoteIndex + 1;
    // combine arrays
    var updatedVoices = before.concat(newVoice)
    updatedVoices = updatedVoices.concat(after)
    setVoices(updatedVoices);
  }

  return (
    <div className="App">
      <div className={'voices-wrapper'}>
        {
          voices.map((voice, voiceIndex) => {
            return (
              <div 
                key={voiceIndex}
                onClick={() => selectSound(voice)}
              >
                <p>{JSON.stringify(split[voices.length][voice.id])}</p>
              </div>
            )
          })
        }
      </div>
      <div className={'edit-button-wrapper'}>
        <div className={'edit-button'} onClick={addVoice}>+</div>
        <div className={'edit-button'} onClick={removeVoice}>-</div>
      </div>
      <div className={'last-note'}>
        {
        lastNote >= 0 ?  
         <p>last note: {lastNote}</p>
         :
         <></>
        }
      </div>
    </div>
  );
}

export default App;
