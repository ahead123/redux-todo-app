export default (state=[], action) => {
    switch (action.type) {
      case "NEW_TODO":
        return [...state, action.todo];
        break;

      case "REMOVE_TODO":
        return [...state.filter((item, index) => index !== action.todoId)];
        break;

      default:
        return state;
        break;
    }
}