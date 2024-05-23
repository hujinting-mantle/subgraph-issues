// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class IMasterChefRewardRate extends ethereum.SmartContract {
  static bind(address: Address): IMasterChefRewardRate {
    return new IMasterChefRewardRate("IMasterChefRewardRate", address);
  }

  sushiPerSecond(): BigInt {
    let result = super.call("sushiPerSecond", "sushiPerSecond():(uint256)", []);

    return result[0].toBigInt();
  }

  try_sushiPerSecond(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sushiPerSecond",
      "sushiPerSecond():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardPerSecond(): BigInt {
    let result = super.call(
      "rewardPerSecond",
      "rewardPerSecond():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_rewardPerSecond(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardPerSecond",
      "rewardPerSecond():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardsPerSecond(): BigInt {
    let result = super.call(
      "rewardsPerSecond",
      "rewardsPerSecond():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_rewardsPerSecond(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardsPerSecond",
      "rewardsPerSecond():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bananaPerSecond(): BigInt {
    let result = super.call(
      "bananaPerSecond",
      "bananaPerSecond():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_bananaPerSecond(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "bananaPerSecond",
      "bananaPerSecond():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  booPerSecond(): BigInt {
    let result = super.call("booPerSecond", "booPerSecond():(uint256)", []);

    return result[0].toBigInt();
  }

  try_booPerSecond(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("booPerSecond", "booPerSecond():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  joePerSec(): BigInt {
    let result = super.call("joePerSec", "joePerSec():(uint256)", []);

    return result[0].toBigInt();
  }

  try_joePerSec(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("joePerSec", "joePerSec():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  solarPerSec(): BigInt {
    let result = super.call("solarPerSec", "solarPerSec():(uint256)", []);

    return result[0].toBigInt();
  }

  try_solarPerSec(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("solarPerSec", "solarPerSec():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  thorusPerSecond(): BigInt {
    let result = super.call(
      "thorusPerSecond",
      "thorusPerSecond():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_thorusPerSecond(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "thorusPerSecond",
      "thorusPerSecond():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  plsPerSecond(): BigInt {
    let result = super.call("plsPerSecond", "plsPerSecond():(uint256)", []);

    return result[0].toBigInt();
  }

  try_plsPerSecond(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("plsPerSecond", "plsPerSecond():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  cakePerSecond(): BigInt {
    let result = super.call("cakePerSecond", "cakePerSecond():(uint256)", []);

    return result[0].toBigInt();
  }

  try_cakePerSecond(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "cakePerSecond",
      "cakePerSecond():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  zyberPerSec(): BigInt {
    let result = super.call("zyberPerSec", "zyberPerSec():(uint256)", []);

    return result[0].toBigInt();
  }

  try_zyberPerSec(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("zyberPerSec", "zyberPerSec():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  arxPerSec(): BigInt {
    let result = super.call("arxPerSec", "arxPerSec():(uint256)", []);

    return result[0].toBigInt();
  }

  try_arxPerSec(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("arxPerSec", "arxPerSec():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  WETHPerSec(): BigInt {
    let result = super.call("WETHPerSec", "WETHPerSec():(uint256)", []);

    return result[0].toBigInt();
  }

  try_WETHPerSec(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("WETHPerSec", "WETHPerSec():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardPerBlock(): BigInt {
    let result = super.call("rewardPerBlock", "rewardPerBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rewardPerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardPerBlock",
      "rewardPerBlock():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardsPerBlock(): BigInt {
    let result = super.call(
      "rewardsPerBlock",
      "rewardsPerBlock():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_rewardsPerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardsPerBlock",
      "rewardsPerBlock():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  cakePerBlock(): BigInt {
    let result = super.call("cakePerBlock", "cakePerBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_cakePerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("cakePerBlock", "cakePerBlock():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  dinoPerBlock(): BigInt {
    let result = super.call("dinoPerBlock", "dinoPerBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_dinoPerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("dinoPerBlock", "dinoPerBlock():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tribalChiefTribePerBlock(): BigInt {
    let result = super.call(
      "tribalChiefTribePerBlock",
      "tribalChiefTribePerBlock():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_tribalChiefTribePerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tribalChiefTribePerBlock",
      "tribalChiefTribePerBlock():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  snowballPerBlock(): BigInt {
    let result = super.call(
      "snowballPerBlock",
      "snowballPerBlock():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_snowballPerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "snowballPerBlock",
      "snowballPerBlock():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  spiritPerBlock(): BigInt {
    let result = super.call("spiritPerBlock", "spiritPerBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_spiritPerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "spiritPerBlock",
      "spiritPerBlock():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  crystalPerBlock(): BigInt {
    let result = super.call(
      "crystalPerBlock",
      "crystalPerBlock():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_crystalPerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "crystalPerBlock",
      "crystalPerBlock():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hairPerBlock(): BigInt {
    let result = super.call("hairPerBlock", "hairPerBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_hairPerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("hairPerBlock", "hairPerBlock():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  cntPerBlock(): BigInt {
    let result = super.call("cntPerBlock", "cntPerBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_cntPerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("cntPerBlock", "cntPerBlock():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  solarPerBlock(): BigInt {
    let result = super.call("solarPerBlock", "solarPerBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_solarPerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "solarPerBlock",
      "solarPerBlock():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}
