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

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Mint extends ethereum.Event {
  get params(): Mint__Params {
    return new Mint__Params(this);
  }
}

export class Mint__Params {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get minter(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get mintAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get mintTokens(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Redeem extends ethereum.Event {
  get params(): Redeem__Params {
    return new Redeem__Params(this);
  }
}

export class Redeem__Params {
  _event: Redeem;

  constructor(event: Redeem) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get redeemer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get redeemAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get redeemTokens(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Reinvest extends ethereum.Event {
  get params(): Reinvest__Params {
    return new Reinvest__Params(this);
  }
}

export class Reinvest__Params {
  _event: Reinvest;

  constructor(event: Reinvest) {
    this._event = event;
  }

  get caller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get reward(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get bounty(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Sync extends ethereum.Event {
  get params(): Sync__Params {
    return new Sync__Params(this);
  }
}

export class Sync__Params {
  _event: Sync;

  constructor(event: Sync) {
    this._event = event;
  }

  get totalBalance(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class StakedLPToken__getReservesResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getReserve0(): BigInt {
    return this.value0;
  }

  getReserve1(): BigInt {
    return this.value1;
  }

  getBlockTimestampLast(): BigInt {
    return this.value2;
  }
}

export class StakedLPToken extends ethereum.SmartContract {
  static bind(address: Address): StakedLPToken {
    return new StakedLPToken("StakedLPToken", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner),
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)],
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, value: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(value),
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(value),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transfer(to: Address, value: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(value),
    ]);

    return result[0].toBoolean();
  }

  try_transfer(to: Address, value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(value),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(from: Address, to: Address, value: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(value),
      ],
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    from: Address,
    to: Address,
    value: BigInt,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(value),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  DOMAIN_SEPARATOR(): Bytes {
    let result = super.call(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_DOMAIN_SEPARATOR(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PERMIT_TYPEHASH(): Bytes {
    let result = super.call(
      "PERMIT_TYPEHASH",
      "PERMIT_TYPEHASH():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_PERMIT_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "PERMIT_TYPEHASH",
      "PERMIT_TYPEHASH():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  nonces(owner: Address): BigInt {
    let result = super.call("nonces", "nonces(address):(uint256)", [
      ethereum.Value.fromAddress(owner),
    ]);

    return result[0].toBigInt();
  }

  try_nonces(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nonces", "nonces(address):(uint256)", [
      ethereum.Value.fromAddress(owner),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  underlying(): Address {
    let result = super.call("underlying", "underlying():(address)", []);

    return result[0].toAddress();
  }

  try_underlying(): ethereum.CallResult<Address> {
    let result = super.tryCall("underlying", "underlying():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  factory(): Address {
    let result = super.call("factory", "factory():(address)", []);

    return result[0].toAddress();
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall("factory", "factory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalBalance(): BigInt {
    let result = super.call("totalBalance", "totalBalance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalBalance", "totalBalance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MINIMUM_LIQUIDITY(): BigInt {
    let result = super.call(
      "MINIMUM_LIQUIDITY",
      "MINIMUM_LIQUIDITY():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_MINIMUM_LIQUIDITY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MINIMUM_LIQUIDITY",
      "MINIMUM_LIQUIDITY():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  exchangeRate(): BigInt {
    let result = super.call("exchangeRate", "exchangeRate():(uint256)", []);

    return result[0].toBigInt();
  }

  try_exchangeRate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("exchangeRate", "exchangeRate():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mint(minter: Address): BigInt {
    let result = super.call("mint", "mint(address):(uint256)", [
      ethereum.Value.fromAddress(minter),
    ]);

    return result[0].toBigInt();
  }

  try_mint(minter: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("mint", "mint(address):(uint256)", [
      ethereum.Value.fromAddress(minter),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  redeem(redeemer: Address): BigInt {
    let result = super.call("redeem", "redeem(address):(uint256)", [
      ethereum.Value.fromAddress(redeemer),
    ]);

    return result[0].toBigInt();
  }

  try_redeem(redeemer: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("redeem", "redeem(address):(uint256)", [
      ethereum.Value.fromAddress(redeemer),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isStakedLPToken(): boolean {
    let result = super.call("isStakedLPToken", "isStakedLPToken():(bool)", []);

    return result[0].toBoolean();
  }

  try_isStakedLPToken(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isStakedLPToken",
      "isStakedLPToken():(bool)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  stakedLPTokenType(): string {
    let result = super.call(
      "stakedLPTokenType",
      "stakedLPTokenType():(string)",
      [],
    );

    return result[0].toString();
  }

  try_stakedLPTokenType(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "stakedLPTokenType",
      "stakedLPTokenType():(string)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  stakingRewards(): Address {
    let result = super.call("stakingRewards", "stakingRewards():(address)", []);

    return result[0].toAddress();
  }

  try_stakingRewards(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "stakingRewards",
      "stakingRewards():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pid(): BigInt {
    let result = super.call("pid", "pid():(uint256)", []);

    return result[0].toBigInt();
  }

  try_pid(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("pid", "pid():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  token0(): Address {
    let result = super.call("token0", "token0():(address)", []);

    return result[0].toAddress();
  }

  try_token0(): ethereum.CallResult<Address> {
    let result = super.tryCall("token0", "token0():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  token1(): Address {
    let result = super.call("token1", "token1():(address)", []);

    return result[0].toAddress();
  }

  try_token1(): ethereum.CallResult<Address> {
    let result = super.tryCall("token1", "token1():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  router(): Address {
    let result = super.call("router", "router():(address)", []);

    return result[0].toAddress();
  }

  try_router(): ethereum.CallResult<Address> {
    let result = super.tryCall("router", "router():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  masterChef(): Address {
    let result = super.call("masterChef", "masterChef():(address)", []);

    return result[0].toAddress();
  }

  try_masterChef(): ethereum.CallResult<Address> {
    let result = super.tryCall("masterChef", "masterChef():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lpDepositor(): Address {
    let result = super.call("lpDepositor", "lpDepositor():(address)", []);

    return result[0].toAddress();
  }

  try_lpDepositor(): ethereum.CallResult<Address> {
    let result = super.tryCall("lpDepositor", "lpDepositor():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  gauge(): Address {
    let result = super.call("gauge", "gauge():(address)", []);

    return result[0].toAddress();
  }

  try_gauge(): ethereum.CallResult<Address> {
    let result = super.tryCall("gauge", "gauge():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewardsToken(): Address {
    let result = super.call("rewardsToken", "rewardsToken():(address)", []);

    return result[0].toAddress();
  }

  try_rewardsToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("rewardsToken", "rewardsToken():(address)", []);
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

  WETH(): Address {
    let result = super.call("WETH", "WETH():(address)", []);

    return result[0].toAddress();
  }

  try_WETH(): ethereum.CallResult<Address> {
    let result = super.tryCall("WETH", "WETH():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  REINVEST_BOUNTY(): BigInt {
    let result = super.call(
      "REINVEST_BOUNTY",
      "REINVEST_BOUNTY():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_REINVEST_BOUNTY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "REINVEST_BOUNTY",
      "REINVEST_BOUNTY():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getReserves(): StakedLPToken__getReservesResult {
    let result = super.call(
      "getReserves",
      "getReserves():(uint112,uint112,uint32)",
      [],
    );

    return new StakedLPToken__getReservesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
    );
  }

  try_getReserves(): ethereum.CallResult<StakedLPToken__getReservesResult> {
    let result = super.tryCall(
      "getReserves",
      "getReserves():(uint112,uint112,uint32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new StakedLPToken__getReservesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
      ),
    );
  }

  price0CumulativeLast(): BigInt {
    let result = super.call(
      "price0CumulativeLast",
      "price0CumulativeLast():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_price0CumulativeLast(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "price0CumulativeLast",
      "price0CumulativeLast():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  price1CumulativeLast(): BigInt {
    let result = super.call(
      "price1CumulativeLast",
      "price1CumulativeLast():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_price1CumulativeLast(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "price1CumulativeLast",
      "price1CumulativeLast():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getReward(): BigInt {
    let result = super.call("getReward", "getReward():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getReward(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getReward", "getReward():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class PermitCall extends ethereum.Call {
  get inputs(): PermitCall__Inputs {
    return new PermitCall__Inputs(this);
  }

  get outputs(): PermitCall__Outputs {
    return new PermitCall__Outputs(this);
  }
}

export class PermitCall__Inputs {
  _call: PermitCall;

  constructor(call: PermitCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get spender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[4].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class PermitCall__Outputs {
  _call: PermitCall;

  constructor(call: PermitCall) {
    this._call = call;
  }
}

export class ExchangeRateCall extends ethereum.Call {
  get inputs(): ExchangeRateCall__Inputs {
    return new ExchangeRateCall__Inputs(this);
  }

  get outputs(): ExchangeRateCall__Outputs {
    return new ExchangeRateCall__Outputs(this);
  }
}

export class ExchangeRateCall__Inputs {
  _call: ExchangeRateCall;

  constructor(call: ExchangeRateCall) {
    this._call = call;
  }
}

export class ExchangeRateCall__Outputs {
  _call: ExchangeRateCall;

  constructor(call: ExchangeRateCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get minter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get mintTokens(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RedeemCall extends ethereum.Call {
  get inputs(): RedeemCall__Inputs {
    return new RedeemCall__Inputs(this);
  }

  get outputs(): RedeemCall__Outputs {
    return new RedeemCall__Outputs(this);
  }
}

export class RedeemCall__Inputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }

  get redeemer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RedeemCall__Outputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }

  get redeemAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SkimCall extends ethereum.Call {
  get inputs(): SkimCall__Inputs {
    return new SkimCall__Inputs(this);
  }

  get outputs(): SkimCall__Outputs {
    return new SkimCall__Outputs(this);
  }
}

export class SkimCall__Inputs {
  _call: SkimCall;

  constructor(call: SkimCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SkimCall__Outputs {
  _call: SkimCall;

  constructor(call: SkimCall) {
    this._call = call;
  }
}

export class SyncCall extends ethereum.Call {
  get inputs(): SyncCall__Inputs {
    return new SyncCall__Inputs(this);
  }

  get outputs(): SyncCall__Outputs {
    return new SyncCall__Outputs(this);
  }
}

export class SyncCall__Inputs {
  _call: SyncCall;

  constructor(call: SyncCall) {
    this._call = call;
  }
}

export class SyncCall__Outputs {
  _call: SyncCall;

  constructor(call: SyncCall) {
    this._call = call;
  }
}

export class _setFactoryCall extends ethereum.Call {
  get inputs(): _setFactoryCall__Inputs {
    return new _setFactoryCall__Inputs(this);
  }

  get outputs(): _setFactoryCall__Outputs {
    return new _setFactoryCall__Outputs(this);
  }
}

export class _setFactoryCall__Inputs {
  _call: _setFactoryCall;

  constructor(call: _setFactoryCall) {
    this._call = call;
  }
}

export class _setFactoryCall__Outputs {
  _call: _setFactoryCall;

  constructor(call: _setFactoryCall) {
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

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ReinvestCall extends ethereum.Call {
  get inputs(): ReinvestCall__Inputs {
    return new ReinvestCall__Inputs(this);
  }

  get outputs(): ReinvestCall__Outputs {
    return new ReinvestCall__Outputs(this);
  }
}

export class ReinvestCall__Inputs {
  _call: ReinvestCall;

  constructor(call: ReinvestCall) {
    this._call = call;
  }
}

export class ReinvestCall__Outputs {
  _call: ReinvestCall;

  constructor(call: ReinvestCall) {
    this._call = call;
  }
}
