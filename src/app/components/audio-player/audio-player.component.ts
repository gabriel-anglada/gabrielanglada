import {Component, Input, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
    selector: 'ga-audio',
    templateUrl: 'audio-player.component.html',
    styleUrls: ['audio-player.component.scss']
})
export class AudioComponent implements AfterViewInit{
    @Input('src') src: string;
    @Input('type') type: string = 'audio/mp3';

    @ViewChild('audio') audio: ElementRef;

    private _audioElement;
    private _state: string = 'error';
    private _pausePressed: boolean = false;
    private _previousVolume: number = 1;

    private currentTime: string = '00:00';
    private volume: number = 1;

    set state(value: string) {
        this._state = value;
        console.log(value);
    }

    get state() {
        return this._state;
    }

    constructor() {};

    ngAfterViewInit() {
        this._audioElement = this.audio.nativeElement;

        this._enableUI();
        this._addListeners();
    }

    _enableUI() {

    }

    _addListeners() {
        this._audioElement.addEventListener('timeupdate', () => {
            let timeInSeconds = parseInt(this._audioElement.currentTime);
            let minutes = Math.floor(timeInSeconds / 60);
            let seconds = timeInSeconds - minutes * 60;
            let minutesString = minutes < 10 ? '0' + minutes : minutes;
            let secondsString = seconds < 10 ? '0' + seconds : seconds;

            this.currentTime = `${minutesString}:${secondsString}`;
        });

        this._audioElement.addEventListener('error', event => {
            this.state = 'error';

            setTimeout(() =>  this.load(), 5000);
        });
        this._audioElement.addEventListener('play', event => {
            this.state = 'play';
        });
        this._audioElement.addEventListener('pause', event => {
            this.state = 'pause';

            this._pausePressed ? this._pausePressed = false : this.load();
        });
        this._audioElement.addEventListener('canplay', event => {
            this.state = 'loaded';

            this.play();
        });
        this._audioElement.addEventListener('volumechange', event => {
            this.volume = this._audioElement.volume;
        });
    }

    load() {
        this._audioElement.load();
    }

    togglePlayPause() {
        if(this.state == 'play') {
            this._pausePressed = true;
            this.pause();
        } else {
            this._audioElement.networkState == 3 ? this.load() : this.play();
        }
    }

    play() {
        this._audioElement.play();
    }

    pause() {
        this._audioElement.pause();
    }

    toggleMute() {
        if(this.volume > 0) {
            this._previousVolume = this.volume;
            this.volume = 0;
        } else {
            this.volume = this._previousVolume;
        }
    }

    onVolumeRangeChange(event) {
        this.volume = event.value;
    }
}