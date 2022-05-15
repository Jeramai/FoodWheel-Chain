const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const foodSpinnerFactory = await hre.ethers.getContractFactory("Foodspinner");
  const foodSpinner = await foodSpinnerFactory.deploy();
  await foodSpinner.deployed();

  console.log("FoodSpinner address: ", foodSpinner.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
