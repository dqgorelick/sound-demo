import React, { useState, useEffect } from 'react';

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

const split = {
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

let RANDOM = false;
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('random')) {
    RANDOM = true;
} 

function App() {
  const [hit_1] = useSound(hit_1_file);
  const [hit_2] = useSound(hit_2_file);
  const [hit_3] = useSound(hit_3_file);
  const [hit_4] = useSound(hit_4_file);
  const [hit_5] = useSound(hit_5_file);
  const [hit_6] = useSound(hit_6_file);
  const [hit_7] = useSound(hit_7_file);
  const [hit_8] = useSound(hit_8_file);

  const morningSounds = [hit_1, hit_2, hit_3, hit_4, hit_5, hit_6, hit_7, hit_8]

  const [voices, setVoices] = useState([]);
  const [lastNote, setLastNote] = useState(-1);

  const createVoice = () => {
    return {
      id: voices.length + 1,
      lastNoteIndex: 0,
      count: 0,
    }
  }

  const addVoice = () => {
    if (voices.length < 8) {
      setVoices([...voices, createVoice()]);
    }
    console.log(voices)
  }

  const removeVoice = () => {
    if (voices.length) {
      setVoices(voices.slice(0, voices.length-1));
    }
    console.log(voices)
  }

  // reset counts on all voices
  const resetVoices = () => {
    const newVoices = voices.forEach((voice) => {
      return {
        ...voice,
        lastNoteIndex: 0,
        count: 0
      }}
    )
    setVoices(newVoices);
  }

  // determine the mapping of sounds based on the number of voices, and the selected voice ID
  const selectSound = (voice) => {
    // remember we are using index 1 for the split
    const activeSplit = split[voices.length];
    const selectedNotes = activeSplit[voice.id];
    // select the next note in the array, based on voice.lastNoteIndex
    let index;
    if (RANDOM) {
      index = Math.floor(Math.random()*selectedNotes.length);
    } else {
      index = voice.lastNoteIndex % selectedNotes.length;
    }
    const actualIndex = selectedNotes[index] - 1;
    // update global visual for last note played
    setLastNote(actualIndex+1);
    // update state of voice
    setVoiceState(voice);
    morningSounds[actualIndex]();
  }

  // logic to update the new state for the voice
  // allows for algorithmic composition
  const setVoiceState = (voice) => {
    const allVoices = [...voices];
    const before = allVoices.slice(0, voice.id - 1, 1);
    const after = allVoices.slice(voice.id, allVoices.length);
    const updatedVoices = [
      ...before,
      {...voice,
        count: voice.count + 1,
        lastNoteIndex: voice.lastNoteIndex + 1
      },
      ...after,
    ]
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
