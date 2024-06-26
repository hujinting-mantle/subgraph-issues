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

export class IMasterChef023__poolInfoResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: Address;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: Address,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    return map;
  }

  getLpToken(): Address {
    return this.value0;
  }

  getAccRewardTokenPerShare(): BigInt {
    return this.value1;
  }

  getLastRewardBlock(): BigInt {
    return this.value2;
  }

  getAllocPoint(): BigInt {
    return this.value3;
  }

  getRewarder(): Address {
    return this.value4;
  }
}

export class IMasterChef023__userInfoResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getAmount(): BigInt {
    return this.value0;
  }

  getRewardDebt(): BigInt {
    return this.value1;
  }
}

export class IMasterChef023 extends ethereum.SmartContract {
  static bind(address: Address): IMasterChef023 {
    return new IMasterChef023("IMasterChef023", address);
  }

  poolInfo(param0: BigInt): IMasterChef023__poolInfoResult {
    let result = super.call(
      "poolInfo",
      "poolInfo(uint256):(address,uint256,uint256,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new IMasterChef023__poolInfoResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toAddress(),
    );
  }

  try_poolInfo(
    param0: BigInt,
  ): ethereum.CallResult<IMasterChef023__poolInfoResult> {
    let result = super.tryCall(
      "poolInfo",
      "poolInfo(uint256):(address,uint256,uint256,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new IMasterChef023__poolInfoResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toAddress(),
      ),
    );
  }

  userInfo(param0: BigInt, param1: Address): IMasterChef023__userInfoResult {
    let result = super.call(
      "userInfo",
      "userInfo(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1),
      ],
    );

    return new IMasterChef023__userInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_userInfo(
    param0: BigInt,
    param1: Address,
  ): ethereum.CallResult<IMasterChef023__userInfoResult> {
    let result = super.tryCall(
      "userInfo",
      "userInfo(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new IMasterChef023__userInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
      ),
    );
  }

  totalAllocPoint(): BigInt {
    let result = super.call(
      "totalAllocPoint",
      "totalAllocPoint():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_totalAllocPoint(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalAllocPoint",
      "totalAllocPoint():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
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

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
