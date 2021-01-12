export interface UseCase<IRequest, IResponse> {
  /* eslint-disable no-unused-vars */
  execute(request?: IRequest): Promise<IResponse> | IResponse;
}
