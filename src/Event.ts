import Uuid from "Uuid";

abstract class Event {
  private _id: string;

  constructor() {
    this._id = Uuid.generate();
  }

  get id() {
    return this._id;
  }
}

export default Event;
