const LunarCraft = require('./index'); // Adjust the path accordingly

describe('LunarCraft', () => {

    // test('Executing ["f"] command should move spacecraft forward', () => {
    //     const craft = new LunarCraft();
    //     const commands = ["f"];
    //     craft.executeCommands(commands);
    //     expect(craft.getPosition()).toEqual({ x: 0, y: 1, z: 0 });
    //     expect(craft.getDirection()).toBe("N");
    // });

    // test('Executing ["r"] command should turn spacecraft right', () => {
    //     const craft = new LunarCraft();
    //     const commands = ["r"];
    //     craft.executeCommands(commands);
    //     expect(craft.getPosition()).toEqual({ x: 0, y: 0, z: 0 });
    //     expect(craft.getDirection()).toBe("E");
    // });


    // test('Executing ["b"] command should move spacecraft backward', () => {
    //     const craft = new LunarCraft();
    //     const commands = ["b"];
    //     craft.executeCommands(commands);
    //     expect(craft.getPosition()).toEqual({ x: 0, y: -1, z: 0 });
    //     expect(craft.getDirection()).toBe("N");
    // });

    // test('Executing ["l"] command should turn spacecraft left', () => {
    //     const craft = new LunarCraft();
    //     const commands = ["l"];
    //     craft.executeCommands(commands);
    //     expect(craft.getPosition()).toEqual({ x: 0, y: 0, z: 0 });
    //     expect(craft.getDirection()).toBe("W");
    // });

    // test('Executing ["u"] command should turn spacecraft up', () => {
    //     const craft = new LunarCraft();
    //     const commands = ["u"];
    //     craft.executeCommands(commands);
    //     expect(craft.getPosition()).toEqual({ x: 0, y: 0, z: 0 });
    //     expect(craft.getDirection()).toBe("Up");
    // });

    // test('Executing ["d"] command should turn spacecraft down', () => {
    //     const craft = new LunarCraft();
    //     const commands = ["d"];
    //     craft.executeCommands(commands);
    //     expect(craft.getPosition()).toEqual({ x: 0, y: 0, z: 0 });
    //     expect(craft.getDirection()).toBe("Down");
    // });

    // test('Executing ["f","r"] command should move spacecraft forward and then turn right', () => {
    //     const craft = new LunarCraft();
    //     const commands = ["f","r"];
    //     craft.executeCommands(commands);
    //     expect(craft.getPosition()).toEqual({ x: 0, y: 1, z: 0 });
    //     expect(craft.getDirection()).toBe("E");
    // });
    
    // test('Executing ["f","r","u"] command should move spacecraft forward, then turn right and then Upward', () => {
    //     const craft = new LunarCraft();
    //     const commands = ["f","r","u"];
    //     craft.executeCommands(commands);
    //     expect(craft.getPosition()).toEqual({ x: 0, y: 1, z: 0 });
    //     expect(craft.getDirection()).toBe("Up");
    // });

    // test('Executing ["f","r","u","b"] command should move spacecraft forward, then turn right, then Upward and then move backward', () => {
    //     const craft = new LunarCraft();
    //     const commands = ["f","r","u","b"];
    //     craft.executeCommands(commands);
    //     expect(craft.getPosition()).toEqual({ x: 0, y: 1, z: -1 });
    //     expect(craft.getDirection()).toBe("Up");
    // });

    // test('Executing ["f","r","u","b","l"] command should move spacecraft forward, then turn right, then Upward, then move backward and then turn left', () => {
    //     const craft = new LunarCraft();
    //     const commands = ["f","r","u","b","l"];
    //     craft.executeCommands(commands);
    //     expect(craft.getPosition()).toEqual({ x: 0, y: 1, z: -1 });
    //     expect(craft.getDirection()).toBe("N");
    // });

    test('Executing ["f","l","u","b","l"] command should move spacecraft forward, then turn left, then Upward, then move backward and then turn left', () => {
        const craft = new LunarCraft();
        const commands = ["f","l","u","b","l"];
        craft.executeCommands(commands);
        expect(craft.getPosition()).toEqual({ x: 0, y: 1, z: -1 });
        expect(craft.getDirection()).toBe("S");
    });
});