export interface IGuardResult {
  succeeded: boolean;
  message?: string;
}

export interface IGuardArgument {
  argument: any;
  argumentName: string;
}

export type GuardArgumentCollection = IGuardArgument[];

export class Guard {
  public static againstNullOrUndefinedBulk(
    argument: any,
    argumentName: string,
  ): IGuardResult {
    if (argument === null || argument === undefined) {
      return {
        succeeded: false,
        message: `${argumentName} is null or undefined`,
      };
    }
    return { succeeded: true };
  }

  public static againstAtLeast(numChars: number, text: string) {
    return text.length >= numChars
      ? {
        succeeded: true,
      }
      : { succeeded: false, message: `Text is not at least ${numChars} chars` };
  }
}
