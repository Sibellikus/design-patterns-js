class Settings {
    static instance: Settings;
    public readonly mode = 'dark';

    // preven NEW with private constructor
    private constructor() {   }

    static getInstance(): Settings {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    }
}
const settings = { dark: 'true' }
