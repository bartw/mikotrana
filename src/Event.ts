import Uuid from "uuid";

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
