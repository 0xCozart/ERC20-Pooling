import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", function () {
  let chronos;

  before(async function () {
    const Chronos = await ethers.getContractFactory("Chronos");
    chronos = Chronos.deploy();
  });

  it("Checks for succesfully deployed contract", async function () {
    console.log({ chronos });
  });

  it("Should ", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  // it("Should sucessfully deploy and mint Adventurers", async function () {});
});
