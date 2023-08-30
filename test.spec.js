import {LunarCraft} from './index';

describe("LunarCraft", () => {
    test('Executing ["f"] command should move spacecraft forward', () => {
        const craft = new LunarCraft();
        const commands = ["f"];
        craft.executeCommands(commands);
        expect(craft.getPosition()).toEqual({ x: 0, y: 1, z: 0 });
        expect(craft.getDirection()).toBe("N");
    });
});