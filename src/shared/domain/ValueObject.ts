interface ValueObjectProps {
  [index: string]: any;
}

/* eslint-disable import/prefer-default-export */
export abstract class ValueObject<T extends ValueObjectProps> {
  public props: T;

  constructor(props: T) {
    const baseProps: any = {
      ...props,
    };
    this.props = baseProps;
  }

  equals(ob: ValueObject<T>): boolean {
    if (ob === undefined || ob === null) return false;
    if (ob.props === undefined) return false;
    /* eslint-disable no-self-compare */
    return JSON.stringify(this.props) === JSON.stringify(this.props);
  }
}
