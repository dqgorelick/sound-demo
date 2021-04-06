import React, { useState } from 'react';

import './App.css';

import useSound from 'use-sound';

import bass1_file from './assets/release1/bass1_Cs.wav';
import bass2_file from './assets/release1/bass2_E.wav';
import bass3_file from './assets/release1/bass3_Cs.wav';
import bass4_file from './assets/release1/bass4_Gs.wav';
import bass5_file from './assets/release1/bass5_A.wav';
import bass6_file from './assets/release1/bass6_B.wav';
import bass7_file from './assets/release1/bass7_Gs.wav';
import bass8_file from './assets/release1/bass8_Cs.wav';
import drums1_file from './assets/release1/drums1_kick.wav';
import drums2_file from './assets/release1/drums2_hat.wav';
import drums3_file from './assets/release1/drums3_snare.wav';
import drums4_file from './assets/release1/drums4_hatperc.wav';
import drums5_file from './assets/release1/drums5_kickdub.wav';
import drums6_file from './assets/release1/drums6_hatopen.wav';
import drums7_file from './assets/release1/drums7_snaresnap.wav';
import drums8_file from './assets/release1/drums8_turn.wav';
import gtr1_file from './assets/release1/gtr1_Dbmin.wav';
import gtr2_file from './assets/release1/gtr2_Emaj.wav';
import gtr3_file from './assets/release1/gtr3_Abmin.wav';
import gtr4_file from './assets/release1/gtr4_Dbmin.wav';
import gtr5_file from './assets/release1/gtr5_Amaj7.wav';
import gtr6_file from './assets/release1/gtr6_B13.wav';
import gtr7_file from './assets/release1/gtr7_Gsmin7.wav';
import gtr8_file from './assets/release1/gtr8_Csmin7.wav';
import piano1_file from './assets/release1/piano1_Dbmin.wav';
import piano2_file from './assets/release1/piano2_Emaj.wav';
import piano3_file from './assets/release1/piano3_Abmin.wav';
import piano4_file from './assets/release1/piano4_Dbmin.wav';
import piano5_file from './assets/release1/piano5_Amaj7.wav';
import piano6_file from './assets/release1/piano6_B13.wav';
import piano7_file from './assets/release1/piano7_Gsmin7.wav';
import piano8_file from './assets/release1/piano8_Csmin7.wav';
import string1_file from './assets/release1/strings1_Csmin.wav';
import string2_file from './assets/release1/strings2_Csmin.wav';
import string3_file from './assets/release1/strings3_Csmin.wav';
import string4_file from './assets/release1/strings4_Csmin.wav';
import string5_file from './assets/release1/strings5_Amaj7.wav';
import string6_file from './assets/release1/strings6_B13.wav';
import string7_file from './assets/release1/strings7_Gsmin7.wav';
import string8_file from './assets/release1/strings8_Csmin7.wav';
import synth1_file from './assets/release1/synth1_Csmin.wav';
import synth2_file from './assets/release1/synth2_Csmin.wav';
import synth3_file from './assets/release1/synth3_Csmin.wav';
import synth4_file from './assets/release1/synth4_Csmin.wav';
import synth5_file from './assets/release1/synth5_Amaj7.wav';
import synth6_file from './assets/release1/synth6_B13.wav';
import synth7_file from './assets/release1/synth7_Gsmin.wav';
import synth8_file from './assets/release1/synth8_Csmin.wav';

