const FileIO = require('../fileIO');
const fs = require("fs")

jest.mock("fs")
describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
      //arange
      const fileIo = new FileIO();
      const file = "test.txt";
      let data;
      //act
     fs.readFileSync.mockReturnValue("Hello world");
      data = fileIo.read(file);

      //assert
      expect(data).toEqual("Hello world")
    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
      const fileIo = new FileIO();
      const path = "message.txt"

      fileIo.write(path, "data test")

      expect(fs.writeFileSync).lastCalledWith(path, "data test")
    });
  });
});
