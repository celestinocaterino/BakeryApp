import { rest } from 'msw'

export const handlers = [
  rest.get('/products', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: "first item",
          description: "first item",
          price: 12.55,
          to_remove: 0,
          discount: 10.04,
          quantity: 2,
          currency: "EUR",
          created_at: "2023-07-21T10:20:00.917Z",
          updated_at: "2023-07-23T11:32:14.000Z",
          product_ingredients: [
            {
              id: 1,
              quantity: 23,
              unit_of_measure: "kg",
              ingredient: {
                id: 1,
                name: "milk",
                created_at: "2023-07-23T11:13:58.880Z",
                updated_at: "2023-07-23T11:13:58.880Z"
              }
            }
          ]
        },
        {
          id: 2,
          name: "second item",
          description: "second item",
          price: 12.55,
          to_remove: 0,
          discount: 10.04,
          quantity: 2,
          currency: "EUR",
          created_at: "2023-07-21T10:20:00.917Z",
          updated_at: "2023-07-23T11:32:14.000Z",
          product_ingredients: [
            {
              id: 1,
              quantity: 23,
              unit_of_measure: "kg",
              ingredient: {
                id: 1,
                name: "milk",
                created_at: "2023-07-23T11:13:58.880Z",
                updated_at: "2023-07-23T11:13:58.880Z"
              }
            }
          ]
        }
      ]),
    )
  }),

  rest.get('/products/:productId', (req, res, ctx) => {
    return res(
      ctx.json(
        {
          id: 2,
          name: "second item",
          description: "second item",
          price: 12.55,
          to_remove: 0,
          discount: 10.04,
          quantity: 2,
          currency: "EUR",
          created_at: "2023-07-21T10:20:00.917Z",
          updated_at: "2023-07-23T11:32:14.000Z",
          product_ingredients: [
            {
              id: 1,
              quantity: 23,
              unit_of_measure: "kg",
              ingredient: {
                id: 1,
                name: "milk",
                created_at: "2023-07-23T11:13:58.880Z",
                updated_at: "2023-07-23T11:13:58.880Z"
              }
            }
          ]
        }
      ),
    )
  }),

  rest.post('/products/:productId', (req, res, ctx) => {
    return res(
      ctx.json(
        {
          id: 2,
          name: "second item",
          description: "second item",
          price: 12.55,
          to_remove: 0,
          discount: 10.04,
          quantity: 2,
          currency: "EUR",
          created_at: "2023-07-21T10:20:00.917Z",
          updated_at: "2023-07-23T11:32:14.000Z",
        }
      ),
    )
  }),
]

