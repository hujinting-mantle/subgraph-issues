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

export class Advance extends ethereum.Event {
  get params(): Advance__Params {
    return new Advance__Params(this);
  }
}

export class Advance__Params {
  _event: Advance;

  constructor(event: Advance) {
    this._event = event;
  }

  get epochBegin(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get epochAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Claim extends ethereum.Event {
  get params(): Claim__Params {
    return new Claim__Params(this);
  }
}

export class Claim__Params {
  _event: Claim;

  constructor(event: Claim) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class EditRecipient extends ethereum.Event {
  get params(): EditRecipient__Params {
    return new EditRecipient__Params(this);
  }
}

export class EditRecipient__Params {
  _event: EditRecipient;

  constructor(event: EditRecipient) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get shares(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get totalShares(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UpdateCredit extends ethereum.Event {
  get params(): UpdateCredit__Params {
    return new UpdateCredit__Params(this);
  }
}

export class UpdateCredit__Params {
  _event: UpdateCredit;

  constructor(event: UpdateCredit) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get lastShareIndex(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get credit(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UpdateShareIndex extends ethereum.Event {
  get params(): UpdateShareIndex__Params {
    return new UpdateShareIndex__Params(this);
  }
}

export class UpdateShareIndex__Params {
  _event: UpdateShareIndex;

  constructor(event: UpdateShareIndex) {
    this._event = event;
  }

  get shareIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class FarmingPool__recipientsResult {
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

  getShares(): BigInt {
    return this.value0;
  }

  getLastShareIndex(): BigInt {
    return this.value1;
  }

  getCredit(): BigInt {
    return this.value2;
  }
}

export class FarmingPool extends ethereum.SmartContract {
  static bind(address: Address): FarmingPool {
    return new FarmingPool("FarmingPool", address);
  }

  borrowable(): Address {
    let result = super.call("borrowable", "borrowable():(address)", []);

    return result[0].toAddress();
  }

  try_borrowable(): ethereum.CallResult<Address> {
    let result = super.tryCall("borrowable", "borrowable():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  claimable(): Address {
    let result = super.call("claimable", "claimable():(address)", []);

    return result[0].toAddress();
  }

  try_claimable(): ethereum.CallResult<Address> {
    let result = super.tryCall("claimable", "claimable():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  epochAmount(): BigInt {
    let result = super.call("epochAmount", "epochAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_epochAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("epochAmount", "epochAmount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  epochBegin(): BigInt {
    let result = super.call("epochBegin", "epochBegin():(uint256)", []);

    return result[0].toBigInt();
  }

  try_epochBegin(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("epochBegin", "epochBegin():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  imx(): Address {
    let result = super.call("imx", "imx():(address)", []);

    return result[0].toAddress();
  }

  try_imx(): ethereum.CallResult<Address> {
    let result = super.tryCall("imx", "imx():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lastUpdate(): BigInt {
    let result = super.call("lastUpdate", "lastUpdate():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastUpdate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lastUpdate", "lastUpdate():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  recipients(param0: Address): FarmingPool__recipientsResult {
    let result = super.call(
      "recipients",
      "recipients(address):(uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)],
    );

    return new FarmingPool__recipientsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
    );
  }

  try_recipients(
    param0: Address,
  ): ethereum.CallResult<FarmingPool__recipientsResult> {
    let result = super.tryCall(
      "recipients",
      "recipients(address):(uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new FarmingPool__recipientsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
      ),
    );
  }

  segmentLength(): BigInt {
    let result = super.call("segmentLength", "segmentLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_segmentLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "segmentLength",
      "segmentLength():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  shareIndex(): BigInt {
    let result = super.call("shareIndex", "shareIndex():(uint256)", []);

    return result[0].toBigInt();
  }

  try_shareIndex(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("shareIndex", "shareIndex():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalShares(): BigInt {
    let result = super.call("totalShares", "totalShares():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalShares(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalShares", "totalShares():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  updateCredit(account: Address): BigInt {
    let result = super.call("updateCredit", "updateCredit(address):(uint256)", [
      ethereum.Value.fromAddress(account),
    ]);

    return result[0].toBigInt();
  }

  try_updateCredit(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "updateCredit",
      "updateCredit(address):(uint256)",
      [ethereum.Value.fromAddress(account)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  vestingBegin(): BigInt {
    let result = super.call("vestingBegin", "vestingBegin():(uint256)", []);

    return result[0].toBigInt();
  }

  try_vestingBegin(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("vestingBegin", "vestingBegin():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  updateShareIndex(): BigInt {
    let result = super.call(
      "updateShareIndex",
      "updateShareIndex():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_updateShareIndex(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "updateShareIndex",
      "updateShareIndex():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  claim(): BigInt {
    let result = super.call("claim", "claim():(uint256)", []);

    return result[0].toBigInt();
  }

  try_claim(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("claim", "claim():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  claimAccount(account: Address): BigInt {
    let result = super.call("claimAccount", "claimAccount(address):(uint256)", [
      ethereum.Value.fromAddress(account),
    ]);

    return result[0].toBigInt();
  }

  try_claimAccount(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "claimAccount",
      "claimAccount(address):(uint256)",
      [ethereum.Value.fromAddress(account)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getBlockTimestamp(): BigInt {
    let result = super.call(
      "getBlockTimestamp",
      "getBlockTimestamp():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_getBlockTimestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getBlockTimestamp",
      "getBlockTimestamp():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get imx_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get claimable_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get borrowable_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get vester_(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class UpdateCreditCall extends ethereum.Call {
  get inputs(): UpdateCreditCall__Inputs {
    return new UpdateCreditCall__Inputs(this);
  }

  get outputs(): UpdateCreditCall__Outputs {
    return new UpdateCreditCall__Outputs(this);
  }
}

export class UpdateCreditCall__Inputs {
  _call: UpdateCreditCall;

  constructor(call: UpdateCreditCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateCreditCall__Outputs {
  _call: UpdateCreditCall;

  constructor(call: UpdateCreditCall) {
    this._call = call;
  }

  get credit(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class UpdateShareIndexCall extends ethereum.Call {
  get inputs(): UpdateShareIndexCall__Inputs {
    return new UpdateShareIndexCall__Inputs(this);
  }

  get outputs(): UpdateShareIndexCall__Outputs {
    return new UpdateShareIndexCall__Outputs(this);
  }
}

export class UpdateShareIndexCall__Inputs {
  _call: UpdateShareIndexCall;

  constructor(call: UpdateShareIndexCall) {
    this._call = call;
  }
}

export class UpdateShareIndexCall__Outputs {
  _call: UpdateShareIndexCall;

  constructor(call: UpdateShareIndexCall) {
    this._call = call;
  }

  get _shareIndex(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class AdvanceCall extends ethereum.Call {
  get inputs(): AdvanceCall__Inputs {
    return new AdvanceCall__Inputs(this);
  }

  get outputs(): AdvanceCall__Outputs {
    return new AdvanceCall__Outputs(this);
  }
}

export class AdvanceCall__Inputs {
  _call: AdvanceCall;

  constructor(call: AdvanceCall) {
    this._call = call;
  }
}

export class AdvanceCall__Outputs {
  _call: AdvanceCall;

  constructor(call: AdvanceCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ClaimAccountCall extends ethereum.Call {
  get inputs(): ClaimAccountCall__Inputs {
    return new ClaimAccountCall__Inputs(this);
  }

  get outputs(): ClaimAccountCall__Outputs {
    return new ClaimAccountCall__Outputs(this);
  }
}

export class ClaimAccountCall__Inputs {
  _call: ClaimAccountCall;

  constructor(call: ClaimAccountCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ClaimAccountCall__Outputs {
  _call: ClaimAccountCall;

  constructor(call: ClaimAccountCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class TrackBorrowCall extends ethereum.Call {
  get inputs(): TrackBorrowCall__Inputs {
    return new TrackBorrowCall__Inputs(this);
  }

  get outputs(): TrackBorrowCall__Outputs {
    return new TrackBorrowCall__Outputs(this);
  }
}

export class TrackBorrowCall__Inputs {
  _call: TrackBorrowCall;

  constructor(call: TrackBorrowCall) {
    this._call = call;
  }

  get borrower(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get borrowBalance(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get borrowIndex(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TrackBorrowCall__Outputs {
  _call: TrackBorrowCall;

  constructor(call: TrackBorrowCall) {
    this._call = call;
  }
}
