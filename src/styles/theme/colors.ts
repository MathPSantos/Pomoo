const colors = {
  red: {
    primary: '#EB334B',
    secondary: '#FFFFFF'
  },

  lightBlue: {
    primary: '#1C8EB0',
    secondary: '#FFFFFF'
  },

  darkBlue: {
    primary: '#005A7A',
    secondary: '#FFFFFF'
  },

  transparent: 'transparent'
}

export const redColors = {
  background: {
    primary: colors.red.primary,
    secondary: colors.red.secondary
  },

  typography: {
    primary: colors.red.primary,
    secondary: colors.red.secondary
  },

  button: {
    flat: {
      typography: colors.red.primary,
      background: colors.red.secondary,
      border: colors.transparent
    },

    outline: {
      typography: colors.red.secondary,
      background: colors.transparent,
      border: colors.red.secondary
    }
  }
}

export const lightBlueolors = {
  background: {
    primary: colors.lightBlue.primary,
    secondary: colors.lightBlue.secondary
  },

  typography: {
    primary: colors.lightBlue.primary,
    secondary: colors.lightBlue.secondary
  },

  button: {
    flat: {
      typography: colors.lightBlue.primary,
      background: colors.lightBlue.secondary,
      border: colors.transparent
    },

    outline: {
      typography: colors.lightBlue.secondary,
      background: colors.transparent,
      border: colors.lightBlue.secondary
    }
  }
}

export const darkBlueColors = {
  background: {
    primary: colors.darkBlue.primary,
    secondary: colors.darkBlue.secondary
  },

  typography: {
    primary: colors.darkBlue.primary,
    secondary: colors.darkBlue.secondary
  },

  button: {
    flat: {
      typography: colors.darkBlue.primary,
      background: colors.darkBlue.secondary,
      border: colors.transparent
    },

    outline: {
      typography: colors.darkBlue.secondary,
      background: colors.transparent,
      border: colors.darkBlue.secondary
    }
  }
}
