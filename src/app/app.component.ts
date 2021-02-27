import { Component } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs'
import { Store } from '@ngrx/store'
import * as TimerActions from './timer.actions'
import { StateInterface } from './timer.reducer'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	private static DefaultState = 10 * 60;
	
	constructor(private store: Store<{state: StateInterface}>) {
		let timer$: Subscription

		store.select('state').subscribe(state => {
			console.log(state)
			if (state.value === 0) {
				this.time = AppComponent.DefaultState
			}
			if (state.isPlay === true) {
				timer$ = timer(1000, 1000).subscribe(v => {
					if (!this.time) {
						store.dispatch(TimerActions.stop())
					}
					this.time = this.time - 1
				})
				this.isPlay = state.isPlay
			} 
			if (state.isPlay === false) {
				if (timer$) {
					timer$.unsubscribe()
				}
				this.isPlay = state.isPlay
			}
			if (state.addValue) {
				this.time += state.addValue
			}
		})
	}

	public isPlay: boolean

	public time: number

	start() {
		this.store.dispatch(TimerActions.start())
	}

	stop() {
		this.store.dispatch(TimerActions.stop())
	}

	reset() {
		this.store.dispatch(TimerActions.reset())
	}

	add() {
		this.store.dispatch(TimerActions.add())
	}
}
