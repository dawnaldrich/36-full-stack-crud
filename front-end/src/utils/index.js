// autobind class methods

export default function autoBind(classComponent) {
  // return an array of methods of class component's prototype
  const classMethods = Object.getOwnPropertyNames(classComponent.prototype);
  classMethods.forEach((method) => {
    if (method.startsWith('handle')) {
      this[method] = this[method].bind(this);
    }
  });
}

export const validateTodo = (payload) => {
  if (!payload._id) {
    throw new Error('VALIDATION ERROR: todo must have an id');
  }

  if (!payload.title) {
    throw new Error('VALIDATION ERROR: todo must have a title');
  }
};

