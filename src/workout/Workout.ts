import Uuid from "../Uuid";

abstract class Event {
  private _id: string;

  constructor() {
    this._id = Uuid.generate();
  }

  get id() {
    return this._id;
  }
}

export abstract class WorkoutEvent extends Event {
  private _segmentId: string;

  constructor(segmentId: string) {
    super();
    this._segmentId = segmentId;
  }

  get segment() {
    return this._segmentId;
  }
}

export class AddSegmentToWorkoutEvent extends WorkoutEvent {}

export class RemoveSegmentFromWorkoutEvent extends WorkoutEvent {}

export class Workout {
  private _events: WorkoutEvent[];

  private constructor(events: WorkoutEvent[]) {
    this._events = events;
  }

  push(event: WorkoutEvent): Workout {
    return new Workout([...this._events, event]);
  }

  state(): string[] {
    let currentState: string[] = [];
    this._events.forEach(event => {
      if (event instanceof AddSegmentToWorkoutEvent) {
        currentState = currentState.concat(event.segment);
      }
      if (event instanceof RemoveSegmentFromWorkoutEvent) {
        currentState = currentState.filter(segment => segment !== event.segment);
      }
    });
    return currentState;
  }

  public static empty() {
    return new Workout([]);
  }
}
