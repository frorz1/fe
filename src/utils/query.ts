export const query = {
  search() {
    const query = window.location.search.substr(1)
    const result: Record<string, string> = {}
    query.split('&').forEach((part) => {
      const item = part.split('=')
      result[item[0]] = decodeURIComponent(item[1])
    })
    return result
  },
  params2query(params: Record<string, string>) {
    const paramsList: string[] = []
    Object.keys(params).forEach((key) => {
      if (key && params[key]) {
        paramsList.push(`${key}=${params[key]}`)
      }
    })
    if (paramsList.length) {
      return `?${paramsList.join('&')}`
    } else {
      return ''
    }
  },
}
