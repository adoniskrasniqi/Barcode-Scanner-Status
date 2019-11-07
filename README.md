
# Barcode Scanner Status
Detect if a `Barcode Scanner` (or external keyboard) is connected to iOS device

### Installation
You need to have Cordova Keyboard Plugin, in order to use this package.
```
npm i cordova-plugin-keyboard
npm i barcode-scanner-status
```
``import barcode_scanner from "@/components/zulu.js";``

### iOS Quirks
Add this line in your config.xml in order to enable `.focus();`
```
<preference name="KeyboardDisplayRequiresUserAction" value="false" />
```

### Methods
#### checkForScanner(delay)
Returns scanner status after delay, which by default is 5ms.

```
barcode_scanner.checkForScanner().then((scannerConnected) => {
	console.log(scannerConnected);
});
```
