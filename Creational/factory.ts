// Instead of using new keyword for creating object we use function or method of class doing it for us 
class IOSButton {}
class AndroidButton {}

// Without factory. Not very maintanable approach
let os;
const button1 = os === 'ios' ? new IOSButton() : new AndroidButton();
const button2 = os === 'ios' ? new IOSButton() : new AndroidButton();

// Let's realise factory class
class ButtonFactory {
    createButton(os: string): IOSButton | AndroidButton {
        if (os === 'ios') {
            return new IOSButton();
        } else {
            return new AndroidButton();
        }
    }
}
// With factory
const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
const btn2 = factory.createButton(os);