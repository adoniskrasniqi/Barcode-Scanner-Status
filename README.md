[![](https://img.shields.io/badge/npm%20package-1.1.1-brightgreen)](https://www.npmjs.com/package/barcode-scanner-status)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)




# Barcode Scanner Status
Detect if a `Barcode Scanner` (or external keyboard) is connected to iOS device

### Installation
You need to have Cordova Keyboard Plugin, in order to use this package.
```
npm i cordova-plugin-keyboard
npm i barcode-scanner-status
```
``import brcScannerStatus from "barcode-scanner-status";``

### iOS Quirks
Add this line in your config.xml in order to enable `.focus();`
```
<preference name="KeyboardDisplayRequiresUserAction" value="false" />
```

### Methods
#### checkForScanner(delay)
Returns scanner status after delay, which by default is 5ms.

```
brcScannerStatus.checkForScanner().then((scannerConnected) => {
	console.log(scannerConnected);
});
```
#### destroy()
Destroy eventListener for scanner status

```
brcScannerStatus.destroy();
```