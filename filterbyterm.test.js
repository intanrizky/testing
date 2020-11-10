const { test, expect } = require('@jest/globals')
// const { describe } = require('yargs')
const filterByTerm = require('./filterbyterm')

describe("Fungsi filter", () => {
    test("Fungsi ini harus memfilter berdasarkan kata kunci pencarian (mis.link)", () => {
        const input = [
            {id: 1, url:"https://url1.dev"},
            {id: 2, url:"https://url2.dev"},
            {id: 3, url:"https://link.dev"}
        ]
        const output = [{id: 3, url:"https://link.dev"}]
        expect(filterByTerm(input, "link")).toEqual(output)
    })
})