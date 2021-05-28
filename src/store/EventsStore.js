import {
  observable,
  action,
  computed,
  makeObservable,
  makeAutoObservable,
} from "mobx";

class EventsStore {
  events = [];

  constructor() {
    makeAutoObservable(this);
  }

  setEvents = (events) => {
    this.events = events;
  };

  setEvent = (event) => {
    this.events.push(event);
  };

  get eventsLength() {
    return this.events.length;
  }

  get getEvents() {
    return this.events;
  }
}

const eventsStore = new EventsStore();

export default eventsStore;
