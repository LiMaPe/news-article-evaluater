import { checkUrl } from "../src/client/js/checkUrl"


describe ('check if input is valid URL', () => {
  test ('Valid URL provided', () => {
      const input = "https://www.ikea.com/se/sv/stores/malmo/"
      expect (checkUrl(input)).toEqual(true)
  })
  test ('invalid URL provided, #1', () => {
    const input = "https://w ww.ikea.com/se/sv/stores/malmo/"
    expect (checkUrl(input)).toEqual(false)
})
test ('invalid URL provided #2', () => {
  const input = "ikea.com/se/sv/stores/malmo/"
  expect (checkUrl(input)).toEqual(false)
})
})