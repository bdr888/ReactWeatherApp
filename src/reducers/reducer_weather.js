import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// return state.concat([action.payload.data]); this is the ES5 version of next line
			return [ action.payload.data, ...state ];
	}

	return state;

}
