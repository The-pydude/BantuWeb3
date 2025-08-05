const hre = require("hardhat");

async function main() {
    const lockAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await Lock.attach(lockAddress);

    const unlockTime = await lock.unlockTime();
    const currentTime = Math.floor(Date.now() / 1000);

    console.log("Unlock Time:", unlockTime.toString());
    console.log("Current Time:", currentTime);

    if (currentTime >= unlockTime) {
        const tx = await lock.withdraw();
        await tx.wait();
        console.log("✅ Withdrawal successful");
    } else {
        console.log("⏳ Too early to withdraw.");
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
