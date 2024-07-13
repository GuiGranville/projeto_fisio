export function debounce(fn: Function, waitInMs: number) {
    let timeout: any;

    return function (this: any) {
      const args = arguments;
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(context, args);
      }, waitInMs);
    };
  }