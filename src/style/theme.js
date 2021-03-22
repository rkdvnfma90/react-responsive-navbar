const size = {
  moblie: '600px',
  tablet: '960px',
  desktop: '1920px',
}

const color = {
  primary: '#1888ff',
}

const theme = {
  primaryColor: `${color.primary}`,
  mobile: `(max-width: ${size.moblie})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
}

export default theme
