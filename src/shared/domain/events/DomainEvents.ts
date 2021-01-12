import { AggregateRoot as AgreegateRoot } from '../AggregateRoot';
import { UniqueEntityID } from '../UniqueEntityID';
import { IDomainEvent } from './IDomainEvents';

/* eslint-disable import/prefer-default-export */
export class DomainEvents {
  private static handlersMap: any = {};

  private static markedAgreegate: AgreegateRoot<any>[] = [];

  public static makrkedAgreeGateforDispatch(
    aggregate: AgreegateRoot<any>,
  ): void {
    const found = !!this.AgreegateByID(aggregate.id);
    if (!found) {
      this.markedAgreegate.push(aggregate);
    }
  }

  public static dispatchAggregateEvents(aggregate: AgreegateRoot<any>) {
    aggregate.domainEvents.forEach((event: IDomainEvent) => this.dispatch(event));
  }

  public static AgreegateByID(id?: UniqueEntityID) {
    let found = null;
    for (const agreegate of this.markedAgreegate) {
      if (agreegate.id.equals(id)) {
        found = agreegate;
      }
    }
    return found;
  }

  public static removeDispatchEvent(aggregate: AgreegateRoot<any>) {
    const i = this.markedAgreegate.findIndex((a) => a.equals(aggregate));
    this.markedAgreegate.splice(i, 1);
  }

  public static dispatchForAggregate(id: UniqueEntityID) {
    const aggregate = this.AgreegateByID(id);
    if (aggregate) {
      this.dispatchAggregateEvents(aggregate);
      aggregate.clearEvents();
      this.removeDispatchEvent(aggregate);
    }
  }

  public static register(
    /* eslint-disable no-prototype-builtins */
    callback: (event: IDomainEvent) => void,
    eventName: string,
  ): void {
    /* eslint-disable no-prototype-builtins */
    if (!this.handlersMap.hasOwnProperty(eventName)) {
      this.handlersMap[eventName] = [];
    }
    this.handlersMap[eventName].push(callback);
  }

  public static clearHandlers(): void {
    this.handlersMap = {};
  }

  public static clearMarkedAggregates(): void {
    this.markedAgreegate = [];
  }

  public static dispatch(event: IDomainEvent) {
    const eventName = event.constructor.name;
    /* eslint-disable no-prototype-builtins */
    if (this.handlersMap.hasOwnProperty(eventName)) {
      const handlers: any[] = this.handlersMap[eventName];
      for (const handler of handlers) {
        handler(event);
      }
    }
  }
}
