export const asyncForEach = async <TInput>(
  array: TInput[],
  callback: (value: TInput) => void,
): Promise<void> => {
  for (const value of array) {
    await callback(value)
  }
}
export const asyncMap = async <TInput, TOutput>(
  array: TInput[],
  callback: (value: TInput) => TOutput,
): Promise<TOutput[]> => {
  const result: TOutput[] = []

  for (const value of array) {
    result.push(await callback(value))
  }
  return result
}
export const asyncEvery = async <T>(
  array: T[],
  predicate: (value: T) => Promise<boolean>,
): Promise<boolean> => {
  for (const value of array) {
    if (!(await predicate(value))) {
      return false
    }
  }
  return true
}
export const asyncSome = async <T>(
  array: T[],
  predicate: (value: T) => Promise<boolean>,
): Promise<boolean> => {
  for (const value of array) {
    if (await predicate(value)) {
      return true
    }
  }
  return false
}
