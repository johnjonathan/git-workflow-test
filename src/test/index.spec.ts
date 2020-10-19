import 'jest-extended'
import { entrypoint } from '../app/index'

describe('Test for index', () => {
    test('Should return status 200', async () => {
        const result = await entrypoint()
        expect(result.statusCode).toEqual(200)
        expect(result.body).toInclude('we`re good')
    })
})
