import React from 'react';
import { MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import _ from 'lodash';
import DimensionsProvider from './DimensionsProvider';
import SoundfontProvider from './SoundfontProvider';
import PianoWithRecord from './PianoWithRecord';




const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";
const noteRange = {
	first: MidiNumbers.fromNote("c2"),
	last: MidiNumbers.fromNote("f5")
};



class PianoKey extends React.Component {
	state = {
    recording: {
      mode: 'RECORDING',
      events: [],
      currentTime: 0,
      currentEvents: [],
    },
  };

  constructor(props) {
    super(props);
    this.scheduledEvents = [];
  }

  getRecordingEndTime = () => {
    if (this.state.recording.events.length === 0) {
      return 0;
    }
    return Math.max(
      ...this.state.recording.events.map(event => event.time + event.duration),
    );
  };

  setRecording = value => {
    this.setState({
      recording: Object.assign({}, this.state.recording, value),
    });
  };

  onClickPlay = () => {
    this.setRecording({
      mode: 'PLAYING',
    });
    const startAndEndTimes = _.uniq(
      _.flatMap(this.state.recording.events, event => [
        event.time,
        event.time + event.duration,
      ]),
    );
    startAndEndTimes.forEach(time => {
      this.scheduledEvents.push(
        setTimeout(() => {
          const currentEvents = this.state.recording.events.filter(event => {
            return event.time <= time && event.time + event.duration > time;
          });
          this.setRecording({
            currentEvents,
          });
        }, time * 1000),
      );
    });
    // Stop at the end
    setTimeout(() => {
      this.onClickStop();
    }, this.getRecordingEndTime() * 1000);
  };

  onClickStop = () => {
    this.scheduledEvents.forEach(scheduledEvent => {
      clearTimeout(scheduledEvent);
    });
    this.setRecording({
      mode: 'RECORDING',
      currentEvents: [],
    });
  };

  onClickClear = () => {
    this.onClickStop();
    this.setRecording({
      events: [],
      mode: 'RECORDING',
      currentEvents: [],
      currentTime: 0,
    });
  };

	render(){
		return (
			<>
			<DimensionsProvider>
				{({ containerWidth, containerHeight }) => (
					<SoundfontProvider
						instrumentName="acoustic_grand_piano"
						audioContext={audioContext}
						hostname={soundfontHostname}
						render={({ isLoading, playNote, stopNote }) => (
							<PianoWithRecord className="PianoDarkTheme"
								recording={this.state.recording}
                setRecording={this.setRecording}
								noteRange={noteRange}
								width={containerWidth}
								playNote={playNote}
								stopNote={stopNote}
								disabled={isLoading}
							/>
						)}
					/>
	
				)}
            </DimensionsProvider>
            <ul style={{paddingTop:'20px'}}>
              <li>Start with clicking on any note and play a music! The music will be recorded automatically.</li>
              <li>Click the <b>"PLAY"</b> button and click <b>"PAUSE"</b> any time you want to stop. Click <b>"PLAY"</b> again to resume.</li>
              <li>Clean up the previous song by clicking <b>"CLEAR"</b></li>
            </ul>
            <div className="">
					<button className="ui labeled icon button" style={{margin:'15px'}} onClick={this.onClickPlay}><i className="play icon"></i>Play</button>
					<button className="ui labeled icon button" style={{margin:'15px'}} onClick={this.onClickStop}><i className="pause icon"></i>Pause</button>
					<button className="ui labeled icon button" style={{margin:'15px'}} onClick={this.onClickClear}><i className="stop icon"></i>Clear</button>
			</div>
			</>
		)
	}

}

export default PianoKey;