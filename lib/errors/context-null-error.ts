export class ContextNullError extends Error {
  constructor(contextName?: string) {
    super(`${contextName} is null`);
  }
}
