const main = async () => {
  const Transations = await hre.etheres.getContractFactory("Transation");
  const transations = await Transations.deploy("helloworld");
  await transations.deploy();
  console.log("Greeter deployed to: ", transations.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
