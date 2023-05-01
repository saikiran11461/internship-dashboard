export let initState = {
  isDark: true,
}
export const reducerActions = {
  toggle: 'toggle',
}
export let reducer = (state = initState, actions) => {
  const { type, payload } = actions
  switch (type) {
    case reducerActions.toggle:
      return {
        ...state,
        isDark: !state.isDark,
      }
  }
}
