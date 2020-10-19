import 'jest-extended'
import { entrypoint, doRedirect } from '../app/index'

describe('Test for index', () => {
    test('Should return status 200', async () => {
        const result = await entrypoint()
        expect(result.statusCode).toEqual(200)
        expect(result.body).toInclude('we`re good')
    })

    test('Should return status 301', async () => {
        const result = await doRedirect()
        expect(result.statusCode).toEqual(200)
    })
})
