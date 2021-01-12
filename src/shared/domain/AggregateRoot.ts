import { Entity } from './Entity';
import { DomainEvents } from './events/DomainEvents';
import { IDomainEvent } from './events/IDomainEvents';
import { UniqueEntityID } from './UniqueEntityID';

/* eslint-disable import/prefer-default-export */
export class AggregateRoot<T> extends Entity<T> {
  private _domainEvents: DomainEvents[] = [];

  get id(): UniqueEntityID {
    return this._id;
  }

  get domainEvents(): IDomainEvent[] {
    return this.domainEvents;
  }

  addDomainEvents(domainEvent: any) {
    this._domainEvents.push(domainEvent);
  }

  clearEvents() {
    this._domainEvents.splice(0, this._domainEvents.length);
  }

  private logDomainEventAdded(domainEvent: IDomainEvent): void {
    const thisClass = Reflect.getPrototypeOf(this);
    const domainEventClass = Reflect.getPrototypeOf(domainEvent);
    console.info(
      '[Domain Event Created]:',
      thisClass.constructor.name,
      '==>',
      domainEventClass.constructor.name,
    );
  }
}
