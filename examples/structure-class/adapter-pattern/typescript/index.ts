// 旧接口
interface USB {
  connectWithUSB(): void;
}

// 新类
class TypeC {
  connectWithTypeC() {
    console.log(`this is TypeC connect`);
  }
}

// 旧类
class UsbDevice implements USB {
  connectWithUSB() {
    console.log(`this is USB connect`);
  }
}

// 定义旧转新适配器
class USBToTypeCAdapter implements TypeC {
  usbDevice: USB;

  constructor(usbDevice: USB) {
    this.usbDevice = usbDevice;
  }

  // 调用新方法
  connectWithTypeC() {
    // 在内部自己调用旧方法，实现新旧转换
    this.usbDevice.connectWithUSB();
  }
}

const usb = new UsbDevice();
const adapter = new USBToTypeCAdapter(usb);
// 实际调用的是旧方法
adapter.connectWithTypeC();
