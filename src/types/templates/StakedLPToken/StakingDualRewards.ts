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

export class StakingDualRewards extends ethereum.SmartContract {
  static bind(address: Address): StakingDualRewards {
    return new StakingDualRewards("StakingDualRewards", address);
  }

  rewardsTokenA(): Address {
    let result = super.call("rewardsTokenA", "rewardsTokenA():(address)", []);

    return result[0].toAddress();
  }

  try_rewardsTokenA(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "rewardsTokenA",
      "rewardsTokenA():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewardsTokenB(): Address {
    let result = super.call("rewardsTokenB", "rewardsTokenB():(address)", []);

    return result[0].toAddress();
  }

  try_rewardsTokenB(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "rewardsTokenB",
      "rewardsTokenB():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewardRateA(): BigInt {
    let result = super.call("rewardRateA", "rewardRateA():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rewardRateA(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("rewardRateA", "rewardRateA():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardRateB(): BigInt {
    let result = super.call("rewardRateB", "rewardRateB():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rewardRateB(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("rewardRateB", "rewardRateB():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  stakingToken(): Address {
    let result = super.call("stakingToken", "stakingToken():(address)", []);

    return result[0].toAddress();
  }

  try_stakingToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("stakingToken", "stakingToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account),
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class StakeCall extends ethereum.Call {
  get inputs(): StakeCall__Inputs {
    return new StakeCall__Inputs(this);
  }

  get outputs(): StakeCall__Outputs {
    return new StakeCall__Outputs(this);
  }
}

export class StakeCall__Inputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class StakeCall__Outputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class GetRewardCall extends ethereum.Call {
  get inputs(): GetRewardCall__Inputs {
    return new GetRewardCall__Inputs(this);
  }

  get outputs(): GetRewardCall__Outputs {
    return new GetRewardCall__Outputs(this);
  }
}

export class GetRewardCall__Inputs {
  _call: GetRewardCall;

  constructor(call: GetRewardCall) {
    this._call = call;
  }
}

export class GetRewardCall__Outputs {
  _call: GetRewardCall;

  constructor(call: GetRewardCall) {
    this._call = call;
  }
}