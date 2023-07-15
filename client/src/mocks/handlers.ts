import { rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')

    return res(
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),

  rest.get('/products', (req, res, ctx) => {
    return res(
      ctx.json({
        firstName: 'John',
        age: 32,
      }),
    )
  }),

  rest.get('/products/:productId', (req, res, ctx) => {
    
  }),

  rest.post('/products/:productId', (req, res, ctx) => {
    
  }),

  rest.patch('/products/:productId', (req, res, ctx) => {
    
  }),

  rest.delete('/products/:productId', (req, res, ctx) => {
    
  }),
]

