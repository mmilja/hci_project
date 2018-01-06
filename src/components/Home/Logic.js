let takenSquares = [0,0,0,0,0,0,0,0,0];
let containerDescriptions = ["","","","","","","","",""];
let observer = null;

function emitChange() {
	observer(takenSquares, containerDescriptions);
}

export function observe(o) {
	if (observer) {
		throw new Error('Multiple observers not implemented.');
	}

	observer = o;
	emitChange();

	return () => {
		observer = null;
	}
}

export function canMoveContainer(position) {
	if(takenSquares[position] == 0)
        return true;
    else
        return false;
}

export function moveContainer(position, description){
    containerDescriptions[position] = description;
    takenSquares[position] = 1;
    emitChange();
}