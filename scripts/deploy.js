const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    // Set unlock time to 1 minute in the future
    const unlockTime = Math.floor(Date.now() / 1000) + 60;

    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(unlockTime, { value: hre.ethers.parseEther("0.01") });

    await lock.waitForDeployment();

    console.log(`Lock deployed to: ${await lock.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
