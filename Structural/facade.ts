// Simplified API to hide low-level detailes and logic behind universal methods based on functionality
class PlumbingSystem {
    // Low level access to plumbing system
    setPressure(value: number) {}
    turnOn() {}
    turnOff() {}
}

class ElectricalSystem {
    // Low level access to electrical system
    setVoltage(value: number) {}
    turnOn() {}
    turnOff() {}
}

class House {
    private plumbing = new PlumbingSystem();
    private electrical = new ElectricalSystem();

    public turnOnSystems() {
        this.electrical.setVoltage(120);
        this.electrical.turnOn();
        this.plumbing.setPressure(500);
        this.plumbing.turnOn();
    }
    public shutDown() {
        this.plumbing.turnOff();
        this.electrical.turnOff();
    }
}

const client = new House();
client.turnOnSystems();
// Life cycle
client.shutDown();