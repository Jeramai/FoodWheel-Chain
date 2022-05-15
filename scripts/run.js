const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const foodSpinnerFactory = await hre.ethers.getContractFactory("Foodspinner");
  const foodSpinner = await foodSpinnerFactory.deploy();
  await foodSpinner.deployed();

  console.log("Contract deployed to:", foodSpinner.address);
  console.log("Contract deployed by:", owner.address);

  let likeCount;
  likeCount = await foodSpinner.getTotalLikes();

  let fsTxn = await foodSpinner.like();
  await fsTxn.wait();

  likeCount = await foodSpinner.getTotalLikes();

  fsTxn = await foodSpinner.connect(randomPerson).like();
  await fsTxn.wait();

  likeCount = await foodSpinner.getTotalLikes();
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
