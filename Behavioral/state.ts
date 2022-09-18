// When object behaves differently based on some number of states
// Basic realization (scaling of switches is HELL)
class Human {
    think(mood) {
        switch (mood) {
            case 'happy':
                return 'i am happy';
            case 'sad':
                return 'i am sad';
            default:
                return 'i am neutral';
        }        
    }
}
// Healthy state pattern
interface State {
    think(): string;
}
class HappyState implements State {
    think() {
        return 'i am happy'
    }
}
class SadState implements State {
    think() {
        return 'i am sad'
    }
}
class HealthyStateHuman{
    // set the state as property
    state: State;
    constructor() {
        this.state = new HappyState();
    }
    // whenever this method is called we delegate it to it's current state
    think() {
        return this.state.think();
    }
    // When object changes it's behaviour also changes but API stays unchanged
    changeState(state) {
        this.state = state;
    }
}