function App() {

  // load sounds (this will be different in Snap Lens)
  var [bass1] = useSound(bass1_file);
  var [bass2] = useSound(bass2_file);
  var [bass3] = useSound(bass3_file);
  var [bass4] = useSound(bass4_file);
  var [bass5] = useSound(bass5_file);
  var [bass6] = useSound(bass6_file);
  var [bass7] = useSound(bass7_file);
  var [bass8] = useSound(bass8_file);
  var [drums1] = useSound(drums1_file);
  var [drums2] = useSound(drums2_file);
  var [drums3] = useSound(drums3_file);
  var [drums4] = useSound(drums4_file);
  var [drums5] = useSound(drums5_file);
  var [drums6] = useSound(drums6_file);
  var [drums7] = useSound(drums7_file);
  var [drums8] = useSound(drums8_file);
  var [gtr1] = useSound(gtr1_file);
  var [gtr2] = useSound(gtr2_file);
  var [gtr3] = useSound(gtr3_file);
  var [gtr4] = useSound(gtr4_file);
  var [gtr5] = useSound(gtr5_file);
  var [gtr6] = useSound(gtr6_file);
  var [gtr7] = useSound(gtr7_file);
  var [gtr8] = useSound(gtr8_file);
  var [piano1] = useSound(piano1_file);
  var [piano2] = useSound(piano2_file);
  var [piano3] = useSound(piano3_file);
  var [piano4] = useSound(piano4_file);
  var [piano5] = useSound(piano5_file);
  var [piano6] = useSound(piano6_file);
  var [piano7] = useSound(piano7_file);
  var [piano8] = useSound(piano8_file);
  var [string1] = useSound(string1_file);
  var [string2] = useSound(string2_file);
  var [string3] = useSound(string3_file);
  var [string4] = useSound(string4_file);
  var [string5] = useSound(string5_file);
  var [string6] = useSound(string6_file);
  var [string7] = useSound(string7_file);
  var [string8] = useSound(string8_file);
  var [synth1] = useSound(synth1_file);
  var [synth2] = useSound(synth2_file);
  var [synth3] = useSound(synth3_file);
  var [synth4] = useSound(synth4_file);
  var [synth5] = useSound(synth5_file);
  var [synth6] = useSound(synth6_file);
  var [synth7] = useSound(synth7_file);
  var [synth8] = useSound(synth8_file);

  var bassSounds = [bass1, bass2, bass3, bass4, bass5, bass6, bass7, bass8];
  var drumSounds = [drums1, drums2, drums3, drums4, drums5, drums6, drums7, drums8];
  var guitarSounds = [gtr1, gtr2, gtr3, gtr4, gtr5, gtr6, gtr7, gtr8];
  var pianoSounds = [piano1, piano2, piano3, piano4, piano5, piano6, piano7, piano8];
  var stringSounds = [string1, string2, string3, string4, string5, string6, string7, string8];
  var synthSounds = [synth1, synth2, synth3, synth4, synth5, synth6, synth7, synth8];

  // create bank of sounds to switch between
  var sounds = {
    1: drumSounds,
    2: bassSounds,
    3: synthSounds,
    4: stringSounds,
    5: guitarSounds,
    6: pianoSounds,
  }

  // COMMENT OR DELETE react-specific code
  var [lastInstrumentHit, setLastInstrumentHit] = useState(-1);
  var [currentNote, setCurrentNote] = useState(1);
  var [voices, setVoices] = useState([]);
  var updateVoices = function (updatedVoices) {
    setVoices(updatedVoices);
  }
  var updateLastInstrument = function(lastInstrument) {
    setLastInstrumentHit(lastInstrument);
  }
  var updateCurrentNote = function(nextNote) {
    setCurrentNote(nextNote);
  }

  // UNCOMMENT me in lens studio
  // var voices = [];
  // var currentNote = 1;
  // var lastInstrumentHit = -1;
  // var updateVoices = function (updatedVoices) {
  //   voices = updatedVoices;
  // }
  // var updateLastInstrument = function(lastInstrument) {
  //   lastInstrumentHit = lastInstrument;
  // }
  // var updateCurrentNote = function(nextNote) {
  //   currentNote = nextNote;
  // }

  // main instrument variables – these need to be consistant in Lens Studio
  var instruments = [ 
    1, // DRUMS  
    2, // BASS 
    3, // SYNTH 
    4, // STRINGS 
    5, // GUITAR 
    6  // PIANO
  ];

  // maps what the current step is and gets next step based on probability
  var nextStepProbability = {
    1: [
      {step: 2, probability: 0.7},
      {step: 7, probability: 0.3},
    ],
    2: [
      {step: 7, probability: 0.8},
      {step: 5, probability: 0.2},
    ],
    3: [
      {step: 2, probability: 0.7},
      {step: 5, probability: 0.3},
    ],
    4: [
      {step: 2, probability: 0.5},
      {step: 6, probability: 0.5},
    ],
    5: [
      {step: 4, probability: 0.8},
      {step: 6, probability: 0.2},
    ],
    6: [
      {step: 7, probability: 0.4},
      {step: 5, probability: 0.6},
    ],
    7: [
      {step: 8, probability: 0.6},
      {step: 1, probability: 0.4},
    ],
    8: [
      {step: 4, probability: 0.6},
      {step: 3, probability: 0.4},
    ]
  }

  var getNextNote = function(current) {
    // check probability of each 
    var weightedValues = nextStepProbability[current];
    var randomNumber = Math.random();
    var threshold = 0;
    for (var i=0; i<weightedValues.length; i++) {
      threshold += weightedValues[i].probability;
      if (threshold > randomNumber) {
        return weightedValues[i].step;
      }
    }
    console.log('NOTHING FOUND, ERROR');
    return 0
  }

  var selectInitialInstrumentIndex = function() {
    // iterate through selected instruments
    var selectedInstruments = [];
    voices.forEach(function(voice) {
      selectedInstruments.push(instruments[voice.instrumentIndex]);
    });
    // find all possible instruments 
    var possibleInstruments = [];
    instruments.forEach(function(instrument) {
      if (selectedInstruments.indexOf(instrument) === -1) {
        possibleInstruments.push(instrument);
      }
    });
    if (possibleInstruments.length === 0) {
      // if no possible instruments, return a random instrument
      return Math.floor(Math.random()*instruments.length);
    } else {
      var index = Math.floor(Math.random()*possibleInstruments.length)
      return instruments.indexOf(possibleInstruments[index]);
    }
  }

  // externalAPI
  var setInstrument = function(voiceIndex, instrumentIndex) {
    var newVoice = voices[voiceIndex];
    newVoice.instrumentIndex = instrumentIndex;
    updateVoice(newVoice, voiceIndex);
  }

  // externalAPI (if we want to pre-populate the menu)
  var getInstrument = function(voiceIndex) {
    return instruments[voices[voiceIndex].instrumentIndex];
  }

  var createVoice = function() {
    return {
      id: voices.length + 1,
      lastNoteIndex: 0,
      instrumentIndex: selectInitialInstrumentIndex(),
    }
  }

  var addVoice = function () {
    if (voices.length < 8) {
      updateVoices(voices.concat(createVoice()));
    }
  }

  // called with the voiceIndex, not the voice
  var removeVoice = function(voiceIndex) {
    if (voices.length) {
      var allVoices = voices.slice();
      allVoices.splice(voiceIndex, 1);
      updateVoices(allVoices);
    }
  }

  // determine the mapping of sounds based on the number of voices, and the selected voice ID
  var selectSound = function(voiceIndex) {
    var sound = sounds[instruments[voices[voiceIndex].instrumentIndex]]
    // if drum, follows its own logic 
    if (voices[voiceIndex].instrumentIndex === 0) {
      setVoiceState(voiceIndex);
      playSound(sound[voices[voiceIndex].lastNoteIndex%sound.length])
    } else {
      // otherwise follow logic, for changing note only if an instrument is hit twice
      if (lastInstrumentHit === instruments[voices[voiceIndex].instrumentIndex]) {        
        var nextNote = getNextNote(currentNote);
        console.log('CURRENT NOTE', currentNote, 'NEXT NOTE', nextNote);
        updateCurrentNote(nextNote);
        // remember currentNote is index 1
        playSound(sound[nextNote-1])
      } else {
        console.log('CURRENT NOTE', currentNote);
        playSound(sound[currentNote-1])
      }
      updateLastInstrument(instruments[voices[voiceIndex].instrumentIndex]);
    }
  }

  // logic to update the new state for the voice
  // allows for algorithmic composition
  var setVoiceState = function(voiceIndex) {
    var voice = voices[voiceIndex];
    var newVoice = voice;
    newVoice.lastNoteIndex = voice.lastNoteIndex + 1;
    updateVoice(newVoice, voiceIndex);
  }

  // helper function to update voice
  var updateVoice = function(newVoice, voiceIndex) {
    var allVoices = voices.slice();
    var before = allVoices.slice(0, voiceIndex, 1);
    var after = allVoices.slice(voiceIndex + 1, allVoices.length);
    var updatedVoices = before.concat(newVoice)
    updatedVoices = updatedVoices.concat(after)
    updateVoices(updatedVoices);
  }

  // webapp specific playSound function
  var playSound = function(sound) {
    sound();
  }

  // webapp only – display the names of the instrument
  var instrumentMap = {
    1: 'DRUMS' ,
    2: 'BASS',
    3: 'SYNTH',
    4: 'STRINGS',
    5: 'GUITAR',
    6: 'PIANO',
  }
  
  // webapp only – add colors to the instruments
  var colorMap = {
    1: '#9296FF',
    2: '#FFB0B0',
    3: '#B0F6FF',
    4: '#B0FFB8',
    5: '#F4B0FF',
    6: '#FFF492',
  }

  return (
    <div className="App">
      <div className={'voices-wrapper'}>
        {
          voices.map((voice, voiceIndex) => {
            return (
              <div
              className='voice-wrapper'
                key={voiceIndex}
              >
                <div 
                  className='voice'
                  onClick={() => selectSound(voiceIndex)}
                  style={{
                    backgroundColor: colorMap[instruments[voices[voiceIndex].instrumentIndex]]
                  }}
                >
                  <p>{instrumentMap[instruments[voice.instrumentIndex]]}</p>
                </div>
                <div 
                  onClick={()=>{
                    setInstrument(voiceIndex, selectInitialInstrumentIndex());
                  }}
                  className='change-instrument'
                >
                  🔄
                </div>
                <div 
                  onClick={()=>{
                    removeVoice(voiceIndex);
                  }}
                  className='delete-voice'
                >
                  ❌
                </div>
              </div>
            )
          })
        }
      </div>
      <div className={'edit-button'} onClick={addVoice}>+</div>
      <div className={'last-note'}>
        <p>current: {currentNote}</p>
      </div>
    </div>
  );
}

export default App;
